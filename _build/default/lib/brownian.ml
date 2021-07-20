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

type axis = 
  | X
  | Y





  

module Vector = struct

  let ( + ) = 
    Array.map2_exn ~f:( +. )

  let ( - ) = 
    Array.map2_exn ~f:( -. )

  let mult v s = 
    Array.map ~f:(fun x -> x *. s) v

  let div v s = 
    Array.map ~f:(fun x -> x /. s) v

  let dot v1 v2  = 
    Array.map2_exn v1 v2 ~f:( *. ) 
    |> Array.fold ~f:( +. ) ~init:0.
    
  let dist v1 v2 = 
    Array.map2_exn v1 v2 ~f:( -. )
    |> Array.map ~f:(Caml.abs_float)
    |> Array.fold ~f:( +. ) ~init:0.

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
    let velocity = Array.map ~f:(( *. ) timestep ) ball.velocity in
    let ball' = {ball with position = Array.map2_exn ~f:(+.) velocity ball.position;
    (* Acceleration is broken rn, things accelerate out of bounds quickly *)
    velocity = Array.map2_exn ~f:(+.) velocity ball.acceleration
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
    if Float.(num > (t_hd range) && num < (t_tl range) )then true
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
            }

  val update : t -> int -> t

  (*val wall_collision : t -> (Ball.t * Ball.t) list*)
  val prune_and_sweep : Ball.t list -> Ball.t list -> axis -> (int*int) list -> (int*int) list

  val collide : Ball.t -> Ball.t -> Ball.t * Ball.t
  
end

module Grid = struct
  
  type t = {x_range: (float * float);
            y_range: (float * float);
            objects: Ball.t list;
            }




    
  (* Wall collision checks whether the x or y edges of any balls exceed the
    edges of the t, and if so, flips the component of the velocity 
    corresponding to that edge *)
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
      if Range.outside (ball.bounds.(coord)) bounds then flip coord ball
      else ball
    in
    {t with objects = List.map ~f:should_flip t.objects}

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
    Stdio.printf "collided\n";
    ({ball1 with velocity = v1'},
    {ball2 with velocity = v2'})

  (* Prune and Sweep takes as arg 1D projection of all balls in the t,
    finds their overlap, and returns the ID-pairs of balls whose projections overlap *)
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

  let replace_ball (ball:Ball.t) (balls:Ball.t list) =
    let rec replace_ball_aux (ball:Ball.t) (balls:Ball.t list) (out:Ball.t list) : Ball.t list = 
      match balls with
      | [] -> failwith "ball not in list"
      | hd::tl -> if hd.og_id = ball.og_id then out@(ball::tl) 
                  else  replace_ball_aux ball tl (hd::out) 
    in
    replace_ball_aux ball balls []


  let is_colliding (balls:(Ball.t * Ball.t)) : bool =
    let ball1, ball2 = balls in
    let dist = ball1.radius +. ball2.radius in 
    if Float.(Vector.dist ball1.position ball2.position < dist) then true
    else false 

    


  (* Update is called once every timesetep 
    to increment the simulation *)
  let update (t:t) (timestep:float) : t =
    let sorted_obj = insertion_sort t.objects X in
    let potential_collisions = prune_and_sweep sorted_obj [] X [] in
    let collided_collisions = List.fold potential_collisions ~init:t.objects
        ~f:(fun accum (b1,b2) -> 
          if is_colliding (b1,b2) then 
            begin let b1', b2' = collide b1 b2 in
            let balls' = replace_ball b1' accum
            |> replace_ball b2' in
            balls'
            end
          else t.objects
          )
        in
    let t' = {t with objects = collided_collisions} in
    let t'' = 
    wall_collision X t'
    |> wall_collision Y in
    {t'' with objects = List.map ~f:(Ball.forwards timestep) t''.objects }
  
    
end



(* notes:
- need to use decreasing insertion sort when sorting 
  during prune and sweep so list appending is O(1)
- I want to use a hashtable to keep track of balls, 
  that way the og_id is just the hash number, and 
  access for collisions is constant  
- I'm gonna need to change all these ints to floats 
  at some point as well  
- I'm also gonna need to change the int * int types 
  into proper vectors [DONE]
- When I switch to hashmaps delete the tuple helpers
  at the top to figure out what I need to replace
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
  *)
