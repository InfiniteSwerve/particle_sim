(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_js_from_bool=runtime.caml_js_from_bool,
     caml_js_wrap_callback=runtime.caml_js_wrap_callback,
     caml_jsstring_of_string=runtime.caml_jsstring_of_string,
     caml_register_global=runtime.caml_register_global,
     caml_string_of_jsbytes=runtime.caml_string_of_jsbytes,
     caml_string_of_jsstring=runtime.caml_string_of_jsstring,
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
    function caml_call5(f,a0,a1,a2,a3,a4)
     {return f.length == 5
              ?f(a0,a1,a2,a3,a4)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4])}
    function caml_call6(f,a0,a1,a2,a3,a4,a5)
     {return f.length == 6
              ?f(a0,a1,a2,a3,a4,a5)
              :runtime.caml_call_gen(f,[a0,a1,a2,a3,a4,a5])}
    var
     global_data=runtime.caml_get_global_data(),
     cst_PATCH=caml_string_of_jsbytes("PATCH"),
     cst_POST=caml_string_of_jsbytes("POST"),
     cst_HEAD=caml_string_of_jsbytes("HEAD"),
     cst_DELETE=caml_string_of_jsbytes("DELETE"),
     cst_PUT=caml_string_of_jsbytes("PUT"),
     cst_OPTIONS=caml_string_of_jsbytes("OPTIONS"),
     cst_GET=caml_string_of_jsbytes("GET"),
     cst_POST$2=caml_string_of_jsbytes("POST"),
     c=caml_string_of_jsbytes("application/x-www-form-urlencoded"),
     cst_POST$0=caml_string_of_jsbytes("POST"),
     cst_POST$1=caml_string_of_jsbytes("POST"),
     cst_GET$0=caml_string_of_jsbytes("GET"),
     cst$3=caml_string_of_jsbytes("&"),
     cst$4=caml_string_of_jsbytes("?"),
     cst$2=caml_string_of_jsbytes(""),
     cst=caml_string_of_jsbytes("="),
     cst$0=caml_string_of_jsbytes("="),
     cst$1=caml_string_of_jsbytes("&"),
     cst_Js_of_ocaml_lwt_Lwt_xmlHtt=
      caml_string_of_jsbytes
       ("Js_of_ocaml_lwt__Lwt_xmlHttpRequest.Wrong_headers"),
     cst_Exception_during_Lwt_async=
      caml_string_of_jsbytes("Exception during Lwt.async: "),
     cst_Jsonp_call_Cannot_parse_ur=
      caml_string_of_jsbytes("Jsonp.call: Cannot parse url"),
     cst_callback=caml_string_of_jsbytes("callback"),
     cst$6=caml_string_of_jsbytes(""),
     cst$5=caml_string_of_jsbytes(""),
     cst_readystatechange=caml_string_of_jsbytes("readystatechange"),
     cst_transitionend=caml_string_of_jsbytes("transitionend"),
     cst_transition=caml_string_of_jsbytes("transition"),
     cst_otransitionend=caml_string_of_jsbytes("otransitionend"),
     cst_oTransitionEnd=caml_string_of_jsbytes("oTransitionEnd"),
     cst_OTransition=caml_string_of_jsbytes("OTransition"),
     cst_transitionend$0=caml_string_of_jsbytes("transitionend"),
     cst_MozTransition=caml_string_of_jsbytes("MozTransition"),
     cst_webkitTransitionEnd=caml_string_of_jsbytes("webkitTransitionEnd"),
     cst_WebkitTransition=caml_string_of_jsbytes("WebkitTransition"),
     cst_Lwt_js_event$1=caml_string_of_jsbytes("Lwt_js_event"),
     cst_Lwt_js_event$0=caml_string_of_jsbytes("Lwt_js_event"),
     cst_Lwt_js_event=caml_string_of_jsbytes("Lwt_js_event"),
     Stdlib_string=global_data.Stdlib__string,
     Stdlib_char=global_data.Stdlib__char,
     Js_of_ocaml_Url=global_data.Js_of_ocaml__Url,
     Js_of_ocaml_Js=global_data.Js_of_ocaml__Js,
     Js_of_ocaml_Dom=global_data.Js_of_ocaml__Dom,
     Js_of_ocaml_Dom_html=global_data.Js_of_ocaml__Dom_html,
     Lwt=global_data.Lwt,
     Js_of_ocaml_Form=global_data.Js_of_ocaml__Form,
     Stdlib_list=global_data.Stdlib__list,
     Stdlib=global_data.Stdlib,
     Js_of_ocaml_XmlHttpRequest=global_data.Js_of_ocaml__XmlHttpRequest,
     Assert_failure=global_data.Assert_failure,
     Js_of_ocaml_File=global_data.Js_of_ocaml__File,
     Stdlib_printexc=global_data.Stdlib__printexc,
     Js_of_ocaml_Firebug=global_data.Js_of_ocaml__Firebug,
     Stdlib_buffer=global_data.Stdlib__buffer,
     Stdlib_random=global_data.Stdlib__random,
     CamlinternalLazy=global_data.CamlinternalLazy,
     Lwt_condition=global_data.Lwt_condition,
     Js_of_ocaml_lwt=[0];
    caml_register_global(128,Js_of_ocaml_lwt,"Js_of_ocaml_lwt__");
    var
     Poly=[0],
     _e_=[0,caml_string_of_jsbytes("lib/lwt/lwt_xmlHttpRequest.ml"),98,29],
     _d_=[0,caml_string_of_jsbytes("lib/lwt/lwt_xmlHttpRequest.ml"),90,29],
     _c_=[0,caml_string_of_jsbytes("lib/lwt/lwt_xmlHttpRequest.ml"),82,29],
     _b_=[0,caml_string_of_jsbytes("lib/lwt/lwt_xmlHttpRequest.ml"),74,29],
     _a_=[0,caml_string_of_jsbytes("lib/lwt/lwt_xmlHttpRequest.ml"),66,29],
     _h_=[0,caml_string_of_jsbytes("lib/lwt/lwt_file.ml"),37,22];
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
     Js_of_ocaml_lwt_Import=
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
    caml_register_global(131,Js_of_ocaml_lwt_Import,"Js_of_ocaml_lwt__Import");
    var
     Wrong_headers=
      [248,cst_Js_of_ocaml_lwt_Lwt_xmlHtt,runtime.caml_fresh_oo_id(0)];
    function has_get_args(url)
     {try
       {caml_call2(String[24],url,63);var _dq_=1;return _dq_}
      catch(_dr_)
       {_dr_ = caml_wrap_exception(_dr_);
        if(_dr_ === Stdlib[8])return 0;
        throw _dr_}}
    function perform_raw
     (opt,
      content_type,
      _cI_,
      _cH_,
      progress,
      upload_progress,
      contents,
      override_mime_type,
      override_method,
      with_credentials,
      response_type,
      url)
     {if(opt)var sth=opt[1],headers=sth;else var headers=0;
      if(_cI_)var sth$0=_cI_[1],get_args=sth$0;else var get_args=0;
      if(_cH_)
       var sth$1=_cH_[1],check_headers=sth$1;
      else
       var check_headers=function(param,_dp_){return 1};
      if(contents)
       {var c$0=contents[1],_cJ_=c$0[1];
        if(440620227 === _cJ_)
         {var
           args=c$0[2],
           _cK_=
            function(x)
             {var _do_=x[2];
              if(typeof _do_ !== "number" && -976970511 === _do_[1])return 1;
              return 0},
           only_strings=caml_call2(Stdlib_list[32],_cK_,args),
           form_contents=
            only_strings?[0,891486873,[0,0]]:caml_call1(Js_of_ocaml_Form[6],0),
           _cL_=
            function(param)
             {var value=param[2],name=param[1];
              return caml_call2
                      (Js_of_ocaml_Form[3],form_contents,[0,name,value])};
          caml_call2(Stdlib_list[17],_cL_,args);
          var _cM_=[0,-836918635,form_contents]}
        else
         if(737307005 <= _cJ_)
          var b=c$0[2],_cM_=[0,737307005,b];
         else
          var _cM_=c$0;
        var contents$0=[0,_cM_]}
      else
       var contents$0=0;
      function override_method$0(m)
       {if(override_method)
         {var v=override_method[1];
          return 492530731 <= v
                  ?891112544 <= v
                    ?994393768 <= v?cst_PATCH:cst_POST
                    :801894688 <= v?cst_HEAD:cst_DELETE
                  :3546230 === v?cst_GET:3997359 <= v?cst_PUT:cst_OPTIONS}
        return m}
      if(contents$0)
       {var _cN_=contents$0[1];
        if(-836918635 === _cN_[1])
         {var form=_cN_[2];
          if(891486873 <= form[1])
           var
            content_type$0=content_type || [0,c],
            content_type$1=content_type$0,
            method=override_method$0(cst_POST$0);
          else
           var
            content_type$1=content_type,
            method=override_method$0(cst_POST$1)}
        else
         var content_type$1=content_type,method=override_method$0(cst_POST$2)}
      else
       var
        method$0=override_method$0(cst_GET$0),
        content_type$1=content_type,
        method=method$0;
      if(0 === get_args)
       var url$0=url;
      else
       var
        _cX_=caml_call1(Js_of_ocaml_Url[6],get_args),
        _cY_=has_get_args(url)?cst$3:cst$4,
        _cZ_=caml_call2(Stdlib[28],_cY_,_cX_),
        url$0=caml_call2(Stdlib[28],url,_cZ_);
      var
       match=caml_call1(Lwt[22],0),
       w=match[2],
       res=match[1],
       t59=caml_call1(Js_of_ocaml_XmlHttpRequest[1],0),
       t10=caml_jsstring_of_string(url$0),
       t9=caml_jsstring_of_string(method);
      t59.open(t9,t10,Js_of_ocaml_Js[7]);
      if(override_mime_type)
       {var
         mime_type=override_mime_type[1],
         t13=caml_jsstring_of_string(mime_type);
        t59.overrideMimeType(t13)}
      switch(response_type)
       {case 0:t59.responseType = "arraybuffer";break;
        case 1:t59.responseType = "blob";break;
        case 2:t59.responseType = "document";break;
        case 3:t59.responseType = "json";break;
        case 4:t59.responseType = "text";break;
        default:t59.responseType = ""}
      if(with_credentials)
       {var c$1=with_credentials[1];t59.withCredentials = ! ! c$1}
      if(content_type$1)
       {var
         content_type$2=content_type$1[1],
         t30=caml_jsstring_of_string(content_type$2);
        t59.setRequestHeader("Content-type",t30)}
      function _cO_(param)
       {var
         v=param[2],
         n=param[1],
         t33=caml_jsstring_of_string(v),
         t32=caml_jsstring_of_string(n);
        return t59.setRequestHeader(t32,t33)}
      caml_call2(Stdlib_list[17],_cO_,headers);
      function headers$0(s)
       {function _dl_(v){return [0,caml_string_of_jsstring(v)]}
        var t35=runtime.caml_jsbytes_of_string(s);
        function _dm_(param){return 0}
        var _dn_=t59.getResponseHeader(t35);
        return caml_call3(Js_of_ocaml_Js[5][7],_dn_,_dm_,_dl_)}
      var st=[0,382334108];
      function do_check_headers(param)
       {if(382334108 === st[1])
         if(caml_call2(check_headers,t59.status,headers$0))
          st[1] = 583419792;
         else
          {caml_call2(Lwt[48],w,[0,Wrong_headers,[0,t59.status,headers$0]]);
           st[1] = 479410653;
           t59.abort()}
        return 479410653 !== st[1]?1:0}
      t59.onreadystatechange
      =
      caml_js_wrap_callback
       (function(param)
         {var match=t59.readyState;
          switch(match)
           {case 2:
             if(! Js_of_ocaml_Dom_html[123]){do_check_headers(0);return 0}
             break;
            case 3:
             if(Js_of_ocaml_Dom_html[123]){do_check_headers(0);return 0}break;
            case 4:
             var _dj_=do_check_headers(0);
             if(_dj_)
              {switch(response_type)
                {case 0:
                  var
                   code=t59.status,
                   _di_=function(param){throw [0,Assert_failure,_e_]},
                   response=
                    [0,
                     url$0,
                     code,
                     headers$0,
                     caml_call1(Js_of_ocaml_File[3][5],t59.response),
                     _di_];
                  break;
                 case 1:
                  var
                   code$0=t59.status,
                   _dh_=function(param){throw [0,Assert_failure,_d_]},
                   response=
                    [0,
                     url$0,
                     code$0,
                     headers$0,
                     caml_call1(Js_of_ocaml_File[3][2],t59.response),
                     _dh_];
                  break;
                 case 2:
                  var
                   code$1=t59.status,
                   _df_=function(param){throw [0,Assert_failure,_b_]},
                   response=
                    [0,
                     url$0,
                     code$1,
                     headers$0,
                     caml_call1(Js_of_ocaml_File[3][1],t59.response),
                     _df_];
                  break;
                 case 3:
                  var
                   code$2=t59.status,
                   _dg_=function(param){throw [0,Assert_failure,_c_]},
                   response=
                    [0,
                     url$0,
                     code$2,
                     headers$0,
                     caml_call1(Js_of_ocaml_File[3][3],t59.response),
                     _dg_];
                  break;
                 case 4:
                  var
                   code$3=t59.status,
                   _dc_=function(param){throw [0,Assert_failure,_a_]},
                   _dd_=function(x){return x},
                   _de_=function(param){return ""},
                   response=
                    [0,
                     url$0,
                     code$3,
                     headers$0,
                     caml_call3(Js_of_ocaml_Js[5][7],t59.responseText,_de_,_dd_),
                     _dc_];
                  break;
                 default:
                  var
                   code$4=t59.status,
                   _c$_=
                    function(param)
                     {var
                       match=
                        caml_call1(Js_of_ocaml_Js[5][10],t59.responseXML);
                      if(match)
                       {var doc=match[1],_dk_=Js_of_ocaml_Js[1];
                        return caml_call1(Js_of_ocaml_Js[2],doc.documentElement)
                                ===
                                _dk_
                                ?0
                                :[0,doc]}
                      return 0},
                   _da_=function(x){return caml_string_of_jsstring(x)},
                   _db_=function(param){return cst$2},
                   response=
                    [0,
                     url$0,
                     code$4,
                     headers$0,
                     caml_call3(Js_of_ocaml_Js[5][7],t59.responseText,_db_,_da_),
                     _c$_]}
               return caml_call2(Lwt[47],w,response)}
             return _dj_
            }
          return 0});
      if(progress)
       {var
         progress$0=progress[1],
         _cP_=
          function(e)
           {caml_call2(progress$0,e.loaded,e.total);return Js_of_ocaml_Js[7]};
        t59.onprogress = caml_call1(Js_of_ocaml_Dom[10],_cP_)}
      function _cQ_(upload)
       {if(upload_progress)
         {var
           upload_progress$0=upload_progress[1],
           _c__=
            function(e)
             {caml_call2(upload_progress$0,e.loaded,e.total);
              return Js_of_ocaml_Js[7]};
          return upload.onprogress = caml_call1(Js_of_ocaml_Dom[10],_c__)}
        return 0}
      caml_call2(Js_of_ocaml_Js[6][6],t59.upload,_cQ_);
      if(contents$0)
       {var _cR_=contents$0[1],_cS_=_cR_[1];
        if(-836918635 === _cS_)
         {var _cT_=_cR_[2];
          if(891486873 <= _cT_[1])
           {var
             l=_cT_[2],
             _cU_=l[1],
             _cF_=
              function(param)
               {var _c0_=param[2],_c1_=param[1];
                if(781515420 <= _c0_[1])
                 {var
                   s=_c0_[2],
                   _c2_=caml_string_of_jsstring(s.name),
                   _c3_=caml_call2(Js_of_ocaml_Url[2],0,_c2_),
                   _c4_=caml_call2(Stdlib[28],cst,_c3_),
                   _c5_=caml_call2(Js_of_ocaml_Url[2],0,_c1_);
                  return caml_call2(Stdlib[28],_c5_,_c4_)}
                var
                 s$0=_c0_[2],
                 _c6_=caml_string_of_jsstring(s$0),
                 _c7_=caml_call2(Js_of_ocaml_Url[2],0,_c6_),
                 _c8_=caml_call2(Stdlib[28],cst$0,_c7_),
                 _c9_=caml_call2(Js_of_ocaml_Url[2],0,_c1_);
                return caml_call2(Stdlib[28],_c9_,_c8_)},
             _cG_=caml_call2(Stdlib_list[19],_cF_,_cU_),
             _cV_=caml_jsstring_of_string(caml_call2(String[3],cst$1,_cG_)),
             t60=caml_call1(Js_of_ocaml_Js[2],_cV_);
            t59.send(t60)}
          else
           {var f=_cT_[2];t59.send(f)}}
        else
         if(737307005 <= _cS_)
          {var b$0=_cR_[2];t59.send(b$0)}
         else
          {var
            s=_cR_[2],
            t64=caml_call1(Js_of_ocaml_Js[2],caml_jsstring_of_string(s));
           t59.send(t64)}}
      else
       t59.send(Js_of_ocaml_Js[1]);
      function _cW_(param){return t59.abort()}
      caml_call2(Lwt[24],res,_cW_);
      return res}
    function perform_raw_url
     (opt,
      content_type,
      _cE_,
      check_headers,
      progress,
      upload_progress,
      contents,
      override_mime_type,
      override_method,
      with_credentials,
      url)
     {if(opt)var sth=opt[1],headers=sth;else var headers=0;
      if(_cE_)var sth$0=_cE_[1],get_args=sth$0;else var get_args=0;
      return perform_raw
              ([0,headers],
               content_type,
               [0,get_args],
               check_headers,
               progress,
               upload_progress,
               contents,
               override_mime_type,
               override_method,
               with_credentials,
               5,
               url)}
    function perform
     (opt,
      content_type,
      _cD_,
      check_headers,
      progress,
      upload_progress,
      contents,
      override_mime_type,
      override_method,
      with_credentials,
      url)
     {if(opt)var sth=opt[1],headers=sth;else var headers=0;
      if(_cD_)var sth$0=_cD_[1],get_args=sth$0;else var get_args=0;
      return perform_raw
              ([0,headers],
               content_type,
               [0,get_args],
               check_headers,
               progress,
               upload_progress,
               contents,
               override_mime_type,
               override_method,
               with_credentials,
               5,
               caml_call1(Js_of_ocaml_Url[9],url))}
    function get(s){return perform_raw_url(0,0,0,0,0,0,0,0,0,0,s)}
    var include=[0,Wrong_headers,perform_raw,perform_raw_url,perform,get];
    caml_register_global(143,include,"Js_of_ocaml_lwt__Lwt_xmlHttpRequest");
    function sleep(d)
     {var
       match=caml_call1(Lwt[22],0),
       w=match[2],
       t=match[1],
       _cB_=caml_call1(Lwt[47],w),
       id=caml_call2(Js_of_ocaml_Dom_html[118],_cB_,d * 1000.);
      function _cC_(param){return caml_call1(Js_of_ocaml_Dom_html[119],id)}
      caml_call2(Lwt[24],t,_cC_);
      return t}
    function yield$0(param){return sleep(0.)}
    function wakeup(param)
     {if(1 === param)
       {var t0=caml_js_wrap_callback(Lwt[56]);
        Js_of_ocaml_Dom_html[8].setTimeout(t0,0.);
        return 0}
      return 0}
    caml_call1(Lwt[58],wakeup);
    function prerr_string(s)
     {var t3=caml_jsstring_of_string(s);return Js_of_ocaml_Firebug[1].log(t3)}
    function _f_(exn)
     {prerr_string(cst_Exception_during_Lwt_async);
      prerr_string(caml_call1(Stdlib_printexc[1],exn));
      return caml_call1(Stdlib_printexc[5],Stdlib[40])}
    Lwt[12][1] = _f_;
    var Js_of_ocaml_lwt_Lwt_js=[0,sleep,yield$0];
    caml_register_global(146,Js_of_ocaml_lwt_Lwt_js,"Js_of_ocaml_lwt__Lwt_js");
    function call_custom_url(timeout,opt,make_uri)
     {if(opt)var sth=opt[1],prefix=sth;else var prefix=cst$5;
      var
       match=caml_call1(Lwt[22],0),
       w=match[2],
       t=match[1],
       user_cb=caml_call1(Lwt[47],w);
      function error_cb(param){return caml_call1(Lwt[23],t)}
      var size=10;
      a:
      for(;;)
       {var b=caml_call1(Stdlib_buffer[1],size),i=0;
        for(;;)
         {var
           _cr_=97 + caml_call1(Stdlib_random[5],26) | 0,
           _cs_=caml_call1(Char[1],_cr_);
          caml_call2(Stdlib_buffer[10],b,_cs_);
          var _ct_=i + 1 | 0;
          if(9 !== i){var i=_ct_;continue}
          var s=caml_call1(Stdlib_buffer[2],b);
          if
           (caml_call1
             (Js_of_ocaml_Js[6][5],
              Js_of_ocaml_Dom_html[8][caml_jsstring_of_string(s)]))
           continue a;
          var
           name=caml_call2(Stdlib[28],prefix,s),
           uri=caml_call1(make_uri,name),
           script=caml_call1(Js_of_ocaml_Dom_html[72],Js_of_ocaml_Dom_html[2]),
           finalize=
            function(param)
             {delete Js_of_ocaml_Dom_html[8][caml_jsstring_of_string(name)];
              function _cA_(parent)
               {return caml_call2(Js_of_ocaml_Dom[4],parent,script)}
              return caml_call2(Js_of_ocaml_Js[5][6],script.parentNode,_cA_)},
           executed=[0,0],
           _cu_=
            function(x)
             {executed[1] = 1;finalize(0);return caml_call1(user_cb,x)};
          Js_of_ocaml_Dom_html[8][caml_jsstring_of_string(name)] = _cu_;
          script.src = caml_jsstring_of_string(uri);
          script.type = "text/javascript";
          script.async = Js_of_ocaml_Js[7];
          script.onerror = function(x){finalize(0);return error_cb(x)};
          script.onload
          =
          function(x)
           {function _cx_(param)
             {function _cy_(param)
               {return executed[1]
                        ?Lwt[36]
                        :(Js_of_ocaml_Firebug[1].warn
                           ("Jsonp: script loaded but callback not executed"),
                          finalize(0),
                          error_cb(x),
                          Lwt[36])}
              var _cz_=sleep(1.);
              return caml_call2(Lwt[6],_cz_,_cy_)}
            return caml_call1(Lwt[11],_cx_)};
          caml_call2(Lwt[24],t,finalize);
          if(timeout)
           var
            delay=timeout[1],
            _cv_=function(param){caml_call1(Lwt[23],t);return t},
            _cw_=sleep(delay),
            wait=caml_call2(Lwt[6],_cw_,_cv_),
            new_t=caml_call1(Lwt[17],[0,wait,[0,t,0]]);
          else
           var new_t=t;
          caml_call2(Js_of_ocaml_Dom[5],Js_of_ocaml_Dom_html[2].body,script);
          return new_t}}}
    function add_param(name,value,l)
     {function _cq_(param)
       {var x=param[1];return 1 - caml_call2(String[38],x,name)}
      var l$0=caml_call2(Stdlib_list[41],_cq_,l);
      return [0,[0,name,value],l$0]}
    function call(timeout,opt,_cj_,url)
     {if(opt)var sth=opt[1],param=sth;else var param=cst_callback;
      if(_cj_)var sth$0=_cj_[1],prefix=sth$0;else var prefix=cst$6;
      function make_uri(cbname)
       {var match=caml_call1(Js_of_ocaml_Url[8],url);
        if(match)
         {var url$0=match[1];
          switch(url$0[0])
           {case 0:
             var
              http=url$0[1],
              _ck_=http[6],
              _cl_=add_param(param,cbname,http[5]),
              new_url=[0,[0,http[1],http[2],http[3],http[4],_cl_,_ck_]];
             break;
            case 1:
             var
              http$0=url$0[1],
              _cm_=http$0[6],
              _cn_=add_param(param,cbname,http$0[5]),
              new_url=
               [1,[0,http$0[1],http$0[2],http$0[3],http$0[4],_cn_,_cm_]];
             break;
            default:
             var
              file=url$0[1],
              _co_=file[4],
              _cp_=add_param(param,cbname,file[3]),
              new_url=[2,[0,file[1],file[2],_cp_,_co_]]}
          return caml_call1(Js_of_ocaml_Url[9],new_url)}
        return caml_call1(Stdlib[2],cst_Jsonp_call_Cannot_parse_ur)}
      return call_custom_url(timeout,[0,prefix],make_uri)}
    var Js_of_ocaml_lwt_Lwt_jsonp=[0,call,call_custom_url];
    caml_register_global
     (149,Js_of_ocaml_lwt_Lwt_jsonp,"Js_of_ocaml_lwt__Lwt_jsonp");
    var _g_=Lwt[6];
    function async(f)
     {function _ci_(param){return caml_call2(_g_,yield$0(0),f)}
      return caml_call1(Lwt[11],_ci_)}
    function opt_map(f,param)
     {if(param){var x=param[1];return [0,caml_call1(f,x)]}return 0}
    function make_event(event_kind,use_capture,passive,target)
     {var
       el=[0,Js_of_ocaml_Js[1]],
       match=caml_call1(Lwt[22],0),
       w=match[2],
       t=match[1];
      function cancel(param)
       {return caml_call2(Js_of_ocaml_Js[5][6],el[1],Js_of_ocaml_Dom_html[18])}
      caml_call2(Lwt[24],t,cancel);
      function _cd_(ev){cancel(0);caml_call2(Lwt[47],w,ev);return ! ! 1}
      var
       _ce_=caml_call1(Js_of_ocaml_Dom_html[10],_cd_),
       _cf_=opt_map(caml_js_from_bool,passive),
       _cg_=opt_map(caml_js_from_bool,use_capture),
       _ch_=caml_call6(Js_of_ocaml_Dom[15],target,event_kind,_cg_,0,_cf_,_ce_);
      el[1] = caml_call1(Js_of_ocaml_Js[2],_ch_);
      return t}
    function catch_cancel(f,x)
     {function _cb_(e)
       {return e === Lwt[21]?caml_call1(Lwt[4],0):caml_call1(Lwt[5],e)}
      function _cc_(param){return caml_call1(f,x)}
      return caml_call2(Lwt[7],_cc_,_cb_)}
    function with_error_log(f,x)
     {function _b$_(e)
       {var t0=caml_jsstring_of_string(caml_call1(Stdlib_printexc[1],e));
        Js_of_ocaml_Firebug[1].log(t0);
        return caml_call1(Lwt[4],0)}
      function _ca_(param){return caml_call1(f,x)}
      return caml_call2(Lwt[7],_ca_,_b$_)}
    function seq_loop(evh,opt,use_capture,passive,target,handler)
     {if(opt)var sth=opt[1],cancel_handler=sth;else var cancel_handler=0;
      var
       cancelled=[0,0],
       cur=[0,caml_call1(Lwt[5],[0,Stdlib[7],cst_Lwt_js_event])],
       cur_handler=[0,caml_call1(Lwt[4],0)],
       match=caml_call1(Lwt[22],0),
       lt=match[1];
      function _b8_(param)
       {caml_call1(Lwt[23],cur[1]);
        if(cancel_handler)caml_call1(Lwt[23],cur_handler[1]);
        cancelled[1] = 1;
        return 0}
      caml_call2(Lwt[24],lt,_b8_);
      function aux(param)
       {if(cancelled[1])return caml_call1(Lwt[4],0);
        var t=caml_call3(evh,use_capture,passive,target);
        cur[1] = t;
        return caml_call2
                (_g_,
                 t,
                 function(e)
                  {cur_handler[1] = with_error_log(caml_call1(handler,e),lt);
                   return caml_call2(_g_,cur_handler[1],aux)})}
      function _b9_(_b__){return catch_cancel(aux,_b__)}
      caml_call1(Lwt[11],_b9_);
      return lt}
    function async_loop(evh,use_capture,passive,target,handler)
     {var
       cancelled=[0,0],
       cur=[0,caml_call1(Lwt[5],[0,Stdlib[7],cst_Lwt_js_event$0])],
       match=caml_call1(Lwt[22],0),
       lt=match[1];
      function _b4_(param)
       {caml_call1(Lwt[23],cur[1]);cancelled[1] = 1;return 0}
      caml_call2(Lwt[24],lt,_b4_);
      function aux(param)
       {if(cancelled[1])return caml_call1(Lwt[4],0);
        var t=caml_call3(evh,use_capture,passive,target);
        cur[1] = t;
        return caml_call2
                (_g_,
                 t,
                 function(e)
                  {function _b7_(param)
                    {return with_error_log(caml_call1(handler,e),lt)}
                   caml_call1(Lwt[11],_b7_);
                   return aux(0)})}
      function _b5_(_b6_){return catch_cancel(aux,_b6_)}
      caml_call1(Lwt[11],_b5_);
      return lt}
    function buffered_loop(evh,opt,_bZ_,use_capture,passive,target,handler)
     {if(opt)var sth=opt[1],cancel_handler=sth;else var cancel_handler=0;
      if(_bZ_)var sth$0=_bZ_[1],cancel_queue=sth$0;else var cancel_queue=1;
      var
       cancelled=[0,0],
       queue=[0,0],
       cur=[0,caml_call1(Lwt[5],[0,Stdlib[7],cst_Lwt_js_event$1])],
       cur_handler=[0,caml_call1(Lwt[4],0)],
       match=caml_call1(Lwt[22],0),
       lt=match[1],
       spawn=caml_call1(Lwt_condition[1],0);
      function _b0_(param)
       {caml_call1(Lwt[23],cur[1]);
        if(cancel_handler)caml_call1(Lwt[23],cur_handler[1]);
        if(cancel_queue)queue[1] = 0;
        cancelled[1] = 1;
        return 0}
      caml_call2(Lwt[24],lt,_b0_);
      function spawner(param)
       {if(cancelled[1])return caml_call1(Lwt[4],0);
        var t=caml_call3(evh,use_capture,passive,target);
        cur[1] = t;
        return caml_call2
                (_g_,
                 t,
                 function(e)
                  {queue[1] = [0,e,queue[1]];
                   caml_call2(Lwt_condition[3],spawn,0);
                   return spawner(0)})}
      function runner(param)
       {cur_handler[1] = caml_call1(Lwt[4],0);
        if(cancelled[1])return caml_call1(Lwt[4],0);
        var _b3_=queue[1];
        if(_b3_)
         {var tl=_b3_[2],e=_b3_[1];
          queue[1] = tl;
          cur_handler[1] = with_error_log(caml_call1(handler,e),lt);
          return caml_call2(_g_,cur_handler[1],runner)}
        return caml_call2(_g_,caml_call2(Lwt_condition[2],0,spawn),runner)}
      function _b1_(_b2_){return catch_cancel(spawner,_b2_)}
      caml_call1(Lwt[11],_b1_);
      caml_call1(Lwt[11],runner);
      return lt}
    function func_limited_loop
     (event,limited_func,use_capture,passive,target,handler)
     {var count=[0,0];
      return async_loop
              (event,
               use_capture,
               passive,
               target,
               function(ev,lt)
                {count[1]++;
                 var nb=count[1];
                 function _bY_(param)
                  {return caml_call2(symbol$8,count[1],nb)
                           ?caml_call2(handler,ev,lt)
                           :caml_call1(Lwt[4],0)}
                 return caml_call2(_g_,caml_call1(limited_func,0),_bY_)})}
    function limited_loop(event,opt)
     {if(opt)var sth=opt[1],elapsed_time=sth;else var elapsed_time=0.1;
      function _bT_(param){return sleep(elapsed_time)}
      return function(_bU_,_bV_,_bW_,_bX_)
       {return func_limited_loop(event,_bT_,_bU_,_bV_,_bW_,_bX_)}}
    function click(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][1],use_capture,passive,target)}
    function copy$0(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][2],use_capture,passive,target)}
    function cut(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][3],use_capture,passive,target)}
    function paste(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][4],use_capture,passive,target)}
    function dblclick(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][5],use_capture,passive,target)}
    function mousedown(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][6],use_capture,passive,target)}
    function mouseup(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][7],use_capture,passive,target)}
    function mouseover(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][8],use_capture,passive,target)}
    function mousemove(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][9],use_capture,passive,target)}
    function mouseout(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][10],use_capture,passive,target)}
    function keypress(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][11],use_capture,passive,target)}
    function keydown(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][12],use_capture,passive,target)}
    function keyup(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][13],use_capture,passive,target)}
    function change(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][28],use_capture,passive,target)}
    function input(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][29],use_capture,passive,target)}
    function timeupdate(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][30],use_capture,passive,target)}
    function dragstart(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][20],use_capture,passive,target)}
    function dragend(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][21],use_capture,passive,target)}
    function dragenter(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][22],use_capture,passive,target)}
    function dragover(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][23],use_capture,passive,target)}
    function dragleave(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][24],use_capture,passive,target)}
    function drag(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][25],use_capture,passive,target)}
    function drop(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][26],use_capture,passive,target)}
    function focus(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][33],use_capture,passive,target)}
    function blur(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][34],use_capture,passive,target)}
    function scroll(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][32],use_capture,passive,target)}
    function submit(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][31],use_capture,passive,target)}
    function select(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][43],use_capture,passive,target)}
    function abort(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][42],use_capture,passive,target)}
    function error(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][41],use_capture,passive,target)}
    function load(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][35],use_capture,passive,target)}
    function canplay(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][58],use_capture,passive,target)}
    function canplaythrough(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][59],use_capture,passive,target)}
    function durationchange(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][60],use_capture,passive,target)}
    function emptied(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][61],use_capture,passive,target)}
    function ended(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][62],use_capture,passive,target)}
    function loadeddata(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][64],use_capture,passive,target)}
    function loadedmetadata(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][65],use_capture,passive,target)}
    function loadstart(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][66],use_capture,passive,target)}
    function pause(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][68],use_capture,passive,target)}
    function play(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][69],use_capture,passive,target)}
    function playing(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][70],use_capture,passive,target)}
    function ratechange(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][79],use_capture,passive,target)}
    function seeked(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][80],use_capture,passive,target)}
    function seeking(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][81],use_capture,passive,target)}
    function stalled(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][82],use_capture,passive,target)}
    function suspend(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][83],use_capture,passive,target)}
    function volumechange(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][84],use_capture,passive,target)}
    function waiting(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][85],use_capture,passive,target)}
    function mousewheel(use_capture,passive,target)
     {var
       el=[0,Js_of_ocaml_Js[1]],
       match=caml_call1(Lwt[22],0),
       w=match[2],
       t=match[1];
      function cancel(param)
       {return caml_call2(Js_of_ocaml_Js[5][6],el[1],Js_of_ocaml_Dom_html[18])}
      caml_call2(Lwt[24],t,cancel);
      function _bP_(ev,dx,dy)
       {Js_of_ocaml_Firebug[1].log(ev);
        cancel(0);
        caml_call2(Lwt[47],w,[0,ev,[0,dx,dy]]);
        return ! ! 1}
      var
       _bQ_=opt_map(caml_js_from_bool,passive),
       _bR_=opt_map(caml_js_from_bool,use_capture),
       _bS_=caml_call5(Js_of_ocaml_Dom_html[19],target,_bR_,0,_bQ_,_bP_);
      el[1] = caml_call1(Js_of_ocaml_Js[2],_bS_);
      return t}
    function touchstart(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][16],use_capture,passive,target)}
    function touchmove(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][17],use_capture,passive,target)}
    function touchend(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][18],use_capture,passive,target)}
    function touchcancel(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][19],use_capture,passive,target)}
    function lostpointercapture(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][67],use_capture,passive,target)}
    function gotpointercapture(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][63],use_capture,passive,target)}
    function pointerenter(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][71],use_capture,passive,target)}
    function pointercancel(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][72],use_capture,passive,target)}
    function pointerdown(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][73],use_capture,passive,target)}
    function pointerleave(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][74],use_capture,passive,target)}
    function pointermove(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][75],use_capture,passive,target)}
    function pointerout(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][76],use_capture,passive,target)}
    function pointerover(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][77],use_capture,passive,target)}
    function pointerup(use_capture,passive,target)
     {return make_event
              (Js_of_ocaml_Dom_html[15][78],use_capture,passive,target)}
    function clicks(cancel_handler,use_capture,passive,t)
     {return function(_bO_)
       {return seq_loop(click,cancel_handler,use_capture,passive,t,_bO_)}}
    function copies(cancel_handler,use_capture,passive,t)
     {return function(_bN_)
       {return seq_loop(copy$0,cancel_handler,use_capture,passive,t,_bN_)}}
    function cuts(cancel_handler,use_capture,passive,t)
     {return function(_bM_)
       {return seq_loop(cut,cancel_handler,use_capture,passive,t,_bM_)}}
    function pastes(cancel_handler,use_capture,passive,t)
     {return function(_bL_)
       {return seq_loop(paste,cancel_handler,use_capture,passive,t,_bL_)}}
    function dblclicks(cancel_handler,use_capture,passive,t)
     {return function(_bK_)
       {return seq_loop(dblclick,cancel_handler,use_capture,passive,t,_bK_)}}
    function mousedowns(cancel_handler,use_capture,passive,t)
     {return function(_bJ_)
       {return seq_loop(mousedown,cancel_handler,use_capture,passive,t,_bJ_)}}
    function mouseups(cancel_handler,use_capture,passive,t)
     {return function(_bI_)
       {return seq_loop(mouseup,cancel_handler,use_capture,passive,t,_bI_)}}
    function mouseovers(cancel_handler,use_capture,passive,t)
     {return function(_bH_)
       {return seq_loop(mouseover,cancel_handler,use_capture,passive,t,_bH_)}}
    function mousemoves(cancel_handler,use_capture,passive,t)
     {return function(_bG_)
       {return seq_loop(mousemove,cancel_handler,use_capture,passive,t,_bG_)}}
    function mouseouts(cancel_handler,use_capture,passive,t)
     {return function(_bF_)
       {return seq_loop(mouseout,cancel_handler,use_capture,passive,t,_bF_)}}
    function keypresses(cancel_handler,use_capture,passive,t)
     {return function(_bE_)
       {return seq_loop(keypress,cancel_handler,use_capture,passive,t,_bE_)}}
    function keydowns(cancel_handler,use_capture,passive,t)
     {return function(_bD_)
       {return seq_loop(keydown,cancel_handler,use_capture,passive,t,_bD_)}}
    function keyups(cancel_handler,use_capture,passive,t)
     {return function(_bC_)
       {return seq_loop(keyup,cancel_handler,use_capture,passive,t,_bC_)}}
    function changes(cancel_handler,use_capture,passive,t)
     {return function(_bB_)
       {return seq_loop(change,cancel_handler,use_capture,passive,t,_bB_)}}
    function inputs(cancel_handler,use_capture,passive,t)
     {return function(_bA_)
       {return seq_loop(input,cancel_handler,use_capture,passive,t,_bA_)}}
    function timeupdates(cancel_handler,use_capture,passive,t)
     {return function(_bz_)
       {return seq_loop(timeupdate,cancel_handler,use_capture,passive,t,_bz_)}}
    function dragstarts(cancel_handler,use_capture,passive,t)
     {return function(_by_)
       {return seq_loop(dragstart,cancel_handler,use_capture,passive,t,_by_)}}
    function dragends(cancel_handler,use_capture,passive,t)
     {return function(_bx_)
       {return seq_loop(dragend,cancel_handler,use_capture,passive,t,_bx_)}}
    function dragenters(cancel_handler,use_capture,passive,t)
     {return function(_bw_)
       {return seq_loop(dragenter,cancel_handler,use_capture,passive,t,_bw_)}}
    function dragovers(cancel_handler,use_capture,passive,t)
     {return function(_bv_)
       {return seq_loop(dragover,cancel_handler,use_capture,passive,t,_bv_)}}
    function dragleaves(cancel_handler,use_capture,passive,t)
     {return function(_bu_)
       {return seq_loop(dragleave,cancel_handler,use_capture,passive,t,_bu_)}}
    function drags(cancel_handler,use_capture,passive,t)
     {return function(_bt_)
       {return seq_loop(drag,cancel_handler,use_capture,passive,t,_bt_)}}
    function drops(cancel_handler,use_capture,passive,t)
     {return function(_bs_)
       {return seq_loop(drop,cancel_handler,use_capture,passive,t,_bs_)}}
    function mousewheels(cancel_handler,use_capture,passive,t)
     {return function(_br_)
       {return seq_loop(mousewheel,cancel_handler,use_capture,passive,t,_br_)}}
    function touchstarts(cancel_handler,use_capture,passive,t)
     {return function(_bq_)
       {return seq_loop(touchstart,cancel_handler,use_capture,passive,t,_bq_)}}
    function touchmoves(cancel_handler,use_capture,passive,t)
     {return function(_bp_)
       {return seq_loop(touchmove,cancel_handler,use_capture,passive,t,_bp_)}}
    function touchends(cancel_handler,use_capture,passive,t)
     {return function(_bo_)
       {return seq_loop(touchend,cancel_handler,use_capture,passive,t,_bo_)}}
    function touchcancels(cancel_handler,use_capture,passive,t)
     {return function(_bn_)
       {return seq_loop(touchcancel,cancel_handler,use_capture,passive,t,_bn_)}}
    function focuses(cancel_handler,use_capture,passive,t)
     {return function(_bm_)
       {return seq_loop(focus,cancel_handler,use_capture,passive,t,_bm_)}}
    function blurs(cancel_handler,use_capture,passive,t)
     {return function(_bl_)
       {return seq_loop(blur,cancel_handler,use_capture,passive,t,_bl_)}}
    function scrolls(cancel_handler,use_capture,passive,t)
     {return function(_bk_)
       {return seq_loop(scroll,cancel_handler,use_capture,passive,t,_bk_)}}
    function submits(cancel_handler,use_capture,passive,t)
     {return function(_bj_)
       {return seq_loop(submit,cancel_handler,use_capture,passive,t,_bj_)}}
    function selects(cancel_handler,use_capture,passive,t)
     {return function(_bi_)
       {return seq_loop(select,cancel_handler,use_capture,passive,t,_bi_)}}
    function aborts(cancel_handler,use_capture,passive,t)
     {return function(_bh_)
       {return seq_loop(abort,cancel_handler,use_capture,passive,t,_bh_)}}
    function errors(cancel_handler,use_capture,passive,t)
     {return function(_bg_)
       {return seq_loop(error,cancel_handler,use_capture,passive,t,_bg_)}}
    function loads(cancel_handler,use_capture,passive,t)
     {return function(_bf_)
       {return seq_loop(load,cancel_handler,use_capture,passive,t,_bf_)}}
    function canplays(cancel_handler,use_capture,passive,t)
     {return function(_be_)
       {return seq_loop(canplay,cancel_handler,use_capture,passive,t,_be_)}}
    function canplaythroughs(cancel_handler,use_capture,passive,t)
     {return function(_bd_)
       {return seq_loop
                (canplaythrough,cancel_handler,use_capture,passive,t,_bd_)}}
    function durationchanges(cancel_handler,use_capture,passive,t)
     {return function(_bc_)
       {return seq_loop
                (durationchange,cancel_handler,use_capture,passive,t,_bc_)}}
    function emptieds(cancel_handler,use_capture,passive,t)
     {return function(_bb_)
       {return seq_loop(emptied,cancel_handler,use_capture,passive,t,_bb_)}}
    function endeds(cancel_handler,use_capture,passive,t)
     {return function(_ba_)
       {return seq_loop(ended,cancel_handler,use_capture,passive,t,_ba_)}}
    function loadeddatas(cancel_handler,use_capture,passive,t)
     {return function(_a$_)
       {return seq_loop(loadeddata,cancel_handler,use_capture,passive,t,_a$_)}}
    function loadedmetadatas(cancel_handler,use_capture,passive,t)
     {return function(_a__)
       {return seq_loop
                (loadedmetadata,cancel_handler,use_capture,passive,t,_a__)}}
    function loadstarts(cancel_handler,use_capture,passive,t)
     {return function(_a9_)
       {return seq_loop(loadstart,cancel_handler,use_capture,passive,t,_a9_)}}
    function pauses(cancel_handler,use_capture,passive,t)
     {return function(_a8_)
       {return seq_loop(pause,cancel_handler,use_capture,passive,t,_a8_)}}
    function plays(cancel_handler,use_capture,passive,t)
     {return function(_a7_)
       {return seq_loop(play,cancel_handler,use_capture,passive,t,_a7_)}}
    function playings(cancel_handler,use_capture,passive,t)
     {return function(_a6_)
       {return seq_loop(playing,cancel_handler,use_capture,passive,t,_a6_)}}
    function ratechanges(cancel_handler,use_capture,passive,t)
     {return function(_a5_)
       {return seq_loop(ratechange,cancel_handler,use_capture,passive,t,_a5_)}}
    function seekeds(cancel_handler,use_capture,passive,t)
     {return function(_a4_)
       {return seq_loop(seeked,cancel_handler,use_capture,passive,t,_a4_)}}
    function seekings(cancel_handler,use_capture,passive,t)
     {return function(_a3_)
       {return seq_loop(seeking,cancel_handler,use_capture,passive,t,_a3_)}}
    function stalleds(cancel_handler,use_capture,passive,t)
     {return function(_a2_)
       {return seq_loop(stalled,cancel_handler,use_capture,passive,t,_a2_)}}
    function suspends(cancel_handler,use_capture,passive,t)
     {return function(_a1_)
       {return seq_loop(suspend,cancel_handler,use_capture,passive,t,_a1_)}}
    function volumechanges(cancel_handler,use_capture,passive,t)
     {return function(_a0_)
       {return seq_loop
                (volumechange,cancel_handler,use_capture,passive,t,_a0_)}}
    function waitings(cancel_handler,use_capture,passive,t)
     {return function(_aZ_)
       {return seq_loop(waiting,cancel_handler,use_capture,passive,t,_aZ_)}}
    function lostpointercaptures(cancel_handler,use_capture,passive,t)
     {return function(_aY_)
       {return seq_loop
                (lostpointercapture,cancel_handler,use_capture,passive,t,_aY_)}}
    function gotpointercaptures(cancel_handler,use_capture,passive,t)
     {return function(_aX_)
       {return seq_loop
                (gotpointercapture,cancel_handler,use_capture,passive,t,_aX_)}}
    function pointerenters(cancel_handler,use_capture,passive,t)
     {return function(_aW_)
       {return seq_loop
                (pointerenter,cancel_handler,use_capture,passive,t,_aW_)}}
    function pointercancels(cancel_handler,use_capture,passive,t)
     {return function(_aV_)
       {return seq_loop
                (pointercancel,cancel_handler,use_capture,passive,t,_aV_)}}
    function pointerdowns(cancel_handler,use_capture,passive,t)
     {return function(_aU_)
       {return seq_loop(pointerdown,cancel_handler,use_capture,passive,t,_aU_)}}
    function pointerleaves(cancel_handler,use_capture,passive,t)
     {return function(_aT_)
       {return seq_loop
                (pointerleave,cancel_handler,use_capture,passive,t,_aT_)}}
    function pointermoves(cancel_handler,use_capture,passive,t)
     {return function(_aS_)
       {return seq_loop(pointermove,cancel_handler,use_capture,passive,t,_aS_)}}
    function pointerouts(cancel_handler,use_capture,passive,t)
     {return function(_aR_)
       {return seq_loop(pointerout,cancel_handler,use_capture,passive,t,_aR_)}}
    function pointerovers(cancel_handler,use_capture,passive,t)
     {return function(_aQ_)
       {return seq_loop(pointerover,cancel_handler,use_capture,passive,t,_aQ_)}}
    function pointerups(cancel_handler,use_capture,passive,t)
     {return function(_aP_)
       {return seq_loop(pointerup,cancel_handler,use_capture,passive,t,_aP_)}}
    var
     transition_evn=
      [246,
       function(_aG_)
        {var e=caml_call1(Js_of_ocaml_Dom_html[50],Js_of_ocaml_Dom_html[2]);
         try
          {var
            _aH_=
             [0,
              [0,
               cst_transition,
               [0,caml_call1(Js_of_ocaml_Dom[14][1],cst_transitionend),0]],
              0],
            _aI_=[0,caml_call1(Js_of_ocaml_Dom[14][1],cst_otransitionend),0],
            _aJ_=
             [0,
              [0,
               cst_OTransition,
               [0,caml_call1(Js_of_ocaml_Dom[14][1],cst_oTransitionEnd),_aI_]],
              _aH_],
            _aK_=
             [0,
              [0,
               cst_MozTransition,
               [0,caml_call1(Js_of_ocaml_Dom[14][1],cst_transitionend$0),0]],
              _aJ_],
            _aL_=
             [0,
              [0,
               cst_WebkitTransition,
               [0,
                caml_call1(Js_of_ocaml_Dom[14][1],cst_webkitTransitionEnd),
                0]],
              _aK_],
            _aM_=
             function(param)
              {var propname=param[1];
               return e.style[propname] !== Js_of_ocaml_Js[3]?1:0},
            _aN_=caml_call2(Stdlib_list[38],_aM_,_aL_)[2];
           return _aN_}
         catch(_aO_)
          {_aO_ = caml_wrap_exception(_aO_);
           if(_aO_ === Stdlib[8])return 0;
           throw _aO_}}];
    function transitionend(elt)
     {var
       _aB_=runtime.caml_obj_tag(transition_evn),
       _aC_=
        250 === _aB_
         ?transition_evn[1]
         :246 === _aB_
           ?caml_call1(CamlinternalLazy[2],transition_evn)
           :transition_evn;
      if(_aC_)
       {var
         _aD_=function(param){return caml_call1(Lwt[4],0)},
         _aE_=function(ev){return make_event(ev,0,0,elt)},
         _aF_=caml_call2(Stdlib_list[19],_aE_,_aC_);
        return caml_call2(_g_,caml_call1(Lwt[16],_aF_),_aD_)}
      return caml_call1(Lwt[4],0)}
    function transitionends(cancel_handler,elt,f)
     {function _ax_(param,cancel){return caml_call1(f,cancel)}
      var _ay_=0,_az_=0;
      return seq_loop
              (function(param,_aA_,target){return transitionend(target)},
               cancel_handler,
               _az_,
               _ay_,
               elt,
               _ax_)}
    function request_animation_frame(param)
     {var
       match=caml_call1(Lwt[1],0),
       s=match[2],
       t=match[1],
       _aw_=
        caml_js_wrap_callback(function(param){return caml_call2(Lwt[47],s,0)});
      caml_call1(Js_of_ocaml_Dom_html[121],_aw_);
      return t}
    function onload(param)
     {return make_event
              (Js_of_ocaml_Dom_html[15][35],0,0,Js_of_ocaml_Dom_html[8])}
    var doc=Js_of_ocaml_Dom_html[8].document;
    function domContentLoaded(param)
     {if(doc.readyState === "complete")return Lwt[36];
      var match=caml_call1(Lwt[22],0),w=match[2],t=match[1];
      function wakeup(w,param)
       {var _av_=caml_call1(Lwt[79],t);
        return _av_?caml_call2(Lwt[47],w,0):_av_}
      function wakeup_exn(w,e)
       {var _au_=caml_call1(Lwt[79],t);
        return _au_?caml_call2(Lwt[48],w,e):_au_}
      var regular=make_event(Js_of_ocaml_Dom_html[15][53],0,0,doc);
      function _ae_(_at_){return wakeup_exn(w,_at_)}
      function _af_(_as_){return wakeup(w,_as_)}
      caml_call3(Lwt[32],regular,_af_,_ae_);
      function _ag_(e,param)
       {if(doc.readyState === "complete")wakeup(w,e);return Lwt[36]}
      var
       _ah_=0,
       _ai_=0,
       _aj_=caml_call1(Js_of_ocaml_Dom[14][1],cst_readystatechange),
       readystatechange=
        async_loop
         (function(_ap_,_aq_,_ar_){return make_event(_aj_,_ap_,_aq_,_ar_)},
          _ai_,
          _ah_,
          doc,
          _ag_),
       init=
        make_event(Js_of_ocaml_Dom_html[15][35],0,0,Js_of_ocaml_Dom_html[8]);
      function _ak_(_ao_){return wakeup_exn(w,_ao_)}
      function _al_(_an_){return wakeup(w,_an_)}
      caml_call3(Lwt[32],init,_al_,_ak_);
      function _am_(e)
       {caml_call1(Lwt[23],regular);
        caml_call1(Lwt[23],readystatechange);
        caml_call1(Lwt[23],init);
        return Lwt[36]}
      return caml_call2(Lwt[6],t,_am_)}
    function onunload(param)
     {return make_event
              (Js_of_ocaml_Dom_html[15][36],0,0,Js_of_ocaml_Dom_html[8])}
    function onbeforeunload(param)
     {return make_event
              (Js_of_ocaml_Dom_html[15][37],0,0,Js_of_ocaml_Dom_html[8])}
    function onresize(param)
     {return make_event
              (Js_of_ocaml_Dom_html[15][38],0,0,Js_of_ocaml_Dom_html[8])}
    function onorientationchange(param)
     {return make_event
              (Js_of_ocaml_Dom_html[15][39],0,0,Js_of_ocaml_Dom_html[8])}
    function onpopstate(param)
     {return make_event
              (Js_of_ocaml_Dom_html[15][40],0,0,Js_of_ocaml_Dom_html[8])}
    function onhashchange(param)
     {return make_event
              (Js_of_ocaml_Dom_html[15][27],0,0,Js_of_ocaml_Dom_html[8])}
    function onorientationchange_or_onresiz(param)
     {var _ac_=[0,onorientationchange(0),0],_ad_=[0,onresize(0),_ac_];
      return caml_call1(Lwt[16],_ad_)}
    function onresizes(t)
     {var _Y_=0,_Z_=0,___=0,_$_=0;
      return seq_loop
              (function(param,_ab_,_aa_){return onresize(0)},
               _$_,
               ___,
               _Z_,
               _Y_,
               t)}
    function onorientationchanges(t)
     {var _S_=0,_T_=0,_U_=0,_V_=0;
      return seq_loop
              (function(param,_X_,_W_){return onorientationchange(0)},
               _V_,
               _U_,
               _T_,
               _S_,
               t)}
    function onpopstates(t)
     {var _M_=0,_N_=0,_O_=0,_P_=0;
      return seq_loop
              (function(param,_R_,_Q_){return onpopstate(0)},
               _P_,
               _O_,
               _N_,
               _M_,
               t)}
    function onhashchanges(t)
     {var _G_=0,_H_=0,_I_=0,_J_=0;
      return seq_loop
              (function(param,_L_,_K_){return onhashchange(0)},
               _J_,
               _I_,
               _H_,
               _G_,
               t)}
    function onorientationchanges_or_onresi(t)
     {var _A_=0,_B_=0,_C_=0,_D_=0;
      return seq_loop
              (function(param,_F_,_E_)
                {return onorientationchange_or_onresiz(0)},
               _D_,
               _C_,
               _B_,
               _A_,
               t)}
    function limited_onresizes(elapsed_time,t)
     {var _v_=0,_w_=0,_x_=0;
      return caml_call4
              (limited_loop
                (function(param,_z_,_y_){return onresize(0)},elapsed_time),
               _x_,
               _w_,
               _v_,
               t)}
    function limited_onorientationchanges(elapsed_time,t)
     {var _q_=0,_r_=0,_s_=0;
      return caml_call4
              (limited_loop
                (function(param,_u_,_t_){return onorientationchange(0)},
                 elapsed_time),
               _s_,
               _r_,
               _q_,
               t)}
    function limited_onorientationchanges_o(elapsed_time,t)
     {var _l_=0,_m_=0,_n_=0;
      return caml_call4
              (limited_loop
                (function(param,_p_,_o_)
                  {return onorientationchange_or_onresiz(0)},
                 elapsed_time),
               _n_,
               _m_,
               _l_,
               t)}
    var
     Js_of_ocaml_lwt_Lwt_js_events=
      [0,
       make_event,
       seq_loop,
       async_loop,
       buffered_loop,
       async,
       func_limited_loop,
       limited_loop,
       click,
       copy$0,
       cut,
       paste,
       dblclick,
       mousedown,
       mouseup,
       mouseover,
       mousemove,
       mouseout,
       keypress,
       keydown,
       keyup,
       input,
       timeupdate,
       change,
       dragstart,
       dragend,
       dragenter,
       dragover,
       dragleave,
       drag,
       drop,
       focus,
       blur,
       scroll,
       submit,
       select,
       mousewheel,
       touchstart,
       touchmove,
       touchend,
       touchcancel,
       lostpointercapture,
       gotpointercapture,
       pointerenter,
       pointercancel,
       pointerdown,
       pointerleave,
       pointermove,
       pointerout,
       pointerover,
       pointerup,
       transitionend,
       transitionends,
       load,
       error,
       abort,
       canplay,
       canplaythrough,
       durationchange,
       emptied,
       ended,
       loadeddata,
       loadedmetadata,
       loadstart,
       pause,
       play,
       playing,
       ratechange,
       seeked,
       seeking,
       stalled,
       suspend,
       volumechange,
       waiting,
       clicks,
       copies,
       cuts,
       pastes,
       dblclicks,
       mousedowns,
       mouseups,
       mouseovers,
       mousemoves,
       mouseouts,
       keypresses,
       keydowns,
       keyups,
       inputs,
       timeupdates,
       changes,
       dragstarts,
       dragends,
       dragenters,
       dragovers,
       dragleaves,
       drags,
       drops,
       mousewheels,
       touchstarts,
       touchmoves,
       touchends,
       touchcancels,
       focuses,
       blurs,
       scrolls,
       submits,
       selects,
       loads,
       errors,
       aborts,
       canplays,
       canplaythroughs,
       durationchanges,
       emptieds,
       endeds,
       loadeddatas,
       loadedmetadatas,
       loadstarts,
       pauses,
       plays,
       playings,
       ratechanges,
       seekeds,
       seekings,
       stalleds,
       suspends,
       volumechanges,
       waitings,
       lostpointercaptures,
       gotpointercaptures,
       pointerenters,
       pointercancels,
       pointerdowns,
       pointerleaves,
       pointermoves,
       pointerouts,
       pointerovers,
       pointerups,
       request_animation_frame,
       onload,
       domContentLoaded,
       onunload,
       onbeforeunload,
       onresize,
       onorientationchange,
       onpopstate,
       onhashchange,
       onorientationchange_or_onresiz,
       onresizes,
       onorientationchanges,
       onpopstates,
       onhashchanges,
       onorientationchanges_or_onresi,
       limited_onresizes,
       limited_onorientationchanges,
       limited_onorientationchanges_o];
    caml_register_global
     (152,Js_of_ocaml_lwt_Lwt_js_events,"Js_of_ocaml_lwt__Lwt_js_events");
    function reader(kind,file)
     {var
       t12=new (Js_of_ocaml_File[6])(),
       match=caml_call1(Lwt[22],0),
       w=match[2],
       res=match[1];
      function _i_(param)
       {if(2 === t12.readyState)
         {var
           _k_=caml_call1(Js_of_ocaml_File[3][4],t12.result),
           match=caml_call1(Js_of_ocaml_Js[5][10],_k_);
          if(! match)throw [0,Assert_failure,_h_];
          var s=match[1];
          caml_call2(Lwt[47],w,s)}
        return Js_of_ocaml_Js[8]}
      t12.onloadend = caml_call1(Js_of_ocaml_Dom[10],_i_);
      function _j_(param){return t12.abort()}
      caml_call2(Lwt[24],res,_j_);
      if(typeof kind === "number")
       if(-550809787 === kind)
        t12.readAsDataURL(file);
       else
        if(936573133 <= kind)
         t12.readAsText(file);
        else
         t12.readAsBinaryString(file);
      else
       {var e=kind[2];t12.readAsText(file,e)}
      return res}
    function readAsBinaryString(file){return reader(-1041425454,file)}
    function readAsText(file){return reader(936573133,file)}
    function readAsText_withEncoding(file,e)
     {return reader([0,-973237525,e],file)}
    function readAsDataURL(file){return reader(-550809787,file)}
    var
     include$0=
      [0,readAsBinaryString,readAsText,readAsText_withEncoding,readAsDataURL];
    caml_register_global(153,include$0,"Js_of_ocaml_lwt__Lwt_file");
    var
     create=Js_of_ocaml_XmlHttpRequest[1],
     Event=Js_of_ocaml_XmlHttpRequest[2],
     XmlHttpRequest=
      [0,create,Event,Wrong_headers,perform_raw,perform_raw_url,perform,get],
     blob_from_string=Js_of_ocaml_File[1],
     blob_from_any=Js_of_ocaml_File[2],
     CoerceTo=Js_of_ocaml_File[3],
     ReaderEvent=Js_of_ocaml_File[4],
     filename=Js_of_ocaml_File[5],
     fileReader=Js_of_ocaml_File[6],
     addEventListener=Js_of_ocaml_File[7],
     File=
      [0,
       blob_from_string,
       blob_from_any,
       CoerceTo,
       ReaderEvent,
       filename,
       fileReader,
       addEventListener,
       readAsBinaryString,
       readAsText,
       readAsText_withEncoding,
       readAsDataURL],
     Js_of_ocaml_lwt$0=[0,XmlHttpRequest,File];
    caml_register_global(154,Js_of_ocaml_lwt$0,"Js_of_ocaml_lwt");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJqc19vZl9vY2FtbF9sd3QuY21hLmpzIiwic291cmNlUm9vdCI6IiIsIm5hbWVzIjpbXSwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiOztJIiwic291cmNlc0NvbnRlbnQiOltdfQ==
