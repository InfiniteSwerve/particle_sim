(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_ba_get_1=runtime.caml_ba_get_1,
     caml_ba_set_1=runtime.caml_ba_set_1,
     caml_ba_uint8_get16=runtime.caml_ba_uint8_get16,
     caml_ba_uint8_get32=runtime.caml_ba_uint8_get32,
     caml_ba_uint8_get64=runtime.caml_ba_uint8_get64,
     caml_ba_uint8_set16=runtime.caml_ba_uint8_set16,
     caml_ba_uint8_set32=runtime.caml_ba_uint8_set32,
     caml_ba_uint8_set64=runtime.caml_ba_uint8_set64,
     caml_bswap16=runtime.caml_bswap16,
     caml_int32_bits_of_float=runtime.caml_int32_bits_of_float,
     caml_int32_bswap=runtime.caml_int32_bswap,
     caml_int32_float_of_bits=runtime.caml_int32_float_of_bits,
     caml_int64_bits_of_float=runtime.caml_int64_bits_of_float,
     caml_int64_bswap=runtime.caml_int64_bswap,
     caml_int64_float_of_bits=runtime.caml_int64_float_of_bits,
     global_data=runtime.caml_get_global_data(),
     Stdlib_sys=global_data.Stdlib__sys;
    function get_char(s,off){return caml_ba_get_1(s,off)}
    function set_char(s,off,v){return caml_ba_set_1(s,off,v)}
    function unsafe_get_char(s,off){return caml_ba_get_1(s,off)}
    function unsafe_set_char(s,off,v){return caml_ba_set_1(s,off,v)}
    var get_uint8=caml_ba_get_1;
    function get_int8(s,off)
     {var _o_=Stdlib_sys[9] - 9 | 0,_p_=Stdlib_sys[9] - 9 | 0;
      return caml_ba_get_1(s,off) << _p_ >> _o_}
    var set_int8=caml_ba_set_1,unsafe_get_uint8=caml_ba_get_1;
    function unsafe_get_int8(s,off)
     {var _m_=Stdlib_sys[9] - 9 | 0,_n_=Stdlib_sys[9] - 9 | 0;
      return caml_ba_get_1(s,off) << _n_ >> _m_}
    var unsafe_set_int8=caml_ba_set_1;
    function get_uint16(s,off)
     {return Stdlib_sys[11]
              ?caml_ba_uint8_get16(s,off)
              :caml_bswap16(caml_ba_uint8_get16(s,off))}
    function get_int16(s,off)
     {var _k_=Stdlib_sys[9] - 17 | 0,_l_=Stdlib_sys[9] - 17 | 0;
      return get_uint16(s,off) << _l_ >> _k_}
    function get_int32(s,off)
     {return Stdlib_sys[11]
              ?caml_ba_uint8_get32(s,off)
              :caml_int32_bswap(caml_ba_uint8_get32(s,off))}
    function get_int64(s,off)
     {return Stdlib_sys[11]
              ?caml_ba_uint8_get64(s,off)
              :caml_int64_bswap(caml_ba_uint8_get64(s,off))}
    function set_int16(s,off,v)
     {return Stdlib_sys[11]
              ?caml_ba_uint8_set16(s,off,v)
              :caml_ba_uint8_set16(s,off,caml_bswap16(v))}
    function set_int32(s,off,v)
     {return Stdlib_sys[11]
              ?caml_ba_uint8_set32(s,off,v)
              :caml_ba_uint8_set32(s,off,caml_int32_bswap(v))}
    function set_int64(s,off,v)
     {return Stdlib_sys[11]
              ?caml_ba_uint8_set64(s,off,v)
              :caml_ba_uint8_set64(s,off,caml_int64_bswap(v))}
    function get_float(buff,i)
     {return caml_int32_float_of_bits(get_int32(buff,i))}
    function get_double(buff,i)
     {return caml_int64_float_of_bits(get_int64(buff,i))}
    function set_float(buff,i,v)
     {return set_int32(buff,i,caml_int32_bits_of_float(v))}
    function set_double(buff,i,v)
     {return set_int64(buff,i,caml_int64_bits_of_float(v))}
    function get_uint16$0(s,off)
     {return Stdlib_sys[11]
              ?caml_ba_uint8_get16(s,off)
              :caml_bswap16(caml_ba_uint8_get16(s,off))}
    function get_int16$0(s,off)
     {var _i_=Stdlib_sys[9] - 17 | 0,_j_=Stdlib_sys[9] - 17 | 0;
      return get_uint16$0(s,off) << _j_ >> _i_}
    function get_int32$0(s,off)
     {return Stdlib_sys[11]
              ?caml_ba_uint8_get32(s,off)
              :caml_int32_bswap(caml_ba_uint8_get32(s,off))}
    function get_int64$0(s,off)
     {return Stdlib_sys[11]
              ?caml_ba_uint8_get64(s,off)
              :caml_int64_bswap(caml_ba_uint8_get64(s,off))}
    function set_int16$0(s,off,v)
     {return Stdlib_sys[11]
              ?caml_ba_uint8_set16(s,off,v)
              :caml_ba_uint8_set16(s,off,caml_bswap16(v))}
    function set_int32$0(s,off,v)
     {return Stdlib_sys[11]
              ?caml_ba_uint8_set32(s,off,v)
              :caml_ba_uint8_set32(s,off,caml_int32_bswap(v))}
    function set_int64$0(s,off,v)
     {return Stdlib_sys[11]
              ?caml_ba_uint8_set64(s,off,v)
              :caml_ba_uint8_set64(s,off,caml_int64_bswap(v))}
    function get_float$0(buff,i)
     {return caml_int32_float_of_bits(get_int32$0(buff,i))}
    function get_double$0(buff,i)
     {return caml_int64_float_of_bits(get_int64$0(buff,i))}
    function set_float$0(buff,i,v)
     {return set_int32$0(buff,i,caml_int32_bits_of_float(v))}
    function set_double$0(buff,i,v)
     {return set_int64$0(buff,i,caml_int64_bits_of_float(v))}
    function get_uint16$1(s,off)
     {return Stdlib_sys[11]
              ?caml_bswap16(caml_ba_uint8_get16(s,off))
              :caml_ba_uint8_get16(s,off)}
    function get_int16$1(s,off)
     {var _g_=Stdlib_sys[9] - 17 | 0,_h_=Stdlib_sys[9] - 17 | 0;
      return get_uint16$1(s,off) << _h_ >> _g_}
    function get_int32$1(s,off)
     {return Stdlib_sys[11]
              ?caml_int32_bswap(caml_ba_uint8_get32(s,off))
              :caml_ba_uint8_get32(s,off)}
    function get_int64$1(s,off)
     {return Stdlib_sys[11]
              ?caml_int64_bswap(caml_ba_uint8_get64(s,off))
              :caml_ba_uint8_get64(s,off)}
    function set_int16$1(s,off,v)
     {return Stdlib_sys[11]
              ?caml_ba_uint8_set16(s,off,caml_bswap16(v))
              :caml_ba_uint8_set16(s,off,v)}
    function set_int32$1(s,off,v)
     {return Stdlib_sys[11]
              ?caml_ba_uint8_set32(s,off,caml_int32_bswap(v))
              :caml_ba_uint8_set32(s,off,v)}
    function set_int64$1(s,off,v)
     {return Stdlib_sys[11]
              ?caml_ba_uint8_set64(s,off,caml_int64_bswap(v))
              :caml_ba_uint8_set64(s,off,v)}
    function get_float$1(buff,i)
     {return caml_int32_float_of_bits(get_int32$1(buff,i))}
    function get_double$1(buff,i)
     {return caml_int64_float_of_bits(get_int64$1(buff,i))}
    function set_float$1(buff,i,v)
     {return set_int32$1(buff,i,caml_int32_bits_of_float(v))}
    function set_double$1(buff,i,v)
     {return set_int64$1(buff,i,caml_int64_bits_of_float(v))}
    function get_uint16$2(s,off)
     {return Stdlib_sys[11]
              ?caml_bswap16(caml_ba_uint8_get16(s,off))
              :caml_ba_uint8_get16(s,off)}
    function get_int16$2(s,off)
     {var _e_=Stdlib_sys[9] - 17 | 0,_f_=Stdlib_sys[9] - 17 | 0;
      return get_uint16$2(s,off) << _f_ >> _e_}
    function get_int32$2(s,off)
     {return Stdlib_sys[11]
              ?caml_int32_bswap(caml_ba_uint8_get32(s,off))
              :caml_ba_uint8_get32(s,off)}
    function get_int64$2(s,off)
     {return Stdlib_sys[11]
              ?caml_int64_bswap(caml_ba_uint8_get64(s,off))
              :caml_ba_uint8_get64(s,off)}
    function set_int16$2(s,off,v)
     {return Stdlib_sys[11]
              ?caml_ba_uint8_set16(s,off,caml_bswap16(v))
              :caml_ba_uint8_set16(s,off,v)}
    function set_int32$2(s,off,v)
     {return Stdlib_sys[11]
              ?caml_ba_uint8_set32(s,off,caml_int32_bswap(v))
              :caml_ba_uint8_set32(s,off,v)}
    function set_int64$2(s,off,v)
     {return Stdlib_sys[11]
              ?caml_ba_uint8_set64(s,off,caml_int64_bswap(v))
              :caml_ba_uint8_set64(s,off,v)}
    function get_float$2(buff,i)
     {return caml_int32_float_of_bits(get_int32$2(buff,i))}
    function get_double$2(buff,i)
     {return caml_int64_float_of_bits(get_int64$2(buff,i))}
    function set_float$2(buff,i,v)
     {return set_int32$2(buff,i,caml_int32_bits_of_float(v))}
    function set_double$2(buff,i,v)
     {return set_int64$2(buff,i,caml_int64_bits_of_float(v))}
    function get_uint16$3(s,off){return caml_ba_uint8_get16(s,off)}
    function get_int16$3(s,off)
     {var _c_=Stdlib_sys[9] - 17 | 0,_d_=Stdlib_sys[9] - 17 | 0;
      return caml_ba_uint8_get16(s,off) << _d_ >> _c_}
    function get_int32$3(s,off){return caml_ba_uint8_get32(s,off)}
    function get_int64$3(s,off){return caml_ba_uint8_get64(s,off)}
    function set_int16$3(s,off,v){return caml_ba_uint8_set16(s,off,v)}
    function set_int32$3(s,off,v){return caml_ba_uint8_set32(s,off,v)}
    function set_int64$3(s,off,v){return caml_ba_uint8_set64(s,off,v)}
    function get_float$3(buff,i)
     {return caml_int32_float_of_bits(caml_ba_uint8_get32(buff,i))}
    function get_double$3(buff,i)
     {return caml_int64_float_of_bits(caml_ba_uint8_get64(buff,i))}
    function set_float$3(buff,i,v)
     {return caml_ba_uint8_set32(buff,i,caml_int32_bits_of_float(v))}
    function set_double$3(buff,i,v)
     {return caml_ba_uint8_set64(buff,i,caml_int64_bits_of_float(v))}
    var get_uint16$4=caml_ba_uint8_get16;
    function get_int16$4(s,off)
     {var _a_=Stdlib_sys[9] - 17 | 0,_b_=Stdlib_sys[9] - 17 | 0;
      return caml_ba_uint8_get16(s,off) << _b_ >> _a_}
    var
     get_int32$4=caml_ba_uint8_get32,
     get_int64$4=caml_ba_uint8_get64,
     set_int16$4=caml_ba_uint8_set16,
     set_int32$4=caml_ba_uint8_set32,
     set_int64$4=caml_ba_uint8_set64;
    function get_float$4(buff,i)
     {return caml_int32_float_of_bits(caml_ba_uint8_get32(buff,i))}
    function get_double$4(buff,i)
     {return caml_int64_float_of_bits(caml_ba_uint8_get64(buff,i))}
    function set_float$4(buff,i,v)
     {return caml_ba_uint8_set32(buff,i,caml_int32_bits_of_float(v))}
    function set_double$4(buff,i,v)
     {return caml_ba_uint8_set64(buff,i,caml_int64_bits_of_float(v))}
    var
     EndianBigstring=
      [0,
       [0,
        get_char,
        get_uint8,
        get_int8,
        get_uint16,
        get_int16,
        get_int32,
        get_int64,
        get_float,
        get_double,
        set_char,
        set_int8,
        set_int16,
        set_int32,
        set_int64,
        set_float,
        set_double],
       [0,
        unsafe_get_char,
        unsafe_get_uint8,
        unsafe_get_int8,
        get_uint16$0,
        get_int16$0,
        get_int32$0,
        get_int64$0,
        get_float$0,
        get_double$0,
        unsafe_set_char,
        unsafe_set_int8,
        set_int16$0,
        set_int32$0,
        set_int64$0,
        set_float$0,
        set_double$0],
       [0,
        get_char,
        get_uint8,
        get_int8,
        get_uint16$1,
        get_int16$1,
        get_int32$1,
        get_int64$1,
        get_float$1,
        get_double$1,
        set_char,
        set_int8,
        set_int16$1,
        set_int32$1,
        set_int64$1,
        set_float$1,
        set_double$1],
       [0,
        unsafe_get_char,
        unsafe_get_uint8,
        unsafe_get_int8,
        get_uint16$2,
        get_int16$2,
        get_int32$2,
        get_int64$2,
        get_float$2,
        get_double$2,
        unsafe_set_char,
        unsafe_set_int8,
        set_int16$2,
        set_int32$2,
        set_int64$2,
        set_float$2,
        set_double$2],
       [0,
        get_char,
        get_uint8,
        get_int8,
        get_uint16$3,
        get_int16$3,
        get_int32$3,
        get_int64$3,
        get_float$3,
        get_double$3,
        set_char,
        set_int8,
        set_int16$3,
        set_int32$3,
        set_int64$3,
        set_float$3,
        set_double$3],
       [0,
        unsafe_get_char,
        unsafe_get_uint8,
        unsafe_get_int8,
        get_uint16$4,
        get_int16$4,
        get_int32$4,
        get_int64$4,
        get_float$4,
        get_double$4,
        unsafe_set_char,
        unsafe_set_int8,
        set_int16$4,
        set_int32$4,
        set_int64$4,
        set_float$4,
        set_double$4]];
    runtime.caml_register_global(1,EndianBigstring,"EndianBigstring");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJvY3BsaWJfZW5kaWFuX2JpZ3N0cmluZy5jbWEuanMiLCJzb3VyY2VSb290IjoiIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QiIsInNvdXJjZXNDb250ZW50IjpbXX0=
