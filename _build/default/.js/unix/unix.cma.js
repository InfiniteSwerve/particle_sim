(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_channel_descriptor=runtime.caml_channel_descriptor,
     caml_ml_bytes_length=runtime.caml_ml_bytes_length,
     caml_ml_string_length=runtime.caml_ml_string_length,
     caml_register_global=runtime.caml_register_global,
     caml_string_equal=runtime.caml_string_equal,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_wrap_exception=runtime.caml_wrap_exception,
     unix_inet_addr_of_string=runtime.unix_inet_addr_of_string;
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
     cst_close_process_full=caml_string_of_jsbytes("close_process_full"),
     cst_close_process=caml_string_of_jsbytes("close_process"),
     cst_close_process_out=caml_string_of_jsbytes("close_process_out"),
     cst_close_process_in=caml_string_of_jsbytes("close_process_in"),
     cst_process_full_pid=caml_string_of_jsbytes("process_full_pid"),
     cst_process_pid=caml_string_of_jsbytes("process_pid"),
     cst_process_out_pid=caml_string_of_jsbytes("process_out_pid"),
     cst_process_in_pid=caml_string_of_jsbytes("process_in_pid"),
     cst$8=caml_string_of_jsbytes(""),
     cst_c$0=caml_string_of_jsbytes("-c"),
     cst_c=caml_string_of_jsbytes("-c"),
     cst$7=caml_string_of_jsbytes(""),
     cst_udp$1=caml_string_of_jsbytes("udp"),
     cst_tcp$1=caml_string_of_jsbytes("tcp"),
     cst$4=caml_string_of_jsbytes(""),
     cst$6=caml_string_of_jsbytes(""),
     cst_tcp=caml_string_of_jsbytes("tcp"),
     cst_udp=caml_string_of_jsbytes("udp"),
     cst_udp$0=caml_string_of_jsbytes("udp"),
     cst_tcp$0=caml_string_of_jsbytes("tcp"),
     cst$5=caml_string_of_jsbytes(""),
     cst_0_0_0_0$0=caml_string_of_jsbytes("0.0.0.0"),
     cst_127_0_0_1$0=caml_string_of_jsbytes("127.0.0.1"),
     cst_Unix_sendto=caml_string_of_jsbytes("Unix.sendto"),
     cst_Unix_send=caml_string_of_jsbytes("Unix.send"),
     cst_Unix_recvfrom=caml_string_of_jsbytes("Unix.recvfrom"),
     cst_Unix_recv=caml_string_of_jsbytes("Unix.recv"),
     cst_Unix_single_write=caml_string_of_jsbytes("Unix.single_write"),
     cst_Unix_write=caml_string_of_jsbytes("Unix.write"),
     cst_Unix_read=caml_string_of_jsbytes("Unix.read"),
     cst$1=caml_string_of_jsbytes(': "'),
     cst_failed=caml_string_of_jsbytes('" failed'),
     cst_on=caml_string_of_jsbytes(' on "'),
     cst$2=caml_string_of_jsbytes('"'),
     cst$3=caml_string_of_jsbytes(": "),
     cst_E2BIG=caml_string_of_jsbytes("E2BIG"),
     cst_EACCES=caml_string_of_jsbytes("EACCES"),
     cst_EAGAIN=caml_string_of_jsbytes("EAGAIN"),
     cst_EBADF=caml_string_of_jsbytes("EBADF"),
     cst_EBUSY=caml_string_of_jsbytes("EBUSY"),
     cst_ECHILD=caml_string_of_jsbytes("ECHILD"),
     cst_EDEADLK=caml_string_of_jsbytes("EDEADLK"),
     cst_EDOM=caml_string_of_jsbytes("EDOM"),
     cst_EEXIST=caml_string_of_jsbytes("EEXIST"),
     cst_EFAULT=caml_string_of_jsbytes("EFAULT"),
     cst_EFBIG=caml_string_of_jsbytes("EFBIG"),
     cst_EINTR=caml_string_of_jsbytes("EINTR"),
     cst_EINVAL=caml_string_of_jsbytes("EINVAL"),
     cst_EIO=caml_string_of_jsbytes("EIO"),
     cst_EISDIR=caml_string_of_jsbytes("EISDIR"),
     cst_EMFILE=caml_string_of_jsbytes("EMFILE"),
     cst_EMLINK=caml_string_of_jsbytes("EMLINK"),
     cst_ENAMETOOLONG=caml_string_of_jsbytes("ENAMETOOLONG"),
     cst_ENFILE=caml_string_of_jsbytes("ENFILE"),
     cst_ENODEV=caml_string_of_jsbytes("ENODEV"),
     cst_ENOENT=caml_string_of_jsbytes("ENOENT"),
     cst_ENOEXEC=caml_string_of_jsbytes("ENOEXEC"),
     cst_ENOLCK=caml_string_of_jsbytes("ENOLCK"),
     cst_ENOMEM=caml_string_of_jsbytes("ENOMEM"),
     cst_ENOSPC=caml_string_of_jsbytes("ENOSPC"),
     cst_ENOSYS=caml_string_of_jsbytes("ENOSYS"),
     cst_ENOTDIR=caml_string_of_jsbytes("ENOTDIR"),
     cst_ENOTEMPTY=caml_string_of_jsbytes("ENOTEMPTY"),
     cst_ENOTTY=caml_string_of_jsbytes("ENOTTY"),
     cst_ENXIO=caml_string_of_jsbytes("ENXIO"),
     cst_EPERM=caml_string_of_jsbytes("EPERM"),
     cst_EPIPE=caml_string_of_jsbytes("EPIPE"),
     cst_ERANGE=caml_string_of_jsbytes("ERANGE"),
     cst_EROFS=caml_string_of_jsbytes("EROFS"),
     cst_ESPIPE=caml_string_of_jsbytes("ESPIPE"),
     cst_ESRCH=caml_string_of_jsbytes("ESRCH"),
     cst_EXDEV=caml_string_of_jsbytes("EXDEV"),
     cst_EWOULDBLOCK=caml_string_of_jsbytes("EWOULDBLOCK"),
     cst_EINPROGRESS=caml_string_of_jsbytes("EINPROGRESS"),
     cst_EALREADY=caml_string_of_jsbytes("EALREADY"),
     cst_ENOTSOCK=caml_string_of_jsbytes("ENOTSOCK"),
     cst_EDESTADDRREQ=caml_string_of_jsbytes("EDESTADDRREQ"),
     cst_EMSGSIZE=caml_string_of_jsbytes("EMSGSIZE"),
     cst_EPROTOTYPE=caml_string_of_jsbytes("EPROTOTYPE"),
     cst_ENOPROTOOPT=caml_string_of_jsbytes("ENOPROTOOPT"),
     cst_EPROTONOSUPPORT=caml_string_of_jsbytes("EPROTONOSUPPORT"),
     cst_ESOCKTNOSUPPORT=caml_string_of_jsbytes("ESOCKTNOSUPPORT"),
     cst_EOPNOTSUPP=caml_string_of_jsbytes("EOPNOTSUPP"),
     cst_EPFNOSUPPORT=caml_string_of_jsbytes("EPFNOSUPPORT"),
     cst_EAFNOSUPPORT=caml_string_of_jsbytes("EAFNOSUPPORT"),
     cst_EADDRINUSE=caml_string_of_jsbytes("EADDRINUSE"),
     cst_EADDRNOTAVAIL=caml_string_of_jsbytes("EADDRNOTAVAIL"),
     cst_ENETDOWN=caml_string_of_jsbytes("ENETDOWN"),
     cst_ENETUNREACH=caml_string_of_jsbytes("ENETUNREACH"),
     cst_ENETRESET=caml_string_of_jsbytes("ENETRESET"),
     cst_ECONNABORTED=caml_string_of_jsbytes("ECONNABORTED"),
     cst_ECONNRESET=caml_string_of_jsbytes("ECONNRESET"),
     cst_ENOBUFS=caml_string_of_jsbytes("ENOBUFS"),
     cst_EISCONN=caml_string_of_jsbytes("EISCONN"),
     cst_ENOTCONN=caml_string_of_jsbytes("ENOTCONN"),
     cst_ESHUTDOWN=caml_string_of_jsbytes("ESHUTDOWN"),
     cst_ETOOMANYREFS=caml_string_of_jsbytes("ETOOMANYREFS"),
     cst_ETIMEDOUT=caml_string_of_jsbytes("ETIMEDOUT"),
     cst_ECONNREFUSED=caml_string_of_jsbytes("ECONNREFUSED"),
     cst_EHOSTDOWN=caml_string_of_jsbytes("EHOSTDOWN"),
     cst_EHOSTUNREACH=caml_string_of_jsbytes("EHOSTUNREACH"),
     cst_ELOOP=caml_string_of_jsbytes("ELOOP"),
     cst_EOVERFLOW=caml_string_of_jsbytes("EOVERFLOW"),
     shell=caml_string_of_jsbytes("/bin/sh"),
     cst_Unix_Unix_error=caml_string_of_jsbytes("Unix.Unix_error"),
     cst=caml_string_of_jsbytes(""),
     cst$0=caml_string_of_jsbytes(""),
     cst_Unix_Unix_error$0=caml_string_of_jsbytes("Unix.Unix_error"),
     cst_0_0_0_0=caml_string_of_jsbytes("0.0.0.0"),
     cst_127_0_0_1=caml_string_of_jsbytes("127.0.0.1"),
     cst$9=caml_string_of_jsbytes("::"),
     cst_1=caml_string_of_jsbytes("::1"),
     Stdlib=global_data.Stdlib,
     Stdlib_hashtbl=global_data.Stdlib__hashtbl,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib_fun=global_data.Stdlib__fun,
     Stdlib_int=global_data.Stdlib__int,
     Stdlib_array=global_data.Stdlib__array,
     Stdlib_bytes=global_data.Stdlib__bytes,
     Stdlib_printf=global_data.Stdlib__printf,
     Stdlib_callback=global_data.Stdlib__callback,
     Stdlib_printexc=global_data.Stdlib__printexc,
     Unix_error=[248,cst_Unix_Unix_error,runtime.caml_fresh_oo_id(0)];
    caml_call2
     (Stdlib_callback[2],cst_Unix_Unix_error$0,[0,Unix_error,0,cst$0,cst]);
    var
     _n_=[0,1],
     _o_=[0,1],
     _m_=[0,1],
     _j_=[0,1],
     _k_=[0,1],
     _l_=[0,1],
     _h_=[0,1],
     _i_=[0,1],
     _g_=[0,1],
     _f_=[0,1],
     _e_=[0,1],
     _d_=runtime.caml_int64_create_lo_mi_hi(0,0,0),
     _c_=
      [0,
       [11,caml_string_of_jsbytes("EUNKNOWNERR "),[4,0,0,0,0]],
       caml_string_of_jsbytes("EUNKNOWNERR %d")],
     _b_=
      [0,
       [11,
        caml_string_of_jsbytes("Unix.Unix_error(Unix."),
        [2,
         0,
         [11,
          caml_string_of_jsbytes(", "),
          [3,0,[11,caml_string_of_jsbytes(", "),[3,0,[12,41,0]]]]]]],
       caml_string_of_jsbytes("Unix.Unix_error(Unix.%s, %S, %S)")];
    function _a_(param)
     {if(param[1] === Unix_error)
       {var s=param[4],s$0=param[3],e=param[2];
        if(typeof e === "number")
         {var _dk_=e;
          if(34 <= _dk_)
           switch(_dk_)
            {case 34:var msg=cst_ESPIPE;break;
             case 35:var msg=cst_ESRCH;break;
             case 36:var msg=cst_EXDEV;break;
             case 37:var msg=cst_EWOULDBLOCK;break;
             case 38:var msg=cst_EINPROGRESS;break;
             case 39:var msg=cst_EALREADY;break;
             case 40:var msg=cst_ENOTSOCK;break;
             case 41:var msg=cst_EDESTADDRREQ;break;
             case 42:var msg=cst_EMSGSIZE;break;
             case 43:var msg=cst_EPROTOTYPE;break;
             case 44:var msg=cst_ENOPROTOOPT;break;
             case 45:var msg=cst_EPROTONOSUPPORT;break;
             case 46:var msg=cst_ESOCKTNOSUPPORT;break;
             case 47:var msg=cst_EOPNOTSUPP;break;
             case 48:var msg=cst_EPFNOSUPPORT;break;
             case 49:var msg=cst_EAFNOSUPPORT;break;
             case 50:var msg=cst_EADDRINUSE;break;
             case 51:var msg=cst_EADDRNOTAVAIL;break;
             case 52:var msg=cst_ENETDOWN;break;
             case 53:var msg=cst_ENETUNREACH;break;
             case 54:var msg=cst_ENETRESET;break;
             case 55:var msg=cst_ECONNABORTED;break;
             case 56:var msg=cst_ECONNRESET;break;
             case 57:var msg=cst_ENOBUFS;break;
             case 58:var msg=cst_EISCONN;break;
             case 59:var msg=cst_ENOTCONN;break;
             case 60:var msg=cst_ESHUTDOWN;break;
             case 61:var msg=cst_ETOOMANYREFS;break;
             case 62:var msg=cst_ETIMEDOUT;break;
             case 63:var msg=cst_ECONNREFUSED;break;
             case 64:var msg=cst_EHOSTDOWN;break;
             case 65:var msg=cst_EHOSTUNREACH;break;
             case 66:var msg=cst_ELOOP;break;
             default:var msg=cst_EOVERFLOW}
          else
           switch(_dk_)
            {case 0:var msg=cst_E2BIG;break;
             case 1:var msg=cst_EACCES;break;
             case 2:var msg=cst_EAGAIN;break;
             case 3:var msg=cst_EBADF;break;
             case 4:var msg=cst_EBUSY;break;
             case 5:var msg=cst_ECHILD;break;
             case 6:var msg=cst_EDEADLK;break;
             case 7:var msg=cst_EDOM;break;
             case 8:var msg=cst_EEXIST;break;
             case 9:var msg=cst_EFAULT;break;
             case 10:var msg=cst_EFBIG;break;
             case 11:var msg=cst_EINTR;break;
             case 12:var msg=cst_EINVAL;break;
             case 13:var msg=cst_EIO;break;
             case 14:var msg=cst_EISDIR;break;
             case 15:var msg=cst_EMFILE;break;
             case 16:var msg=cst_EMLINK;break;
             case 17:var msg=cst_ENAMETOOLONG;break;
             case 18:var msg=cst_ENFILE;break;
             case 19:var msg=cst_ENODEV;break;
             case 20:var msg=cst_ENOENT;break;
             case 21:var msg=cst_ENOEXEC;break;
             case 22:var msg=cst_ENOLCK;break;
             case 23:var msg=cst_ENOMEM;break;
             case 24:var msg=cst_ENOSPC;break;
             case 25:var msg=cst_ENOSYS;break;
             case 26:var msg=cst_ENOTDIR;break;
             case 27:var msg=cst_ENOTEMPTY;break;
             case 28:var msg=cst_ENOTTY;break;
             case 29:var msg=cst_ENXIO;break;
             case 30:var msg=cst_EPERM;break;
             case 31:var msg=cst_EPIPE;break;
             case 32:var msg=cst_ERANGE;break;
             default:var msg=cst_EROFS}}
        else
         var x=e[1],msg=caml_call2(Stdlib_printf[4],_c_,x);
        return [0,caml_call4(Stdlib_printf[4],_b_,msg,s$0,s)]}
      return 0}
    caml_call1(Stdlib_printexc[9],_a_);
    function handle_unix_error(f,arg)
     {try
       {var _dj_=caml_call1(f,arg);return _dj_}
      catch(exn)
       {exn = caml_wrap_exception(exn);
        if(exn[1] === Unix_error)
         {var
           arg$0=exn[4],
           fun_name=exn[3],
           err=exn[2],
           _dh_=runtime.caml_check_bound(runtime.caml_sys_argv(0),0)[1];
          caml_call1(Stdlib[49],_dh_);
          caml_call1(Stdlib[49],cst$1);
          caml_call1(Stdlib[49],fun_name);
          caml_call1(Stdlib[49],cst_failed);
          if(0 < caml_ml_string_length(arg$0))
           {caml_call1(Stdlib[49],cst_on);
            caml_call1(Stdlib[49],arg$0);
            caml_call1(Stdlib[49],cst$2)}
          caml_call1(Stdlib[49],cst$3);
          var _di_=runtime.unix_error_message(err);
          caml_call1(Stdlib[53],_di_);
          return caml_call1(Stdlib[99],2)}
        throw exn}}
    var stdin=0,stdout=1,stderr=2;
    function read(fd,buf,ofs,len)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_read(fd,buf,ofs,len);
      return caml_call1(Stdlib[1],cst_Unix_read)}
    function write(fd,buf,ofs,len)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_write(fd,buf,ofs,len);
      return caml_call1(Stdlib[1],cst_Unix_write)}
    function single_write(fd,buf,ofs,len)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_single_write(fd,buf,ofs,len);
      return caml_call1(Stdlib[1],cst_Unix_single_write)}
    function write_substring(fd,buf,ofs,len)
     {return write(fd,caml_call1(Stdlib_bytes[43],buf),ofs,len)}
    function single_write_substring(fd,buf,ofs,len)
     {return single_write(fd,caml_call1(Stdlib_bytes[43],buf),ofs,len)}
    function map_file(fd,opt,kind,layout,shared,dims)
     {if(opt)var sth=opt[1],pos=sth;else var pos=_d_;
      return runtime.caml_unix_map_file_bytecode
              (fd,kind,layout,shared,dims,pos)}
    function pause(param)
     {var sigs=runtime.unix_sigprocmask(1,0);
      return runtime.unix_sigsuspend(sigs)}
    function sleep(duration){return runtime.unix_sleep(duration)}
    function is_inet6_addr(s){return 16 === caml_ml_string_length(s)?1:0}
    var
     inet_addr_any=unix_inet_addr_of_string(cst_0_0_0_0),
     inet_addr_loopback=unix_inet_addr_of_string(cst_127_0_0_1);
    try
     {var _v_=unix_inet_addr_of_string(cst$9),inet_addr_any$0=_v_}
    catch(_dg_)
     {_dg_ = caml_wrap_exception(_dg_);
      if(_dg_[1] !== Stdlib[7])throw _dg_;
      var inet_addr_any$0=inet_addr_any}
    try
     {var _u_=unix_inet_addr_of_string(cst_1),inet6_addr_loopback=_u_}
    catch(_df_)
     {_df_ = caml_wrap_exception(_df_);
      if(_df_[1] !== Stdlib[7])throw _df_;
      var inet6_addr_loopback=inet_addr_loopback}
    function domain_of_sockaddr(param)
     {if(0 === param[0])return 0;var a=param[1];return is_inet6_addr(a)?2:1}
    function recv(fd,buf,ofs,len,flags)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_recv(fd,buf,ofs,len,flags);
      return caml_call1(Stdlib[1],cst_Unix_recv)}
    function recvfrom(fd,buf,ofs,len,flags)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_recvfrom(fd,buf,ofs,len,flags);
      return caml_call1(Stdlib[1],cst_Unix_recvfrom)}
    function send(fd,buf,ofs,len,flags)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_send(fd,buf,ofs,len,flags);
      return caml_call1(Stdlib[1],cst_Unix_send)}
    function sendto(fd,buf,ofs,len,flags,addr)
     {if
       (0
        <=
        ofs
        &&
        0
        <=
        len
        &&
        !
        ((caml_ml_bytes_length(buf) - len | 0) < ofs))
       return runtime.unix_sendto(fd,buf,ofs,len,flags,addr);
      return caml_call1(Stdlib[1],cst_Unix_sendto)}
    function send_substring(fd,buf,ofs,len,flags)
     {return send(fd,caml_call1(Stdlib_bytes[43],buf),ofs,len,flags)}
    function sendto_substring(fd,buf,ofs,len,flags,addr)
     {return sendto(fd,caml_call1(Stdlib_bytes[43],buf),ofs,len,flags,addr)}
    function getsockopt(fd,opt){return runtime.unix_getsockopt(0,fd,opt)}
    function setsockopt(fd,opt,v){return runtime.unix_setsockopt(0,fd,opt,v)}
    function getsockopt_int(fd,opt){return runtime.unix_getsockopt(1,fd,opt)}
    function setsockopt_int(fd,opt,v)
     {return runtime.unix_setsockopt(1,fd,opt,v)}
    function getsockopt_optint(fd,opt)
     {return runtime.unix_getsockopt(2,fd,opt)}
    function setsockopt_optint(fd,opt,v)
     {return runtime.unix_setsockopt(2,fd,opt,v)}
    function getsockopt_float(fd,opt)
     {return runtime.unix_getsockopt(3,fd,opt)}
    function setsockopt_float(fd,opt,v)
     {return runtime.unix_setsockopt(3,fd,opt,v)}
    function getsockopt_error(fd){return runtime.unix_getsockopt(4,fd,0)}
    function getaddrinfo(node,service,opts)
     {try
       {var
         _c7_=runtime.unix_getaddrinfo(node,service,opts),
         _c8_=caml_call1(Stdlib_list[9],_c7_);
        return _c8_}
      catch(_c9_)
       {_c9_ = caml_wrap_exception(_c9_);
        if(_c9_[1] === Stdlib[6])
         {var
           opt_socktype=[0,0],
           opt_protocol=[0,0],
           opt_passive=[0,0],
           _cU_=
            function(param)
             {if(typeof param === "number")
               {if(2 === param){opt_passive[1] = 1;return 0}}
              else
               switch(param[0])
                {case 1:var s=param[1];opt_socktype[1] = [0,s];return 0;
                 case 2:var p=param[1];opt_protocol[1] = p;return 0
                 }
              return 0};
          caml_call2(Stdlib_list[17],_cU_,opts);
          var
           get_port=
            function(ty,kind)
             {if(caml_string_equal(service,cst$4))return [0,[0,ty,0],0];
              try
               {var _dc_=[0,[0,ty,runtime.caml_int_of_string(service)],0];
                return _dc_}
              catch(_dd_)
               {_dd_ = caml_wrap_exception(_dd_);
                if(_dd_[1] === Stdlib[7])
                 try
                  {var
                    _db_=
                     [0,[0,ty,runtime.unix_getservbyname(service,kind)[3]],0];
                   return _db_}
                 catch(_de_)
                  {_de_ = caml_wrap_exception(_de_);
                   if(_de_ === Stdlib[8])return 0;
                   throw _de_}
                throw _dd_}},
           _cV_=opt_socktype[1];
          if(_cV_)
           var
            _cW_=_cV_[1],
            _cX_=
             1 === _cW_
              ?get_port(1,cst_udp)
              :_cW_
                ?caml_string_equal(service,cst$6)?[0,[0,_cW_,0],0]:0
                :get_port(0,cst_tcp),
            ports=_cX_;
          else
           var
            _c5_=get_port(1,cst_udp$0),
            _c6_=get_port(0,cst_tcp$0),
            ports=caml_call2(Stdlib[37],_c6_,_c5_);
          if(caml_string_equal(node,cst$5))
           var
            addresses=
             caml_call2(Stdlib_list[36],2,opts)
              ?[0,[0,inet_addr_any,cst_0_0_0_0$0],0]
              :[0,[0,inet_addr_loopback,cst_127_0_0_1$0],0];
          else
           try
            {var
              _c4_=[0,[0,unix_inet_addr_of_string(node),node],0],
              addresses=_c4_}
           catch(_c$_)
            {_c$_ = caml_wrap_exception(_c$_);
             if(_c$_[1] !== Stdlib[7])throw _c$_;
             try
              {var
                he=runtime.unix_gethostbyname(node),
                _c1_=caml_call1(Stdlib_array[11],he[4]),
                _c2_=function(a){return [0,a,he[1]]},
                _c3_=caml_call2(Stdlib_list[19],_c2_,_c1_),
                _c0_=_c3_}
             catch(_da_)
              {_da_ = caml_wrap_exception(_da_);
               if(_da_ !== Stdlib[8])throw _da_;
               var _c0_=0}
             var addresses=_c0_}
          var
           _cY_=
            function(param)
             {var port=param[2],ty=param[1];
              function _c__(param)
               {var name=param[2],addr=param[1];
                return [0,1,ty,opt_protocol[1],[1,addr,port],name]}
              return caml_call2(Stdlib_list[19],_c__,addresses)},
           _cZ_=caml_call2(Stdlib_list[19],_cY_,ports);
          return caml_call1(Stdlib_list[14],_cZ_)}
        throw _c9_}}
    function getnameinfo(addr,opts)
     {try
       {var _cQ_=runtime.unix_getnameinfo(addr,opts);return _cQ_}
      catch(_cR_)
       {_cR_ = caml_wrap_exception(_cR_);
        if(_cR_[1] === Stdlib[6])
         {if(0 === addr[0]){var f=addr[1];return [0,cst$7,f]}
          var p=addr[2],a=addr[1];
          try
           {if(caml_call2(Stdlib_list[36],1,opts))throw Stdlib[8];
            var _cP_=runtime.unix_gethostbyaddr(a)[1],hostname=_cP_}
          catch(_cT_)
           {_cT_ = caml_wrap_exception(_cT_);
            if(_cT_ !== Stdlib[8])throw _cT_;
            if(caml_call2(Stdlib_list[36],2,opts))throw Stdlib[8];
            var hostname=runtime.unix_string_of_inet_addr(a)}
          try
           {if(caml_call2(Stdlib_list[36],3,opts))throw Stdlib[8];
            var
             kind=caml_call2(Stdlib_list[36],4,opts)?cst_udp$1:cst_tcp$1,
             _cO_=runtime.unix_getservbyport(p,kind)[1],
             service=_cO_}
          catch(_cS_)
           {_cS_ = caml_wrap_exception(_cS_);
            if(_cS_ !== Stdlib[8])throw _cS_;
            var service=caml_call1(Stdlib_int[10],p)}
          return [0,hostname,service]}
        throw _cR_}}
    function waitpid_non_intr(pid)
     {for(;;)
       try
        {var _cM_=runtime.unix_waitpid(0,pid);return _cM_}
       catch(_cN_)
        {_cN_ = caml_wrap_exception(_cN_);
         if(_cN_[1] === Unix_error)
          {var _cL_=_cN_[2];
           if(typeof _cL_ === "number" && 11 === _cL_)continue}
         throw _cN_}}
    function system(cmd)
     {var pid=runtime.unix_spawn(shell,[0,shell,cst_c,cmd],0,0,[0,0,1,2]);
      return waitpid_non_intr(pid)[2]}
    function create_process_gen
     (usepath,cmd,args,optenv,new_stdin,new_stdout,new_stderr)
     {var toclose=[0,0];
      function close_after(param)
       {var _cH_=toclose[1];
        function _cI_(fd)
         {try
           {var _cJ_=runtime.unix_close(fd);return _cJ_}
          catch(_cK_)
           {_cK_ = caml_wrap_exception(_cK_);
            if(_cK_[1] === Unix_error)return 0;
            throw _cK_}}
        return caml_call2(Stdlib_list[17],_cI_,_cH_)}
      function file_descr_not_standard(fd)
       {var fd$0=fd;
        for(;;)
         {if(3 <= fd$0)return fd$0;
          var fd$1=runtime.unix_dup(_e_,fd$0);
          toclose[1] = [0,fd$1,toclose[1]];
          var fd$0=fd$1;
          continue}}
      var
       _cD_=2 === new_stderr?2:file_descr_not_standard(new_stderr),
       _cE_=1 === new_stdout?1:file_descr_not_standard(new_stdout),
       _cF_=0 === new_stdin?0:file_descr_not_standard(new_stdin),
       redirections=[0,_cF_,_cE_,_cD_];
      function _cG_(param)
       {return runtime.unix_spawn(cmd,args,optenv,usepath,redirections)}
      return caml_call2(Stdlib_fun[4],close_after,_cG_)}
    function create_process(cmd,args,new_stdin,new_stdout,new_stderr)
     {return create_process_gen(1,cmd,args,0,new_stdin,new_stdout,new_stderr)}
    function create_process_env(cmd,args,env,new_stdin,new_stdout,new_stderr)
     {return create_process_gen
              (1,cmd,args,[0,env],new_stdin,new_stdout,new_stderr)}
    var popen_processes=caml_call2(Stdlib_hashtbl[1],0,7);
    function open_proc(prog,args,envopt,proc,input,output,error)
     {var pid=create_process_gen(0,prog,args,envopt,input,output,error);
      return caml_call3(Stdlib_hashtbl[5],popen_processes,proc,pid)}
    function open_process_args_in(prog,args)
     {var
       match=runtime.unix_pipe(_f_,0),
       in_write=match[2],
       in_read=match[1],
       inchan=runtime.unix_inchannel_of_filedescr(in_read);
      try
       {open_proc(prog,args,0,[1,inchan],stdin,in_write,stderr)}
      catch(e)
       {e = caml_wrap_exception(e);
        caml_call1(Stdlib[93],inchan);
        runtime.unix_close(in_write);
        throw e}
      runtime.unix_close(in_write);
      return inchan}
    function open_process_args_out(prog,args)
     {var
       match=runtime.unix_pipe(_g_,0),
       out_write=match[2],
       out_read=match[1],
       outchan=runtime.unix_outchannel_of_filedescr(out_write);
      try
       {open_proc(prog,args,0,[2,outchan],out_read,stdout,stderr)}
      catch(e)
       {e = caml_wrap_exception(e);
        caml_call1(Stdlib[76],outchan);
        runtime.unix_close(out_read);
        throw e}
      runtime.unix_close(out_read);
      return outchan}
    function open_process_args(prog,args)
     {var match=runtime.unix_pipe(_h_,0),in_write=match[2],in_read=match[1];
      try
       {var match$0=runtime.unix_pipe(_i_,0)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        throw e}
      var
       out_write=match$0[2],
       out_read=match$0[1],
       inchan=runtime.unix_inchannel_of_filedescr(in_read),
       outchan=runtime.unix_outchannel_of_filedescr(out_write);
      try
       {open_proc(prog,args,0,[0,inchan,outchan],out_read,in_write,stderr)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(out_read);
        runtime.unix_close(out_write);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        throw e}
      runtime.unix_close(out_read);
      runtime.unix_close(in_write);
      return [0,inchan,outchan]}
    function open_process_args_full(prog,args,env)
     {var match=runtime.unix_pipe(_j_,0),in_write=match[2],in_read=match[1];
      try
       {var match$0=runtime.unix_pipe(_k_,0)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        throw e}
      var out_write=match$0[2],out_read=match$0[1];
      try
       {var match$1=runtime.unix_pipe(_l_,0)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        runtime.unix_close(out_read);
        runtime.unix_close(out_write);
        throw e}
      var
       err_write=match$1[2],
       err_read=match$1[1],
       inchan=runtime.unix_inchannel_of_filedescr(in_read),
       outchan=runtime.unix_outchannel_of_filedescr(out_write),
       errchan=runtime.unix_inchannel_of_filedescr(err_read);
      try
       {open_proc
         (prog,
          args,
          [0,env],
          [3,inchan,outchan,errchan],
          out_read,
          in_write,
          err_write)}
      catch(e)
       {e = caml_wrap_exception(e);
        runtime.unix_close(out_read);
        runtime.unix_close(out_write);
        runtime.unix_close(in_read);
        runtime.unix_close(in_write);
        runtime.unix_close(err_read);
        runtime.unix_close(err_write);
        throw e}
      runtime.unix_close(out_read);
      runtime.unix_close(in_write);
      runtime.unix_close(err_write);
      return [0,inchan,outchan,errchan]}
    function open_process_shell(fn,cmd)
     {return caml_call2(fn,shell,[0,shell,cst_c$0,cmd])}
    function open_process_in(cmd)
     {return open_process_shell(open_process_args_in,cmd)}
    function open_process_out(cmd)
     {return open_process_shell(open_process_args_out,cmd)}
    function open_process(cmd)
     {return open_process_shell(open_process_args,cmd)}
    function open_process_full(cmd)
     {return open_process_shell(open_process_args_full,cmd)}
    function find_proc_id(fun_name,proc)
     {try
       {var _cB_=caml_call2(Stdlib_hashtbl[6],popen_processes,proc);
        return _cB_}
      catch(_cC_)
       {_cC_ = caml_wrap_exception(_cC_);
        if(_cC_ === Stdlib[8])throw [0,Unix_error,3,fun_name,cst$8];
        throw _cC_}}
    function remove_proc_id(proc)
     {return caml_call2(Stdlib_hashtbl[10],popen_processes,proc)}
    function process_in_pid(inchan)
     {return find_proc_id(cst_process_in_pid,[1,inchan])}
    function process_out_pid(outchan)
     {return find_proc_id(cst_process_out_pid,[2,outchan])}
    function process_pid(param)
     {var outchan=param[2],inchan=param[1];
      return find_proc_id(cst_process_pid,[0,inchan,outchan])}
    function process_full_pid(param)
     {var errchan=param[3],outchan=param[2],inchan=param[1];
      return find_proc_id(cst_process_full_pid,[3,inchan,outchan,errchan])}
    function close_process_in(inchan)
     {var proc=[1,inchan],pid=find_proc_id(cst_close_process_in,proc);
      remove_proc_id(proc);
      caml_call1(Stdlib[93],inchan);
      return waitpid_non_intr(pid)[2]}
    function close_process_out(outchan)
     {var proc=[2,outchan],pid=find_proc_id(cst_close_process_out,proc);
      remove_proc_id(proc);
      try
       {caml_call1(Stdlib[76],outchan)}
      catch(_cA_)
       {_cA_ = caml_wrap_exception(_cA_);if(_cA_[1] !== Stdlib[11])throw _cA_}
      return waitpid_non_intr(pid)[2]}
    function close_process(param)
     {var
       outchan=param[2],
       inchan=param[1],
       proc=[0,inchan,outchan],
       pid=find_proc_id(cst_close_process,proc);
      remove_proc_id(proc);
      caml_call1(Stdlib[93],inchan);
      try
       {caml_call1(Stdlib[76],outchan)}
      catch(_cz_)
       {_cz_ = caml_wrap_exception(_cz_);if(_cz_[1] !== Stdlib[11])throw _cz_}
      return waitpid_non_intr(pid)[2]}
    function close_process_full(param)
     {var
       errchan=param[3],
       outchan=param[2],
       inchan=param[1],
       proc=[3,inchan,outchan,errchan],
       pid=find_proc_id(cst_close_process_full,proc);
      remove_proc_id(proc);
      caml_call1(Stdlib[93],inchan);
      try
       {caml_call1(Stdlib[76],outchan)}
      catch(_cy_)
       {_cy_ = caml_wrap_exception(_cy_);if(_cy_[1] !== Stdlib[11])throw _cy_}
      caml_call1(Stdlib[93],errchan);
      return waitpid_non_intr(pid)[2]}
    function open_connection(sockaddr)
     {var sock=runtime.unix_socket(_m_,domain_of_sockaddr(sockaddr),0,0);
      try
       {runtime.unix_connect(sock,sockaddr);
        var
         _cw_=runtime.unix_outchannel_of_filedescr(sock),
         _cx_=[0,runtime.unix_inchannel_of_filedescr(sock),_cw_];
        return _cx_}
      catch(exn)
       {exn = caml_wrap_exception(exn);runtime.unix_close(sock);throw exn}}
    function shutdown_connection(inchan)
     {return runtime.unix_shutdown(caml_channel_descriptor(inchan),1)}
    function accept_non_intr(s)
     {for(;;)
       try
        {var _cu_=runtime.unix_accept(_n_,s);return _cu_}
       catch(_cv_)
        {_cv_ = caml_wrap_exception(_cv_);
         if(_cv_[1] === Unix_error)
          {var _ct_=_cv_[2];
           if(typeof _ct_ === "number" && 11 === _ct_)continue}
         throw _cv_}}
    function establish_server(server_fun,sockaddr)
     {var sock=runtime.unix_socket(_o_,domain_of_sockaddr(sockaddr),0,0);
      runtime.unix_setsockopt(0,sock,2,1);
      runtime.unix_bind(sock,sockaddr);
      runtime.unix_listen(sock,5);
      for(;;)
       {var match=accept_non_intr(sock),s=match[1],id=runtime.unix_fork(0);
        if(0 === id)
         {if(0 !== runtime.unix_fork(0))runtime.unix_exit(0);
          runtime.unix_close(sock);
          var
           inchan=runtime.unix_inchannel_of_filedescr(s),
           outchan=runtime.unix_outchannel_of_filedescr(s);
          caml_call2(server_fun,inchan,outchan);
          caml_call1(Stdlib[99],0)}
        else
         {runtime.unix_close(s);waitpid_non_intr(id)}
        continue}}
    function setsid(_cs_){return runtime.unix_setsid(_cs_)}
    function tcflow(_cr_,_cq_){return runtime.unix_tcflow(_cr_,_cq_)}
    function tcflush(_cp_,_co_){return runtime.unix_tcflush(_cp_,_co_)}
    function tcdrain(_cn_){return runtime.unix_tcdrain(_cn_)}
    function tcsendbreak(_cm_,_cl_)
     {return runtime.unix_tcsendbreak(_cm_,_cl_)}
    function tcsetattr(_ck_,_cj_,_ci_)
     {return runtime.unix_tcsetattr(_ck_,_cj_,_ci_)}
    function tcgetattr(_ch_){return runtime.unix_tcgetattr(_ch_)}
    function getservbyport(_cg_,_cf_)
     {return runtime.unix_getservbyport(_cg_,_cf_)}
    function getservbyname(_ce_,_cd_)
     {return runtime.unix_getservbyname(_ce_,_cd_)}
    function getprotobynumber(_cc_)
     {return runtime.unix_getprotobynumber(_cc_)}
    function getprotobyname(_cb_){return runtime.unix_getprotobyname(_cb_)}
    function gethostbyaddr(_ca_){return runtime.unix_gethostbyaddr(_ca_)}
    function gethostbyname(_b$_){return runtime.unix_gethostbyname(_b$_)}
    function gethostname(_b__){return runtime.unix_gethostname(_b__)}
    function getpeername(_b9_){return runtime.unix_getpeername(_b9_)}
    function getsockname(_b8_){return runtime.unix_getsockname(_b8_)}
    function shutdown(_b7_,_b6_){return runtime.unix_shutdown(_b7_,_b6_)}
    function listen(_b5_,_b4_){return runtime.unix_listen(_b5_,_b4_)}
    function connect(_b3_,_b2_){return runtime.unix_connect(_b3_,_b2_)}
    function bind(_b1_,_b0_){return runtime.unix_bind(_b1_,_b0_)}
    function accept(_bZ_,_bY_){return runtime.unix_accept(_bZ_,_bY_)}
    function socketpair(_bX_,_bW_,_bV_,_bU_)
     {return runtime.unix_socketpair(_bX_,_bW_,_bV_,_bU_)}
    function socket(_bT_,_bS_,_bR_,_bQ_)
     {return runtime.unix_socket(_bT_,_bS_,_bR_,_bQ_)}
    function string_of_inet_addr(_bP_)
     {return runtime.unix_string_of_inet_addr(_bP_)}
    function inet_addr_of_string(_bO_){return unix_inet_addr_of_string(_bO_)}
    function getgrgid(_bN_){return runtime.unix_getgrgid(_bN_)}
    function getpwuid(_bM_){return runtime.unix_getpwuid(_bM_)}
    function getgrnam(_bL_){return runtime.unix_getgrnam(_bL_)}
    function getpwnam(_bK_){return runtime.unix_getpwnam(_bK_)}
    function getlogin(_bJ_){return runtime.unix_getlogin(_bJ_)}
    function initgroups(_bI_,_bH_){return runtime.unix_initgroups(_bI_,_bH_)}
    function setgroups(_bG_){return runtime.unix_setgroups(_bG_)}
    function getgroups(_bF_){return runtime.unix_getgroups(_bF_)}
    function setgid(_bE_){return runtime.unix_setgid(_bE_)}
    function getegid(_bD_){return runtime.unix_getegid(_bD_)}
    function getgid(_bC_){return runtime.unix_getgid(_bC_)}
    function setuid(_bB_){return runtime.unix_setuid(_bB_)}
    function geteuid(_bA_){return runtime.unix_geteuid(_bA_)}
    function getuid(_bz_){return runtime.unix_getuid(_bz_)}
    function setitimer(_by_,_bx_){return runtime.unix_setitimer(_by_,_bx_)}
    function getitimer(_bw_){return runtime.unix_getitimer(_bw_)}
    function utimes(_bv_,_bu_,_bt_)
     {return runtime.unix_utimes(_bv_,_bu_,_bt_)}
    function times(_bs_){return runtime.unix_times(_bs_)}
    function sleepf(_br_){return runtime.unix_sleep(_br_)}
    function alarm(_bq_){return runtime.unix_alarm(_bq_)}
    var
     mktime=runtime.unix_mktime,
     localtime=runtime.unix_localtime,
     gmtime=runtime.unix_gmtime;
    function gettimeofday(_bp_){return runtime.unix_gettimeofday(_bp_)}
    function time(_bo_){return runtime.unix_time(_bo_)}
    function sigsuspend(_bn_){return runtime.unix_sigsuspend(_bn_)}
    function sigpending(_bm_){return runtime.unix_sigpending(_bm_)}
    function sigprocmask(_bl_,_bk_)
     {return runtime.unix_sigprocmask(_bl_,_bk_)}
    function kill(_bj_,_bi_){return runtime.unix_kill(_bj_,_bi_)}
    function lockf(_bh_,_bg_,_bf_){return runtime.unix_lockf(_bh_,_bg_,_bf_)}
    function select(_be_,_bd_,_bc_,_bb_)
     {return runtime.unix_select(_be_,_bd_,_bc_,_bb_)}
    function readlink(_ba_){return runtime.unix_readlink(_ba_)}
    function has_symlink(_a$_){return runtime.unix_has_symlink(_a$_)}
    function symlink(_a__,_a9_,_a8_)
     {return runtime.unix_symlink(_a__,_a9_,_a8_)}
    function mkfifo(_a7_,_a6_){return runtime.unix_mkfifo(_a7_,_a6_)}
    function pipe(_a5_,_a4_){return runtime.unix_pipe(_a5_,_a4_)}
    function closedir(_a3_){return runtime.unix_closedir(_a3_)}
    function rewinddir(_a2_){return runtime.unix_rewinddir(_a2_)}
    function readdir(_a1_){return runtime.unix_readdir(_a1_)}
    function opendir(_a0_){return runtime.unix_opendir(_a0_)}
    function chroot(_aZ_){return runtime.unix_chroot(_aZ_)}
    function getcwd(_aY_){return runtime.unix_getcwd(_aY_)}
    function chdir(_aX_){return runtime.unix_chdir(_aX_)}
    function rmdir(_aW_){return runtime.unix_rmdir(_aW_)}
    function mkdir(_aV_,_aU_){return runtime.unix_mkdir(_aV_,_aU_)}
    function clear_close_on_exec(_aT_)
     {return runtime.unix_clear_close_on_exec(_aT_)}
    function set_close_on_exec(_aS_)
     {return runtime.unix_set_close_on_exec(_aS_)}
    function clear_nonblock(_aR_){return runtime.unix_clear_nonblock(_aR_)}
    function set_nonblock(_aQ_){return runtime.unix_set_nonblock(_aQ_)}
    function dup2(_aP_,_aO_,_aN_){return runtime.unix_dup2(_aP_,_aO_,_aN_)}
    function dup(_aM_,_aL_){return runtime.unix_dup(_aM_,_aL_)}
    function access(_aK_,_aJ_){return runtime.unix_access(_aK_,_aJ_)}
    function umask(_aI_){return runtime.unix_umask(_aI_)}
    function fchown(_aH_,_aG_,_aF_)
     {return runtime.unix_fchown(_aH_,_aG_,_aF_)}
    function chown(_aE_,_aD_,_aC_){return runtime.unix_chown(_aE_,_aD_,_aC_)}
    function fchmod(_aB_,_aA_){return runtime.unix_fchmod(_aB_,_aA_)}
    function chmod(_az_,_ay_){return runtime.unix_chmod(_az_,_ay_)}
    function link(_ax_,_aw_,_av_){return runtime.unix_link(_ax_,_aw_,_av_)}
    function rename(_au_,_at_){return runtime.unix_rename(_au_,_at_)}
    function unlink(_as_){return runtime.unix_unlink(_as_)}
    function _p_(_ar_){return runtime.unix_fstat_64(_ar_)}
    function _q_(_aq_){return runtime.unix_lstat_64(_aq_)}
    function _r_(_ap_){return runtime.unix_stat_64(_ap_)}
    function _s_(_ao_,_an_){return runtime.unix_ftruncate_64(_ao_,_an_)}
    function _t_(_am_,_al_){return runtime.unix_truncate_64(_am_,_al_)}
    var
     LargeFile=
      [0,
       function(_ak_,_aj_,_ai_){return runtime.unix_lseek_64(_ak_,_aj_,_ai_)},
       _t_,
       _s_,
       _r_,
       _q_,
       _p_],
     isatty=runtime.unix_isatty;
    function fstat(_ah_){return runtime.unix_fstat(_ah_)}
    function lstat(_ag_){return runtime.unix_lstat(_ag_)}
    function stat(_af_){return runtime.unix_stat(_af_)}
    function ftruncate(_ae_,_ad_){return runtime.unix_ftruncate(_ae_,_ad_)}
    function truncate(_ac_,_ab_){return runtime.unix_truncate(_ac_,_ab_)}
    function lseek(_aa_,_$_,___){return runtime.unix_lseek(_aa_,_$_,___)}
    var
     descr_of_out_channel=caml_channel_descriptor,
     descr_of_in_channel=caml_channel_descriptor;
    function out_channel_of_descr(_Z_)
     {return runtime.unix_outchannel_of_filedescr(_Z_)}
    function in_channel_of_descr(_Y_)
     {return runtime.unix_inchannel_of_filedescr(_Y_)}
    function fsync(_X_){return runtime.unix_fsync(_X_)}
    function close(_W_){return runtime.unix_close(_W_)}
    function openfile(_V_,_U_,_T_){return runtime.unix_open(_V_,_U_,_T_)}
    function nice(_S_){return runtime.unix_nice(_S_)}
    function getppid(_R_){return runtime.unix_getppid(_R_)}
    function getpid(_Q_){return runtime.unix_getpid(_Q_)}
    function exit(_P_){return runtime.unix_exit(_P_)}
    function waitpid(_O_,_N_){return runtime.unix_waitpid(_O_,_N_)}
    function wait(_M_){return runtime.unix_wait(_M_)}
    function fork(_L_){return runtime.unix_fork(_L_)}
    function execvpe(_K_,_J_,_I_){return runtime.unix_execvpe(_K_,_J_,_I_)}
    function execvp(_H_,_G_){return runtime.unix_execvp(_H_,_G_)}
    function execve(_F_,_E_,_D_){return runtime.unix_execve(_F_,_E_,_D_)}
    function execv(_C_,_B_){return runtime.unix_execv(_C_,_B_)}
    function putenv(_A_,_z_){return runtime.unix_putenv(_A_,_z_)}
    var
     unsafe_getenv=runtime.caml_sys_unsafe_getenv,
     getenv=runtime.caml_sys_getenv;
    function unsafe_environment(_y_)
     {return runtime.unix_environment_unsafe(_y_)}
    function environment(_x_){return runtime.unix_environment(_x_)}
    function error_message(_w_){return runtime.unix_error_message(_w_)}
    var
     include=
      [0,
       Unix_error,
       error_message,
       handle_unix_error,
       environment,
       unsafe_environment,
       getenv,
       unsafe_getenv,
       putenv,
       execv,
       execve,
       execvp,
       execvpe,
       fork,
       wait,
       waitpid,
       system,
       exit,
       getpid,
       getppid,
       nice,
       stdin,
       stdout,
       stderr,
       openfile,
       close,
       fsync,
       read,
       write,
       single_write,
       write_substring,
       single_write_substring,
       in_channel_of_descr,
       out_channel_of_descr,
       descr_of_in_channel,
       descr_of_out_channel,
       lseek,
       truncate,
       ftruncate,
       stat,
       lstat,
       fstat,
       isatty,
       LargeFile,
       map_file,
       unlink,
       rename,
       link,
       chmod,
       fchmod,
       chown,
       fchown,
       umask,
       access,
       dup,
       dup2,
       set_nonblock,
       clear_nonblock,
       set_close_on_exec,
       clear_close_on_exec,
       mkdir,
       rmdir,
       chdir,
       getcwd,
       chroot,
       opendir,
       readdir,
       rewinddir,
       closedir,
       pipe,
       mkfifo,
       create_process,
       create_process_env,
       open_process_in,
       open_process_out,
       open_process,
       open_process_full,
       open_process_args_in,
       open_process_args_out,
       open_process_args,
       open_process_args_full,
       process_in_pid,
       process_out_pid,
       process_pid,
       process_full_pid,
       close_process_in,
       close_process_out,
       close_process,
       close_process_full,
       symlink,
       has_symlink,
       readlink,
       select,
       lockf,
       kill,
       sigprocmask,
       sigpending,
       sigsuspend,
       pause,
       time,
       gettimeofday,
       gmtime,
       localtime,
       mktime,
       alarm,
       sleep,
       sleepf,
       times,
       utimes,
       getitimer,
       setitimer,
       getuid,
       geteuid,
       setuid,
       getgid,
       getegid,
       setgid,
       getgroups,
       setgroups,
       initgroups,
       getlogin,
       getpwnam,
       getgrnam,
       getpwuid,
       getgrgid,
       inet_addr_of_string,
       string_of_inet_addr,
       inet_addr_any,
       inet_addr_loopback,
       inet_addr_any$0,
       inet6_addr_loopback,
       is_inet6_addr,
       socket,
       domain_of_sockaddr,
       socketpair,
       accept,
       bind,
       connect,
       listen,
       shutdown,
       getsockname,
       getpeername,
       recv,
       recvfrom,
       send,
       send_substring,
       sendto,
       sendto_substring,
       getsockopt,
       setsockopt,
       getsockopt_int,
       setsockopt_int,
       getsockopt_optint,
       setsockopt_optint,
       getsockopt_float,
       setsockopt_float,
       getsockopt_error,
       open_connection,
       shutdown_connection,
       establish_server,
       gethostname,
       gethostbyname,
       gethostbyaddr,
       getprotobyname,
       getprotobynumber,
       getservbyname,
       getservbyport,
       getaddrinfo,
       getnameinfo,
       tcgetattr,
       tcsetattr,
       tcsendbreak,
       tcdrain,
       tcflush,
       tcflow,
       setsid];
    caml_register_global(136,include,"Unix");
    var
     UnixLabels=
      [0,
       Unix_error,
       error_message,
       handle_unix_error,
       environment,
       unsafe_environment,
       getenv,
       unsafe_getenv,
       putenv,
       execv,
       execve,
       execvp,
       execvpe,
       fork,
       wait,
       waitpid,
       system,
       exit,
       getpid,
       getppid,
       nice,
       stdin,
       stdout,
       stderr,
       openfile,
       close,
       fsync,
       read,
       write,
       single_write,
       write_substring,
       single_write_substring,
       in_channel_of_descr,
       out_channel_of_descr,
       descr_of_in_channel,
       descr_of_out_channel,
       lseek,
       truncate,
       ftruncate,
       stat,
       lstat,
       fstat,
       isatty,
       LargeFile,
       map_file,
       unlink,
       rename,
       link,
       chmod,
       fchmod,
       chown,
       fchown,
       umask,
       access,
       dup,
       dup2,
       set_nonblock,
       clear_nonblock,
       set_close_on_exec,
       clear_close_on_exec,
       mkdir,
       rmdir,
       chdir,
       getcwd,
       chroot,
       opendir,
       readdir,
       rewinddir,
       closedir,
       pipe,
       mkfifo,
       create_process,
       create_process_env,
       open_process_in,
       open_process_out,
       open_process,
       open_process_full,
       open_process_args_in,
       open_process_args_out,
       open_process_args,
       open_process_args_full,
       process_in_pid,
       process_out_pid,
       process_pid,
       process_full_pid,
       close_process_in,
       close_process_out,
       close_process,
       close_process_full,
       symlink,
       has_symlink,
       readlink,
       select,
       lockf,
       kill,
       sigprocmask,
       sigpending,
       sigsuspend,
       pause,
       time,
       gettimeofday,
       gmtime,
       localtime,
       mktime,
       alarm,
       sleep,
       sleepf,
       times,
       utimes,
       getitimer,
       setitimer,
       getuid,
       geteuid,
       setuid,
       getgid,
       getegid,
       setgid,
       getgroups,
       setgroups,
       initgroups,
       getlogin,
       getpwnam,
       getgrnam,
       getpwuid,
       getgrgid,
       inet_addr_of_string,
       string_of_inet_addr,
       inet_addr_any,
       inet_addr_loopback,
       inet_addr_any$0,
       inet6_addr_loopback,
       is_inet6_addr,
       socket,
       domain_of_sockaddr,
       socketpair,
       accept,
       bind,
       connect,
       listen,
       shutdown,
       getsockname,
       getpeername,
       recv,
       recvfrom,
       send,
       send_substring,
       sendto,
       sendto_substring,
       getsockopt,
       setsockopt,
       getsockopt_int,
       setsockopt_int,
       getsockopt_optint,
       setsockopt_optint,
       getsockopt_float,
       setsockopt_float,
       getsockopt_error,
       open_connection,
       shutdown_connection,
       establish_server,
       gethostname,
       gethostbyname,
       gethostbyaddr,
       getprotobyname,
       getprotobynumber,
       getservbyname,
       getservbyport,
       getaddrinfo,
       getnameinfo,
       tcgetattr,
       tcsetattr,
       tcsendbreak,
       tcdrain,
       tcflush,
       tcflow,
       setsid];
    caml_register_global(137,UnixLabels,"UnixLabels");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJ1bml4LmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7SSIsInNvdXJjZXNDb250ZW50IjpbXX0=
