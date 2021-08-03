open Brownian 
open Grid
open Base
(*open Js_of_ocaml_lwt
open Graphics_js*)

let ti n = Int.of_float n 

(* Changing timestep will change how quickly the simulation
  speeds up or slows down over time.
  e.g. a rate of 1.2 will speed up the simulation by 20%
  every timestep. *)
let timestep = 0.1
let framerate = 1./.1000.

let objects = [{Ball.id with position = [|300.; 250.|];
                          radius = 20.;
                          velocity = [|3.;0.|];
                          og_id=1};
        {Ball.id with position = [|100.;100.|];
                      radius = 20.; 
                      velocity = [|0.;3.|];
                      og_id = 2};
{Ball.id with position = [|50.; 350.|];
                          radius = 20.;
                          velocity = [|2.;0.|];
                          og_id=3};
        {Ball.id with position = [|50.;250.|];
                      radius = 20.; 
                      velocity = [|2.;-1.|];
                      og_id = 4};
        (*{Ball.id with position = [|60.;350.|];
                      radius = 20.; 
                      velocity = [| -1.;-2.|];
                      og_id = 5} *)             
        ]

let grid:Grid.t= 
  {x_range=(25.,425.);
   y_range=(25.,425.);
   objects=objects;
   future_objects = List.map ~f:(Ball.forwards timestep) objects;
   timestep = timestep;
  } ;;

(*let grid = Grid.initialize_populated_grid 400. 400. 1*)

let place_obj grid = 
  Graphics.(set_color black);
  List.iter ~f:(fun b-> Graphics.fill_circle  (ti b.position.(0)) (ti b.position.(1)) (ti b.radius) ) grid.objects

let state = ref (Lwt.task ())

let wait () = fst !state

let print_change grid = 
  let pos = (List.hd_exn grid.objects).position in
  Array.iter ~f:(fun x ->Stdio.printf "%f\n" x) pos

open Lwt.Infix

(* main simulation code *)
let simulate grid timestep = 
  let rec simulate_aux grid timestep =
    place_obj grid;
    wait() >>= (fun () -> simulate_aux (update grid timestep) timestep)
  in
  simulate_aux grid timestep 

(* I do not fully understand what this does,
  but it drives the frames-per-second continuous
  graphics gendering for the simulation *)
let rec start () =
  let t = Lwt.task () in
  let _, w = !state in 
  state := t;
  Graphics.clear_graph ();
  let x, right = grid.x_range in
  let y, top = grid.y_range in
  Graphics.draw_rect (ti x) (ti y) (ti (right-.x)) (ti (top-.y));
  Lwt.wakeup w (); 
  Lwt_unix.sleep (framerate) >>=  start 
;;


(* Driver code for simulation *)
let _ = 
  Graphics.open_graph " 450x450";
  Graphics.(set_color black) ;
  simulate grid timestep;;
  Lwt_main.run (start ())



update
open Lwt.Infix
let rec tic () = 
  Stdio.print_endline "tic";
  Lwt_unix.sleep 1.0 >>= fun () ->
  tic ();;

(*Lwt_main.run (tic ())*)

  
