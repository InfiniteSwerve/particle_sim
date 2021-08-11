open Brownian 
open Grid
open Base
module Html = Js_of_ocaml.Dom_html

module Js = Js_of_ocaml.Js

module G = Graphics_js

(*open Js_of_ocaml_lwt*)

let fmt = Printf.sprintf

let js = Js.string

let doc = Html.document

let canvas_height, canvas_width = 450., 450.

let ti n = Int.of_float n 

let timestep = 0.1
let framerate = 1./.5000.

let objects = [{Ball.id with position = [|250.; 250.|];
                          radius = 20.;
                          velocity = [|-3.;-3.|];
                          og_id=1};
        {Ball.id with position = [|50.;225.|];
                      radius = 20.; 
                      velocity = [|0.1;0.|];
                      og_id = 2};
(*{Ball.id with position = [|50.; 350.|];
                          radius = 20.;
                          velocity = [|2.;0.|];
                          og_id=3};
        {Ball.id with position = [|50.;250.|];
                      radius = 20.; 
                      velocity = [|2.;-1.|];
                      og_id = 4};
        {Ball.id with position = [|100.;350.|];
                      radius = 20.; 
                      velocity = [| -10.;-2.|];
                      og_id = 5};
        {Ball.id with position = [|120.;100.|];
                      radius = 20.; 
                      velocity = [| -1.;2.|];
                      og_id = 6}; 
        {Ball.id with position = [|50.;200.|];
                      radius = 20.; 
                      velocity = [| 5.;1.|];
                      og_id = 7};
        {Ball.id with position = [|200.;200.|];
                      radius = 20.; 
                      velocity = [| 5.;2.3|];
                      og_id = 8};   *)

        ]

let grid:Grid.t= 
  {x_range=(25.,425.);
   y_range=(25.,425.);
   objects=objects;
   future_objects = List.map ~f:(Ball.forwards timestep) objects;
   timestep = timestep;
  } ;;

(*let grid = Grid.initialize_populated_grid 400. 400. 1*)

let place_circle context x_pos y_pos radius = 
  begin
    context##beginPath;
    context##arc x_pos y_pos radius 0. 6.283185 Js._false;
    context##fill;
  end



let place_obj grid (context:Html.canvasRenderingContext2D Js.t) = 
  List.iter ~f:(fun b-> place_circle context (b.position.(0)) (b.position.(1)) (b.radius) ) grid.objects


let ( >>= ) = Lwt.bind
let log (s:string) = Js_of_ocaml.Firebug.console##log(js s)

let create_canvas () =
 let c = Html.createCanvas doc in
 c##.width := Int.of_float canvas_width;
 c##.height := Int.of_float canvas_height;
 c


let rec loop (canvas:Html.canvasElement Js.t) (grid:Grid.t)  = 
  let c = canvas##getContext Html._2d_ in
  c##strokeRect 25. 25. (400.) (400.) ;
  place_obj grid c;
  Js_of_ocaml_lwt.Lwt_js.sleep framerate >>= fun () ->
    c##beginPath;
    c##clearRect 0. 0. canvas_width canvas_height;
    loop canvas (update grid grid.timestep)


let start _ = 
  let canvas = create_canvas () in
  G.open_canvas canvas;
  Js_of_ocaml.Dom.appendChild doc##.body canvas;
  loop canvas grid |> ignore ;
  Js._false


let _ = 
  Html.window##.onload := Html.handler start

(*
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
  Graphics_js.clear_graph ();
  let x, right = grid.x_range in
  let y, top = grid.y_range in
  Graphics_js.draw_rect (ti x) (ti y) (ti (right-.x)) (ti (top-.y));
  Lwt.wakeup w (); 
  (*Lwt_unix*)
  Lwt_js.sleep (framerate) >>=  start 
;;


(* Driver code for simulation *)
let _ = 
  Graphics_js.open_graph " 450x450";
  Graphics_js.(set_color black) ;
  simulate grid timestep;;
  Lwt_main.run (start ())

*)

(*open Lwt.Infix*)
(*open Lwt.Infix
let rec tic () = 
  Lwt_js.sleep 1.0 >>= fun () ->
  tic ();;

let _ = 
  Lwt_main.run (tic ())*)
