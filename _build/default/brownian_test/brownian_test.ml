open Brownian
open Base


let e = Float.epsilon_float
let grid:Grid.t= 
  {x_range=(25.,425.);
   y_range=(25.,425.);
   objects=[{Ball.id with position = [|50.;50.|];
                          velocity = [|1.;1.|];
                          bounds = [|(55.,45.);(55.,45.)|]};
   
        ];
   future_objects = [{Ball.id with position = [|50.;50.|];
                          velocity = [|1.;1.|];
                          bounds = [|(55.,45.);(55.,45.)|]};
   
        ];
   timestep = 1.
  };;

let print_array msg arr = 
  Stdio.printf "%s" msg;
  Array.iter ~f:(fun n -> Stdio.printf "%f " n) arr;
  Stdio.printf "\n"


let test_range () = 
  let open Alcotest in
  (check bool) "0 inside -1 1" true (Range.r_in 0. (-1.,1.));
  (check bool) "-2 inside -1 1" false (Range.r_in (-2.) (-1.,1.));
  (check bool) "0 2 intersect -1 1" true (Range.intersect (0.,2.) (-1.,1.));
  (check bool) "-4 -2 intersect -1 1" false (Range.intersect (-4.,-2.) (-1.,1.));
  (check bool) ".5 .75 outside -1 1" false (Range.outside (0.5,0.75) (-1.,1.));
  (check bool) "-2 .75 outside -1 1" true (Range.outside (-2.,0.75) (-1.,1.));
  (check bool) ".5 1.75 outside -1 1" true (Range.outside (0.5,1.75) (-1.,1.));
  (check bool) "2 2.75 outside -1 1" true (Range.outside (2.0,2.75) (-1.,1.))

let test_wall_collision () = 
  let open Alcotest in
  (check @@ (array (float e))) "no collision" [| 1.;1.|] 
  (List.hd_exn (Grid.continuous_wall_collision X grid).objects).velocity;
  let corner_grid = {grid with objects =
                      [{Ball.id with position = [|25.;25.|];
                                     velocity = [|1.;1.|];
                                     bounds = [|(20.,30.);(20.,30.)|]}
                      ]
                    } in
  let corner_grid' = Grid.continuous_wall_collision Y corner_grid in
  let corner_grid'' = Grid.continuous_wall_collision X corner_grid' in
  (check @@ (array (float e))) "wall collision" [| -1.;-1.|] 
  (List.hd_exn (corner_grid'').objects).velocity

let test_updates () = 
  let open Alcotest in
  (check @@ (array (float e))) "basic update" [|51.;51.|] 
  (List.hd_exn (Grid.update grid 1.).objects).position;

  (check @@ (array (float e))) "basic update" [|52.;52.|] 
  (List.hd_exn (Grid.update(Grid.update grid 1.) 1.).objects).position


let test_insertion_sort () = 
  let open Alcotest in
  (check (list (pair (float e) (float e)))) "basic sort" [(0.,2.);(1.,1.)] 
    (List.map ~f:(fun (b:Ball.t) -> b.bounds.(0))
    (Grid.insertion_sort [{Ball.id with bounds = [|(0.,2.)|]};{Ball.id with bounds = [|(1.,1.)|]}] X)
    );
  (check (list (pair (float e) (float e)))) "5 sort" [(1.,0.);(2.,0.);(3.,0.);(4.,0.);(5.,0.)] 
      (List.map ~f:(fun (b:Ball.t) -> b.bounds.(0))
      (Grid.insertion_sort [{Ball.id with bounds = [|(2.,0.)|]};
                            {Ball.id with bounds = [|(5.,0.)|]};
                            {Ball.id with bounds = [|(3.,0.)|]};
                            {Ball.id with bounds = [|(4.,0.)|]};
                            {Ball.id with bounds = [|(1.,0.)|]};
                            ] X)
      )
      


