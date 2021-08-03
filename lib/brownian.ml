open Base

(* Helper functions for accessing tuples easily *)
let t_hd tuple = 
  let hd,_ = tuple in
  hd

let t_tl tuple = 
  let _,tl = tuple in 
  tl

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

(* Boilerplate vector operations for 
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
    if Float.(num >= (t_hd range) && num <= (t_tl range) )then true
    else false 

  let intersect (t1:t) (t2:t) : bool = 
    if r_in (t_hd t1) t2 || r_in (t_hd t2) t1 then true
    else false 

  (* Returns false if t1 is inside (a subset of) t2*)
  let outside (t1:t) (t2:t) : bool = 
    if r_in (t_hd t1) t2 && r_in (t_tl t1) t2 then false
    else true

end


(* Module representing a bounded plane populated with balls 
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
    let v1' = (mult unit_norm (v1norm' +. v1tan)) in
    let v2' = (mult unit_norm (v2norm' +. v2tan)) in
    ({ball1 with velocity = v1'},
    {ball2 with velocity = v2'})


  (* Prune and Sweep takes as arg 1D projection 
    of all balls in the t, finds their overlap,
   and returns the ID-pairs of balls whose projections overlap *)
  let rec prune_and_sweep (balls:Ball.t list) (active:Ball.t list) (axis:axis) (out: ((Ball.t*Ball.t) list)) : (Ball.t*Ball.t) list = 
    let ax = 
    match axis with
    | X -> 0
    | Y -> 1 in
    match balls with
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
  let rec insertion_sort (balls:Ball.t list) (axis:axis) : Ball.t list = 
    let ax = 
      match axis with
      | X -> 0
      | Y -> 1 in
    let rec insert (balls:Ball.t list) (key:Ball.t) = match balls with
      | [] -> [key]
      | hd::tl when Poly.((t_hd hd.bounds.(ax)) > (t_hd key.bounds.(ax)))
        -> key::hd::tl
      | hd::tl -> hd:: (insert tl key)
    in
    match balls with
    | [] -> []
    | hd::tl -> insert (insertion_sort tl axis) hd
    

  let find_ball (id:Ball.t) (balls:Ball.t list) : Ball.t = 
    List.find_exn balls ~f:(fun ball -> if ball.og_id = id.og_id then true else false )


  let replace_ball (ball:Ball.t) (balls:Ball.t list) : Ball.t list =
    let rec replace_ball_aux (ball:Ball.t) (balls:Ball.t list) (out:Ball.t list) : Ball.t list = 
      match balls with
      | [] -> failwith "ball not in list"
      | hd::tl -> if hd.og_id = ball.og_id then out@(ball::tl) 
                  else  replace_ball_aux ball tl (out@[hd]) 
    in
    replace_ball_aux ball balls []


  (* boolean check to see if distance between 
    object positions is less than object radii *)
  let is_colliding (balls:(Ball.t * Ball.t)) : bool =
    let ball1, ball2 = balls in
    let dist = ball1.radius +. ball2.radius in 
    if Float.(Vector.dist ball1.position ball2.position <= dist) then true
    else false 


  (* find_ball_collision b1 b2 finds the point in time
    where b1 and b2 first intersected *)
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


  let continuous_object_collision (b1:Ball.t) (b2:Ball.t) (timestep:float) : (Ball.t*Ball.t) = 
    let collision_time = find_ball_collision b1 b2 in
    let b1_at_collide = Ball.forwards collision_time b1 
    and b2_at_collide = Ball.forwards collision_time b2 in
    let b1_post_update, b2_post_update = collide b1_at_collide b2_at_collide in
    let b1' = Ball.forwards (timestep -. collision_time) b1_post_update
    and b2' = Ball.forwards (timestep -. collision_time) b2_post_update in    
    (b1',b2')


  let find_wall_collision_time (edge:float) (current_ball:Ball.t) (future_ball:Ball.t) (coord:int) : float = 
    let current_ball_position = current_ball.position.(coord)
    and future_ball_position = future_ball.position.(coord) in
    let open Float in
    let radius = if current_ball_position < edge then (-. 1.) *. current_ball.radius 
      else current_ball.radius in
    if (current_ball_position = future_ball_position) then failwith "div by 0!\n";
    abs (edge + radius - current_ball_position)/ (current_ball_position - future_ball_position)


  let find_colliding_edge (bounds) (coord:int) (ball:Ball.t) : float = 
    let bl, br =  ball.bounds.(coord) 
    and wl, wr = bounds in
    if Float.(bl <= wl) then wl
    else if Float.(br >= wr) then wr
    else failwith "no collision in find_collision_edge!"


  let interpolate_wall_collision (edge:float) (current_ball:Ball.t) (future_ball:Ball.t) (coord:int) (timestep:float) : Ball.t = 
    let collision_time = find_wall_collision_time edge current_ball future_ball coord in
    let ball_at_wall = Ball.forwards (timestep *. collision_time) current_ball in
    let ball_velocity_copy = Array.copy ball_at_wall.velocity in
    ball_velocity_copy.(coord) <- (ball_velocity_copy.(coord) *. (-. 1.) );
    let bounced_ball = Ball.forwards (timestep *.( 1. -. collision_time))
      {ball_at_wall with velocity = ball_velocity_copy} in
    bounced_ball
    
    
  let continuous_wall_collision (axis:axis) (grid:t) : t = 
    let bounds, coord = 
      match axis with
      | X -> grid.x_range, 0
      | Y -> grid.y_range, 1
    in
    let should_flip (bounds:float*float) (timestep:float) (coord:int) (balls:Ball.t*Ball.t) : Ball.t= 
      let current_ball, future_ball = balls in
      if Range.outside (future_ball.bounds.(coord)) bounds then
        interpolate_wall_collision (find_colliding_edge bounds coord future_ball) current_ball future_ball coord timestep 
      else future_ball
    in
    {grid with objects = List.map ~f:(should_flip grid.y_range grid.timestep 1) (List.zip_exn grid.objects (List.map ~f:(should_flip bounds grid.timestep coord) (List.zip_exn grid.objects grid.future_objects)))}

  let update (t:t) (timestep:float) : t = 
    let find_in_current_objects (b_future:Ball.t) = find_ball b_future t.objects in
    let sorted_objects = insertion_sort t.objects X in
    let future_objects' = List.map ~f:(Ball.forwards timestep) sorted_objects in
    let potential_collisions = prune_and_sweep future_objects' [] X [] in
    let collided_collisions = List.fold potential_collisions ~init:future_objects'
      ~f:(fun accum (b1,b2) ->
        if is_colliding (b1,b2) then begin let c_b1, c_b2 = find_in_current_objects b1, (find_in_current_objects b2) in
        let b1', b2' = continuous_object_collision c_b1 c_b2 t.timestep in
        replace_ball b1' accum
        |> replace_ball b2'
        end
      else accum
      ) in
    continuous_wall_collision X {t with future_objects = collided_collisions}
    
  
  let initialize_populated_grid ?(self_init=true) ?(seed=0) x_len y_len balls = 
    let velocity_peak = 3. in
    let origin = 25. in
    let x_peak = x_len +. origin in
    let y_peak = y_len +. origin in
    if Bool.(self_init = false) then Random.init seed 
    else Random.self_init () ;
    let make_random_ball () = 
      {Ball.id with position = [|Random.float_range (origin +. Ball.id.radius) (x_peak -. Ball.id.radius);
                                 Random.float_range (origin +. Ball.id.radius) (y_peak -. Ball.id.radius);|];
                    velocity = [|Random.float_range (-.velocity_peak) velocity_peak|]}
    in
    let object_list = 
      List.map ~f:(fun x -> let ball = make_random_ball () in {ball with og_id = x;
                                                                      curr_id = x;}
              ) (List.range 1 balls)
    in
    let grid = 
    {x_range = (origin, x_peak);
     y_range = (origin, y_peak);
     objects = object_list;
     future_objects = List.map ~f:(Ball.forwards 1.) object_list;
     timestep = 1.} in
     grid
    


end



(* notes:
- need to use decreasing insertion sort when sorting 
  during prune and sweep so list appending is O(1)
- I want to use a hashtable to keep track of balls, 
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
- I want to have fast access to objects by ID, while 
  still keeping them ordered so the prune and sweep
  algorithm can run quickly. How can I do this? I'm
  thinking that some kind of stacked arrays will work
  to keep track of indexing while preserving order. 
- Changing timestep will change how quickly the simulation
  speeds up or slows down over time.
  e.g. a rate of 1.2 will speed up the simulation by 20%
  every timestep. [FIXED]
- Refactor the axis system so I can change the number of axis
  and the other code will automatically fill in gaps
- Continuous collision detection needs to be implemented
  for objects to make things not bug the hell out
  https://www.toptal.com/game/video-game-physics-part-ii-collision-detection-for-solid-objects
- If we don't need a quadratic formula, delete at the end
- If we use another collision pruning algorithm insead 
  of P&S we can run continuous collision detection
  every step and only act on it if we get an answer < 1!!
  -> That will totally solve our issue about limiting speeds
    but we'll also need a fairly accurate algorithm. 
    Space partitioning maybe?
- Get linear interpolation working for walls as well 
  as object collision [DONE]
- Kinetic energy is not preserved in the system over time
  and I don't know why. Collecting kinetic energy and 
  graphing it over time for each object is probably a good
  start
- Some wall collisions break the system, find out why. 


  ideas:
- track frequency of id changes
- Label objects with og_id and current id
- track total kinetic energy in the system over time
- Graph total kinetic energy in the system over time
- graph velocity vectors of objects with id labels
  *)
