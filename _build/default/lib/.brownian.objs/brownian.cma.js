(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_array_get=runtime.caml_array_get,
     caml_array_set=runtime.caml_array_set,
     caml_check_bound=runtime.caml_check_bound,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_div_by_0=caml_string_of_jsbytes("div by 0!\n"),
     cst_ball_not_in_list=caml_string_of_jsbytes("ball not in list"),
     Base_List=global_data.Base__List,
     Base=global_data.Base,
     Base_Random=global_data.Base__Random,
     Base_Bool=global_data.Base__Bool,
     Base_Float=global_data.Base__Float,
     Base_Array=global_data.Base__Array,
     Stdio=global_data.Stdio,
     _b_=[0,[8,[0,0,0],0,0,[12,32,0]],caml_string_of_jsbytes("%f ")],
     _a_=[0,[2,0,0],caml_string_of_jsbytes("%s")],
     _c_=[0,[12,10,0],caml_string_of_jsbytes("\n")],
     _j_=[0,0.,2.],
     _k_=[0,0.,2.];
    function if_true_do(if$0,do$0,arg)
     {return caml_call1(if$0,arg)?caml_call1(do$0,arg):arg}
    function print_array(msg,arr)
     {caml_call2(Stdio[4],_a_,msg);
      function _aY_(n){return caml_call2(Stdio[4],_b_,n)}
      caml_call2(Base_Array[10],arr,_aY_);
      return caml_call1(Stdio[4],_c_)}
    var _d_=Base_Array[66],_e_=Base[211];
    function symbol(_aV_)
     {var _aW_=caml_call1(_d_,_aV_);
      return function(_aX_){return caml_call2(_aW_,_aX_,_e_)}}
    var _f_=Base_Array[66],_g_=Base[212];
    function symbol$0(_aS_)
     {var _aT_=caml_call1(_f_,_aS_);
      return function(_aU_){return caml_call2(_aT_,_aU_,_g_)}}
    var _h_=Base_Array[66],_i_=Base[213];
    function symbol$1(_aP_)
     {var _aQ_=caml_call1(_h_,_aP_);
      return function(_aR_){return caml_call2(_aQ_,_aR_,_i_)}}
    function component_sum(v)
     {return caml_call3(Base_Array[11],v,0.,Base[211])}
    function mult(v,s)
     {function _aO_(x){return caml_call2(Base[213],x,s)}
      return caml_call2(Base_Array[39],v,_aO_)}
    function div(v,s)
     {function _aN_(x){return caml_call2(Base[214],x,s)}
      return caml_call2(Base_Array[39],v,_aN_)}
    function dot(v1,v2)
     {var _aM_=caml_call3(Base_Array[66],v1,v2,Base[213]);
      return caml_call3(Base_Array[11],_aM_,0.,Base[211])}
    function dist(v1,v2)
     {var
       _aJ_=caml_call3(Base_Array[66],v1,v2,Base[212]),
       _aK_=Base_Array[39],
       _aL_=
        caml_call2(_aK_,_aJ_,function(x){return caml_call2(Base[215],x,2.)}),
       x=caml_call3(Base_Array[11],_aL_,0.,Base[211]);
      return caml_call2(Base[215],x,0.5)}
    function cross(v1,v2)
     {var
       _aH_=caml_call2(Base[213],caml_array_get(v2,0),caml_array_get(v1,1)),
       _aI_=caml_call2(Base[213],caml_array_get(v1,0),caml_array_get(v2,1));
      return caml_call2(Base[212],_aI_,_aH_)}
    function length(v)
     {var _aG_=dot(v,v);return caml_call2(Base[215],_aG_,0.5)}
    function normal(v1,v2){return caml_call1(symbol$0(v2),v1)}
    function unit(v){return div(v,length(v))}
    function tangent(v)
     {var _aF_=caml_array_get(v,0);
      return [254,caml_call1(Base[216],caml_array_get(v,1)),_aF_]}
    var
     Vector=
      [0,
       symbol,
       symbol$0,
       symbol$1,
       component_sum,
       mult,
       div,
       dot,
       dist,
       cross,
       length,
       normal,
       unit,
       tangent],
     id=[0,5.,[254,50.,50.],[254,1.,1.],[254,0.,0.],1,1,1.,[0,_k_,_j_]];
    function forwards(timestep,init)
     {var
       _au_=caml_call1(Base[213],timestep),
       velocity=caml_call2(Base_Array[39],init[3],_au_),
       _av_=caml_call1(Base[213],timestep),
       acceleration=caml_call2(Base_Array[39],init[4],_av_),
       _aw_=init[7],
       _ax_=init[6],
       _ay_=init[5],
       _az_=init[4],
       _aA_=caml_call3(Base_Array[66],acceleration,init[3],Base[211]),
       _aB_=caml_call3(Base_Array[66],velocity,init[2],Base[211]),
       _aC_=init[1];
      function _aD_(p)
       {var _aE_=caml_call2(Base[211],p,_aC_);
        return [0,caml_call2(Base[212],p,_aC_),_aE_]}
      return [0,
              _aC_,
              _aB_,
              _aA_,
              _az_,
              _ay_,
              _ax_,
              _aw_,
              caml_call2(Base_Array[39],_aB_,_aD_)]}
    var Ball=[0,id,forwards];
    function r_in(num,range)
     {var _as_=caml_call1(Base[218],range);
      if(caml_call2(Base_Float[9],num,_as_))
       {var _at_=caml_call1(Base[219],range);
        if(caml_call2(Base_Float[10],num,_at_))return 1}
      return 0}
    function intersect(t1,t2)
     {if
       (!
        r_in(caml_call1(Base[218],t1),t2)
        &&
        !
        r_in(caml_call1(Base[218],t2),t1))
       return 0;
      return 1}
    function outside(t1,t2)
     {if
       (r_in(caml_call1(Base[218],t1),t2)
        &&
        r_in(caml_call1(Base[219],t1),t2))
       return 0;
      return 1}
    var Range=[0,r_in,intersect,outside];
    function collide(ball1,ball2)
     {var
       norm=caml_call2(Vector[11],ball1[2],ball2[2]),
       unit_norm=caml_call1(Vector[12],norm),
       unit_tan=caml_call1(Vector[13],unit_norm),
       v1norm=caml_call2(Vector[7],unit_norm,ball1[3]),
       v2norm=caml_call2(Vector[7],unit_norm,ball2[3]),
       v1tan=caml_call2(Vector[7],unit_tan,ball1[3]),
       v2tan=caml_call2(Vector[7],unit_tan,ball2[3]),
       _ac_=caml_call2(Base[211],ball1[7],ball2[7]),
       _ad_=caml_call2(Base[213],2.,ball2[7]),
       _ae_=caml_call2(Base[213],_ad_,v2norm),
       _af_=caml_call2(Base[212],ball1[7],ball2[7]),
       _ag_=caml_call2(Base[213],v1norm,_af_),
       _ah_=caml_call2(Base[211],_ag_,_ae_),
       v1norm$0=caml_call2(Base[214],_ah_,_ac_),
       _ai_=caml_call2(Base[211],ball2[7],ball1[7]),
       _aj_=caml_call2(Base[213],2.,ball1[7]),
       _ak_=caml_call2(Base[213],_aj_,v1norm),
       _al_=caml_call2(Base[212],ball2[7],ball1[7]),
       _am_=caml_call2(Base[213],v2norm,_al_),
       _an_=caml_call2(Base[211],_am_,_ak_),
       v2norm$0=caml_call2(Base[214],_an_,_ai_),
       _ao_=caml_call2(Vector[5],unit_tan,v1tan),
       _ap_=caml_call2(Vector[5],unit_norm,v1norm$0),
       v1=caml_call2(Vector[1],_ap_,_ao_),
       _aq_=caml_call2(Vector[5],unit_tan,v2tan),
       _ar_=caml_call2(Vector[5],unit_norm,v2norm$0),
       v2=caml_call2(Vector[1],_ar_,_aq_);
      return [0,
              [0,
               ball1[1],
               ball1[2],
               v1,
               ball1[4],
               ball1[5],
               ball1[6],
               ball1[7],
               ball1[8]],
              [0,
               ball2[1],
               ball2[2],
               v2,
               ball2[4],
               ball2[5],
               ball2[6],
               ball2[7],
               ball2[8]]]}
    function prune_and_sweep(objects,active,axis,out)
     {var objects$0=objects,active$0=active,out$0=out;
      for(;;)
       {var ax=axis?1:0;
        if(objects$0)
         {var other_balls=objects$0[2],ball=objects$0[1];
          if(active$0)
           {var
             _$_=
              function(ax,ball)
                {return function(b)
                  {var
                    _aa_=caml_check_bound(b[8],ax)[1 + ax],
                    _ab_=caml_check_bound(ball[8],ax)[1 + ax];
                   return caml_call2(Range[2],_ab_,_aa_)}}
               (ax,ball),
             active$1=caml_call2(Base_List[53],active$0,_$_),
             out$1=caml_call2(Base_List[137],active$0,[0,ball,0]),
             out$2=caml_call2(Base[179],out$1,out$0),
             active$2=[0,ball,active$1],
             objects$0=other_balls,
             active$0=active$2,
             out$0=out$2;
            continue}
          var active$3=[0,ball,0],objects$0=other_balls,active$0=active$3;
          continue}
        return out$0}}
    function insertion_sort(objects,axis)
     {var ax=axis?1:0;
      function insert(objects,key)
       {if(objects)
         {var
           hd=objects[1],
           tl=objects[2],
           _Y_=caml_check_bound(key[8],ax)[1 + ax],
           _Z_=caml_call1(Base[218],_Y_),
           ___=caml_check_bound(hd[8],ax)[1 + ax];
          if(_Z_ < caml_call1(Base[218],___))return [0,key,[0,hd,tl]];
          var tl$0=objects[2];
          return [0,hd,insert(tl$0,key)]}
        return [0,key,0]}
      if(objects)
       {var tl=objects[2],hd=objects[1];
        return insert(insertion_sort(tl,axis),hd)}
      return 0}
    function find_ball(id,objects)
     {function _X_(ball){return caml_call2(Base[202],ball[6],id[6])?1:0}
      return caml_call2(Base_List[69],objects,_X_)}
    function replace_ball(ball,objects)
     {var objects$0=objects,out=0;
      for(;;)
       {if(objects$0)
         {var tl=objects$0[2],hd=objects$0[1];
          if(caml_call2(Base[202],hd[6],ball[6]))
           return caml_call2(Base[179],out,[0,ball,tl]);
          var out$0=caml_call2(Base[179],out,[0,hd,0]),objects$0=tl,out=out$0;
          continue}
        return caml_call1(Base[220],cst_ball_not_in_list)}}
    function is_colliding(objects)
     {var
       ball2=objects[2],
       ball1=objects[1],
       dist=caml_call2(Base[211],ball1[1],ball2[1]),
       _W_=caml_call2(Vector[8],ball1[2],ball2[2]);
      return caml_call2(Base_Float[10],_W_,dist)?1:0}
    function find_ball_collision(b1,b2)
     {var
       v1=b1[3],
       v2=b2[3],
       p1=b1[2],
       p2=b2[2],
       radii=caml_call2(Base[211],b1[1],b2[1]),
       p_dist=caml_call2(Vector[8],p1,p2),
       v_dist=caml_call2(Vector[8],v1,v2),
       _U_=caml_call2(Base[211],p_dist,radii),
       t_plus=caml_call2(Base[214],_U_,v_dist),
       _V_=caml_call2(Base[212],p_dist,radii),
       t_minus=caml_call2(Base[214],_V_,v_dist);
      return caml_call2(Base_Float[17],t_plus,t_minus)}
    function continuous_object_collision(b1,b2,timestep)
     {var
       collision_time=find_ball_collision(b1,b2),
       b1_at_collide=caml_call2(Ball[2],collision_time,b1),
       b2_at_collide=caml_call2(Ball[2],collision_time,b2),
       match=collide(b1_at_collide,b2_at_collide),
       b2_post_update=match[2],
       b1_post_update=match[1],
       _S_=caml_call2(Base[212],timestep,collision_time),
       b1$0=caml_call2(Ball[2],_S_,b1_post_update),
       _T_=caml_call2(Base[212],timestep,collision_time),
       b2$0=caml_call2(Ball[2],_T_,b2_post_update);
      return [0,b1$0,b2$0]}
    function find_wall_collision_time(edge,current_ball,future_ball,coord)
     {var
       current_ball_position=caml_array_get(current_ball[2],coord),
       future_ball_position=caml_array_get(future_ball[2],coord),
       radius=
        caml_call2(Base_Float[13],current_ball_position,edge)
         ?caml_call2(Base[213],-1.,current_ball[1])
         :current_ball[1];
      if
       (caml_call2(Base_Float[11],current_ball_position,future_ball_position))
       caml_call1(Base[220],cst_div_by_0);
      var
       _O_=
        caml_call2(Base_Float[92],current_ball_position,future_ball_position),
       _P_=caml_call2(Base_Float[91],edge,radius),
       _Q_=caml_call2(Base_Float[92],_P_,current_ball_position),
       _R_=caml_call1(Base_Float[104],_Q_);
      return caml_call2(Base_Float[93],_R_,_O_)}
    function find_colliding_edge(bounds,coord,ball)
     {var
       match=caml_check_bound(ball[8],coord)[1 + coord],
       wr=bounds[2],
       wl=bounds[1],
       br=match[2],
       bl=match[1];
      return caml_call2(Base_Float[10],bl,wl)
              ?[0,wl]
              :caml_call2(Base_Float[9],br,wr)?[0,wr]:0}
    function interpolate_wall_collision
     (edge,current_ball,future_ball,coord,timestep)
     {var
       collision_time=
        find_wall_collision_time(edge,current_ball,future_ball,coord),
       _M_=caml_call2(Base[213],timestep,collision_time),
       ball_at_wall=caml_call2(Ball[2],_M_,current_ball),
       ball_velocity_copy=caml_call1(Base_Array[31],ball_at_wall[3]);
      caml_array_set
       (ball_velocity_copy,
        coord,
        caml_call2(Base[213],caml_array_get(ball_velocity_copy,coord),-1.));
      var
       _N_=caml_call2(Base[212],1.,collision_time),
       time_to_go=caml_call2(Base[213],timestep,_N_),
       current_ball$0=
        [0,
         ball_at_wall[1],
         ball_at_wall[2],
         ball_velocity_copy,
         ball_at_wall[4],
         ball_at_wall[5],
         ball_at_wall[6],
         ball_at_wall[7],
         ball_at_wall[8]];
      return [0,
              current_ball$0,
              caml_call2(Ball[2],time_to_go,current_ball$0),
              time_to_go]}
    function continuous_wall_collision(timestep,x_bounds,y_bounds,objects)
     {var
       future_ball=objects[2],
       current_ball=objects[1],
       x_edge=find_colliding_edge(x_bounds,0,future_ball),
       y_edge=find_colliding_edge(y_bounds,1,future_ball);
      if(x_edge)
       {var _L_=x_edge[1];
        if(y_edge)
         {var y=y_edge[1];
          if(caml_call2(Base_Float[10],_L_,y))
           var later_collision=y,early_collision=_L_;
          else
           var later_collision=_L_,early_collision=y;
          var
           match=
            interpolate_wall_collision
             (early_collision,current_ball,future_ball,0,timestep),
           halfway_time=match[3],
           halway_ball_after_wall=match[2],
           halfway_ball_at_wall=match[1],
           ball_after_wall=
            interpolate_wall_collision
              (later_collision,
               halfway_ball_at_wall,
               halway_ball_after_wall,
               1,
               halfway_time)
             [2]}
        else
         var
          ball_after_wall=
           interpolate_wall_collision(_L_,current_ball,future_ball,0,timestep)
            [2]}
      else
       if(y_edge)
        var
         y$0=y_edge[1],
         ball_after_wall=
          interpolate_wall_collision(y$0,current_ball,future_ball,1,timestep)
           [2];
       else
        var ball_after_wall=future_ball;
      return ball_after_wall}
    function wall_collision(axis,t)
     {if(axis)var coord=1,bounds=t[2];else var coord=0,bounds=t[1];
      function should_flip(ball)
       {var
         _F_=caml_call1(Base[218],bounds),
         _G_=caml_check_bound(ball[8],coord)[1 + coord],
         _H_=caml_call1(Base[218],_G_),
         switch$0=0;
        if
         (caml_call2(Base_Float[10],_H_,_F_)
          &&
          caml_call2(Base_Float[13],caml_array_get(ball[3],coord),0.))
         switch$0 = 1;
        if(! switch$0)
         {var
           _I_=caml_call1(Base[219],bounds),
           _J_=caml_check_bound(ball[8],coord)[1 + coord],
           _K_=caml_call1(Base[219],_J_),
           switch$1=0;
          if
           (!
            caml_call2(Base_Float[9],_K_,_I_)
            ||
            !
            caml_call2(Base_Float[12],caml_array_get(ball[3],coord),0.))
           switch$1 = 1;
          if(switch$1)return ball}
        var vel=caml_call1(Base_Array[31],ball[3]);
        caml_array_set
         (vel,coord,caml_call2(Base[213],-1.,caml_array_get(vel,coord)));
        return [0,ball[1],ball[2],vel,ball[4],ball[5],ball[6],ball[7],ball[8]]}
      var _D_=t[5],_E_=caml_call2(Base_List[74],t[4],should_flip);
      return [0,t[1],t[2],t[3],_E_,_D_]}
    function update(t,timestep)
     {function find_in_current_objects(b_future)
       {return find_ball(b_future,t[3])}
      var
       sorted_objects=insertion_sort(t[3],0),
       _B_=caml_call1(Ball[2],timestep),
       future_objects=caml_call2(Base_List[74],sorted_objects,_B_),
       potential_collisions=prune_and_sweep(future_objects,0,0,0);
      function _C_(accum,param)
       {var b2=param[2],b1=param[1];
        if(is_colliding([0,b1,b2]))
         {var
           c_b2=find_in_current_objects(b2),
           c_b1=find_in_current_objects(b1),
           match=continuous_object_collision(c_b1,c_b2,t[5]),
           b2$0=match[2],
           b1$0=match[1];
          return replace_ball(b2$0,replace_ball(b1$0,accum))}
        return accum}
      var
       post_object_collisions=
        caml_call3(Base_List[10],potential_collisions,future_objects,_C_),
       post_wall_collisions=
        wall_collision
         (1,wall_collision(0,[0,t[1],t[2],t[3],post_object_collisions,t[5]]));
      return [0,t[1],t[2],post_wall_collisions[4],t[4],t[5]]}
    function initialize_populated_grid(opt,_l_,x_len,y_len,objects)
     {if(opt)var sth=opt[1],self_init=sth;else var self_init=1;
      if(_l_)var sth$0=_l_[1],seed=sth$0;else var seed=0;
      var
       x_peak=caml_call2(Base[211],x_len,25.),
       y_peak=caml_call2(Base[211],y_len,25.),
       velocity_peak=3.,
       origin=25.;
      if(caml_call2(Base_Bool[11],self_init,0))
       caml_call1(Base_Random[1],seed);
      else
       caml_call2(Base_Random[3],0,0);
      function _m_(x)
       {var
         _p_=Ball[1],
         _q_=_p_[8],
         _r_=_p_[7],
         _s_=_p_[4],
         _t_=caml_call1(Base[216],velocity_peak),
         _u_=[254,caml_call2(Base_Random[14],_t_,velocity_peak)],
         _v_=caml_call2(Base[212],y_peak,Ball[1][1]),
         _w_=caml_call2(Base[211],origin,Ball[1][1]),
         _x_=caml_call2(Base_Random[14],_w_,_v_),
         _y_=caml_call2(Base[212],x_peak,Ball[1][1]),
         _z_=caml_call2(Base[211],origin,Ball[1][1]),
         _A_=[254,caml_call2(Base_Random[14],_z_,_y_),_x_];
        return [0,_p_[1],_A_,_u_,_s_,x,x,_r_,_q_]}
      var
       _n_=caml_call5(Base_List[117],0,0,0,1,objects),
       object_list=caml_call2(Base_List[74],_n_,_m_),
       _o_=caml_call1(Ball[2],1.),
       grid=
        [0,
         [0,origin,x_peak],
         [0,origin,y_peak],
         object_list,
         caml_call2(Base_List[74],object_list,_o_),
         1.];
      return grid}
    var
     Grid=
      [0,
       collide,
       prune_and_sweep,
       insertion_sort,
       find_ball,
       replace_ball,
       is_colliding,
       find_ball_collision,
       continuous_object_collision,
       find_wall_collision_time,
       find_colliding_edge,
       interpolate_wall_collision,
       continuous_wall_collision,
       wall_collision,
       update,
       initialize_populated_grid],
     Brownian=[0,if_true_do,print_array,Vector,Ball,Range,Grid];
    runtime.caml_register_global(41,Brownian,"Brownian");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiIuYnJvd25pYW4ub2Jqcy9icm93bmlhbi5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOlsiaWZfdHJ1ZV9kbyIsImlmJDAiLCJkbyQwIiwiYXJnIiwicHJpbnRfYXJyYXkiLCJtc2ciLCJhcnIiLCJuIiwic3ltYm9sIiwic3ltYm9sJDAiLCJzeW1ib2wkMSIsImNvbXBvbmVudF9zdW0iLCJ2IiwibXVsdCIsInMiLCJ4IiwiZGl2IiwiZG90IiwidjEiLCJ2MiIsImRpc3QiLCJjcm9zcyIsImxlbmd0aCIsIm5vcm1hbCIsInVuaXQiLCJ0YW5nZW50IiwiaWQiLCJmb3J3YXJkcyIsInRpbWVzdGVwIiwiaW5pdCIsInZlbG9jaXR5IiwiYWNjZWxlcmF0aW9uIiwicCIsInJfaW4iLCJudW0iLCJyYW5nZSIsImludGVyc2VjdCIsInQxIiwidDIiLCJvdXRzaWRlIiwiY29sbGlkZSIsImJhbGwxIiwiYmFsbDIiLCJub3JtIiwidW5pdF9ub3JtIiwidW5pdF90YW4iLCJ2MW5vcm0iLCJ2Mm5vcm0iLCJ2MXRhbiIsInYydGFuIiwidjFub3JtJDAiLCJ2Mm5vcm0kMCIsInBydW5lX2FuZF9zd2VlcCIsIm9iamVjdHMiLCJhY3RpdmUiLCJheGlzIiwib3V0Iiwib2JqZWN0cyQwIiwiYWN0aXZlJDAiLCJvdXQkMCIsImF4Iiwib3RoZXJfYmFsbHMiLCJiYWxsIiwiYiIsImFjdGl2ZSQxIiwib3V0JDEiLCJvdXQkMiIsImFjdGl2ZSQyIiwiYWN0aXZlJDMiLCJpbnNlcnRpb25fc29ydCIsImluc2VydCIsImtleSIsImhkIiwidGwiLCJ0bCQwIiwiZmluZF9iYWxsIiwicmVwbGFjZV9iYWxsIiwiaXNfY29sbGlkaW5nIiwiZmluZF9iYWxsX2NvbGxpc2lvbiIsImIxIiwiYjIiLCJwMSIsInAyIiwicmFkaWkiLCJwX2Rpc3QiLCJ2X2Rpc3QiLCJ0X3BsdXMiLCJ0X21pbnVzIiwiY29udGludW91c19vYmplY3RfY29sbGlzaW9uIiwiY29sbGlzaW9uX3RpbWUiLCJiMV9hdF9jb2xsaWRlIiwiYjJfYXRfY29sbGlkZSIsImIyX3Bvc3RfdXBkYXRlIiwiYjFfcG9zdF91cGRhdGUiLCJiMSQwIiwiYjIkMCIsImZpbmRfd2FsbF9jb2xsaXNpb25fdGltZSIsImVkZ2UiLCJjdXJyZW50X2JhbGwiLCJmdXR1cmVfYmFsbCIsImNvb3JkIiwiY3VycmVudF9iYWxsX3Bvc2l0aW9uIiwiZnV0dXJlX2JhbGxfcG9zaXRpb24iLCJyYWRpdXMiLCJmaW5kX2NvbGxpZGluZ19lZGdlIiwiYm91bmRzIiwid3IiLCJ3bCIsImJyIiwiYmwiLCJpbnRlcnBvbGF0ZV93YWxsX2NvbGxpc2lvbiIsImJhbGxfYXRfd2FsbCIsImJhbGxfdmVsb2NpdHlfY29weSIsInRpbWVfdG9fZ28iLCJjdXJyZW50X2JhbGwkMCIsImNvbnRpbnVvdXNfd2FsbF9jb2xsaXNpb24iLCJ4X2JvdW5kcyIsInlfYm91bmRzIiwieF9lZGdlIiwieV9lZGdlIiwieSIsImxhdGVyX2NvbGxpc2lvbiIsImVhcmx5X2NvbGxpc2lvbiIsImhhbGZ3YXlfdGltZSIsImhhbHdheV9iYWxsX2FmdGVyX3dhbGwiLCJoYWxmd2F5X2JhbGxfYXRfd2FsbCIsImJhbGxfYWZ0ZXJfd2FsbCIsInkkMCIsIndhbGxfY29sbGlzaW9uIiwidCIsInNob3VsZF9mbGlwIiwidmVsIiwidXBkYXRlIiwiZmluZF9pbl9jdXJyZW50X29iamVjdHMiLCJiX2Z1dHVyZSIsInNvcnRlZF9vYmplY3RzIiwiZnV0dXJlX29iamVjdHMiLCJwb3RlbnRpYWxfY29sbGlzaW9ucyIsImFjY3VtIiwiY19iMiIsImNfYjEiLCJwb3N0X29iamVjdF9jb2xsaXNpb25zIiwicG9zdF93YWxsX2NvbGxpc2lvbnMiLCJpbml0aWFsaXplX3BvcHVsYXRlZF9ncmlkIiwib3B0IiwieF9sZW4iLCJ5X2xlbiIsInN0aCIsInNlbGZfaW5pdCIsInN0aCQwIiwic2VlZCIsInhfcGVhayIsInlfcGVhayIsInZlbG9jaXR5X3BlYWsiLCJvcmlnaW4iLCJvYmplY3RfbGlzdCIsImdyaWQiXSwic291cmNlcyI6WyIvaG9tZS9zd2VydmUvQ29kZS9PY2FtbC9icm93bmlhbl9tb3Rpb24vX2J1aWxkL2RlZmF1bHQvbGliL2Jyb3duaWFuLm1sIl0sIm1hcHBpbmdzIjoiOztJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQUdJQSxXQUFXQyxLQUFJQyxLQUFJQztNQUNsQixrQkFEVUYsS0FBUUUsS0FDTCxXQURDRCxLQUFJQyxRQUViO2FBR05DLFlBQVlDLElBQUlDO01BQ2xCLHdCQURjRDtNQUNkLGNBQ21CRSxHQUFLLCtCQUFMQSxFQUF5QjtNQUE1QywwQkFGa0JEO01BRWxCLCtCQUNpQjs7YUFVYkU7TTs7O2FBR0FDO007OzthQUdBQztNOzthQUdBQyxjQUFjQztNQUNoQixpQ0FEZ0JBLGVBQ2U7YUFFN0JDLEtBQUtELEVBQUVFO01BQ1QsY0FBa0JDLEdBQUssNEJBQUxBLEVBRFRELEVBQ29CO01BQTdCLGlDQURPRixPQUN5QjthQUU5QkksSUFBSUosRUFBRUU7TUFDUixjQUFrQkMsR0FBSyw0QkFBTEEsRUFEVkQsRUFDcUI7TUFBN0IsaUNBRE1GLE9BQzBCO2FBRTlCSyxJQUFJQyxHQUFHQztNQUNULG1DQURNRCxHQUFHQzt5REFFdUI7YUFFOUJDLEtBQUtGLEdBQUdDO01BQ1Y7c0NBRE9ELEdBQUdDO09BQ1Y7O3NDQUNxQkosR0FBSyw0QkFBTEEsS0FBYTtPQUUxQkE7TUFBSyw0QkFBTEEsTUFBZTthQUVyQk0sTUFBTUgsR0FBR0M7TUFDSztnREFETEEsTUFDYSxlQURoQkQ7T0FDUix5Q0FEUUEsTUFDQSxlQURHQztNQUNYLHNDQUE4QjthQUU1QkcsT0FBT1Y7TUFDVCxhQURTQSxLQUNULHFDQUFrQjthQUVoQlcsT0FBT0wsR0FBR0MsSUFDWiwyQkFEWUEsSUFBSEQsR0FDRjthQUVMTSxLQUFLWixHQUNELFdBRENBLEVBQ0QsT0FEQ0EsR0FDUzthQUVkYSxRQUFRYjtNQUNDLHdCQUREQTtNQUNQLGlDQUFFLGVBREtBLFdBQ1E7Ozs7T0F6Q2hCSjtPQUdBQztPQUdBQztP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Uyw0QkFMcUJFO09BS0csMEJBTGVFOztPQU0zQztNQUFtQixhQU9Mdkk7UUFMakI7Ozs7O1NBRThDLHlCQVQ1QzBJO1NBU3lCLHdDQVR6QkE7U0FRdUUseUJBTHZFRDtTQUs0Qyx5QkFQNUNFO1NBT3lCO1NBRDhDLHlCQUx2RUg7U0FLNEMseUJBTjVDRztTQU15QjtxQ0FLVjNJLFlBQzREO01BQ25FOzZDQWZ3RHNDO09BYWxFO09BUTRCO09BQVo7O1lBbkJkcUcsT0FDQUg7WUFEQUcsT0FFQUY7U0FRQUc7U0FTYyx5QkFUZEE7O01BU2MsT0FKZEMsSUFNQzs7OztPQXpRSHBIO09Bb0JJWTtPQWtCQWlCO09BZ0JKTTtPQUlBQztPQVlBQztPQVNBQztPQWdCQVU7T0FhQVE7T0FXQVE7T0FRQU07T0E0Q0FLO09Ba0JBYTtPQXNCQUk7T0ErQkFXO2lCQXBaRi9JLFdBS0FJOztVIiwic291cmNlc0NvbnRlbnQiOlsib3BlbiBCYXNlXG5cblxubGV0IGlmX3RydWVfZG8gaWZfIGRvXyBhcmcgPSBcbiAgaWYgaWZfIGFyZyB0aGVuIGRvXyBhcmdcbiAgZWxzZSBhcmdcblxuKCogaGVscGVyIGZ1bmN0aW9uIGZvciBhcnJheSBwcmludGluZyAqKVxubGV0IHByaW50X2FycmF5IG1zZyBhcnIgPSBcbiAgU3RkaW8ucHJpbnRmIFwiJXNcIiBtc2c7XG4gIEFycmF5Lml0ZXIgfmY6KGZ1biBuIC0+IFN0ZGlvLnByaW50ZiBcIiVmIFwiIG4pIGFycjtcbiAgU3RkaW8ucHJpbnRmIFwiXFxuXCJcblxudHlwZSBheGlzID0gXG4gIHwgWFxuICB8IFlcblxuKCogdmVjdG9yIG9wZXJhdGlvbnMgZm9yIFxuICBjYWxjdWF0aW5nIGVsYXN0aWMgY29sbGlzaW9uKilcbm1vZHVsZSBWZWN0b3IgPSBzdHJ1Y3RcblxuICBsZXQgKCArICkgPSBcbiAgICBBcnJheS5tYXAyX2V4biB+ZjooICsuIClcblxuICBsZXQgKCAtICkgPSBcbiAgICBBcnJheS5tYXAyX2V4biB+ZjooIC0uIClcblxuICBsZXQgKCAqICkgPSBcbiAgQXJyYXkubWFwMl9leG4gfmY6KCAqLiApXG5cbiAgbGV0IGNvbXBvbmVudF9zdW0gdiA9IFxuICAgIEFycmF5LmZvbGQgdiB+aW5pdDowLiB+ZjooICsuIClcbiAgXG4gIGxldCBtdWx0IHYgcyA9IFxuICAgIEFycmF5Lm1hcCB+ZjooZnVuIHggLT4geCAqLiBzKSB2XG5cbiAgbGV0IGRpdiB2IHMgPSBcbiAgICBBcnJheS5tYXAgfmY6KGZ1biB4IC0+IHggLy4gcykgdlxuXG4gIGxldCBkb3QgdjEgdjIgID0gXG4gICAgQXJyYXkubWFwMl9leG4gdjEgdjIgfmY6KCAqLiApIFxuICAgIHw+IEFycmF5LmZvbGQgfmY6KCArLiApIH5pbml0OjAuXG4gICAgXG4gIGxldCBkaXN0IHYxIHYyID0gXG4gICAgQXJyYXkubWFwMl9leG4gdjEgdjIgfmY6KCAtLiApXG4gICAgfD4gQXJyYXkubWFwIH5mOihmdW4geCAtPiB4ICoqLiAyLilcbiAgICB8PiBBcnJheS5mb2xkIH5mOiggKy4gKSB+aW5pdDowLlxuICAgIHw+IChmdW4geCAtPiB4ICoqLiAwLjUpXG5cbiAgbGV0IGNyb3NzIHYxIHYyID0gXG4gICAgdjEuKDApKi52Mi4oMSktLnYyLigwKSoudjEuKDEpXG5cbiAgbGV0IGxlbmd0aCB2ID0gXG4gICAgKGRvdCB2IHYgKSAqKi4gMC41XG5cbiAgbGV0IG5vcm1hbCB2MSB2MiA9IFxuICAgIHYyIC0gdjFcbiAgXG4gIGxldCB1bml0IHYgPSBcbiAgICBkaXYgdiAobGVuZ3RoIHYpXG5cbiAgbGV0IHRhbmdlbnQgdiA9IFxuICAgIFt8IC0udi4oMSk7di4oMCl8XVxuXG5lbmRcblxuKCogTW9kdWxlIHJlcHJlc2VudGluZyBhIGdlbmVyaWMgYmFsbCBpbiB0aGUgc2ltdWxhdGlvbiAqKVxubW9kdWxlIEJhbGwgPSBzdHJ1Y3RcblxuICB0eXBlIHQgPSB7cmFkaXVzOmZsb2F0O1xuICAgICAgICAgICAgcG9zaXRpb246ZmxvYXQgYXJyYXk7XG4gICAgICAgICAgICB2ZWxvY2l0eTpmbG9hdCBhcnJheTtcbiAgICAgICAgICAgIGFjY2VsZXJhdGlvbjpmbG9hdCBhcnJheTtcbiAgICAgICAgICAgIGN1cnJfaWQ6aW50OyAgICAgICBcbiAgICAgICAgICAgIG9nX2lkOmludDtcbiAgICAgICAgICAgIG1hc3M6ZmxvYXQ7XG4gICAgICAgICAgICBib3VuZHM6IChmbG9hdCAqIGZsb2F0KSBhcnJheTtcbiAgICAgICAgICAgIH1cblxuICBsZXQgaWQgPSB7cmFkaXVzPTUuO1xuICAgICAgICAgICAgcG9zaXRpb249W3w1MC47NTAufF07XG4gICAgICAgICAgICB2ZWxvY2l0eT1bfDEuOzEufF07XG4gICAgICAgICAgICBhY2NlbGVyYXRpb249W3wwLjswLnxdO1xuICAgICAgICAgICAgY3Vycl9pZD0xO1xuICAgICAgICAgICAgb2dfaWQ9MTtcbiAgICAgICAgICAgIG1hc3M9MS47XG4gICAgICAgICAgICBib3VuZHM9W3woMC4sMi4pOygwLiwyLil8XVxuICAgICAgICAgICAgfVxuXG4gIGxldCBmb3J3YXJkcyAodGltZXN0ZXA6ZmxvYXQpIChiYWxsOnQpIDogdCA9IFxuICAgIGxldCB2ZWxvY2l0eScgPSBBcnJheS5tYXAgfmY6KCggKi4gKSB0aW1lc3RlcCApIGJhbGwudmVsb2NpdHkgaW5cbiAgICBsZXQgYWNjZWxlcmF0aW9uJyA9IEFycmF5Lm1hcCB+ZjooKCAqLiApIHRpbWVzdGVwKSBiYWxsLmFjY2VsZXJhdGlvbiBpblxuICAgIGxldCBiYWxsJyA9IHtiYWxsIHdpdGggcG9zaXRpb24gPSBBcnJheS5tYXAyX2V4biB+ZjooKy4pIHZlbG9jaXR5JyBiYWxsLnBvc2l0aW9uO1xuICAgICgqIEFjY2VsZXJhdGlvbiBpcyBicm9rZW4gcm4sIHRoaW5ncyBhY2NlbGVyYXRlIG91dCBvZiBib3VuZHMgcXVpY2tseSAqKVxuICAgIHZlbG9jaXR5ID0gQXJyYXkubWFwMl9leG4gfmY6KCsuKSBhY2NlbGVyYXRpb24nIGJhbGwudmVsb2NpdHlcbiAgICB9IGluXG4gICAge2JhbGwnIHdpdGggYm91bmRzID0gQXJyYXkubWFwIH5mOihmdW4gcCAtPiAocC0uYmFsbCcucmFkaXVzLHArLmJhbGwnLnJhZGl1cykpIGJhbGwnLnBvc2l0aW9uIH1cblxuZW5kXG4oKiBNb2R1bGUgZm9yIGludGVyYWN0aW5nIHdpdGggb2JqZWN0IHByb2plY3Rpb25zIGR1cmluZyBcbiAgdGhlIHN3ZWVwIGFuZCBwcnVuZSBhbGdvcml0aG0gKilcbm1vZHVsZSB0eXBlIFJhbmdlID0gc2lnXG4gIHR5cGUgdFxuXG4gIHZhbCByX2luIDogZmxvYXQgLT4gdCAtPiBib29sXG5cbiAgdmFsIGludGVyc2VjdCA6IHQgLT4gdCAtPiBib29sXG5cbiAgdmFsIG91dHNpZGUgOiB0IC0+IHQgLT4gYm9vbCBcblxuZW5kXG5cblxubW9kdWxlIFJhbmdlID0gc3RydWN0XG5cbiAgdHlwZSB0ID0gIGZsb2F0ICogZmxvYXRcblxuICBsZXQgcl9pbiAobnVtOmZsb2F0KSAocmFuZ2U6dCkgOiBib29sID0gXG4gICAgaWYgRmxvYXQuKG51bSA+PSAoZnN0IHJhbmdlKSAmJiBudW0gPD0gKHNuZCByYW5nZSkgKXRoZW4gdHJ1ZVxuICAgIGVsc2UgZmFsc2UgXG5cbiAgbGV0IGludGVyc2VjdCAodDE6dCkgKHQyOnQpIDogYm9vbCA9IFxuICAgIGlmIHJfaW4gKGZzdCB0MSkgdDIgfHwgcl9pbiAoZnN0IHQyKSB0MSB0aGVuIHRydWVcbiAgICBlbHNlIGZhbHNlIFxuXG4gICgqIFJldHVybnMgZmFsc2UgaWYgdDEgaXMgaW5zaWRlIChhIHN1YnNldCBvZikgdDIqKVxuICBsZXQgb3V0c2lkZSAodDE6dCkgKHQyOnQpIDogYm9vbCA9IFxuICAgIGlmIHJfaW4gKGZzdCB0MSkgdDIgJiYgcl9pbiAoc25kIHQxKSB0MiB0aGVuIGZhbHNlXG4gICAgZWxzZSB0cnVlXG5cbmVuZFxuXG5cbigqIE1vZHVsZSByZXByZXNlbnRpbmcgYSBib3VuZGVkIHBsYW5lIHBvcHVsYXRlZCB3aXRoIG9iamVjdHMgXG4gIGFuZCBpbmNsdWRpbmcgYW4gdXBkYXRlIGZ1bmN0aW9uICopXG5tb2R1bGUgdHlwZSBHcmlkID0gc2lnXG4gIHR5cGUgdCA9IHt4X3JhbmdlOiAoZmxvYXQgKiBmbG9hdCk7XG4gICAgICAgICAgICB5X3JhbmdlOiAoZmxvYXQgKiBmbG9hdCApO1xuICAgICAgICAgICAgb2JqZWN0czogQmFsbC50IGxpc3Q7ICAgICAgIFxuICAgICAgICAgICAgZnV0dXJlX29iamVjdHM6IEJhbGwudCBsaXN0O1xuICAgICAgICAgICAgdGltZXN0ZXA6IGZsb2F0O1xuICAgICAgICAgICAgfVxuXG4gIHZhbCB1cGRhdGUgOiB0IC0+IGludCAtPiB0XG5cbiAgKCogZ2VuZXJhdGVzIGEgZ3JpZCB3aXRoIHggYW5kIHkgcmFuZ2VzIChzdGFydGluZyBmcm9tIDI1KVxuICAgICBwb3B1bGF0ZWQgd2l0aCBuIG9iamVjdHMgaW5pdGlhbGl6ZWQgdG8gbW92ZSBpbiBhIHJhbmRvbSBkaXJlY3Rpb24gICAqKVxuICB2YWwgaW5pdGlhbGl6ZV9wb3B1bGF0ZWRfZ3JpZCA6IGZsb2F0IC0+IGZsb2F0IC0+IGludCAtPiB0XG5cbiAgXG5lbmRcblxuXG5tb2R1bGUgR3JpZCA9IHN0cnVjdFxuICBcbiAgdHlwZSB0ID0ge3hfcmFuZ2U6IChmbG9hdCAqIGZsb2F0KTtcbiAgICAgICAgICAgIHlfcmFuZ2U6IChmbG9hdCAqIGZsb2F0KTtcbiAgICAgICAgICAgIG9iamVjdHM6IEJhbGwudCBsaXN0O1xuICAgICAgICAgICAgZnV0dXJlX29iamVjdHM6IEJhbGwudCBsaXN0O1xuICAgICAgICAgICAgdGltZXN0ZXA6IGZsb2F0O1xuICAgICAgICAgICAgfVxuXG5cbiAgKCogZXZhbHVhdGVzIGFuIGVsYXN0aWMgY29sbGlzaW9uIGJldHdlZW5cbiAgICB0d28gb2JqZWN0cyBiYWxsMSBhbmQgYmFsbDIgKilcbiAgbGV0IGNvbGxpZGUgKGJhbGwxOkJhbGwudCkgKGJhbGwyOkJhbGwudCkgOiAoQmFsbC50ICogQmFsbC50KSA9IFxuICAgIGxldCBvcGVuIFZlY3RvciBpblxuICAgIGxldCBub3JtID0gbm9ybWFsIGJhbGwxLnBvc2l0aW9uIGJhbGwyLnBvc2l0aW9uIGluXG4gICAgbGV0IHVuaXRfbm9ybSA9IHVuaXQgbm9ybSBpblxuICAgIGxldCB1bml0X3RhbiA9IHRhbmdlbnQgdW5pdF9ub3JtIGluXG4gICAgbGV0IHYxbm9ybSA9IGRvdCB1bml0X25vcm0gYmFsbDEudmVsb2NpdHkgaW5cbiAgICBsZXQgdjJub3JtID0gZG90IHVuaXRfbm9ybSBiYWxsMi52ZWxvY2l0eSBpblxuICAgIGxldCB2MXRhbiA9IGRvdCB1bml0X3RhbiBiYWxsMS52ZWxvY2l0eSBpblxuICAgIGxldCB2MnRhbiA9IGRvdCB1bml0X3RhbiBiYWxsMi52ZWxvY2l0eSBpblxuICAgIGxldCB2MW5vcm0nID0gKHYxbm9ybSouKGJhbGwxLm1hc3MgLS4gYmFsbDIubWFzcykgKy4gKDIuICouIGJhbGwyLm1hc3MgKi4gdjJub3JtICkpIC8uIChiYWxsMS5tYXNzICsuIGJhbGwyLm1hc3MpIGluXG4gICAgbGV0IHYybm9ybScgPSAodjJub3JtKi4oYmFsbDIubWFzcyAtLiBiYWxsMS5tYXNzKSArLiAoMi4gKi4gYmFsbDEubWFzcyAqLiB2MW5vcm0gKSkgLy4gKGJhbGwyLm1hc3MgKy4gYmFsbDEubWFzcykgaW5cbiAgICBsZXQgdjEnID0gKG11bHQgdW5pdF9ub3JtIHYxbm9ybScpICsgKG11bHQgdW5pdF90YW4gdjF0YW4pIGluXG4gICAgbGV0IHYyJyA9IChtdWx0IHVuaXRfbm9ybSB2Mm5vcm0nKSArIChtdWx0IHVuaXRfdGFuIHYydGFuKSBpblxuICAgICh7YmFsbDEgd2l0aCB2ZWxvY2l0eSA9IHYxJ30sXG4gICAge2JhbGwyIHdpdGggdmVsb2NpdHkgPSB2Mid9KVxuXG5cbiAgKCogUHJ1bmUgYW5kIFN3ZWVwIHRha2VzIGFzIGFyZyAxRCBwcm9qZWN0aW9uIFxuICAgIG9mIGFsbCBvYmplY3RzIGluIHRoZSB0LCBmaW5kcyB0aGVpciBvdmVybGFwLFxuICAgYW5kIHJldHVybnMgdGhlIElELXBhaXJzIG9mIG9iamVjdHMgd2hvc2UgcHJvamVjdGlvbnMgb3ZlcmxhcCAqKVxuICBsZXQgcmVjIHBydW5lX2FuZF9zd2VlcCAob2JqZWN0czpCYWxsLnQgbGlzdCkgKGFjdGl2ZTpCYWxsLnQgbGlzdCkgKGF4aXM6YXhpcykgKG91dDogKChCYWxsLnQqQmFsbC50KSBsaXN0KSkgOiAoQmFsbC50KkJhbGwudCkgbGlzdCA9IFxuICAgIGxldCBheCA9IFxuICAgIG1hdGNoIGF4aXMgd2l0aFxuICAgIHwgWCAtPiAwXG4gICAgfCBZIC0+IDEgaW5cbiAgICBtYXRjaCBvYmplY3RzIHdpdGhcbiAgICB8IFtdIC0+IG91dFxuICAgIHwgYmFsbDo6b3RoZXJfYmFsbHMgLT4gXG4gICAgICBtYXRjaCBhY3RpdmUgd2l0aFxuICAgICAgfCBbXSAtPiBwcnVuZV9hbmRfc3dlZXAgb3RoZXJfYmFsbHMgW2JhbGxdIGF4aXMgb3V0XG4gICAgICB8IF8gIC0+IGxldCBhY3RpdmUnID0gTGlzdC5maWx0ZXIgfmY6KGZ1biBiIC0+IFJhbmdlLmludGVyc2VjdCBiYWxsLmJvdW5kcy4oYXgpIGIuYm91bmRzLihheCkpIGFjdGl2ZSBpblxuICAgICAgICAgICAgICBsZXQgb3V0JyA9IChMaXN0LmNhcnRlc2lhbl9wcm9kdWN0IGFjdGl2ZSBbYmFsbF0pIGluXG4gICAgICBwcnVuZV9hbmRfc3dlZXAgb3RoZXJfYmFsbHMgKGJhbGw6OmFjdGl2ZScpIGF4aXMgKG91dCdAb3V0KVxuXG5cbiAgKCogaW5jcmVhc2luZyBpbnNlcnRpb24gc29ydCBuZWVkcyB0byBzb3J0IFxuICAgIGluIGRlY3JlYXNpbmcgb3JkZXIgc28gbGlzdCBhcHBlbmRpbmcgaW5cbiAgICBwcnVuZV9hbmRfc3dlZXAgY2FuIGJlIE8oMSkgaW5zdGVhZCBvZiBPKG4pICAqKVxuICBsZXQgcmVjIGluc2VydGlvbl9zb3J0IChvYmplY3RzOkJhbGwudCBsaXN0KSAoYXhpczpheGlzKSA6IEJhbGwudCBsaXN0ID0gXG4gICAgbGV0IGF4ID0gXG4gICAgICBtYXRjaCBheGlzIHdpdGhcbiAgICAgIHwgWCAtPiAwXG4gICAgICB8IFkgLT4gMSBpblxuICAgIGxldCByZWMgaW5zZXJ0IChvYmplY3RzOkJhbGwudCBsaXN0KSAoa2V5OkJhbGwudCkgPSBtYXRjaCBvYmplY3RzIHdpdGhcbiAgICAgIHwgW10gLT4gW2tleV1cbiAgICAgIHwgaGQ6OnRsIHdoZW4gUG9seS4oKGZzdCBoZC5ib3VuZHMuKGF4KSkgPiAoZnN0IGtleS5ib3VuZHMuKGF4KSkpXG4gICAgICAgIC0+IGtleTo6aGQ6OnRsXG4gICAgICB8IGhkOjp0bCAtPiBoZDo6IChpbnNlcnQgdGwga2V5KVxuICAgIGluXG4gICAgbWF0Y2ggb2JqZWN0cyB3aXRoXG4gICAgfCBbXSAtPiBbXVxuICAgIHwgaGQ6OnRsIC0+IGluc2VydCAoaW5zZXJ0aW9uX3NvcnQgdGwgYXhpcykgaGRcbiAgICBcbiAgKCogR2V0cyBiYWxsIHdpdGggaWRfb2c9aWQgaW4gbGlzdCBvYmplY3RzKilcbiAgbGV0IGZpbmRfYmFsbCAoaWQ6QmFsbC50KSAob2JqZWN0czpCYWxsLnQgbGlzdCkgOiBCYWxsLnQgPSBcbiAgICBMaXN0LmZpbmRfZXhuIG9iamVjdHMgfmY6KGZ1biBiYWxsIC0+IGlmIGJhbGwub2dfaWQgPSBpZC5vZ19pZCB0aGVuIHRydWUgZWxzZSBmYWxzZSApXG5cblxuICBsZXQgcmVwbGFjZV9iYWxsIChiYWxsOkJhbGwudCkgKG9iamVjdHM6QmFsbC50IGxpc3QpIDogQmFsbC50IGxpc3QgPVxuICAgIGxldCByZWMgcmVwbGFjZV9iYWxsX2F1eCAoYmFsbDpCYWxsLnQpIChvYmplY3RzOkJhbGwudCBsaXN0KSAob3V0OkJhbGwudCBsaXN0KSA6IEJhbGwudCBsaXN0ID0gXG4gICAgICBtYXRjaCBvYmplY3RzIHdpdGhcbiAgICAgIHwgW10gLT4gZmFpbHdpdGggXCJiYWxsIG5vdCBpbiBsaXN0XCJcbiAgICAgIHwgaGQ6OnRsIC0+IGlmIGhkLm9nX2lkID0gYmFsbC5vZ19pZCB0aGVuIG91dEAoYmFsbDo6dGwpIFxuICAgICAgICAgICAgICAgICAgZWxzZSAgcmVwbGFjZV9iYWxsX2F1eCBiYWxsIHRsIChvdXRAW2hkXSkgXG4gICAgaW5cbiAgICByZXBsYWNlX2JhbGxfYXV4IGJhbGwgb2JqZWN0cyBbXVxuXG5cbiAgKCogYm9vbGVhbiBjaGVjayB0byBzZWUgaWYgZGlzdGFuY2UgYmV0d2VlbiBcbiAgICBvYmplY3QgcG9zaXRpb25zIGlzIGxlc3MgdGhhbiBvYmplY3QgcmFkaWkgKilcbiAgbGV0IGlzX2NvbGxpZGluZyAob2JqZWN0czooQmFsbC50ICogQmFsbC50KSkgOiBib29sID1cbiAgICBsZXQgYmFsbDEsIGJhbGwyID0gb2JqZWN0cyBpblxuICAgIGxldCBkaXN0ID0gYmFsbDEucmFkaXVzICsuIGJhbGwyLnJhZGl1cyBpbiBcbiAgICBpZiBGbG9hdC4oVmVjdG9yLmRpc3QgYmFsbDEucG9zaXRpb24gYmFsbDIucG9zaXRpb24gPD0gZGlzdCkgdGhlbiB0cnVlXG4gICAgZWxzZSBmYWxzZSBcblxuXG4gICgqIGZpbmRfYmFsbF9jb2xsaXNpb24gYjEgYjIgZmluZHMgdGhlIHBvaW50IGluIHRpbWVcbiAgICB3aGVyZSBiMSBhbmQgYjIgZmlyc3QgaW50ZXJzZWN0ZWQgKilcbiAgbGV0IGZpbmRfYmFsbF9jb2xsaXNpb24gKGIxOkJhbGwudCkgKGIyOkJhbGwudCkgOiBmbG9hdCA9IFxuICAgIGxldCB2MSA9IGIxLnZlbG9jaXR5IFxuICAgIGFuZCB2MiA9IGIyLnZlbG9jaXR5XG4gICAgYW5kIHAxID0gYjEucG9zaXRpb25cbiAgICBhbmQgcDIgPSBiMi5wb3NpdGlvbiBpblxuICAgIGxldCByYWRpaSA9IGIxLnJhZGl1cyArLiBiMi5yYWRpdXMgXG4gICAgYW5kIHBfZGlzdCA9IFZlY3Rvci5kaXN0IHAxIHAyIFxuICAgIGFuZCB2X2Rpc3QgPSBWZWN0b3IuZGlzdCB2MSB2MiBpblxuICAgIGxldCB0X3BsdXMgPSAoIHBfZGlzdCArLiByYWRpaSkvLiB2X2Rpc3QgXG4gICAgYW5kIHRfbWludXMgPSAgKCBwX2Rpc3QgLS4gcmFkaWkpLy4gdl9kaXN0IGluXG4gICAgRmxvYXQubWluIHRfcGx1cyB0X21pbnVzIFxuXG4gICgqIGNvbnRpbnVvdXNfb2JqZWN0X2NvbGxpc2lvbiBmaW5kcyB0aGUgcG9pbnQgaW4gdGltZSB3aGVuXG4gICAgdHdvIG9iamVjdHMgY29sbGlkZSwgbW92ZXMgdGhlbSB0byB0aGF0IHBvaW50IGluIHRpbWUsIFxuICAgIGNhbGN1bGF0ZXMgdGhlaXIgY29sbGlzaW9uLCBhbmQgdGhlbiBtb3ZlcyB0aGVtXG4gICAgdGhlIHJlbWFpbmRlciBvZiB0aGVpciB0cmFqZWN0b3J5IHRvIHRoZSBuZXh0IHRpbWVzdGVwICopXG4gIGxldCBjb250aW51b3VzX29iamVjdF9jb2xsaXNpb24gKGIxOkJhbGwudCkgKGIyOkJhbGwudCkgKHRpbWVzdGVwOmZsb2F0KSA6IChCYWxsLnQqQmFsbC50KSA9IFxuICAgIGxldCBjb2xsaXNpb25fdGltZSA9IGZpbmRfYmFsbF9jb2xsaXNpb24gYjEgYjIgaW5cbiAgICBsZXQgYjFfYXRfY29sbGlkZSA9IEJhbGwuZm9yd2FyZHMgY29sbGlzaW9uX3RpbWUgYjEgXG4gICAgYW5kIGIyX2F0X2NvbGxpZGUgPSBCYWxsLmZvcndhcmRzIGNvbGxpc2lvbl90aW1lIGIyIGluXG4gICAgbGV0IGIxX3Bvc3RfdXBkYXRlLCBiMl9wb3N0X3VwZGF0ZSA9IGNvbGxpZGUgYjFfYXRfY29sbGlkZSBiMl9hdF9jb2xsaWRlIGluXG4gICAgbGV0IGIxJyA9IEJhbGwuZm9yd2FyZHMgKHRpbWVzdGVwIC0uIGNvbGxpc2lvbl90aW1lKSBiMV9wb3N0X3VwZGF0ZVxuICAgIGFuZCBiMicgPSBCYWxsLmZvcndhcmRzICh0aW1lc3RlcCAtLiBjb2xsaXNpb25fdGltZSkgYjJfcG9zdF91cGRhdGUgaW4gICAgXG4gICAgKGIxJyxiMicpXG5cblxuXG4gICgqIGZpbmRfd2FsbF9jb2xsaXNpb24gZmluZHMgdGhlIHBlcmNlbnQgb2YgdGhlIHdheSB0aHJvdWdoXG4gICAgYSB0aW1lc3RlcCB3aGVuIGEgY3VycmVudCBiYWxsIHdpbGwgaW50ZXJzZWN0IGVkZ2UgKilcbiAgbGV0IGZpbmRfd2FsbF9jb2xsaXNpb25fdGltZSAoZWRnZTpmbG9hdCkgKGN1cnJlbnRfYmFsbDpCYWxsLnQpIChmdXR1cmVfYmFsbDpCYWxsLnQpIChjb29yZDppbnQpIDogZmxvYXQgPSBcbiAgICBsZXQgY3VycmVudF9iYWxsX3Bvc2l0aW9uID0gY3VycmVudF9iYWxsLnBvc2l0aW9uLihjb29yZClcbiAgICBhbmQgZnV0dXJlX2JhbGxfcG9zaXRpb24gPSBmdXR1cmVfYmFsbC5wb3NpdGlvbi4oY29vcmQpIGluXG4gICAgbGV0IG9wZW4gRmxvYXQgaW5cbiAgICBsZXQgcmFkaXVzID0gaWYgY3VycmVudF9iYWxsX3Bvc2l0aW9uIDwgZWRnZSB0aGVuICgtLiAxLikgKi4gY3VycmVudF9iYWxsLnJhZGl1cyBcbiAgICAgIGVsc2UgY3VycmVudF9iYWxsLnJhZGl1cyBpblxuICAgIGlmIChjdXJyZW50X2JhbGxfcG9zaXRpb24gPSBmdXR1cmVfYmFsbF9wb3NpdGlvbikgdGhlbiBmYWlsd2l0aCBcImRpdiBieSAwIVxcblwiO1xuICAgIGFicyAoZWRnZSArIHJhZGl1cyAtIGN1cnJlbnRfYmFsbF9wb3NpdGlvbikvIChjdXJyZW50X2JhbGxfcG9zaXRpb24gLSBmdXR1cmVfYmFsbF9wb3NpdGlvbilcblxuICAoKiBmaW5kX2NvbGxpZGluZ19lZGdlIGZpZ3VyZXMgb3V0IHdoaWNoIGVkZ2Ugb2YgdGhlIGdyaWQgYSBiYWxsXG4gICAgaXMgaW50ZXJzZWN0aW5nICopXG4gIGxldCBmaW5kX2NvbGxpZGluZ19lZGdlIChib3VuZHMpIChjb29yZDppbnQpIChiYWxsOkJhbGwudCkgOiBmbG9hdCBvcHRpb24gPSBcbiAgICBsZXQgYmwsIGJyID0gIGJhbGwuYm91bmRzLihjb29yZCkgXG4gICAgYW5kIHdsLCB3ciA9IGJvdW5kcyBpblxuICAgIGlmIEZsb2F0LihibCA8PSB3bCkgdGhlbiBTb21lIHdsXG4gICAgZWxzZSBpZiBGbG9hdC4oYnIgPj0gd3IpIHRoZW4gU29tZSB3clxuICAgIGVsc2UgTm9uZVxuXG5cbiAgbGV0IGludGVycG9sYXRlX3dhbGxfY29sbGlzaW9uIChlZGdlOmZsb2F0KSAoY3VycmVudF9iYWxsOkJhbGwudCkgKGZ1dHVyZV9iYWxsOkJhbGwudCkgKGNvb3JkOmludCkgKHRpbWVzdGVwOmZsb2F0KSA6IChCYWxsLnQgKiBCYWxsLnQgKiBmbG9hdCkgPSBcbiAgICBsZXQgY29sbGlzaW9uX3RpbWUgPSBmaW5kX3dhbGxfY29sbGlzaW9uX3RpbWUgZWRnZSBjdXJyZW50X2JhbGwgZnV0dXJlX2JhbGwgY29vcmQgaW5cbiAgICBsZXQgYmFsbF9hdF93YWxsID0gQmFsbC5mb3J3YXJkcyAodGltZXN0ZXAgKi4gY29sbGlzaW9uX3RpbWUpIGN1cnJlbnRfYmFsbCBpblxuICAgIGxldCBiYWxsX3ZlbG9jaXR5X2NvcHkgPSBBcnJheS5jb3B5IGJhbGxfYXRfd2FsbC52ZWxvY2l0eSBpblxuICAgIGJhbGxfdmVsb2NpdHlfY29weS4oY29vcmQpIDwtIChiYWxsX3ZlbG9jaXR5X2NvcHkuKGNvb3JkKSAqLiAoLS4gMS4pICk7XG4gICAgbGV0IHRpbWVfdG9fZ28gPSB0aW1lc3RlcCAqLiAoMS4gLS4gY29sbGlzaW9uX3RpbWUpIGluXG4gICAgbGV0IGN1cnJlbnRfYmFsbCcgPSB7YmFsbF9hdF93YWxsIHdpdGggdmVsb2NpdHkgPSBiYWxsX3ZlbG9jaXR5X2NvcHl9IGluXG4gICAgKGN1cnJlbnRfYmFsbCcsIEJhbGwuZm9yd2FyZHMgdGltZV90b19nbyBjdXJyZW50X2JhbGwnLCB0aW1lX3RvX2dvKVxuICAgIFxuICBcbiAgICBcblxuICAoKiBmb3J3YXJkX3dhbGxfY29sbGlzaW9uIG1vdmVzIGN1cnJlbnRfYmFsbCB0byB0aGUgY29sbGlzaW9uIHBvaW50IFxuICAgIGFuZCBmbGlwcyB0aGUgdmVsb2NpdHkgb3ZlciB0aGUgYXhpcyBvZiBjb2xsaXNpb24gKilcbigqICBsZXQgZm9yd2FyZF93YWxsX2NvbGxpc2lvbiAoY29sbGlzaW9uX3RpbWU6ZmxvYXQpIChjb29yZDppbnQpIChjdXJyZW50X2JhbGw6QmFsbC50KSA6IEJhbGwudCA9IFxuICAgIGxldCBjb2xsaXNpb25fdGltZSA9IGZpbmRfd2FsbF9jb2xsaXNpb25fdGltZSBcbiAgICBsZXQgYmFsbF9hdF93YWxsID0gQmFsbC5mb3J3YXJkcyBjb2xsaXNpb25fdGltZSBjdXJyZW50X2JhbGwgaW5cbiAgICBsZXQgYmFsbF92ZWxvY2l0eV9jb3B5ID0gQXJyYXkuY29weSBiYWxsX2F0X3dhbGwudmVsb2NpdHkgaW5cbiAgICBiYWxsX3ZlbG9jaXR5X2NvcHkuKGNvb3JkKSA8LSAoYmFsbF92ZWxvY2l0eV9jb3B5Lihjb29yZCkgKi4gKC0uIDEuKSApO1xuICAgIHtiYWxsX2F0X3dhbGwgd2l0aCB2ZWxvY2l0eSA9IGJhbGxfdmVsb2NpdHlfY29weX0gXG4qKVxuXG5cbigqXG4gIGxldCBjb250aW51b3VzX3dhbGxfY29sbGlzaW9uIChheGlzOmF4aXMpIChncmlkOnQpIDogdCA9IFxuICAgIGxldCBib3VuZHMsIGNvb3JkID0gXG4gICAgICBtYXRjaCBheGlzIHdpdGhcbiAgICAgIHwgWCAtPiBncmlkLnhfcmFuZ2UsIDBcbiAgICAgIHwgWSAtPiBncmlkLnlfcmFuZ2UsIDFcbiAgICBpblxuICAgIGxldCBzaG91bGRfZmxpcCAoYm91bmRzOmZsb2F0KmZsb2F0KSAodGltZXN0ZXA6ZmxvYXQpIChjb29yZDppbnQpIChvYmplY3RzOkJhbGwudCpCYWxsLnQpIDogQmFsbC50PSBcbiAgICAgIGxldCBjdXJyZW50X2JhbGwsIGZ1dHVyZV9iYWxsID0gb2JqZWN0cyBpblxuICAgICAgaWYgUmFuZ2Uub3V0c2lkZSAoZnV0dXJlX2JhbGwuYm91bmRzLihjb29yZCkpIGJvdW5kcyB0aGVuXG4gICAgICAgIGludGVycG9sYXRlX3dhbGxfY29sbGlzaW9uIChmaW5kX2NvbGxpZGluZ19lZGdlIGJvdW5kcyBjb29yZCBmdXR1cmVfYmFsbCkgY3VycmVudF9iYWxsIGZ1dHVyZV9iYWxsIGNvb3JkIHRpbWVzdGVwIFxuICAgICAgZWxzZSBmdXR1cmVfYmFsbFxuICAgIGluXG4gICAge2dyaWQgd2l0aCBvYmplY3RzID0gTGlzdC5tYXAgfmY6KHNob3VsZF9mbGlwIGdyaWQueV9yYW5nZSBncmlkLnRpbWVzdGVwIDEpIFxuICAgICAgKExpc3QuemlwX2V4biBncmlkLm9iamVjdHMgKExpc3QubWFwIH5mOihzaG91bGRfZmxpcCBib3VuZHMgZ3JpZC50aW1lc3RlcCBjb29yZClcbiAgICAgICAoTGlzdC56aXBfZXhuIGdyaWQub2JqZWN0cyBncmlkLmZ1dHVyZV9vYmplY3RzKSkpfSopXG5cblxuXG5cblxuICBsZXQgY29udGludW91c193YWxsX2NvbGxpc2lvbiAodGltZXN0ZXA6ZmxvYXQpICh4X2JvdW5kczpSYW5nZS50KSAoeV9ib3VuZHM6UmFuZ2UudCkgKG9iamVjdHM6QmFsbC50KkJhbGwudCkgOiBCYWxsLnQgPSBcbiAgICBsZXQgY3VycmVudF9iYWxsLCBmdXR1cmVfYmFsbCA9IG9iamVjdHMgaW5cbiAgICBsZXQgeF9lZGdlID0gZmluZF9jb2xsaWRpbmdfZWRnZSB4X2JvdW5kcyAwIGZ1dHVyZV9iYWxsICgqIGZsb2F0IG9wdGlvbiAqKSBcbiAgICBhbmQgeV9lZGdlID0gZmluZF9jb2xsaWRpbmdfZWRnZSB5X2JvdW5kcyAxIGZ1dHVyZV9iYWxsICgqIGZsb2F0IG9wdGlvbiAqKSBcbiAgICBpblxuICAgIGxldCBfLCBiYWxsX2FmdGVyX3dhbGwsIF8gPSBcbiAgICBtYXRjaCB4X2VkZ2UsIHlfZWRnZSB3aXRoIFxuICAgIHwgTm9uZSwgTm9uZSAtPiBjdXJyZW50X2JhbGwsIGZ1dHVyZV9iYWxsLCAwLlxuICAgIHwgU29tZSB4LCBOb25lIC0+IGludGVycG9sYXRlX3dhbGxfY29sbGlzaW9uIHggY3VycmVudF9iYWxsIGZ1dHVyZV9iYWxsIDAgdGltZXN0ZXAgKCogaW50ZXJwb2xhdGUgd2FsbF9jb2xsaXNpb24geCAqKVxuICAgIHwgTm9uZSwgU29tZSB5IC0+IGludGVycG9sYXRlX3dhbGxfY29sbGlzaW9uIHkgY3VycmVudF9iYWxsIGZ1dHVyZV9iYWxsIDEgdGltZXN0ZXAgKCogaW50ZXJwb2xhdGUgd2FsbCBjb2xsaXNpb24geSAqKVxuICAgIHwgU29tZSB4LCBTb21lIHkgLT4gbGV0IGVhcmx5X2NvbGxpc2lvbiwgbGF0ZXJfY29sbGlzaW9uID0gaWYgRmxvYXQuKHggPD0geSkgdGhlbiAoeCx5KSBlbHNlICh5LHgpIGluXG4gICAgICBsZXQgaGFsZndheV9iYWxsX2F0X3dhbGwsIGhhbHdheV9iYWxsX2FmdGVyX3dhbGwsIGhhbGZ3YXlfdGltZSA9IGludGVycG9sYXRlX3dhbGxfY29sbGlzaW9uIGVhcmx5X2NvbGxpc2lvbiBjdXJyZW50X2JhbGwgZnV0dXJlX2JhbGwgMCB0aW1lc3RlcFxuICAgICAgaW5cbiAgICAgIGludGVycG9sYXRlX3dhbGxfY29sbGlzaW9uIGxhdGVyX2NvbGxpc2lvbiBoYWxmd2F5X2JhbGxfYXRfd2FsbCBoYWx3YXlfYmFsbF9hZnRlcl93YWxsIDEgaGFsZndheV90aW1lXG4gICAgaW4gYmFsbF9hZnRlcl93YWxsXG5cblxuXG4gIGxldCB3YWxsX2NvbGxpc2lvbiAoYXhpczpheGlzKSAodDp0KSA6IHQgPSBcbiAgICBsZXQgYm91bmRzLGNvb3JkID0gXG4gICAgbWF0Y2ggYXhpcyB3aXRoXG4gICAgfCBYIC0+IHQueF9yYW5nZSwgMFxuICAgIHwgWSAtPiB0LnlfcmFuZ2UsIDFcbiAgICBpblxuICAgIGxldCBmbGlwIChjb29yZDppbnQpIChvYmo6QmFsbC50KSA6IEJhbGwudCA9IFxuICAgICAgbGV0IHZlbCcgPSBBcnJheS5jb3B5IG9iai52ZWxvY2l0eSBpblxuICAgICAgdmVsJy4oY29vcmQpIDwtIC0xLioudmVsJy4oY29vcmQpO1xuICAgICAgeyBvYmogd2l0aCB2ZWxvY2l0eSA9IHZlbCd9XG4gICAgaW5cbiAgICBsZXQgc2hvdWxkX2ZsaXAgKGJhbGw6QmFsbC50KSA6IEJhbGwudD0gXG4gICAgICBsZXQgb3BlbiBGbG9hdCBpbiBcbiAgICAgIGlmICAoKGZzdCBiYWxsLmJvdW5kcy4oY29vcmQpIDw9IChmc3QgYm91bmRzKSkgJiYgYmFsbC52ZWxvY2l0eS4oY29vcmQpIDwgMC4gKVxuICAgICAgICB8fCAoKHNuZCBiYWxsLmJvdW5kcy4oY29vcmQpID49IChzbmQgYm91bmRzKSkgJiYgYmFsbC52ZWxvY2l0eS4oY29vcmQpID4gMC4gKVxuICAgICAgICB0aGVuIGZsaXAgY29vcmQgYmFsbCBcbiAgICAgIGVsc2UgYmFsbFxuICAgICAgKCppZiBSYW5nZS5vdXRzaWRlIChiYWxsLmJvdW5kcy4oY29vcmQpKSBib3VuZHMgdGhlbiBmbGlwIGNvb3JkIGJhbGxcbiAgICAgIGVsc2UgYmFsbCopXG4gICAgaW5cbiAgICB7dCB3aXRoIGZ1dHVyZV9vYmplY3RzID0gTGlzdC5tYXAgfmY6c2hvdWxkX2ZsaXAgdC5mdXR1cmVfb2JqZWN0c31cblxuICBsZXQgdXBkYXRlICh0OnQpICh0aW1lc3RlcDpmbG9hdCkgOiB0ID0gXG4gICAgbGV0IGZpbmRfaW5fY3VycmVudF9vYmplY3RzIChiX2Z1dHVyZTpCYWxsLnQpID0gZmluZF9iYWxsIGJfZnV0dXJlIHQub2JqZWN0cyBpblxuICAgIGxldCBzb3J0ZWRfb2JqZWN0cyA9IGluc2VydGlvbl9zb3J0IHQub2JqZWN0cyBYIGluXG4gICAgbGV0IGZ1dHVyZV9vYmplY3RzJyA9IExpc3QubWFwIH5mOihCYWxsLmZvcndhcmRzIHRpbWVzdGVwKSBzb3J0ZWRfb2JqZWN0cyBpblxuICAgIGxldCBwb3RlbnRpYWxfY29sbGlzaW9ucyA9IHBydW5lX2FuZF9zd2VlcCBmdXR1cmVfb2JqZWN0cycgW10gWCBbXSBpblxuICAgIGxldCBwb3N0X29iamVjdF9jb2xsaXNpb25zID0gTGlzdC5mb2xkIHBvdGVudGlhbF9jb2xsaXNpb25zIH5pbml0OmZ1dHVyZV9vYmplY3RzJ1xuICAgICAgfmY6KGZ1biBhY2N1bSAoYjEsYjIpIC0+XG4gICAgICAgIGlmIGlzX2NvbGxpZGluZyAoYjEsYjIpIHRoZW4gYmVnaW4gbGV0IGNfYjEsIGNfYjIgPSBmaW5kX2luX2N1cnJlbnRfb2JqZWN0cyBiMSwgZmluZF9pbl9jdXJyZW50X29iamVjdHMgYjIgaW5cbiAgICAgICAgbGV0IGIxJywgYjInID0gY29udGludW91c19vYmplY3RfY29sbGlzaW9uIGNfYjEgY19iMiB0LnRpbWVzdGVwIGluXG4gICAgICAgIHJlcGxhY2VfYmFsbCBiMScgYWNjdW1cbiAgICAgICAgfD4gcmVwbGFjZV9iYWxsIGIyJ1xuICAgICAgICBlbmRcbiAgICAgIGVsc2UgYWNjdW1cbiAgICAgICkgaW5cbiAgICAoKmxldCAocG9zdF93YWxsX2NvbGxpc2lvbnM6QmFsbC50IGxpc3QpID1cbiAgICAgIExpc3QubWFwXG4gICAgICAoTGlzdC56aXBfZXhuIHQub2JqZWN0cyBwb3N0X29iamVjdF9jb2xsaXNpb25zKVxuICAgICAgfmY6KGZ1biAob2JqZWN0czpCYWxsLnQqQmFsbC50KSAtPiBjb250aW51b3VzX3dhbGxfY29sbGlzaW9uIHQudGltZXN0ZXAgdC54X3JhbmdlIHQueV9yYW5nZSBvYmplY3RzKVxuICAgIGluKilcbiAgICBcbiAgICBsZXQgcG9zdF93YWxsX2NvbGxpc2lvbnMgPVxuICAgICAgd2FsbF9jb2xsaXNpb24gWCAge3Qgd2l0aCBmdXR1cmVfb2JqZWN0cyA9IHBvc3Rfb2JqZWN0X2NvbGxpc2lvbnN9XG4gICAgICB8PiB3YWxsX2NvbGxpc2lvbiBZIGluXG4gICAge3Qgd2l0aCBvYmplY3RzID0gcG9zdF93YWxsX2NvbGxpc2lvbnMuZnV0dXJlX29iamVjdHN9XG4gICAgICBcblxuICAgICgqTGlzdC5pdGVyIH5mOihmdW4geCAtPiBwcmludF9hcnJheSBcIlBvc2l0aW9ucyBhcmUgOlwiIHgucG9zaXRpb24pIHBvc3Rfd2FsbF9jb2xsaXNpb25zOyopXG4gICAgKCp7dCB3aXRoIG9iamVjdHMgPSBwb3N0X3dhbGxfY29sbGlzaW9uc30qKVxuICAgICgqd2FsbF9jb2xsaXNpb24gWCB7dCB3aXRoIGZ1dHVyZV9vYmplY3RzID0gY29sbGlkZWRfY29sbGlzaW9uc30gfD4gd2FsbF9jb2xsaXNpb24gWSopXG4gICAgICBcblxuICBsZXQgaW5pdGlhbGl6ZV9wb3B1bGF0ZWRfZ3JpZCA/KHNlbGZfaW5pdD10cnVlKSA/KHNlZWQ9MCkgeF9sZW4geV9sZW4gb2JqZWN0cyA9IFxuICAgIGxldCB2ZWxvY2l0eV9wZWFrID0gMy4gaW5cbiAgICBsZXQgb3JpZ2luID0gMjUuIGluXG4gICAgbGV0IHhfcGVhayA9IHhfbGVuICsuIG9yaWdpbiBpblxuICAgIGxldCB5X3BlYWsgPSB5X2xlbiArLiBvcmlnaW4gaW5cbiAgICBpZiBCb29sLihzZWxmX2luaXQgPSBmYWxzZSkgdGhlbiBSYW5kb20uaW5pdCBzZWVkIFxuICAgIGVsc2UgUmFuZG9tLnNlbGZfaW5pdCAoKSA7XG4gICAgbGV0IG1ha2VfcmFuZG9tX2JhbGwgKCkgPSBcbiAgICAgIHtCYWxsLmlkIHdpdGggcG9zaXRpb24gPSBbfFJhbmRvbS5mbG9hdF9yYW5nZSAob3JpZ2luICsuIEJhbGwuaWQucmFkaXVzKSAoeF9wZWFrIC0uIEJhbGwuaWQucmFkaXVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJhbmRvbS5mbG9hdF9yYW5nZSAob3JpZ2luICsuIEJhbGwuaWQucmFkaXVzKSAoeV9wZWFrIC0uIEJhbGwuaWQucmFkaXVzKTt8XTtcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHkgPSBbfFJhbmRvbS5mbG9hdF9yYW5nZSAoLS52ZWxvY2l0eV9wZWFrKSB2ZWxvY2l0eV9wZWFrfF19XG4gICAgaW5cbiAgICBsZXQgb2JqZWN0X2xpc3QgPSBcbiAgICAgIExpc3QubWFwIH5mOihmdW4geCAtPiBsZXQgYmFsbCA9IG1ha2VfcmFuZG9tX2JhbGwgKCkgaW4ge2JhbGwgd2l0aCBvZ19pZCA9IHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vycl9pZCA9IHg7fVxuICAgICAgICAgICAgICApIChMaXN0LnJhbmdlIDEgb2JqZWN0cylcbiAgICBpblxuICAgIGxldCBncmlkID0gXG4gICAge3hfcmFuZ2UgPSAob3JpZ2luLCB4X3BlYWspO1xuICAgICB5X3JhbmdlID0gKG9yaWdpbiwgeV9wZWFrKTtcbiAgICAgb2JqZWN0cyA9IG9iamVjdF9saXN0O1xuICAgICBmdXR1cmVfb2JqZWN0cyA9IExpc3QubWFwIH5mOihCYWxsLmZvcndhcmRzIDEuKSBvYmplY3RfbGlzdDtcbiAgICAgdGltZXN0ZXAgPSAxLn0gaW5cbiAgICAgZ3JpZFxuICAgIFxuXG5lbmRcblxuXG5cbigqIG5vdGVzOlxuLSBuZWVkIHRvIHVzZSBkZWNyZWFzaW5nIGluc2VydGlvbiBzb3J0IHdoZW4gc29ydGluZyBcbiAgZHVyaW5nIHBydW5lIGFuZCBzd2VlcCBzbyBsaXN0IGFwcGVuZGluZyBpcyBPKDEpXG4tIEkgd2FudCB0byB1c2UgYSBoYXNodGFibGUgdG8ga2VlcCB0cmFjayBvZiBvYmplY3RzLCBcbiAgdGhhdCB3YXkgdGhlIG9nX2lkIGlzIGp1c3QgdGhlIGhhc2ggbnVtYmVyLCBhbmQgXG4gIGFjY2VzcyBmb3IgY29sbGlzaW9ucyBpcyBjb25zdGFudCAgXG4gIC0+IERlY2lkZWQgYWdhaW5zdC4gV2UgbmVlZCB0byBoYXZlIGFuIG9yZGVyZWRcbiAgICBzb3J0IGFzIHdlbGwgYXMgaW5kZXggYWJpbGl0eS4gVGhpcyB3b3VsZCB3b3JrXG4gICAgYmVzdCBpZiB3ZSB1c2VkIGEgbGF5ZXJlZCBhcnJheSBzZXR1cDpcbiAgICAgIFt8d2hlcmVpczE7d2hlcmVpczI7Li4uO3doZXJlaXNufF1cbiAgICB8IFt8MWlzYXRqOzJpc2F0azsuLi47bmlzYXRwfF1cbiAgICB8IFt8PG9yZGVyZWQgZWxlbWVudHM+fF1cbiAgICBWXG4gICAgc28gdGhhdCB3aGVuIHdlIHVwZGF0ZSB0aGUgb3JkZXJlZCBlbGVtZW50cyxcbiAgICB3ZSBhbHNvIHVwZGF0ZSB0aGUgcG9pbnRlciBsaXN0LiBUaGlzIHdvdWxkXG4gICAgcmVxdWlyZSBhIG11dGFibGUgb2JqZWN0X2xpc3QsIHdoaWNoIEkgZG9uJ3RcbiAgICB3YW50IHRvIGRvIHJpZ2h0IG5vdy5cbi0gSSdtIGdvbm5hIG5lZWQgdG8gY2hhbmdlIGFsbCB0aGVzZSBpbnRzIHRvIGZsb2F0cyBcbiAgYXQgc29tZSBwb2ludCBhcyB3ZWxsICBbRE9ORV1cbi0gSSdtIGFsc28gZ29ubmEgbmVlZCB0byBjaGFuZ2UgdGhlIGludCAqIGludCB0eXBlcyBcbiAgaW50byBwcm9wZXIgdmVjdG9ycyBbRE9ORV1cbi0gVGhlIHJhbmdlIG1vZHVsZSBpcyBpbXBsaWNpdGx5IHVzaW5nIHRoZSAzcmQgcGFydCBmb3IgXG4gIHRoZSBpZCwgd2hpY2ggaXMgYmFkIGRhdGEgZGVzaWduLiBbRE9ORV1cbi0gTmVlZCB0byBjaGFuZ2UgcHJvamVjdCB0byBzaW1wbHkgdXBkYXRlIHRoZSBib3VuZHMuXG4gIFdhaXQgb2sgSSBjYW4ganVzdCBwdXQgdGhlIGJvdW5kIHVwZGF0ZSBpbnRvIHRoZSBcbiAgYmFsbC5mb3J3YXJkcyBzdGVwXG4tIEkgd2FudCB0byBoYXZlIGZhc3QgYWNjZXNzIHRvIG9iamVjdHMgYnkgSUQsIHdoaWxlIFxuICBzdGlsbCBrZWVwaW5nIHRoZW0gb3JkZXJlZCBzbyB0aGUgcHJ1bmUgYW5kIHN3ZWVwXG4gIGFsZ29yaXRobSBjYW4gcnVuIHF1aWNrbHkuIEhvdyBjYW4gSSBkbyB0aGlzPyBJJ21cbiAgdGhpbmtpbmcgdGhhdCBzb21lIGtpbmQgb2Ygc3RhY2tlZCBhcnJheXMgd2lsbCB3b3JrXG4gIHRvIGtlZXAgdHJhY2sgb2YgaW5kZXhpbmcgd2hpbGUgcHJlc2VydmluZyBvcmRlci4gXG4tIENoYW5naW5nIHRpbWVzdGVwIHdpbGwgY2hhbmdlIGhvdyBxdWlja2x5IHRoZSBzaW11bGF0aW9uXG4gIHNwZWVkcyB1cCBvciBzbG93cyBkb3duIG92ZXIgdGltZS5cbiAgZS5nLiBhIHJhdGUgb2YgMS4yIHdpbGwgc3BlZWQgdXAgdGhlIHNpbXVsYXRpb24gYnkgMjAlXG4gIGV2ZXJ5IHRpbWVzdGVwLiBbRklYRURdXG4tIFJlZmFjdG9yIHRoZSBheGlzIHN5c3RlbSBzbyBJIGNhbiBjaGFuZ2UgdGhlIG51bWJlciBvZiBheGlzXG4gIGFuZCB0aGUgb3RoZXIgY29kZSB3aWxsIGF1dG9tYXRpY2FsbHkgZmlsbCBpbiBnYXBzXG4tIENvbnRpbnVvdXMgY29sbGlzaW9uIGRldGVjdGlvbiBuZWVkcyB0byBiZSBpbXBsZW1lbnRlZFxuICBmb3Igb2JqZWN0cyB0byBtYWtlIHRoaW5ncyBub3QgYnVnIHRoZSBoZWxsIG91dFxuICBodHRwczovL3d3dy50b3B0YWwuY29tL2dhbWUvdmlkZW8tZ2FtZS1waHlzaWNzLXBhcnQtaWktY29sbGlzaW9uLWRldGVjdGlvbi1mb3Itc29saWQtb2JqZWN0c1xuLSBJZiB3ZSBkb24ndCBuZWVkIGEgcXVhZHJhdGljIGZvcm11bGEsIGRlbGV0ZSBhdCB0aGUgZW5kXG4tIElmIHdlIHVzZSBhbm90aGVyIGNvbGxpc2lvbiBwcnVuaW5nIGFsZ29yaXRobSBpbnNlYWQgXG4gIG9mIFAmUyB3ZSBjYW4gcnVuIGNvbnRpbnVvdXMgY29sbGlzaW9uIGRldGVjdGlvblxuICBldmVyeSBzdGVwIGFuZCBvbmx5IGFjdCBvbiBpdCBpZiB3ZSBnZXQgYW4gYW5zd2VyIDwgMSEhXG4gIC0+IFRoYXQgd2lsbCB0b3RhbGx5IHNvbHZlIG91ciBpc3N1ZSBhYm91dCBsaW1pdGluZyBzcGVlZHNcbiAgICBidXQgd2UnbGwgYWxzbyBuZWVkIGEgZmFpcmx5IGFjY3VyYXRlIGFsZ29yaXRobS4gXG4gICAgU3BhY2UgcGFydGl0aW9uaW5nIG1heWJlP1xuLSBHZXQgbGluZWFyIGludGVycG9sYXRpb24gd29ya2luZyBmb3Igd2FsbHMgYXMgd2VsbCBcbiAgYXMgb2JqZWN0IGNvbGxpc2lvbiBbRE9ORV1cbi0gS2luZXRpYyBlbmVyZ3kgaXMgbm90IHByZXNlcnZlZCBpbiB0aGUgc3lzdGVtIG92ZXIgdGltZVxuICBhbmQgSSBkb24ndCBrbm93IHdoeS4gQ29sbGVjdGluZyBraW5ldGljIGVuZXJneSBhbmQgXG4gIGdyYXBoaW5nIGl0IG92ZXIgdGltZSBmb3IgZWFjaCBvYmplY3QgaXMgcHJvYmFibHkgYSBnb29kXG4gIHN0YXJ0XG4gIC0+IENsb3NlIHRvIGRpcmVjdCBidXQgc2xpZ2h0bHkgb2ZmIGNvbGxpc2lvbnMgd2lsbFxuICAgIGNhdXNlIGJvdGggb2JqZWN0cyB0byBsb3NlIHZlbG9jaXR5IGFuZCB0aGUgYW5nbGUgXG4gICAgb2YgcmVmbGVjdGlvbiB0byBiZSB3ZWlyZC5cbi0gU29tZSB3YWxsIGNvbGxpc2lvbnMgYnJlYWsgdGhlIHN5c3RlbSwgZmluZCBvdXQgd2h5LiBcbi0gQnJva2VuIGNhc2VzOlxuICAtPiBCYWxsIGhpdHMgYSBjb3JuZXIgb3IgdHdvIGVkZ2VzIGF0IHRoZSBzYW1lIHRpbWVcbiAgWCBUd28gb2JqZWN0cyBoaXQgYSB3YWxsIGF0IHRoZSBzYW1lIHRpbWUgXG5cblxuXG4gIGlkZWFzOlxuLSB0cmFjayBmcmVxdWVuY3kgb2YgaWQgY2hhbmdlc1xuLSBMYWJlbCBvYmplY3RzIHdpdGggb2dfaWQgYW5kIGN1cnJlbnQgaWRcbi0gdHJhY2sgdG90YWwga2luZXRpYyBlbmVyZ3kgaW4gdGhlIHN5c3RlbSBvdmVyIHRpbWVcbi0gR3JhcGggdG90YWwga2luZXRpYyBlbmVyZ3kgaW4gdGhlIHN5c3RlbSBvdmVyIHRpbWVcbi0gZ3JhcGggdmVsb2NpdHkgdmVjdG9ycyBvZiBvYmplY3RzIHdpdGggaWQgbGFiZWxzXG4gICopXG4iXX0=