let test_collision () = 
  let open Alcotest in
  (check (list (array (float e)))) "horizontal collision with equal velocity" [[| -1.;0.|];[|1.;0.|]]
    ((fun ((b1:Ball.t),(b2:Ball.t)) -> [b1.velocity;b2.velocity])
      (Grid.collide {Ball.id with velocity = [|1.;0.|];
                                  position = [|50.;50.|]} 
                    {Ball.id with velocity = [| -1.;0.|];
                                  position = [|60.;50.|]} ));

  (check (list (array (float e)))) "vertical collision with equal velocity" [[| 0.;-1.|];[|0.;1.|]]
    ((fun ((b1:Ball.t),(b2:Ball.t)) -> [b1.velocity;b2.velocity])
      (Grid.collide {Ball.id with velocity = [|0.;1.|];
                                  position = [|50.;50.|]} 
                    {Ball.id with velocity = [| 0.;-1.|];
                                  position = [|50.;60.|]} ))

let test_replace () =
  let open Alcotest in
  (check (array (float e))) "basic replace" [|0.;0.|]
  (List.hd_exn @@ Grid.replace_ball 
        {Ball.id with velocity = [|0.;0.|]} [Ball.id]).velocity

  (*(check (array (float e))) "basic replace" [|2.;2.|]
  (List.hd_exn @@ (Grid.replace_ball 
        {Ball.id with velocity = [|2.;2.|]} [Ball.id;{Ball.id with og_id = 5}]
        |> Grid.replace_ball {Ball.id with velocity = [|3.;3.|]
        })).velocity*)

let test_pos_quadratic_formula () = 
  let open Alcotest in
  (check @@ float e) "(x+1)(x-1)" 1. (Grid.pos_quadratic_formula 1. 0. (-.1.))

let test_find_collision () = 
  let b1 = {Ball.id with radius = 1.;
                         position = [|4.;0.|];
                         velocity = [|-1.;0.|] } in
  let b2 = {b1 with position = [|0.;0.|];
                    velocity = [|0.;0.|]} in
  let open Alcotest in
  (check @@ float e) "collision at 2" 2. (Grid.find_ball_collision b1 b2);
  let b1 = {Ball.id with radius = 1.;
                         position = [|2.;0.|];
                         velocity = [|1.;0.|] } in
  let b2 = {b1 with position = [|0.;0.|];
                    velocity = [|0.;0.|]} in
  let open Alcotest in
  (check @@ float e) "collision at 0" 0. (Grid.find_ball_collision b1 b2)


let test_find_wall_collision_time () = 
  let fb = {Ball.id with radius = 1.; 
                         position = [|0.;1.|];
                         velocity = [|0.;-1.|]} in
  let cb = {Ball.id with radius = 1.; 
                         position = [|0.;2.|];
                         velocity = [|0.;-1.|]} in
  let edge = 0.
  and coord = 1 in
  let open Alcotest in
  (check @@ float e) "collision at 1" 1. (Grid.find_wall_collision_time edge cb fb coord);

  let fb = {Ball.id with radius = 1.; 
                         position = [|2.;0.|];
                         velocity = [|1.;0.|]} in
  let cb = {Ball.id with radius = 1.; 
                         position = [|1.;0.|];
                         velocity = [|1.;0.|]} in
  let edge = 0.
  and coord = 0 in
  let open Alcotest in
  (check @@ float e) "collision at 0" 0. (Grid.find_wall_collision_time edge cb fb coord)

