(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_gr_doc_of_state=runtime.caml_gr_doc_of_state,
     caml_gr_state_get=runtime.caml_gr_state_get,
     caml_gr_state_set=runtime.caml_gr_state_set,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    var
     global_data=runtime.caml_get_global_data(),
     cst=caml_string_of_jsbytes(""),
     cst_Graphics_Graphic_failure=
      caml_string_of_jsbytes("Graphics.Graphic_failure"),
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_char=global_data.Stdlib__char,
     Stdlib=global_data.Stdlib,
     Js_of_ocaml_Js=global_data.Js_of_ocaml__Js,
     Stdlib_list=global_data.Stdlib__list,
     Js_of_ocaml_Dom_html=global_data.Js_of_ocaml__Dom_html,
     Lwt=global_data.Lwt,
     Js_of_ocaml_lwt_Lwt_js_events=global_data.Js_of_ocaml_lwt__Lwt_js_events,
     include=global_data.Graphics,
     Stdlib_callback=global_data.Stdlib__callback,
     Graphics_js=[0];
    caml_register_global(24,Graphics_js,"Graphics_js__");
    var Poly=[0];
    function symbol(x,y){return x < y?1:0}
    function symbol$0(x,y){return x <= y?1:0}
    function symbol$1(x,y){return x !== y?1:0}
    function symbol$2(x,y){return x === y?1:0}
    function symbol$3(x,y){return y < x?1:0}
    function symbol$4(x,y){return y <= x?1:0}
    var compare=runtime.caml_int_compare;
    function equal(x,y){return x === y?1:0}
    function max(x,y){return y <= x?x:y}
    function min(x,y){return x <= y?x:y}
    var
     Int_replace_polymorphic_compar=
      [0,
       symbol,
       symbol$0,
       symbol$1,
       symbol$2,
       symbol$3,
       symbol$4,
       compare,
       equal,
       max,
       min],
     make=Stdlib_string[1],
     init=Stdlib_string[2],
     concat=Stdlib_string[3],
     compare$0=Stdlib_string[5],
     contains_from=Stdlib_string[6],
     rcontains_from=Stdlib_string[7],
     contains=Stdlib_string[8],
     sub=Stdlib_string[9],
     split_on_char=Stdlib_string[10],
     map=Stdlib_string[11],
     mapi=Stdlib_string[12],
     trim=Stdlib_string[13],
     escaped=Stdlib_string[14],
     uppercase_ascii=Stdlib_string[15],
     lowercase_ascii=Stdlib_string[16],
     capitalize_ascii=Stdlib_string[17],
     uncapitalize_ascii=Stdlib_string[18],
     iter=Stdlib_string[19],
     iteri=Stdlib_string[20],
     index_from=Stdlib_string[21],
     index_from_opt=Stdlib_string[22],
     rindex_from=Stdlib_string[23],
     rindex_from_opt=Stdlib_string[24],
     index=Stdlib_string[25],
     index_opt=Stdlib_string[26],
     rindex=Stdlib_string[27],
     rindex_opt=Stdlib_string[28],
     to_seq=Stdlib_string[29],
     to_seqi=Stdlib_string[30],
     of_seq=Stdlib_string[31],
     blit=Stdlib_string[32],
     copy=Stdlib_string[33],
     fill=Stdlib_string[34],
     uppercase=Stdlib_string[35],
     lowercase=Stdlib_string[36],
     capitalize=Stdlib_string[37],
     uncapitalize=Stdlib_string[38];
    function equal$0(x,y){return runtime.caml_string_equal(x,y)}
    var
     String=
      [0,
       make,
       init,
       concat,
       compare$0,
       contains_from,
       rcontains_from,
       contains,
       sub,
       split_on_char,
       map,
       mapi,
       trim,
       escaped,
       uppercase_ascii,
       lowercase_ascii,
       capitalize_ascii,
       uncapitalize_ascii,
       iter,
       iteri,
       index_from,
       index_from_opt,
       rindex_from,
       rindex_from_opt,
       index,
       index_opt,
       rindex,
       rindex_opt,
       to_seq,
       to_seqi,
       of_seq,
       blit,
       copy,
       fill,
       uppercase,
       lowercase,
       capitalize,
       uncapitalize,
       equal$0],
     chr=Stdlib_char[1],
     escaped$0=Stdlib_char[2],
     lowercase$0=Stdlib_char[3],
     uppercase$0=Stdlib_char[4],
     lowercase_ascii$0=Stdlib_char[5],
     uppercase_ascii$0=Stdlib_char[6],
     compare$1=Stdlib_char[7];
    function equal$1(x,y){return x === y?1:0}
    var
     Char=
      [0,
       chr,
       escaped$0,
       lowercase$0,
       uppercase$0,
       lowercase_ascii$0,
       uppercase_ascii$0,
       compare$1,
       equal$1],
     symbol$5=Int_replace_polymorphic_compar[1],
     symbol$6=Int_replace_polymorphic_compar[2],
     symbol$7=Int_replace_polymorphic_compar[3],
     symbol$8=Int_replace_polymorphic_compar[4],
     symbol$9=Int_replace_polymorphic_compar[5],
     symbol$10=Int_replace_polymorphic_compar[6],
     compare$2=Int_replace_polymorphic_compar[7],
     equal$2=Int_replace_polymorphic_compar[8],
     max$0=Int_replace_polymorphic_compar[9],
     min$0=Int_replace_polymorphic_compar[10],
     Graphics_js_Import=
      [0,
       Poly,
       Int_replace_polymorphic_compar,
       String,
       Char,
       symbol$5,
       symbol$6,
       symbol$7,
       symbol$8,
       symbol$9,
       symbol$10,
       compare$2,
       equal$2,
       max$0,
       min$0];
    caml_register_global(27,Graphics_js_Import,"Graphics_js__Import");
    var
     _a_=include[1],
     _b_=include[2],
     _c_=include[3],
     _d_=include[4],
     _e_=include[5],
     _f_=include[6],
     _g_=include[7],
     _h_=include[8],
     _i_=include[9],
     _j_=include[10],
     _k_=include[11],
     _l_=include[12],
     _m_=include[13],
     _n_=include[14],
     _o_=include[15],
     _p_=include[16],
     _q_=include[17],
     _r_=include[18],
     _s_=include[19],
     _t_=include[20],
     _u_=include[21],
     _v_=include[22],
     _w_=include[23],
     _x_=include[24],
     _y_=include[25],
     _z_=include[26],
     _A_=include[27],
     _B_=include[28],
     _C_=include[29],
     _D_=include[30],
     _E_=include[31],
     _F_=include[32],
     _G_=include[33],
     _H_=include[34],
     _I_=include[35],
     _J_=include[36],
     _K_=include[41],
     _L_=include[42];
    caml_call2(Stdlib_callback[2],cst_Graphics_Graphic_failure,[0,_a_,cst]);
    var symbol_bind=Lwt[6];
    function open_canvas(x)
     {var ctx=runtime.caml_gr_state_create(x,x.width,x.height);
      return caml_gr_state_set(ctx)}
    function compute_real_pos(elt)
     {var elt$0=elt,left=0,top=0;
      for(;;)
       {var
         top$0=(elt$0.offsetTop - elt$0.scrollTop | 0) + top | 0,
         left$0=(elt$0.offsetLeft - elt$0.scrollLeft | 0) + left | 0,
         match=caml_call1(Js_of_ocaml_Js[5][10],elt$0.offsetParent);
        if(match)
         {var elt$1=match[1],elt$0=elt$1,left=left$0,top=top$0;continue}
        return [0,top$0,left$0]}}
    function mouse_pos(param)
     {var ctx=caml_gr_state_get(0),elt=ctx.canvas;
      function _ac_(ev)
       {var match=compute_real_pos(elt),left=match[2],top=match[1];
        function _ad_(param){return 0}
        var
         _ae_=caml_call2(Js_of_ocaml_Js[6][8],ev.pageY,_ad_) - top | 0,
         _af_=elt.height - _ae_ | 0;
        function _ag_(param){return 0}
        var
         _ah_=
          [0,caml_call2(Js_of_ocaml_Js[6][8],ev.pageX,_ag_) - left | 0,_af_];
        return caml_call1(Lwt[4],_ah_)}
      return caml_call2
              (symbol_bind,
               caml_call3(Js_of_ocaml_lwt_Lwt_js_events[16],0,0,elt),
               _ac_)}
    function button_down(param)
     {var ctx=caml_gr_state_get(0),elt=ctx.canvas;
      function _ab_(ev){return caml_call1(Lwt[4],1)}
      return caml_call2
              (symbol_bind,
               caml_call3(Js_of_ocaml_lwt_Lwt_js_events[13],0,0,elt),
               _ab_)}
    function read_key(param)
     {var doc=caml_gr_doc_of_state(caml_gr_state_get(0));
      function _$_(ev)
       {var _aa_=caml_call1(Char[1],ev.keyCode);
        return caml_call1(Lwt[4],_aa_)}
      return caml_call2
              (symbol_bind,
               caml_call3(Js_of_ocaml_lwt_Lwt_js_events[18],0,0,doc),
               _$_)}
    function loop(elist,f)
     {var
       ctx=caml_gr_state_get(0),
       elt=ctx.canvas,
       doc=caml_gr_doc_of_state(caml_gr_state_get(0)),
       button=[0,0],
       null$0=caml_call1(Stdlib[29],0),
       mouse_y=[0,0],
       mouse_x=[0,0];
      function get_pos_mouse(param){return [0,mouse_x[1],mouse_y[1]]}
      if(caml_call2(Stdlib_list[36],0,elist))
       {var
         _P_=
          function(ev)
           {var match=get_pos_mouse(0),mouse_y=match[2],mouse_x=match[1];
            button[1] = 1;
            var s=[0,mouse_x,mouse_y,1,0,null$0];
            caml_call1(f,s);
            return Js_of_ocaml_Js[7]};
        elt.onmousedown = caml_call1(Js_of_ocaml_Dom_html[10],_P_)}
      if(caml_call2(Stdlib_list[36],1,elist))
       {var
         _Q_=
          function(ev)
           {var match=get_pos_mouse(0),mouse_y=match[2],mouse_x=match[1];
            button[1] = 0;
            var s=[0,mouse_x,mouse_y,0,0,null$0];
            caml_call1(f,s);
            return Js_of_ocaml_Js[7]};
        elt.onmouseup = caml_call1(Js_of_ocaml_Dom_html[10],_Q_)}
      function _R_(ev)
       {var match=compute_real_pos(elt),cx=match[2],cy=match[1];
        function _Y_(param){return 0}
        mouse_x[1] = caml_call2(Js_of_ocaml_Js[6][8],ev.pageX,_Y_) - cx | 0;
        function _Z_(param){return 0}
        var ___=caml_call2(Js_of_ocaml_Js[6][8],ev.pageY,_Z_) - cy | 0;
        mouse_y[1] = elt.height - ___ | 0;
        if(caml_call2(Stdlib_list[36],3,elist))
         {var
           match$0=get_pos_mouse(0),
           mouse_y$0=match$0[2],
           mouse_x$0=match$0[1],
           s=[0,mouse_x$0,mouse_y$0,button[1],0,null$0];
          caml_call1(f,s)}
        return Js_of_ocaml_Js[7]}
      elt.onmousemove = caml_call1(Js_of_ocaml_Dom_html[10],_R_);
      var _S_=caml_call2(Stdlib_list[36],2,elist);
      if(_S_)
       {var
         _T_=
          function(ev)
           {try
             {var
               _U_=function(param){return 0},
               _V_=caml_call2(Js_of_ocaml_Js[6][8],ev.charCode,_U_),
               _W_=caml_call1(Stdlib[29],_V_),
               key=_W_}
            catch(_X_)
             {_X_ = caml_wrap_exception(_X_);
              if(_X_[1] !== Stdlib[6])throw _X_;
              var key=null$0}
            var
             match=get_pos_mouse(0),
             mouse_y=match[2],
             mouse_x=match[1],
             s=[0,mouse_x,mouse_y,button[1],1,key];
            caml_call1(f,s);
            return Js_of_ocaml_Js[7]};
        return doc.onkeypress = caml_call1(Js_of_ocaml_Dom_html[10],_T_)}
      return _S_}
    function loop_at_exit(events,handler)
     {function _O_(param){return loop(events,handler)}
      return caml_call1(Stdlib[100],_O_)}
    var
     _M_=caml_gr_state_set,
     Graphics_js$0=
      [0,
       _a_,
       _c_,
       _d_,
       _e_,
       _f_,
       _g_,
       _h_,
       _i_,
       _j_,
       _k_,
       _l_,
       _m_,
       _n_,
       _o_,
       _p_,
       _q_,
       _r_,
       _s_,
       _t_,
       _u_,
       _v_,
       _w_,
       _x_,
       _y_,
       _z_,
       _A_,
       _B_,
       _C_,
       _D_,
       _E_,
       _F_,
       _G_,
       _H_,
       _I_,
       _J_,
       loop_at_exit,
       _K_,
       _L_,
       _b_,
       open_canvas,
       function(_N_){return caml_gr_state_get(_N_)},
       _M_,
       loop,
       mouse_pos,
       button_down,
       read_key];
    caml_register_global(36,Graphics_js$0,"Graphics_js");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJncmFwaGljc19qcy5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
