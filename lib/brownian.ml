open Base


let if_true_do if_ do_ arg = 
  if if_ arg then do_ arg
  else arg

(* helper function for array printing *)
let print_array msg arr = 
  Stdio.printf "%s" msg;
  Array.iter ~f:(fun n -> Stdio.printf "%f " n) arr;
  Stdio.printf "\n"

type axis = 
  | X
  | Y

(* vector operations for 
  calcuating elastic collision*)
module Vector = struct

  let ( + ) = 
    Array.map2_exn ~f:( +. )

  let ( - ) = 
    Array.map2_exn ~f:( -. )

  let ( * ) = 
  Array.map2_exn ~f:( *. )

  let component_sum v = 
    Array.fold v ~init:0. ~f:( +. )
  
  let mult v s = 
    Array.map ~f:(fun x -> x *. s) v

  let div v s = 
    Array.map ~f:(fun x -> x /. s) v

  let dot v1 v2  = 
    Array.map2_exn v1 v2 ~f:( *. ) 
    |> Array.fold ~f:( +. ) ~init:0.
    
  let dist v1 v2 = 
    Array.map2_exn v1 v2 ~f:( -. )
    |> Array.map ~f:(fun x -> x **. 2.)
    |> Array.fold ~f:( +. ) ~init:0.
    |> (fun x -> x **. 0.5)

  let cross v1 v2 = 
    v1.(0)*.v2.(1)-.v2.(0)*.v1.(1)

  let length v = 
    (dot v v ) **. 0.5

  let normal v1 v2 = 
    v2 - v1
  
  let unit v = 
    div v (length v)

  let tangent v = 
    [| -.v.(1);v.(0)|]

end

(* Module representing a generic ball in the simulation *)
module Ball = struct

  type t = {radius:float;
            position:float array;
            velocity:float array;
            acceleration:float array;
            curr_id:int;       
            og_id:int;
            mass:float;
            bounds: (float * float) array;
            }

  let id = {radius=5.;
            position=[|50.;50.|];
            velocity=[|1.;1.|];
            acceleration=[|0.;0.|];
            curr_id=1;
            og_id=1;
            mass=1.;
            bounds=[|(0.,2.);(0.,2.)|]
            }

  let forwards (timestep:float) (ball:t) : t = 
    let velocity' = Array.map ~f:(( *. ) timestep ) ball.velocity in
    let acceleration' = Array.map ~f:(( *. ) timestep) ball.acceleration in
    let ball' = {ball with position = Array.map2_exn ~f:(+.) velocity' ball.position;
    (* Acceleration is broken rn, things accelerate out of bounds quickly *)
    velocity = Array.map2_exn ~f:(+.) acceleration' ball.velocity
    } in
    {ball' with bounds = Array.map ~f:(fun p -> (p-.ball'.radius,p+.ball'.radius)) ball'.position }

end
(* Module for interacting with object projections during 
  the sweep and prune algorithm *)
module type Range = sig
  type t

  val r_in : float -> t -> bool

  val intersect : t -> t -> bool

  val outside : t -> t -> bool 

end


module Range = struct

  type t =  float * float

  let r_in (num:float) (range:t) : bool = 
    if Float.(num >= (fst range) && num <= (snd range) )then true
    else false 

  let intersect (t1:t) (t2:t) : bool = 
    if r_in (fst t1) t2 || r_in (fst t2) t1 then true
    else false 

  (* Returns false if t1 is inside (a subset of) t2*)
  let outside (t1:t) (t2:t) : bool = 
    if r_in (fst t1) t2 && r_in (snd t1) t2 then false
    else true

end


(* Module representing a bounded plane populated with objects 
  and including an update function *)
module type Grid = sig
  type t = {x_range: (float * float);
            y_range: (float * float );
            objects: Ball.t list;       
            future_objects: Ball.t list;
            timestep: float;
            }

  val update : t -> int -> t

  (* generates a grid with x and y ranges (starting from 25)
     populated with n objects initialized to move in a random direction   *)
  val initialize_populated_grid : float -> float -> int -> t

  
end