let test_find_colliding_edge () = 
  let ball = {Ball.id with radius = 1.;
                           position = [|0.;0.|];
                           bounds = [|(-1.,1.)|]} in
  let open Alcotest in 
  (check @@ float e) "wall collides at 0" 0. (Grid.find_colliding_edge (0.,100.) 0 ball );

  let ball' = {Ball.id with radius = 1.;
                           position = [|100.;0.|];
                           bounds = [|(99.,101.)|]} in
  let open Alcotest in 
  (check @@ float e) "wall collides at 100" 100. (Grid.find_colliding_edge (0.,100.) 0 ball' )

let test_interpolate_wall_collision () = 
  let cb = {Ball.id with radius = 1.; 
                         position = [|1.;0.|];
                         velocity = [|-1.;0.|]} in
  let fb = {Ball.id with radius = 1.; 
                         position = [|0.;0.|];
                         velocity = [|-1.;0.|]} in
  let edge = 0. in
  let coord = 0  in
  let timestep = 1. in
  let open Alcotest in
  (check @@ list (array @@ float e)) "instantanerous turn around" [[|2.;0.|];[|1.;0.|]] 
      ((fun (b:Ball.t) -> [b.position;b.velocity]) (Grid.interpolate_wall_collision edge cb fb coord timestep))

let test_continuous_wall_collision () = 
  let timestep = 1. in
  let ball = {Ball.id with radius = 1.; 
                         position = [|1.;50.|];
                         velocity = [|-1.;0.|];
                         bounds = [|(0.,2.);(49.,51.)|]} in
  let future_ball = Ball.forwards timestep ball in                
  let (grid:Grid.t) = {x_range=(0., 100.);
                       y_range= (0.,100.);
                       objects = [ball];
                       future_objects = [future_ball];
                       timestep = timestep }
  in
  let open Alcotest in
  (check @@ list @@ array @@ float e ) "basic wall bounce" [[|2.;50.|];[|1.;0.|]]
    ((fun (grid:Grid.t) -> let first = List.hd_exn grid.objects in [first.position;first.velocity])
      (Grid.continuous_wall_collision X grid));

  let ball = {Ball.id with radius = 1.; 
                         position = [|99.;50.|];
                         velocity = [|1.;0.|]} in
  let future_ball = Ball.forwards timestep ball in                
  let (grid:Grid.t) = {x_range=(0., 100.);
                       y_range= (0.,100.);
                       objects = [ball];
                       future_objects = [future_ball];
                       timestep = timestep }
  in
  let open Alcotest in
  (check @@ list @@ array @@ float e ) "right side wall bounce" [[|98.;50.|];[|-1.;0.|]]
    ((fun (grid:Grid.t) -> let first = List.hd_exn grid.objects in [first.position;first.velocity])
      (Grid.continuous_wall_collision X grid))


let test_update () =
  let grid' = {grid with objects = 
                  [{Ball.id with velocity = [|1.5;0.|];
                                  position = [|50.;50.|]} ;
                    {Ball.id with velocity = [| -1.;0.|];
                                  position = [|60.;50.|];
                                  og_id = 2}]} in
  let grid'' = (Grid.update grid' 1.0 ).objects in       
  let open Alcotest in
  (check (list (*(pair (array (float e))*) (array (float e)))) "update with horizontal collision and no wall collision" [[|-1.;0.|];[|1.5;0.|]]
      ((fun (ol:Ball.t list) -> match ol with 
                  | b1::b2::[] -> 
                    print_array "b1 is" b1.velocity;
                    print_array "b2 is" b2.velocity;
                      [b1.velocity;b2.velocity]
                  | _ -> failwith "Inputs to test_update must be a list of two Ball.t"
      )
       grid'')

  






let () = 
  let open Alcotest in
    run "Updates" [
      "testings", [
        test_case "range test" `Quick test_range;
        (*test_case "wall collision"  `Quick test_wall_collision;*)
        test_case "basic forward"    `Quick test_updates;
        test_case "insertion sort" `Quick test_insertion_sort;
        test_case "ball collision" `Quick test_collision;
        test_case "replace"     `Quick test_replace;
        test_case "qudratic formula" `Quick test_pos_quadratic_formula;
        test_case "find collision" `Quick test_find_collision;
        test_case "find wall collision time" `Quick test_find_wall_collision_time;
        test_case "find colliding edge" `Quick test_find_colliding_edge;
        test_case "interpolate wall collision" `Quick test_interpolate_wall_collision;
        test_case "continuous wall collision" `Quick test_continuous_wall_collision;
        (*test_case "update"        `Quick test_update*)
        ]
      
    ]
    