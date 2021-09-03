(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_array_get=runtime.caml_array_get,
     caml_jsstring_of_string=runtime.caml_jsstring_of_string;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    var
     global_data=runtime.caml_get_global_data(),
     Brownian=global_data.Brownian,
     Js_of_ocaml_Dom_html=global_data.Js_of_ocaml__Dom_html,
     Js_of_ocaml_lwt_Lwt_js=global_data.Js_of_ocaml_lwt__Lwt_js,
     Graphics_js=global_data.Graphics_js,
     Js_of_ocaml_Dom=global_data.Js_of_ocaml__Dom,
     Js_of_ocaml_Js=global_data.Js_of_ocaml__Js,
     Base_Int=global_data.Base__Int,
     Js_of_ocaml_Firebug=global_data.Js_of_ocaml__Firebug,
     Base_List=global_data.Base__List,
     Base_Printf=global_data.Base__Printf,
     Base=global_data.Base,
     Lwt=global_data.Lwt,
     js=caml_jsstring_of_string,
     _b_=Js_of_ocaml_Dom_html[2],
     _l_=[0,25.,425.],
     _m_=[0,25.,425.],
     _a_=Base_Printf[2],
     t25=450.,
     t26=450.;
    function ti(n){return caml_call1(Base_Int[2],n)}
    var
     framerate=caml_call2(Base[214],1.,60.),
     _c_=Brownian[4][1],
     _d_=Brownian[4][1],
     _e_=Brownian[4][1],
     _f_=Brownian[4][1],
     _g_=Brownian[4][1],
     _h_=Brownian[4][1],
     _i_=Brownian[4][1],
     _j_=Brownian[4][1],
     objects=
      [0,
       [0,20.,[254,46.,60.],[254,0.,0.],_j_[4],_j_[5],1,_j_[7],_j_[8]],
       [0,
        [0,20.,[254,90.,140.],[254,-5.,-5.],_i_[4],_i_[5],2,_i_[7],_i_[8]],
        [0,
         [0,20.,[254,200.,220.],[254,0.,0.],_h_[4],_h_[5],3,_h_[7],_h_[8]],
         [0,
          [0,20.,[254,50.,250.],[254,-2.,0.1],_g_[4],_g_[5],4,_g_[7],_g_[8]],
          [0,
           [0,20.,[254,50.,350.],[254,-2.,0.],_f_[4],_f_[5],5,_f_[7],_f_[8]],
           [0,
            [0,20.,[254,120.,100.],[254,-1.,2.],_e_[4],_e_[5],6,_e_[7],_e_[8]],
            [0,
             [0,20.,[254,50.,200.],[254,5.,1.],_d_[4],_d_[5],7,_d_[7],_d_[8]],
             [0,
              [0,
               20.,
               [254,200.,200.],
               [254,5.,2.3],
               _c_[4],
               _c_[5],
               8,
               _c_[7],
               _c_[8]],
              0]]]]]]]],
     _k_=caml_call1(Brownian[4][2],0.1),
     grid=[0,_m_,_l_,objects,caml_call2(Base_List[74],objects,_k_),0.1],
     timestep=0.1;
    function place_circle(t8,x_pos,y_pos,radius)
     {t8.beginPath();
      t8.arc(x_pos,y_pos,radius,0.,6.283185,Js_of_ocaml_Js[8]);
      return t8.fill()}
    function place_obj(grid,context)
     {function _q_(b)
       {return place_circle
                (context,caml_array_get(b[2],0),caml_array_get(b[2],1),b[1])}
      return caml_call2(Base_List[9],grid[3],_q_)}
    var _n_=Lwt[6];
    function log(s)
     {var t9=caml_jsstring_of_string(s);return Js_of_ocaml_Firebug[1].log(t9)}
    function create_canvas(param)
     {var c=caml_call1(Js_of_ocaml_Dom_html[110],_b_);
      c.width = caml_call1(Base_Int[2],t25);
      c.height = caml_call1(Base_Int[2],t26);
      return c}
    function loop(canvas,grid)
     {var t27=canvas.getContext(Js_of_ocaml_Dom_html[1]);
      t27.strokeRect(25.,25.,400.,400.);
      place_obj(grid,t27);
      function _p_(param)
       {t27.beginPath();
        t27.clearRect(0.,0.,450.,450.);
        return loop(canvas,caml_call2(Brownian[6][14],grid,grid[5]))}
      return caml_call2
              (_n_,caml_call1(Js_of_ocaml_lwt_Lwt_js[1],framerate),_p_)}
    function start(param)
     {var canvas=create_canvas(0);
      caml_call1(Graphics_js[40],canvas);
      caml_call2(Js_of_ocaml_Dom[5],_b_.body,canvas);
      loop(canvas,grid);
      return Js_of_ocaml_Js[8]}
    var _o_=caml_call1(Js_of_ocaml_Dom_html[10],start);
    Js_of_ocaml_Dom_html[8].onload = _o_;
    var
     Dune_exe_Main=
      [0,
       _a_,
       js,
       _b_,
       t26,
       t25,
       ti,
       timestep,
       framerate,
       objects,
       grid,
       place_circle,
       place_obj,
       _n_,
       log,
       create_canvas,
       loop,
       start];
    runtime.caml_register_global(79,Dune_exe_Main,"Dune__exe__Main");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIubWFpbi5lb2Jqcy9ieXRlL2R1bmVfX2V4ZV9fTWFpbi5jbW8uanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOlsianMiLCJ0aSIsIm4iLCJmcmFtZXJhdGUiLCJvYmplY3RzIiwiZ3JpZCIsInRpbWVzdGVwIiwicGxhY2VfY2lyY2xlIiwieF9wb3MiLCJ5X3BvcyIsInJhZGl1cyIsInBsYWNlX29iaiIsImNvbnRleHQiLCJiIiwibG9nIiwicyIsImNyZWF0ZV9jYW52YXMiLCJjIiwibG9vcCIsImNhbnZhcyIsInN0YXJ0Il0sInNvdXJjZXMiOlsiL2hvbWUvc3dlcnZlL0NvZGUvT2NhbWwvYnJvd25pYW5fbW90aW9uL19idWlsZC9kZWZhdWx0L2Jpbi9tYWluLm1sIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBYUlBOzs7Ozs7O2FBTUFDLEdBQUdDLEdBQUksOEJBQUpBLEVBQWtCO0lBR1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXlDZ0I7S0FBWixnQkF2Q2hCRSxRQXVDZ0IseUJBdkNoQkE7S0FIQUU7SUEwQ2dCLFNBTWhCQyxnQkFBcUJDLE1BQU1DLE1BQU1DO007YUFBWkYsTUFBTUMsTUFBTUM7c0JBS2hDO0lBWGUsU0FlaEJDLFVBQVVOLEtBQU1PO01BQ2xCLGFBQWtCQztRQUF5QjtpQkFEekJELFFBQ3lCLGVBQXpCQyxRQUEwQyxlQUExQ0EsYUFBcUU7TUFBdkYsK0JBRFlSLFlBQzBGO0lBaEJwRjthQW9CaEJTLElBQUtDO01BQTRDLCtCQUE1Q0Esd0NBQWtEO0lBcEJ2QyxTQXNCaEJDO01BQ0ssSUFBSkMsRUFBSTtNQUFKQSxVQUNTO01BRFRBLFdBRVU7YUFGVkEsQ0FHSDtJQTFCa0IsU0E2QlpDLEtBQU1DLE9BQWlDZDtNLFFBQWpDYzs7TUFHWixVQUg2Q2Q7TUFHN0M7UTs7UUFJYyxZQVBGYyxPQU9FLDJCQVArQmQsY0FPSjtNQUh6Qzt3REExRUVGLGVBNkV1QztJQXBDdkIsU0F1Q2hCaUI7TUFDVyxJQUFURCxPQUFTO01BQ2IsMkJBRElBO01BRUosdUNBRklBO01BR0osS0FISUEsT0E1Q0ZkO01BK0NrQix3QkFDWDtJQUllLDRDQVR0QmU7O0lBU3NCOzs7O09BbEd0QnBCOzs7O09BTUFDO09BRUFLO09BQ0FIO09BRUFDO09BbUNBQztPQVVBRTtPQVNBSTs7T0FLQUc7T0FFQUU7T0FPSUU7T0FVSkU7O1UiLCJzb3VyY2VzQ29udGVudCI6WyJvcGVuIEJyb3duaWFuIFxub3BlbiBHcmlkXG5vcGVuIEJhc2Vcbm1vZHVsZSBIdG1sID0gSnNfb2Zfb2NhbWwuRG9tX2h0bWxcblxubW9kdWxlIEpzID0gSnNfb2Zfb2NhbWwuSnNcblxubW9kdWxlIEcgPSBHcmFwaGljc19qc1xuXG4oKm9wZW4gSnNfb2Zfb2NhbWxfbHd0KilcblxubGV0IGZtdCA9IFByaW50Zi5zcHJpbnRmXG5cbmxldCBqcyA9IEpzLnN0cmluZ1xuXG5sZXQgZG9jID0gSHRtbC5kb2N1bWVudFxuXG5sZXQgY2FudmFzX2hlaWdodCwgY2FudmFzX3dpZHRoID0gNDUwLiwgNDUwLlxuXG5sZXQgdGkgbiA9IEludC5vZl9mbG9hdCBuIFxuXG5sZXQgdGltZXN0ZXAgPSAwLjFcbmxldCBmcmFtZXJhdGUgPSAxLi8uNjAuXG5cbmxldCBvYmplY3RzID0gW3tCYWxsLmlkIHdpdGggcG9zaXRpb24gPSBbfDQ2LjsgNjAufF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhZGl1cyA9IDIwLjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHkgPSBbfDAuOzAufF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9nX2lkPTF9O1xuICAgICAgICB7QmFsbC5pZCB3aXRoIHBvc2l0aW9uID0gW3w5MC47MTQwLnxdO1xuICAgICAgICAgICAgICAgICAgICAgIHJhZGl1cyA9IDIwLjsgXG4gICAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHkgPSBbfC01LjstNS58XTtcbiAgICAgICAgICAgICAgICAgICAgICBvZ19pZCA9IDJ9O1xue0JhbGwuaWQgd2l0aCBwb3NpdGlvbiA9IFt8MjAwLjsgMjIwLnxdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByYWRpdXMgPSAyMC47XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5ID0gW3wwLjswLnxdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvZ19pZD0zfTtcbiAgICAgICAge0JhbGwuaWQgd2l0aCBwb3NpdGlvbiA9IFt8NTAuOzI1MC58XTtcbiAgICAgICAgICAgICAgICAgICAgICByYWRpdXMgPSAyMC47IFxuICAgICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5ID0gW3wtMi47MC4xfF07XG4gICAgICAgICAgICAgICAgICAgICAgb2dfaWQgPSA0fTtcbiAgICAgICAge0JhbGwuaWQgd2l0aCBwb3NpdGlvbiA9IFt8NTAuOzM1MC58XTtcbiAgICAgICAgICAgICAgICAgICAgICByYWRpdXMgPSAyMC47IFxuICAgICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5ID0gW3wtMi47MC58XTtcbiAgICAgICAgICAgICAgICAgICAgICBvZ19pZCA9IDV9O1xuICAgICAgICB7QmFsbC5pZCB3aXRoIHBvc2l0aW9uID0gW3wxMjAuOzEwMC58XTtcbiAgICAgICAgICAgICAgICAgICAgICByYWRpdXMgPSAyMC47IFxuICAgICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5ID0gW3wgLTEuOzIufF07XG4gICAgICAgICAgICAgICAgICAgICAgb2dfaWQgPSA2fTsgXG4gICAgICAgIHtCYWxsLmlkIHdpdGggcG9zaXRpb24gPSBbfDUwLjsyMDAufF07XG4gICAgICAgICAgICAgICAgICAgICAgcmFkaXVzID0gMjAuOyBcbiAgICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eSA9IFt8IDUuOzEufF07XG4gICAgICAgICAgICAgICAgICAgICAgb2dfaWQgPSA3fTtcbiAgICAgICAge0JhbGwuaWQgd2l0aCBwb3NpdGlvbiA9IFt8MjAwLjsyMDAufF07XG4gICAgICAgICAgICAgICAgICAgICAgcmFkaXVzID0gMjAuOyBcbiAgICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eSA9IFt8IDUuOzIuM3xdO1xuICAgICAgICAgICAgICAgICAgICAgIG9nX2lkID0gOH07ICAgXG5cbiAgICAgICAgXVxuXG5sZXQgZ3JpZDpHcmlkLnQ9IFxuICB7eF9yYW5nZT0oMjUuLDQyNS4pO1xuICAgeV9yYW5nZT0oMjUuLDQyNS4pO1xuICAgb2JqZWN0cz1vYmplY3RzO1xuICAgZnV0dXJlX29iamVjdHMgPSBMaXN0Lm1hcCB+ZjooQmFsbC5mb3J3YXJkcyB0aW1lc3RlcCkgb2JqZWN0cztcbiAgIHRpbWVzdGVwID0gdGltZXN0ZXA7XG4gIH0gOztcblxuKCpsZXQgZ3JpZCA9IEdyaWQuaW5pdGlhbGl6ZV9wb3B1bGF0ZWRfZ3JpZCA0MDAuIDQwMC4gMSopXG5cbmxldCBwbGFjZV9jaXJjbGUgY29udGV4dCB4X3BvcyB5X3BvcyByYWRpdXMgPSBcbiAgYmVnaW5cbiAgICBjb250ZXh0IyNiZWdpblBhdGg7XG4gICAgY29udGV4dCMjYXJjIHhfcG9zIHlfcG9zIHJhZGl1cyAwLiA2LjI4MzE4NSBKcy5fZmFsc2U7XG4gICAgY29udGV4dCMjZmlsbDtcbiAgZW5kXG5cblxuXG5sZXQgcGxhY2Vfb2JqIGdyaWQgKGNvbnRleHQ6SHRtbC5jYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgSnMudCkgPSBcbiAgTGlzdC5pdGVyIH5mOihmdW4gYi0+IHBsYWNlX2NpcmNsZSBjb250ZXh0IChiLnBvc2l0aW9uLigwKSkgKGIucG9zaXRpb24uKDEpKSAoYi5yYWRpdXMpICkgZ3JpZC5vYmplY3RzXG5cblxubGV0ICggPj49ICkgPSBMd3QuYmluZFxubGV0IGxvZyAoczpzdHJpbmcpID0gSnNfb2Zfb2NhbWwuRmlyZWJ1Zy5jb25zb2xlIyNsb2coanMgcylcblxubGV0IGNyZWF0ZV9jYW52YXMgKCkgPVxuIGxldCBjID0gSHRtbC5jcmVhdGVDYW52YXMgZG9jIGluXG4gYyMjLndpZHRoIDo9IEludC5vZl9mbG9hdCBjYW52YXNfd2lkdGg7XG4gYyMjLmhlaWdodCA6PSBJbnQub2ZfZmxvYXQgY2FudmFzX2hlaWdodDtcbiBjXG5cblxubGV0IHJlYyBsb29wIChjYW52YXM6SHRtbC5jYW52YXNFbGVtZW50IEpzLnQpIChncmlkOkdyaWQudCkgID0gXG4gIGxldCBjID0gY2FudmFzIyNnZXRDb250ZXh0IEh0bWwuXzJkXyBpblxuICBjIyNzdHJva2VSZWN0IDI1LiAyNS4gKDQwMC4pICg0MDAuKSA7XG4gIHBsYWNlX29iaiBncmlkIGM7XG4gIEpzX29mX29jYW1sX2x3dC5Md3RfanMuc2xlZXAgZnJhbWVyYXRlID4+PSBmdW4gKCkgLT5cbiAgICBjIyNiZWdpblBhdGg7XG4gICAgYyMjY2xlYXJSZWN0IDAuIDAuIGNhbnZhc193aWR0aCBjYW52YXNfaGVpZ2h0O1xuICAgIGxvb3AgY2FudmFzICh1cGRhdGUgZ3JpZCBncmlkLnRpbWVzdGVwKVxuXG5cbmxldCBzdGFydCBfID0gXG4gIGxldCBjYW52YXMgPSBjcmVhdGVfY2FudmFzICgpIGluXG4gIEcub3Blbl9jYW52YXMgY2FudmFzO1xuICBKc19vZl9vY2FtbC5Eb20uYXBwZW5kQ2hpbGQgZG9jIyMuYm9keSBjYW52YXM7XG4gIGxvb3AgY2FudmFzIGdyaWQgfD4gaWdub3JlIDtcbiAgSnMuX2ZhbHNlXG5cblxubGV0IF8gPSBcbiAgSHRtbC53aW5kb3cjIy5vbmxvYWQgOj0gSHRtbC5oYW5kbGVyIHN0YXJ0XG5cbigqXG5sZXQgc3RhdGUgPSByZWYgKEx3dC50YXNrICgpKVxuXG5sZXQgd2FpdCAoKSA9IGZzdCAhc3RhdGVcblxubGV0IHByaW50X2NoYW5nZSBncmlkID0gXG4gIGxldCBwb3MgPSAoTGlzdC5oZF9leG4gZ3JpZC5vYmplY3RzKS5wb3NpdGlvbiBpblxuICBBcnJheS5pdGVyIH5mOihmdW4geCAtPlN0ZGlvLnByaW50ZiBcIiVmXFxuXCIgeCkgcG9zXG5cbm9wZW4gTHd0LkluZml4XG5cbigqIG1haW4gc2ltdWxhdGlvbiBjb2RlICopXG5cbmxldCBzaW11bGF0ZSBncmlkIHRpbWVzdGVwID0gXG4gIGxldCByZWMgc2ltdWxhdGVfYXV4IGdyaWQgdGltZXN0ZXAgPVxuICAgIHBsYWNlX29iaiBncmlkO1xuICAgIHdhaXQoKSA+Pj0gKGZ1biAoKSAtPiBzaW11bGF0ZV9hdXggKHVwZGF0ZSBncmlkIHRpbWVzdGVwKSB0aW1lc3RlcClcbiAgaW5cbiAgc2ltdWxhdGVfYXV4IGdyaWQgdGltZXN0ZXAgXG5cbigqIEkgZG8gbm90IGZ1bGx5IHVuZGVyc3RhbmQgd2hhdCB0aGlzIGRvZXMsXG4gIGJ1dCBpdCBkcml2ZXMgdGhlIGZyYW1lcy1wZXItc2Vjb25kIGNvbnRpbnVvdXNcbiAgZ3JhcGhpY3MgZ2VuZGVyaW5nIGZvciB0aGUgc2ltdWxhdGlvbiAqKVxubGV0IHJlYyBzdGFydCAoKSA9XG4gIGxldCB0ID0gTHd0LnRhc2sgKCkgaW5cbiAgbGV0IF8sIHcgPSAhc3RhdGUgaW4gXG4gIHN0YXRlIDo9IHQ7XG4gIEdyYXBoaWNzX2pzLmNsZWFyX2dyYXBoICgpO1xuICBsZXQgeCwgcmlnaHQgPSBncmlkLnhfcmFuZ2UgaW5cbiAgbGV0IHksIHRvcCA9IGdyaWQueV9yYW5nZSBpblxuICBHcmFwaGljc19qcy5kcmF3X3JlY3QgKHRpIHgpICh0aSB5KSAodGkgKHJpZ2h0LS54KSkgKHRpICh0b3AtLnkpKTtcbiAgTHd0Lndha2V1cCB3ICgpOyBcbiAgKCpMd3RfdW5peCopXG4gIEx3dF9qcy5zbGVlcCAoZnJhbWVyYXRlKSA+Pj0gIHN0YXJ0IFxuOztcblxuXG4oKiBEcml2ZXIgY29kZSBmb3Igc2ltdWxhdGlvbiAqKVxubGV0IF8gPSBcbiAgR3JhcGhpY3NfanMub3Blbl9ncmFwaCBcIiA0NTB4NDUwXCI7XG4gIEdyYXBoaWNzX2pzLihzZXRfY29sb3IgYmxhY2spIDtcbiAgc2ltdWxhdGUgZ3JpZCB0aW1lc3RlcDs7XG4gIEx3dF9tYWluLnJ1biAoc3RhcnQgKCkpXG5cbiopXG5cbigqb3BlbiBMd3QuSW5maXgqKVxuKCpvcGVuIEx3dC5JbmZpeFxubGV0IHJlYyB0aWMgKCkgPSBcbiAgTHd0X2pzLnNsZWVwIDEuMCA+Pj0gZnVuICgpIC0+XG4gIHRpYyAoKTs7XG5cbmxldCBfID0gXG4gIEx3dF9tYWluLnJ1biAodGljICgpKSopXG4iXX0=