module Grid = struct
  
  type t = {x_range: (float * float);
            y_range: (float * float);
            objects: Ball.t list;
            future_objects: Ball.t list;
            timestep: float;
            }


  (* evaluates an elastic collision between
    two objects ball1 and ball2 *)
  let collide (ball1:Ball.t) (ball2:Ball.t) : (Ball.t * Ball.t) = 
    let open Vector in
    let norm = normal ball1.position ball2.position in
    let unit_norm = unit norm in
    let unit_tan = tangent unit_norm in
    let v1norm = dot unit_norm ball1.velocity in
    let v2norm = dot unit_norm ball2.velocity in
    let v1tan = dot unit_tan ball1.velocity in
    let v2tan = dot unit_tan ball2.velocity in
    let v1norm' = (v1norm*.(ball1.mass -. ball2.mass) +. (2. *. ball2.mass *. v2norm )) /. (ball1.mass +. ball2.mass) in
    let v2norm' = (v2norm*.(ball2.mass -. ball1.mass) +. (2. *. ball1.mass *. v1norm )) /. (ball2.mass +. ball1.mass) in
    let v1' = (mult unit_norm v1norm') + (mult unit_tan v1tan) in
    let v2' = (mult unit_norm v2norm') + (mult unit_tan v2tan) in
    ({ball1 with velocity = v1'},
    {ball2 with velocity = v2'})


  (* Prune and Sweep takes as arg 1D projection 
    of all objects in the t, finds their overlap,
   and returns the ID-pairs of objects whose projections overlap *)
  let rec prune_and_sweep (objects:Ball.t list) (active:Ball.t list) (axis:axis) (out: ((Ball.t*Ball.t) list)) : (Ball.t*Ball.t) list = 
    let ax = 
    match axis with
    | X -> 0
    | Y -> 1 in
    match objects with
    | [] -> out
    | ball::other_balls -> 
      match active with
      | [] -> prune_and_sweep other_balls [ball] axis out
      | _  -> let active' = List.filter ~f:(fun b -> Range.intersect ball.bounds.(ax) b.bounds.(ax)) active in
              let out' = (List.cartesian_product active [ball]) in
      prune_and_sweep other_balls (ball::active') axis (out'@out)


  (* increasing insertion sort needs to sort 
    in decreasing order so list appending in
    prune_and_sweep can be O(1) instead of O(n)  *)
  let rec insertion_sort (objects:Ball.t list) (axis:axis) : Ball.t list = 
    let ax = 
      match axis with
      | X -> 0
      | Y -> 1 in
    let rec insert (objects:Ball.t list) (key:Ball.t) = match objects with
      | [] -> [key]
      | hd::tl when Poly.((fst hd.bounds.(ax)) > (fst key.bounds.(ax)))
        -> key::hd::tl
      | hd::tl -> hd:: (insert tl key)
    in
    match objects with
    | [] -> []
    | hd::tl -> insert (insertion_sort tl axis) hd
    
  (* Gets ball with id_og=id in list objects*)
  let find_ball (id:Ball.t) (objects:Ball.t list) : Ball.t = 
    List.find_exn objects ~f:(fun ball -> if ball.og_id = id.og_id then true else false )

  (* Replaces instance of ball in list objects *)
  let replace_ball (ball:Ball.t) (objects:Ball.t list) : Ball.t list =
    let rec replace_ball_aux (ball:Ball.t) (objects:Ball.t list) (out:Ball.t list) : Ball.t list = 
      match objects with
      | [] -> failwith "ball not in list"
      | hd::tl -> if hd.og_id = ball.og_id then out@(ball::tl) 
                  else  replace_ball_aux ball tl (out@[hd]) 
    in
    replace_ball_aux ball objects []


  (* check if distance between 
    object positions is less than object radii *)
  let is_colliding (objects:(Ball.t * Ball.t)) : bool =
    let ball1, ball2 = objects in
    let dist = ball1.radius +. ball2.radius in 
    if Float.(Vector.dist ball1.position ball2.position <= dist) then true
    else false 


  (* finds the point in time
    where b1 and b2 first intersected in their collision *)
  let find_ball_collision (b1:Ball.t) (b2:Ball.t) : float = 
    let v1 = b1.velocity 
    and v2 = b2.velocity
    and p1 = b1.position
    and p2 = b2.position in
    let radii = b1.radius +. b2.radius 
    and p_dist = Vector.dist p1 p2 
    and v_dist = Vector.dist v1 v2 in
    let t_plus = ( p_dist +. radii)/. v_dist 
    and t_minus =  ( p_dist -. radii)/. v_dist in
    Float.min t_plus t_minus 

  (* continuous_object_collision finds the point in time when
    two objects collide, moves them to that point in time, 
    calculates their collision, and then moves them
    the remainder of their trajectory to the next timestep *)
  let continuous_object_collision (b1:Ball.t) (b2:Ball.t) (timestep:float) : (Ball.t*Ball.t) = 
    let collision_time = find_ball_collision b1 b2 in
    let b1_at_collide = Ball.forwards collision_time b1 
    and b2_at_collide = Ball.forwards collision_time b2 in
    let b1_post_update, b2_post_update = collide b1_at_collide b2_at_collide in
    let b1' = Ball.forwards (timestep -. collision_time) b1_post_update
    and b2' = Ball.forwards (timestep -. collision_time) b2_post_update in    
    (b1',b2')


  (* iters through all objects 
  and if object is outside of wall,
  points velocity towards inside of wall
  *)
  let wall_collision (axis:axis) (t:t) : t = 
    let bounds,coord = 
    match axis with
    | X -> t.x_range, 0
    | Y -> t.y_range, 1
    in
    let flip (coord:int) (obj:Ball.t) : Ball.t = 
      let vel' = Array.copy obj.velocity in
      vel'.(coord) <- -1.*.vel'.(coord);
      { obj with velocity = vel'}
    in
    let should_flip (ball:Ball.t) : Ball.t= 
      let open Float in 
      if  ((fst ball.bounds.(coord) <= (fst bounds)) && ball.velocity.(coord) < 0. )
        || ((snd ball.bounds.(coord) >= (snd bounds)) && ball.velocity.(coord) > 0. )
        then flip coord ball 
      else ball
    in
    {t with future_objects = List.map ~f:should_flip t.future_objects}

  (* moves all objects in the grid forward by timestep, 
  handling all object and wall collisions *)
  let update (t:t) (timestep:float) : t = 
    let find_in_current_objects (b_future:Ball.t) = find_ball b_future t.objects in
    let sorted_objects = insertion_sort t.objects X in
    let future_objects' = List.map ~f:(Ball.forwards timestep) sorted_objects in
    let potential_collisions = prune_and_sweep future_objects' [] X [] in
    let post_object_collisions = List.fold potential_collisions ~init:future_objects'
      ~f:(fun accum (b1,b2) ->
        if is_colliding (b1,b2) then begin let current_b1, current_b2 = find_in_current_objects b1, find_in_current_objects b2 in
        let b1', b2' = continuous_object_collision current_b1 current_b2 t.timestep in
        replace_ball b1' accum
        |> replace_ball b2'
        end
      else accum
      ) in
    let post_wall_collisions =
      wall_collision X  {t with future_objects = post_object_collisions}
      |> wall_collision Y in
    {t with objects = post_wall_collisions.future_objects}
    

end



(* notes:
- need to use decreasing insertion sort when sorting 
  during prune and sweep so list appending is O(1)
- I want to have fast access to objects by ID, while 
  still keeping them ordered so the prune and sweep
  algorithm can run quickly. How can I do this? I'm
  thinking that some kind of stacked arrays will work
  to keep track of indexing while preserving order. [SEE BELOW]
- I want to use a hashtable to keep track of objects, 
  that way the og_id is just the hash number, and 
  access for collisions is constant  
  -> Decided against. We need to have an ordered
    sort as well as index ability. This would work
    best if we used a layered array setup:
      [|whereis1;whereis2;...;whereisn|]
    | [|1isatj;2isatk;...;nisatp|]
    | [|<ordered elements>|]
    V
    so that when we update the ordered elements,
    we also update the pointer list. This would
    require a mutable object_list, which I don't
    want to do right now.
- I'm gonna need to change all these ints to floats 
  at some point as well  [DONE]
- I'm also gonna need to change the int * int types 
  into proper vectors [DONE]
- The range module is implicitly using the 3rd part for 
  the id, which is bad data design. [DONE]
- Need to change project to simply update the bounds.
  Wait ok I can just put the bound update into the 
  ball.forwards step
- Changing timestep will change how quickly the simulation
  speeds up or slows down over time. e.g. a rate of 1.2
  will speed up the simulation by 20% every timestep. [FIXED]
- Refactor the axis system so I can change the number of axis
  and the other code will automatically fill in gaps
- Continuous collision detection needs to be implemented
  for objects to make things not bug the hell out
  https://www.toptal.com/game/video-game-physics-part-ii-collision-detection-for-solid-objects
  [DONE]
- If we don't need a quadratic formula, delete at the end [DONE]
- If we use another collision pruning algorithm insead 
  of P&S we can run continuous collision detection
  every step and only act on it if we get an answer < 1!!
  -> That will totally solve our issue about limiting speeds
    but we'll also need a fairly accurate algorithm. 
    Space partitioning maybe?
- Get linear interpolation working for walls as well 
  as object collision [DONE] -> [DECIDED AGINAST]
- Kinetic energy is not preserved in the system over time
  and I don't know why. Collecting kinetic energy and 
  graphing it over time for each object is probably a good
  start
  -> Close to direct but slightly off collisions will
    cause both objects to lose velocity and the angle 
    of reflection to be weird.
    [FIXED] -> The collision formula was wrong. 
    I distributed terms incorrectly  
- Some wall collisions break the system, find out why. 
  [FIXED] -> New wall collision is better
- Broken cases:
  -> Ball hits a corner or two edges at the same time
  X Two objects hit a wall at the same time 
  [FIXED] -> New wall collision 



  ideas:
- track frequency of id changes
- Label objects with og_id and current id
- track total kinetic energy in the system over time
- Graph total kinetic energy in the system over time
- graph velocity vectors of objects with id labels
  *)
