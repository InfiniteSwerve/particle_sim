open Brownian 
open Grid
open Base
(*open Js_of_ocaml_lwt
open Graphics_js*)

let ti n = Int.of_float n 
let timestep = 1.
let grid:Grid.t= 
  {x_range=(25.,425.);
   y_range=(25.,425.);
   objects=[{Ball.id with radius = 20.};
        {Ball.id with position = [|50.;250.|];
        radius = 20.; 
        velocity = [|0.;-1.|]}
        ]
  } ;;

let place_obj grid = 
  Graphics.(set_color black);
  List.iter ~f:(fun b-> Graphics.fill_circle  (ti b.position.(0)) (ti b.position.(1)) (ti b.radius) ) grid.objects

let state = ref (Lwt.task ())

let wait () = fst !state

let print_change grid = 
  let pos = (List.hd_exn grid.objects).position in
  Array.iter ~f:(fun x ->Stdio.printf "%f\n" x) pos

open Lwt.Infix

let rec simulate_aux grid timestep =
  (*print_change grid;*)
  let x, right = grid.x_range in
  let y, top = grid.y_range in
  Graphics.draw_rect (ti x) (ti y) (ti (right-.x)) (ti (top-.y));
  place_obj grid;
  wait() >>= (fun () -> simulate_aux (update grid timestep) timestep)
  
let simulate grid timestep = 
  simulate_aux grid timestep 

open Lwt.Infix
let rec start () =
  let t = Lwt.task () in
  let _, w = !state in 
  state := t;
  Graphics.clear_graph ();
  Lwt.wakeup w (); 
  Lwt_unix.sleep (1. /. 60.) >>=  start 
;;



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

  
