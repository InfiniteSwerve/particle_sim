(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_check_bound=runtime.caml_check_bound,
     caml_make_vect=runtime.caml_make_vect,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_wrap_exception=runtime.caml_wrap_exception;
    function caml_call1(f,a0)
     {return f.length == 1?f(a0):runtime.caml_call_gen(f,[a0])}
    function caml_call2(f,a0,a1)
     {return f.length == 2?f(a0,a1):runtime.caml_call_gen(f,[a0,a1])}
    function caml_call3(f,a0,a1,a2)
     {return f.length == 3?f(a0,a1,a2):runtime.caml_call_gen(f,[a0,a1,a2])}
    function caml_call4(f,a0,a1,a2,a3)
     {return f.length == 4
              ?f(a0,a1,a2,a3)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_Thread_kill_not_implemente=
      caml_string_of_jsbytes("Thread.kill: not implemented"),
     cst_Win32=caml_string_of_jsbytes("Win32"),
     cst_Thread_at_shutdown=caml_string_of_jsbytes("Thread.at_shutdown"),
     cst_Event_receive=caml_string_of_jsbytes("Event.receive"),
     cst_Event_choose=caml_string_of_jsbytes("Event.choose"),
     cst$0=caml_string_of_jsbytes(""),
     cst_timed_write=caml_string_of_jsbytes("timed_write"),
     cst=caml_string_of_jsbytes(""),
     cst_timed_read=caml_string_of_jsbytes("timed_read"),
     cst_Semaphore_Counting_release=
      caml_string_of_jsbytes("Semaphore.Counting.release: overflow"),
     cst_Semaphore_Counting_init_wr=
      caml_string_of_jsbytes("Semaphore.Counting.init: wrong initial value"),
     Unix=global_data.Unix,
     Stdlib_sys=global_data.Stdlib__sys,
     Stdlib=global_data.Stdlib,
     Stdlib_callback=global_data.Stdlib__callback,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_queue=global_data.Stdlib__queue,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib_random=global_data.Stdlib__random,
     Stdlib_bytes=global_data.Stdlib__bytes;
    function create(fn,arg)
     {return runtime.caml_thread_new
              (function(param)
                {try
                  {caml_call1(fn,arg);var _aG_=0;return _aG_}
                 catch(exn)
                  {exn = caml_wrap_exception(exn);
                   caml_call1(Stdlib[63],Stdlib[39]);
                   caml_call1(Stdlib[63],Stdlib[40]);
                   return runtime.caml_thread_uncaught_exception(exn)}})}
    function exit(param){return runtime.caml_thread_exit(0)}
    function kill(th)
     {return caml_call1(Stdlib[1],cst_Thread_kill_not_implemente)}
    function preempt(signal){return runtime.caml_thread_yield(0)}
    var
     _a_=
      runtime.caml_string_notequal(Stdlib_sys[4],cst_Win32)
       ?Stdlib_sys[35]
       :Stdlib_sys[26];
    caml_call2(Stdlib_sys[15],_a_,[0,preempt]);
    runtime.caml_thread_initialize(0);
    function _b_(param)
     {runtime.caml_thread_cleanup(0);return caml_call2(Stdlib_sys[15],_a_,0)}
    caml_call2(Stdlib_callback[1],cst_Thread_at_shutdown,_b_);
    var delay=Unix[106];
    function wait_read(fd){return 0}
    function wait_write(fd){return 0}
    function wait_timed_read(fd,d)
     {return caml_call4(Unix[92],[0,fd,0],0,0,d)[1]?1:0}
    function wait_timed_write(fd,d)
     {return caml_call4(Unix[92],0,[0,fd,0],0,d)[2]?1:0}
    var select=Unix[92];
    function wait_pid(p){return caml_call2(Unix[15],0,p)}
    function _c_(_aF_){return runtime.caml_wait_signal(_aF_)}
    function _d_(_aE_,_aD_){return runtime.caml_thread_sigmask(_aE_,_aD_)}
    function _e_(_aC_){return runtime.caml_thread_yield(_aC_)}
    function _f_(_aB_){return runtime.caml_thread_join(_aB_)}
    function _g_(_aA_){return runtime.caml_thread_id(_aA_)}
    var
     Thread=
      [0,
       create,
       function(_az_){return runtime.caml_thread_self(_az_)},
       _g_,
       exit,
       kill,
       delay,
       _f_,
       _e_,
       wait_read,
       wait_write,
       wait_timed_read,
       wait_timed_write,
       select,
       wait_pid,
       _d_,
       _c_];
    caml_register_global(15,Thread,"Thread");
    function _h_(_ay_){return runtime.caml_mutex_unlock(_ay_)}
    function _i_(_ax_){return runtime.caml_mutex_try_lock(_ax_)}
    function _j_(_aw_){return runtime.caml_mutex_lock(_aw_)}
    var
     Mutex=
      [0,function(_av_){return runtime.caml_mutex_new(_av_)},_j_,_i_,_h_];
    caml_register_global(16,Mutex,"Mutex");
    function _k_(_au_){return runtime.caml_condition_broadcast(_au_)}
    function _l_(_at_){return runtime.caml_condition_signal(_at_)}
    function _m_(_as_,_ar_){return runtime.caml_condition_wait(_as_,_ar_)}
    var
     Condition=
      [0,function(_aq_){return runtime.caml_condition_new(_aq_)},_m_,_l_,_k_];
    caml_register_global(17,Condition,"Condition");
    function new_channel(param)
     {var _ap_=caml_call1(Stdlib_queue[2],0);
      return [0,caml_call1(Stdlib_queue[2],0),_ap_]}
    var masterlock=runtime.caml_mutex_new(0);
    function do_aborts(abort_env,genev,performed)
     {var _al_=0 !== abort_env?1:0;
      if(_al_)
       {if(0 <= performed)
         {var
           ids_done=caml_check_bound(genev,performed)[1 + performed][2],
           _am_=
            function(param)
             {var
               f=param[2],
               id=param[1],
               _ao_=1 - caml_call2(Stdlib_list[36],id,ids_done);
              return _ao_?caml_call1(f,0):_ao_};
          return caml_call2(Stdlib_list[17],_am_,abort_env)}
        var _an_=function(param){var f=param[2];return caml_call1(f,0)};
        return caml_call2(Stdlib_list[17],_an_,abort_env)}
      return _al_}
    function scramble_array(a)
     {var len=a.length - 1;
      if(0 === len)caml_call1(Stdlib[1],cst_Event_choose);
      var _ai_=len - 1 | 0;
      if(! (_ai_ < 1))
       {var i=_ai_;
        for(;;)
         {var
           j=caml_call1(Stdlib_random[5],i + 1 | 0),
           temp=caml_check_bound(a,i)[1 + i],
           _aj_=caml_check_bound(a,j)[1 + j];
          caml_check_bound(a,i)[1 + i] = _aj_;
          caml_check_bound(a,j)[1 + j] = temp;
          var _ak_=i - 1 | 0;
          if(1 !== i){var i=_ak_;continue}
          break}}
      return a}
    var count=[0,0];
    function flatten_event(abort_list,accu,accu_abort,ev)
     {var abort_list$0=abort_list,accu_abort$0=accu_abort,ev$0=ev;
      for(;;)
       switch(ev$0[0])
        {case 0:
          var bev=ev$0[1];
          return [0,[0,[0,bev,abort_list$0],accu],accu_abort$0];
         case 1:
          var evl=ev$0[1],accu$0=accu,accu_abort$1=accu_abort$0,param=evl;
          for(;;)
           {if(param)
             {var
               l=param[2],
               ev$1=param[1],
               match=flatten_event(abort_list$0,accu$0,accu_abort$1,ev$1),
               accu_abort$2=match[2],
               accu$1=match[1],
               accu$0=accu$1,
               accu_abort$1=accu_abort$2,
               param=l;
              continue}
            return [0,accu$0,accu_abort$1]}
         case 2:
          var fn=ev$0[2],ev$2=ev$0[1];
          count[1]++;
          var
           _ah_=count[1],
           accu_abort$3=[0,[0,_ah_,fn],accu_abort$0],
           abort_list$1=[0,_ah_,abort_list$0],
           abort_list$0=abort_list$1,
           accu_abort$0=accu_abort$3,
           ev$0=ev$2;
          continue;
         default:var fn$0=ev$0[1],ev$3=caml_call1(fn$0,0),ev$0=ev$3;continue}}
    function sync(ev)
     {var
       match=flatten_event(0,0,0,ev),
       abort_env=match[2],
       evl=match[1],
       genev=scramble_array(caml_call1(Stdlib_array[12],evl)),
       performed=[0,-1],
       condition=runtime.caml_condition_new(0),
       bev=
        caml_make_vect
         (genev.length - 1,
          caml_call3(caml_check_bound(genev,0)[1][1],performed,condition,0)),
       ___=genev.length - 1 - 1 | 0,
       _Z_=1;
      if(! (___ < 1))
       {var i$2=_Z_;
        for(;;)
         {var
           _af_=
            caml_call3
             (caml_check_bound(genev,i$2)[1 + i$2][1],performed,condition,i$2);
          caml_check_bound(bev,i$2)[1 + i$2] = _af_;
          var _ag_=i$2 + 1 | 0;
          if(___ !== i$2){var i$2=_ag_;continue}
          break}}
      runtime.caml_mutex_lock(masterlock);
      var i=0;
      for(;;)
       {if(bev.length - 1 <= i)
         var _aa_=0;
        else
         {var _$_=caml_call1(caml_check_bound(bev,i)[1 + i][1],0);
          if(! _$_){var i$0=i + 1 | 0,i=i$0;continue}
          var _aa_=_$_}
        if(1 - _aa_)
         {var _ac_=bev.length - 1 - 1 | 0,_ab_=0;
          if(! (_ac_ < 0))
           {var i$1=_ab_;
            for(;;)
             {caml_call1(caml_check_bound(bev,i$1)[1 + i$1][2],0);
              var _ae_=i$1 + 1 | 0;
              if(_ac_ !== i$1){var i$1=_ae_;continue}
              break}}
          runtime.caml_condition_wait(condition,masterlock);
          for(;;)
           {if(! (0 <= performed[1]))
             {runtime.caml_condition_wait(condition,masterlock);continue}
            break}}
        runtime.caml_mutex_unlock(masterlock);
        if(0 === abort_env)
         {var _ad_=performed[1];
          return caml_call1(caml_check_bound(bev,_ad_)[1 + _ad_][3],0)}
        var
         num=performed[1],
         result=caml_call1(caml_check_bound(bev,num)[1 + num][3],0);
        do_aborts(abort_env,genev,num);
        return result}}
    function poll(ev)
     {var
       match=flatten_event(0,0,0,ev),
       abort_env=match[2],
       evl=match[1],
       genev=scramble_array(caml_call1(Stdlib_array[12],evl)),
       performed=[0,-1],
       condition=runtime.caml_condition_new(0),
       bev=
        caml_make_vect
         (genev.length - 1,
          caml_call3(caml_check_bound(genev,0)[1][1],performed,condition,0)),
       _U_=genev.length - 1 - 1 | 0,
       _T_=1;
      if(! (_U_ < 1))
       {var i$1=_T_;
        for(;;)
         {var
           _X_=
            caml_call3
             (caml_check_bound(genev,i$1)[1 + i$1][1],performed,condition,i$1);
          caml_check_bound(bev,i$1)[1 + i$1] = _X_;
          var _Y_=i$1 + 1 | 0;
          if(_U_ !== i$1){var i$1=_Y_;continue}
          break}}
      runtime.caml_mutex_lock(masterlock);
      var i=0;
      for(;;)
       {if(bev.length - 1 <= i)
         var ready=0;
        else
         {var _V_=caml_call1(caml_check_bound(bev,i)[1 + i][1],0);
          if(! _V_){var i$0=i + 1 | 0,i=i$0;continue}
          var ready=_V_}
        if(ready)
         {runtime.caml_mutex_unlock(masterlock);
          var
           _W_=performed[1],
           result=[0,caml_call1(caml_check_bound(bev,_W_)[1 + _W_][3],0)];
          do_aborts(abort_env,genev,performed[1]);
          return result}
        performed[1] = 0;
        runtime.caml_mutex_unlock(masterlock);
        do_aborts(abort_env,genev,-1);
        return 0}}
    function cleanup_queue(q)
     {var q$0=caml_call1(Stdlib_queue[2],0);
      function _R_(c)
       {var _S_=-1 === c[1][1]?1:0;
        return _S_?caml_call2(Stdlib_queue[3],c,q$0):_S_}
      caml_call2(Stdlib_queue[15],_R_,q);
      return q$0}
    function always(data)
     {return [0,
              function(performed,condition,evnum)
               {function _P_(param){return data}
                function _Q_(param){return 0}
                return [0,
                        function(param){performed[1] = evnum;return 1},
                        _Q_,
                        _P_]}]}
    function send(channel,data)
     {return [0,
              function(performed,condition,evnum)
               {var wcomm=[0,performed,condition,[0,data],evnum];
                function _L_(param){return 0}
                function _M_(param)
                 {channel[1] = cleanup_queue(channel[1]);
                  return caml_call2(Stdlib_queue[3],wcomm,channel[1])}
                return [0,
                        function(param)
                         {function poll(param)
                           {for(;;)
                             {var rcomm=caml_call1(Stdlib_queue[5],channel[2]);
                              if(0 <= rcomm[1][1])continue;
                              rcomm[3] = wcomm[3];
                              performed[1] = evnum;
                              rcomm[1][1] = rcomm[4];
                              return runtime.caml_condition_signal(rcomm[2])}}
                          try
                           {poll(0);var _N_=1;return _N_}
                          catch(_O_)
                           {_O_ = caml_wrap_exception(_O_);
                            if(_O_ === Stdlib_queue[1])return 0;
                            throw _O_}},
                        _M_,
                        _L_]}]}
    function receive(channel)
     {return [0,
              function(performed,condition,evnum)
               {var rcomm=[0,performed,condition,0,evnum];
                function _G_(param)
                 {var _K_=rcomm[3];
                  if(_K_){var res=_K_[1];return res}
                  return caml_call1(Stdlib[1],cst_Event_receive)}
                function _H_(param)
                 {channel[2] = cleanup_queue(channel[2]);
                  return caml_call2(Stdlib_queue[3],rcomm,channel[2])}
                return [0,
                        function(param)
                         {function poll(param)
                           {for(;;)
                             {var wcomm=caml_call1(Stdlib_queue[5],channel[1]);
                              if(0 <= wcomm[1][1])continue;
                              rcomm[3] = wcomm[3];
                              performed[1] = evnum;
                              wcomm[1][1] = wcomm[4];
                              return runtime.caml_condition_signal(wcomm[2])}}
                          try
                           {poll(0);var _I_=1;return _I_}
                          catch(_J_)
                           {_J_ = caml_wrap_exception(_J_);
                            if(_J_ === Stdlib_queue[1])return 0;
                            throw _J_}},
                        _H_,
                        _G_]}]}
    function choose(evl){return [1,evl]}
    function wrap_abort(ev,fn){return [2,ev,fn]}
    function guard(fn){return [3,fn]}
    function wrap(ev,fn)
     {switch(ev[0])
       {case 0:
         var genev=ev[1];
         return [0,
                 function(performed,condition,evnum)
                  {var bev=caml_call3(genev,performed,condition,evnum);
                   function _F_(param)
                    {return caml_call1(fn,caml_call1(bev[3],0))}
                   return [0,bev[1],bev[2],_F_]}];
        case 1:
         var evl=ev[1],_E_=function(ev){return wrap(ev,fn)};
         return [1,caml_call2(Stdlib_list[19],_E_,evl)];
        case 2:var f=ev[2],ev$0=ev[1];return [2,wrap(ev$0,fn),f];
        default:
         var gu=ev[1];
         return [3,function(param){return wrap(caml_call1(gu,0),fn)}]}}
    function select$0(evl){return sync([1,evl])}
    var
     Event=
      [0,
       new_channel,
       send,
       receive,
       always,
       choose,
       wrap,
       wrap_abort,
       guard,
       sync,
       select$0,
       poll];
    caml_register_global(22,Event,"Event");
    var
     wait=Unix[14],
     waitpid=Unix[15],
     system=Unix[16],
     read=Unix[27],
     write=Unix[28],
     write_substring=Unix[30],
     select$1=Unix[92];
    function timed_read(fd,buff,ofs,len,timeout)
     {if(wait_timed_read(fd,timeout))
       return caml_call4(Unix[27],fd,buff,ofs,len);
      throw [0,Unix[1],62,cst_timed_read,cst]}
    function timed_write(fd,buff,ofs,len,timeout)
     {if(wait_timed_write(fd,timeout))
       return caml_call4(Unix[28],fd,buff,ofs,len);
      throw [0,Unix[1],62,cst_timed_write,cst$0]}
    function timed_write_substring(fd,buff,ofs,len,timeout)
     {return timed_write(fd,caml_call1(Stdlib_bytes[43],buff),ofs,len,timeout)}
    var
     pipe=Unix[69],
     open_process_in=Unix[73],
     open_process_out=Unix[74],
     open_process=Unix[75],
     socket=Unix[132],
     accept=Unix[135],
     recv=Unix[142],
     recvfrom=Unix[143],
     send$0=Unix[144],
     send_substring=Unix[145],
     sendto=Unix[146],
     sendto_substring=Unix[147],
     open_connection=Unix[157];
    function _n_(_D_,_C_){return runtime.unix_connect(_D_,_C_)}
    function _o_(_B_){return runtime.unix_sleep(_B_)}
    function _p_(_A_,_z_){return runtime.unix_execvp(_A_,_z_)}
    function _q_(_y_,_x_,_w_){return runtime.unix_execve(_y_,_x_,_w_)}
    var
     ThreadUnix=
      [0,
       function(_v_,_u_){return runtime.unix_execv(_v_,_u_)},
       _q_,
       _p_,
       wait,
       waitpid,
       system,
       read,
       write,
       write_substring,
       timed_read,
       timed_write,
       timed_write_substring,
       select$1,
       pipe,
       open_process_in,
       open_process_out,
       open_process,
       _o_,
       socket,
       accept,
       _n_,
       recv,
       recvfrom,
       send$0,
       send_substring,
       sendto,
       sendto_substring,
       open_connection];
    caml_register_global(24,ThreadUnix,"ThreadUnix");
    function make(v)
     {if(v < 0)caml_call1(Stdlib[1],cst_Semaphore_Counting_init_wr);
      var _t_=runtime.caml_condition_new(0);
      return [0,runtime.caml_mutex_new(0),v,_t_]}
    function release(s)
     {runtime.caml_mutex_lock(s[1]);
      if(s[2] < Stdlib[19])
       {s[2] = s[2] + 1 | 0;
        runtime.caml_condition_signal(s[3]);
        return runtime.caml_mutex_unlock(s[1])}
      runtime.caml_mutex_unlock(s[1]);
      throw [0,Stdlib[11],cst_Semaphore_Counting_release]}
    function acquire(s)
     {runtime.caml_mutex_lock(s[1]);
      for(;;)
       {if(0 === s[2]){runtime.caml_condition_wait(s[3],s[1]);continue}
        s[2] = s[2] - 1 | 0;
        return runtime.caml_mutex_unlock(s[1])}}
    function try_acquire(s)
     {runtime.caml_mutex_lock(s[1]);
      var ret=0 === s[2]?0:(s[2] = s[2] - 1 | 0,1);
      runtime.caml_mutex_unlock(s[1]);
      return ret}
    function get_value(s){return s[2]}
    var Counting=[0,make,release,acquire,try_acquire,get_value];
    function make$0(b)
     {var _r_=runtime.caml_condition_new(0),_s_=b?1:0;
      return [0,runtime.caml_mutex_new(0),_s_,_r_]}
    function release$0(s)
     {runtime.caml_mutex_lock(s[1]);
      s[2] = 1;
      runtime.caml_condition_signal(s[3]);
      return runtime.caml_mutex_unlock(s[1])}
    function acquire$0(s)
     {runtime.caml_mutex_lock(s[1]);
      for(;;)
       {if(0 === s[2]){runtime.caml_condition_wait(s[3],s[1]);continue}
        s[2] = 0;
        return runtime.caml_mutex_unlock(s[1])}}
    function try_acquire$0(s)
     {runtime.caml_mutex_lock(s[1]);
      var ret=0 === s[2]?0:(s[2] = 0,1);
      runtime.caml_mutex_unlock(s[1]);
      return ret}
    var
     Binary=[0,make$0,release$0,acquire$0,try_acquire$0],
     Semaphore=[0,Counting,Binary];
    caml_register_global(25,Semaphore,"Semaphore");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ0aHJlYWRzLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
