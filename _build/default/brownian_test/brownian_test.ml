open Brownian
open Base


let e = Float.epsilon_float
let grid:Grid.t= 
  {x_range=(25.,425.);
   y_range=(25.,425.);
   objects=[{Ball.id with position = [|50.;50.|];
                          velocity = [|1.;1.|];
                          bounds = [|(55.,45.);(55.,45.)|]}
        ]
  };;


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
  (List.hd_exn (Grid.wall_collision X grid).objects).velocity;
  let corner_grid = {grid with objects =
                      [{Ball.id with position = [|25.;25.|];
                                     velocity = [|1.;1.|];
                                     bounds = [|(20.,30.);(20.,30.)|]}
                      ]
                    } in
  let corner_grid' = Grid.wall_collision Y corner_grid in
  let corner_grid'' = Grid.wall_collision X corner_grid' in
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
      

(*let test_replace () = 
  let open Alcotest in
  (check list )
*)
let () = 
  let open Alcotest in
    run "Updates" [
      "testings", [
        test_case "range test" `Quick test_range;
        test_case "wall collision"  `Quick test_wall_collision;
        test_case "basic forward"    `Quick test_updates;
        test_case "insertion sort" `Quick test_insertion_sort

        ]
      
    ]
    