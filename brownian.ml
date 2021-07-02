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

  let id = {radius=1.;
                position=[|1.;1.|];
                velocity=[|1.;1.|];
                acceleration=[|1.;1.|];
                curr_id=1;
                og_id=1;
                mass=1.;
                bounds=[|(0.,2.);(0.,2.)|]
                }


  let forwards (timestep:float) (ball:t) : t = 
    let velocity = Array.map ~f:(( *. ) timestep ) ball.velocity in
    {ball with position = Array.map2_exn ~f:(+.) velocity ball.position
    }

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
    if Float.(num < (t_hd range) && num > (t_tl range)) then true
    else false 

  let intersect (t1:t) (t2:t) : bool = 
    if r_in (t_hd t1) t2 || r_in (t_hd t2) t1 then true
    else false 

  (* Returns false if t1 is inside (a subset of) t2*)
  let outside (t2:t) (t1:t) : bool = 
    if r_in (t_hd t1) t2 && r_in (t_tl t1) t2 then false
    else true

end

  type axis = 
    |X
    |Y

(* Module representing a bounded plane populated with balls 
  and including an update function *)
module type Grid = sig
  type grid

  val update : grid -> float -> grid

  (*val wall_collision : grid -> (Ball.t * Ball.t) list*)
  val prune_and_sweep : Ball.t list -> Ball.t list -> axis -> (int*int) list -> (int*int) list

  val collide : Ball.t -> Ball.t -> Ball.t * Ball.t
  
end

module Grid : Grid = struct
  
  type grid = {x_range: (float * float);
            y_range: (float * float );
            objects: Ball.t list;            
            }


  let project (balls:Ball.t list) (axis:axis) : Ball.t list = 
    let ball_range (ball:Ball.t) : Ball.t = 
      let center =  
      match axis with
      | X -> 0
      | Y -> 1
      in
      let radius = ball.radius in
      let bounds' = Array.copy ball.bounds in
      bounds'.(center) <- (ball.position.(center)-.radius,ball.position.(center)+.radius);
      { ball with bounds = bounds' }
    in
    List.map ~f:ball_range balls
    (*|>  List.sort ~Int.compare in*)
     


  (* Prune and Sweep takes as arg 1D projection of all balls in the grid,
    finds their overlap, and returns the ID-pairs of balls whose projections overlap *)
  let rec prune_and_sweep (balls:Ball.t list) (active:Ball.t list) (axis:axis) (out: ((int*int) list)) : (int*int) list = 
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
              let out' = (List.cartesian_product (List.map ~f:(fun b -> b.og_id) active) [ball.og_id]) in
      prune_and_sweep other_balls (ball::active') axis (out'@out)
    
    
  (* Wall collision checks whether the x or y edges of any balls exceed the
    edges of the grid, and if so, flips the component of the velocity 
    corresponding to that edge *)
  let rec wall_collision (axis:axis) (grid:grid) : grid = 
    let proj = project grid.objects axis in
    let bounds,coord = 
    match axis with
    | X -> grid.x_range, 0
    | Y -> grid.y_range, 1
    in
    let flip (coord:int) (obj:Ball.t) : Ball.t = 
      let vel' = Array.copy obj.velocity in
      vel'.(coord) <- -1.*.vel'.(coord);
      { obj with velocity = vel'}
    in
    let flipped = 
    List.map ~f:(if_true_do (fun (b:Ball.t) -> Range.outside bounds b.bounds.(coord)) (flip coord)) proj
    in
    {grid with objects = flipped}

      


  let collide (ball1:Ball.t) (ball2:Ball.t) : (Ball.t * Ball.t) = 
    (ball1, ball2)


  (* Update is called once every timesetep 
    to increment the simulation *)
  let update (grid:grid) (timestep:float) : grid =     

    let balls = List.map ~f:(Ball.forwards timestep) grid.objects
    in
    let grid' = { grid with objects = balls} 
    |> wall_collision X
    |> wall_collision Y in
    grid' 
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
  *)