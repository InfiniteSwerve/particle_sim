(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_gr_close_graph=runtime.caml_gr_close_graph,
     caml_gr_current_x=runtime.caml_gr_current_x,
     caml_gr_current_y=runtime.caml_gr_current_y,
     caml_gr_display_mode=runtime.caml_gr_display_mode,
     caml_gr_lineto=runtime.caml_gr_lineto,
     caml_gr_moveto=runtime.caml_gr_moveto,
     caml_gr_open_graph=runtime.caml_gr_open_graph,
     caml_gr_remember_mode=runtime.caml_gr_remember_mode,
     caml_gr_sigio_signal=runtime.caml_gr_sigio_signal,
     caml_gr_wait_event=runtime.caml_gr_wait_event,
     caml_register_global=runtime.caml_register_global,
     caml_string_notequal=runtime.caml_string_notequal,
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
     cst_fill_arc_ellipse_circle=
      caml_string_of_jsbytes("fill_arc/ellipse/circle"),
     cst_fill_rect=caml_string_of_jsbytes("fill_rect"),
     cst_set_line_width=caml_string_of_jsbytes("set_line_width"),
     cst_draw_arc_ellipse_circle=
      caml_string_of_jsbytes("draw_arc/ellipse/circle"),
     cst_draw_rect=caml_string_of_jsbytes("draw_rect"),
     cst_Graphics_Graphic_failure=
      caml_string_of_jsbytes("Graphics.Graphic_failure"),
     cst=caml_string_of_jsbytes(""),
     cst_Graphics_Graphic_failure$0=
      caml_string_of_jsbytes("Graphics.Graphic_failure"),
     cst_Cygwin=caml_string_of_jsbytes("Cygwin"),
     cst_MacOS=caml_string_of_jsbytes("MacOS"),
     cst_Unix=caml_string_of_jsbytes("Unix"),
     cst_Win32=caml_string_of_jsbytes("Win32"),
     cst_Graphics_unknown_OS_type=
      caml_string_of_jsbytes("Graphics: unknown OS type: "),
     cst_close_subwindow_no_such_su=
      caml_string_of_jsbytes("close_subwindow: no such subwindow: "),
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib=global_data.Stdlib,
     Stdlib_sys=global_data.Stdlib__sys,
     Stdlib_callback=global_data.Stdlib__callback,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Graphic_failure=
      [248,cst_Graphics_Graphic_failure,runtime.caml_fresh_oo_id(0)];
    caml_call2
     (Stdlib_callback[2],
      cst_Graphics_Graphic_failure$0,
      [0,Graphic_failure,cst]);
    var _i_=[0,4,0],_h_=[0,2,0],_g_=[0,4,0],_f_=[0,4,0];
    function unix_open_graph(arg)
     {var
       _P_=[0,function(_R_){return runtime.caml_gr_sigio_handler(_R_)}],
       _Q_=caml_gr_sigio_signal(0);
      caml_call2(Stdlib_sys[15],_Q_,_P_);
      return caml_gr_open_graph(arg)}
    function unix_close_graph(param)
     {var _O_=caml_gr_sigio_signal(0);
      caml_call2(Stdlib_sys[15],_O_,1);
      return caml_gr_close_graph(0)}
    var _a_=Stdlib_sys[4],switch$0=0;
    if(caml_string_notequal(_a_,cst_Cygwin))
     if(caml_string_notequal(_a_,cst_MacOS))
      if(caml_string_notequal(_a_,cst_Unix))
       if(caml_string_notequal(_a_,cst_Win32))
        var
         _b_=caml_call2(Stdlib[28],cst_Graphics_unknown_OS_type,Stdlib_sys[4]),
         _c_=caml_call1(Stdlib[1],_b_),
         close_graph=_c_[2],
         open_graph=_c_[1];
       else
        var
         _j_=caml_gr_open_graph,
         close_graph=function(_M_){return caml_gr_close_graph(_M_)},
         open_graph=_j_;
      else
       switch$0 = 1;
     else
      var
       _k_=caml_gr_open_graph,
       close_graph=function(_N_){return caml_gr_close_graph(_N_)},
       open_graph=_k_;
    else
     switch$0 = 1;
    if(switch$0)var close_graph=unix_close_graph,open_graph=unix_open_graph;
    function auto_synchronize(param)
     {return param
              ?(caml_gr_display_mode(1),
                caml_gr_remember_mode(1),
                runtime.caml_gr_synchronize(0))
              :(caml_gr_display_mode(0),caml_gr_remember_mode(1))}
    function rgb(r,g,b){return ((r << 16) + (g << 8) | 0) + b | 0}
    var
     foreground=0,
     background=16777215,
     red=16711680,
     green=65280,
     blue=255,
     yellow=16776960,
     cyan=65535,
     magenta=16711935;
    function plots(points)
     {var _K_=points.length - 1 - 1 | 0,_J_=0;
      if(! (_K_ < 0))
       {var i=_J_;
        for(;;)
         {var match=caml_check_bound(points,i)[1 + i],y=match[2],x=match[1];
          runtime.caml_gr_plot(x,y);
          var _L_=i + 1 | 0;
          if(_K_ !== i){var i=_L_;continue}
          break}}
      return 0}
    function current_point(param)
     {var _I_=caml_gr_current_y(0);return [0,caml_gr_current_x(0),_I_]}
    function rlineto(x,y)
     {var _H_=caml_gr_current_y(0) + y | 0;
      return caml_gr_lineto(caml_gr_current_x(0) + x | 0,_H_)}
    function rmoveto(x,y)
     {var _G_=caml_gr_current_y(0) + y | 0;
      return caml_gr_moveto(caml_gr_current_x(0) + x | 0,_G_)}
    function draw_rect(x,y,w,h)
     {if(0 <= w && 0 <= h)return runtime.caml_gr_draw_rect(x,y,w,h);
      throw [0,Stdlib[6],cst_draw_rect]}
    function dodraw(close_flag,points)
     {var _z_=0 < points.length - 1?1:0;
      if(_z_)
       {var
         match=current_point(0),
         savey=match[2],
         savex=match[1],
         _A_=caml_check_bound(points,0)[1][2];
        caml_gr_moveto(caml_check_bound(points,0)[1][1],_A_);
        var _C_=points.length - 1 - 1 | 0,_B_=1;
        if(! (_C_ < 1))
         {var i=_B_;
          for(;;)
           {var
             match$0=caml_check_bound(points,i)[1 + i],
             y=match$0[2],
             x=match$0[1];
            caml_gr_lineto(x,y);
            var _F_=i + 1 | 0;
            if(_C_ !== i){var i=_F_;continue}
            break}}
        if(close_flag)
         {var _D_=caml_check_bound(points,0)[1][2];
          caml_gr_lineto(caml_check_bound(points,0)[1][1],_D_)}
        var _E_=caml_gr_moveto(savex,savey)}
      else
       var _E_=_z_;
      return _E_}
    var _d_=0;
    function draw_poly_line(_y_){return dodraw(_d_,_y_)}
    var _e_=1;
    function draw_poly(_x_){return dodraw(_e_,_x_)}
    function draw_segments(segs)
     {var
       match=current_point(0),
       savey=match[2],
       savex=match[1],
       _v_=segs.length - 1 - 1 | 0,
       _u_=0;
      if(! (_v_ < 0))
       {var i=_u_;
        for(;;)
         {var
           match$0=caml_check_bound(segs,i)[1 + i],
           y2=match$0[4],
           x2=match$0[3],
           y1=match$0[2],
           x1=match$0[1];
          caml_gr_moveto(x1,y1);
          caml_gr_lineto(x2,y2);
          var _w_=i + 1 | 0;
          if(_v_ !== i){var i=_w_;continue}
          break}}
      return caml_gr_moveto(savex,savey)}
    function draw_arc(x,y,rx,ry,a1,a2)
     {if(0 <= rx && 0 <= ry)return runtime.caml_gr_draw_arc(x,y,rx,ry,a1,a2);
      throw [0,Stdlib[6],cst_draw_arc_ellipse_circle]}
    function draw_ellipse(x,y,rx,ry){return draw_arc(x,y,rx,ry,0,360)}
    function draw_circle(x,y,r){return draw_arc(x,y,r,r,0,360)}
    function set_line_width(w)
     {if(0 <= w)return runtime.caml_gr_set_line_width(w);
      throw [0,Stdlib[6],cst_set_line_width]}
    function fill_rect(x,y,w,h)
     {if(0 <= w && 0 <= h)return runtime.caml_gr_fill_rect(x,y,w,h);
      throw [0,Stdlib[6],cst_fill_rect]}
    function fill_arc(x,y,rx,ry,a1,a2)
     {if(0 <= rx && 0 <= ry)return runtime.caml_gr_fill_arc(x,y,rx,ry,a1,a2);
      throw [0,Stdlib[6],cst_fill_arc_ellipse_circle]}
    function fill_ellipse(x,y,rx,ry){return fill_arc(x,y,rx,ry,0,360)}
    function fill_circle(x,y,r){return fill_arc(x,y,r,r,0,360)}
    var transp=-1;
    function get_image(x,y,w,h)
     {var image=runtime.caml_gr_create_image(w,h);
      runtime.caml_gr_blit_image(image,x,y);
      return image}
    function mouse_pos(param)
     {var e=caml_gr_wait_event(_f_);return [0,e[1],e[2]]}
    function button_down(param){var e=caml_gr_wait_event(_g_);return e[3]}
    function read_key(param){var e=caml_gr_wait_event(_h_);return e[5]}
    function key_pressed(param){var e=caml_gr_wait_event(_i_);return e[4]}
    function loop_at_exit(events,handler)
     {function _s_(e){return 4 !== e?1:0}
      var events$0=caml_call2(Stdlib_list[41],_s_,events);
      function _t_(param)
       {try
         {for(;;)
           {var e=caml_gr_wait_event(events$0);caml_call1(handler,e);continue}}
        catch(e)
         {e = caml_wrap_exception(e);
          if(e === Stdlib[3])return caml_call1(close_graph,0);
          caml_call1(close_graph,0);
          throw e}}
      return caml_call1(Stdlib[100],_t_)}
    function sub(param,_r_)
     {var y2=_r_[2],x2=_r_[1],y1=param[2],x1=param[1];
      return [0,x1 - x2,y1 - y2]}
    function middle(param,_q_)
     {var y2=_q_[2],x2=_q_[1],y1=param[2],x1=param[1];
      return [0,(x1 + x2) / 2.,(y1 + y2) / 2.]}
    function area(param,_p_)
     {var y2=_p_[2],x2=_p_[1],y1=param[2],x1=param[1];
      return Math.abs(x1 * y2 - x2 * y1)}
    function curveto(b,c,d)
     {var y=d[2],x=d[1];
      function float_point(param){var y=param[2],x=param[1];return [0,x,y]}
      function round(f){return f + 0.5 | 0}
      function int_point(param)
       {var y=param[2],x=param[1],_o_=round(y);return [0,round(x),_o_]}
      var
       d$0=float_point(d),
       c$0=float_point(c),
       b$0=float_point(b),
       a=float_point(current_point(0));
      function spl(accu,a,b,c,d)
       {var accu$0=accu,a$0=a,b$0=b,c$0=c;
        for(;;)
         {var
           param=sub(d,a$0),
           y1=param[2],
           x1=param[1],
           s=Math.sqrt(x1 * x1 + y1 * y1),
           _m_=area(param,sub(a$0,b$0)) <= s?1:0,
           _n_=_m_?area(param,sub(a$0,c$0)) <= s?1:0:_m_;
          if(_n_)return [0,d,accu$0];
          var
           a$1=middle(a$0,b$0),
           o=middle(b$0,c$0),
           b$1=middle(a$1,o),
           c$1=middle(c$0,d),
           b$2=middle(o,c$1),
           i=middle(b$1,b$2),
           accu$1=spl(accu$0,a$0,a$1,b$1,i),
           accu$0=accu$1,
           a$0=i,
           b$0=b$2,
           c$0=c$1;
          continue}}
      var
       points=spl([0,a,0],a,b$0,c$0,d$0),
       _l_=caml_call2(Stdlib_list[19],int_point,points);
      draw_poly_line(caml_call1(Stdlib_array[12],_l_));
      return caml_gr_moveto(x,y)}
    var
     Graphics=
      [0,
       Graphic_failure,
       open_graph,
       close_graph,
       runtime.caml_gr_set_window_title,
       runtime.caml_gr_resize_window,
       rgb,
       background,
       foreground,
       foreground,
       background,
       red,
       green,
       blue,
       yellow,
       cyan,
       magenta,
       plots,
       rmoveto,
       current_point,
       rlineto,
       curveto,
       draw_rect,
       draw_poly_line,
       draw_poly,
       draw_segments,
       draw_arc,
       draw_ellipse,
       draw_circle,
       set_line_width,
       runtime.caml_gr_set_text_size,
       fill_rect,
       fill_arc,
       fill_ellipse,
       fill_circle,
       transp,
       get_image,
       loop_at_exit,
       mouse_pos,
       button_down,
       read_key,
       key_pressed,
       auto_synchronize];
    caml_register_global(26,Graphics,"Graphics");
    var subwindows=caml_call2(Stdlib_hashtbl[1],0,13);
    function open_subwindow(x,y,width,height)
     {var wid=runtime.caml_gr_open_subwindow(x,y,width,height);
      caml_call3(Stdlib_hashtbl[5],subwindows,wid,0);
      return wid}
    function close_subwindow(wid)
     {if(caml_call2(Stdlib_hashtbl[9],subwindows,wid))
       {runtime.caml_gr_close_subwindow(wid);
        return caml_call2(Stdlib_hashtbl[10],subwindows,wid)}
      throw [0,
             Graphic_failure,
             caml_call2(Stdlib[28],cst_close_subwindow_no_such_su,wid)]}
    var
     GraphicsX11=
      [0,runtime.caml_gr_window_id,open_subwindow,close_subwindow];
    caml_register_global(28,GraphicsX11,"GraphicsX11");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJncmFwaGljcy5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7O0kiLCJzb3VyY2VzQ29udGVudCI6W119
