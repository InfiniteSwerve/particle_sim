open Base


(* Helper functions for accessing tuples easily *)
let t_hd tuple = 
  let hd,_,_ = tuple in
  hd

let t_tl tuple = 
  let _,tl,_ = tuple in 
  tl

let t_id tuple = 
  let _,_,id = tuple in
  id


(* Module for interacting with object projections during 
  the sweep and prune algorithm *)
module type Range = sig
  type t

  val r_in : int -> t -> bool

  val intersect : t -> t -> bool

end

module Range = struct

  type t =  int * int * int

  let r_in (num:int) (range:t) : bool = 
    if num <= (t_hd range) && num >= (t_tl range) then true
    else false 

  let intersect (t1:t) (t2:t) : bool = 
    if r_in (t_hd t1) t2 || r_in (t_hd t2) t1 then true
    else false 

end

(* Module representing a generic ball in the simulation *)
module Ball = struct

  type t = {radius:int;
            x_y_position:(int * int);
            x_y_velocity:(int * int);
            x_y_acceleration:(int * int);
            curr_id: int;       
            og_id:int;
            mass:int;
            }

  let id = {radius=1;
                x_y_position=(1,1);
                x_y_velocity=(1,1);
                x_y_acceleration=(1,1);
                curr_id=1;
                og_id=1;
                mass=1}


  let forwards  (timestep:int) (ball:t) : t = 
    let x_pos,y_pos = ball.x_y_position in
    let x_vel,y_vel = ball.x_y_velocity in
    {ball with x_y_position = (x_pos+(x_vel*timestep),y_pos+(y_vel*timestep))
    }

end

open Ball

(* Module representing out plane populated with balls 
  and including an update function *)
module type Grid = sig
  type grid

  val update : grid -> int -> grid

  (*val wall_collision : grid -> (Ball.t * Ball.t) list*)
  val prune_and_sweep : grid -> (int * int) list

  val collide : Ball.t -> Ball.t -> Ball.t * Ball.t
  
end

module Grid : Grid = struct
  
  type grid = {x_range: (int * int);
            y_range: (int * int);
            objects: Ball.t list;            
            }

  (* Update is called once every timesetep 
    to increment the simulation *)
  let update (grid:grid) (timestep:int) : grid =     
    { grid with objects = 
      List.map ~f:(Ball.forwards timestep) grid.objects
    }
  

    


  (* Prune and Sweep takes the 1D projection of all balls in the grid,
    finds their overlap, and returns the ID-pairs of balls whose projections overlap *)
  let prune_and_sweep (grid:grid) : (int * int) list =
    let rec range_intersect (balls:Range.t list) (active:Range.t list) (out: ((int*int) list)) : (int * int) list = 
    match balls with
    | [] -> out
    | ball::other_balls -> 
      match active with
      | [] -> range_intersect other_balls [ball] out
      | _  -> let active' = List.filter ~f:(Range.intersect ball) active in
              let out' = (List.cartesian_product (List.map ~f:t_id active) ([t_id ball])) in
      range_intersect other_balls (ball::active') (out'@out)
    in
    


    let ball_x_range (ball:Ball.t) : Range.t = 
      let radius = ball.radius in
      let center,_ = ball.x_y_position in
      (center-radius, center+radius, ball.og_id)
    in


    let ball_ranges = List.map ~f:ball_x_range grid.objects in
    (*|>  List.sort ~Int.compare in*)
    range_intersect ball_ranges [] [] 
    
      
      


  let collide (ball1:Ball.t) (ball2:Ball.t) : (Ball.t * Ball.t) = 
    (ball1, ball2)
end



(* notes:
- need to use decreasing insertion sort when sorting 
  during prune and sweep so list appending is O(1)
- I want to use a hashtable to keep track of balls, 
  that way the og_id is just the hash number, and 
  access for collisions is constant  
  *)