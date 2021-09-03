(function(joo_global_object)
   {"use strict";
    var
     runtime=joo_global_object.jsoo_runtime,
     caml_bswap16=runtime.caml_bswap16,
     caml_bytes_get=runtime.caml_bytes_get,
     caml_bytes_get16=runtime.caml_bytes_get16,
     caml_bytes_get32=runtime.caml_bytes_get32,
     caml_bytes_get64=runtime.caml_bytes_get64,
     caml_bytes_set=runtime.caml_bytes_set,
     caml_bytes_set16=runtime.caml_bytes_set16,
     caml_bytes_set32=runtime.caml_bytes_set32,
     caml_bytes_set64=runtime.caml_bytes_set64,
     caml_bytes_unsafe_get=runtime.caml_bytes_unsafe_get,
     caml_bytes_unsafe_set=runtime.caml_bytes_unsafe_set,
     caml_int32_bits_of_float=runtime.caml_int32_bits_of_float,
     caml_int32_bswap=runtime.caml_int32_bswap,
     caml_int32_float_of_bits=runtime.caml_int32_float_of_bits,
     caml_int64_bits_of_float=runtime.caml_int64_bits_of_float,
     caml_int64_bswap=runtime.caml_int64_bswap,
     caml_int64_float_of_bits=runtime.caml_int64_float_of_bits,
     caml_register_global=runtime.caml_register_global,
     caml_string_get=runtime.caml_string_get,
     caml_string_get16=runtime.caml_string_get16,
     caml_string_get32=runtime.caml_string_get32,
     caml_string_get64=runtime.caml_string_get64,
     caml_string_unsafe_get=runtime.caml_string_unsafe_get,
     global_data=runtime.caml_get_global_data(),
     Stdlib_sys=global_data.Stdlib__sys;
    function get_char(s,off){return caml_string_get(s,off)}
    function set_char(s,off,v){return caml_bytes_set(s,off,v)}
    var unsafe_get_char=caml_string_unsafe_get;
    function unsafe_set_char(s,off,v){caml_bytes_unsafe_set(s,off,v);return 0}
    var get_uint8=caml_string_get;
    function get_int8(s,off)
     {var _A_=Stdlib_sys[9] - 9 | 0,_B_=Stdlib_sys[9] - 9 | 0;
      return caml_string_get(s,off) << _B_ >> _A_}
    var set_int8=caml_bytes_set,unsafe_get_uint8=caml_string_unsafe_get;
    function unsafe_get_int8(s,off)
     {return caml_string_unsafe_get(s,off)
             <<
             (Stdlib_sys[9] - 9 | 0)
             >>
             (Stdlib_sys[9] - 9 | 0)}
    function unsafe_set_int8(s,off,v){return unsafe_set_char(s,off,v)}
    function get_uint16(s,off)
     {return Stdlib_sys[11]
              ?caml_string_get16(s,off)
              :caml_bswap16(caml_string_get16(s,off))}
    function get_int16(s,off)
     {var _y_=Stdlib_sys[9] - 17 | 0,_z_=Stdlib_sys[9] - 17 | 0;
      return get_uint16(s,off) << _z_ >> _y_}
    function get_int32(s,off)
     {return Stdlib_sys[11]
              ?caml_string_get32(s,off)
              :caml_int32_bswap(caml_string_get32(s,off))}
    function get_int64(s,off)
     {return Stdlib_sys[11]
              ?caml_string_get64(s,off)
              :caml_int64_bswap(caml_string_get64(s,off))}
    function set_int16(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set16(s,off,v)
              :caml_bytes_set16(s,off,caml_bswap16(v))}
    function set_int32(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set32(s,off,v)
              :caml_bytes_set32(s,off,caml_int32_bswap(v))}
    function set_int64(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set64(s,off,v)
              :caml_bytes_set64(s,off,caml_int64_bswap(v))}
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
              ?caml_string_get16(s,off)
              :caml_bswap16(caml_string_get16(s,off))}
    function get_int16$0(s,off)
     {var _w_=Stdlib_sys[9] - 17 | 0,_x_=Stdlib_sys[9] - 17 | 0;
      return get_uint16$0(s,off) << _x_ >> _w_}
    function get_int32$0(s,off)
     {return Stdlib_sys[11]
              ?caml_string_get32(s,off)
              :caml_int32_bswap(caml_string_get32(s,off))}
    function get_int64$0(s,off)
     {return Stdlib_sys[11]
              ?caml_string_get64(s,off)
              :caml_int64_bswap(caml_string_get64(s,off))}
    function set_int16$0(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set16(s,off,v)
              :caml_bytes_set16(s,off,caml_bswap16(v))}
    function set_int32$0(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set32(s,off,v)
              :caml_bytes_set32(s,off,caml_int32_bswap(v))}
    function set_int64$0(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set64(s,off,v)
              :caml_bytes_set64(s,off,caml_int64_bswap(v))}
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
              ?caml_bswap16(caml_string_get16(s,off))
              :caml_string_get16(s,off)}
    function get_int16$1(s,off)
     {var _u_=Stdlib_sys[9] - 17 | 0,_v_=Stdlib_sys[9] - 17 | 0;
      return get_uint16$1(s,off) << _v_ >> _u_}
    function get_int32$1(s,off)
     {return Stdlib_sys[11]
              ?caml_int32_bswap(caml_string_get32(s,off))
              :caml_string_get32(s,off)}
    function get_int64$1(s,off)
     {return Stdlib_sys[11]
              ?caml_int64_bswap(caml_string_get64(s,off))
              :caml_string_get64(s,off)}
    function set_int16$1(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set16(s,off,caml_bswap16(v))
              :caml_bytes_set16(s,off,v)}
    function set_int32$1(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set32(s,off,caml_int32_bswap(v))
              :caml_bytes_set32(s,off,v)}
    function set_int64$1(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set64(s,off,caml_int64_bswap(v))
              :caml_bytes_set64(s,off,v)}
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
              ?caml_bswap16(caml_string_get16(s,off))
              :caml_string_get16(s,off)}
    function get_int16$2(s,off)
     {var _s_=Stdlib_sys[9] - 17 | 0,_t_=Stdlib_sys[9] - 17 | 0;
      return get_uint16$2(s,off) << _t_ >> _s_}
    function get_int32$2(s,off)
     {return Stdlib_sys[11]
              ?caml_int32_bswap(caml_string_get32(s,off))
              :caml_string_get32(s,off)}
    function get_int64$2(s,off)
     {return Stdlib_sys[11]
              ?caml_int64_bswap(caml_string_get64(s,off))
              :caml_string_get64(s,off)}
    function set_int16$2(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set16(s,off,caml_bswap16(v))
              :caml_bytes_set16(s,off,v)}
    function set_int32$2(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set32(s,off,caml_int32_bswap(v))
              :caml_bytes_set32(s,off,v)}
    function set_int64$2(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set64(s,off,caml_int64_bswap(v))
              :caml_bytes_set64(s,off,v)}
    function get_float$2(buff,i)
     {return caml_int32_float_of_bits(get_int32$2(buff,i))}
    function get_double$2(buff,i)
     {return caml_int64_float_of_bits(get_int64$2(buff,i))}
    function set_float$2(buff,i,v)
     {return set_int32$2(buff,i,caml_int32_bits_of_float(v))}
    function set_double$2(buff,i,v)
     {return set_int64$2(buff,i,caml_int64_bits_of_float(v))}
    function get_uint16$3(s,off){return caml_string_get16(s,off)}
    function get_int16$3(s,off)
     {var _q_=Stdlib_sys[9] - 17 | 0,_r_=Stdlib_sys[9] - 17 | 0;
      return caml_string_get16(s,off) << _r_ >> _q_}
    function get_int32$3(s,off){return caml_string_get32(s,off)}
    function get_int64$3(s,off){return caml_string_get64(s,off)}
    function set_int16$3(s,off,v){return caml_bytes_set16(s,off,v)}
    function set_int32$3(s,off,v){return caml_bytes_set32(s,off,v)}
    function set_int64$3(s,off,v){return caml_bytes_set64(s,off,v)}
    function get_float$3(buff,i)
     {return caml_int32_float_of_bits(caml_string_get32(buff,i))}
    function get_double$3(buff,i)
     {return caml_int64_float_of_bits(caml_string_get64(buff,i))}
    function set_float$3(buff,i,v)
     {return caml_bytes_set32(buff,i,caml_int32_bits_of_float(v))}
    function set_double$3(buff,i,v)
     {return caml_bytes_set64(buff,i,caml_int64_bits_of_float(v))}
    var get_uint16$4=caml_string_get16;
    function get_int16$4(s,off)
     {var _o_=Stdlib_sys[9] - 17 | 0,_p_=Stdlib_sys[9] - 17 | 0;
      return caml_string_get16(s,off) << _p_ >> _o_}
    var
     get_int32$4=caml_string_get32,
     get_int64$4=caml_string_get64,
     set_int16$4=caml_bytes_set16,
     set_int32$4=caml_bytes_set32,
     set_int64$4=caml_bytes_set64;
    function get_float$4(buff,i)
     {return caml_int32_float_of_bits(caml_string_get32(buff,i))}
    function get_double$4(buff,i)
     {return caml_int64_float_of_bits(caml_string_get64(buff,i))}
    function set_float$4(buff,i,v)
     {return caml_bytes_set32(buff,i,caml_int32_bits_of_float(v))}
    function set_double$4(buff,i,v)
     {return caml_bytes_set64(buff,i,caml_int64_bits_of_float(v))}
    var
     EndianString=
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
    caml_register_global(1,EndianString,"EndianString");
    function get_char$0(s,off){return caml_bytes_get(s,off)}
    function set_char$0(s,off,v){return caml_bytes_set(s,off,v)}
    var unsafe_get_char$0=caml_bytes_unsafe_get;
    function unsafe_set_char$0(s,off,v)
     {caml_bytes_unsafe_set(s,off,v);return 0}
    var get_uint8$0=caml_bytes_get;
    function get_int8$0(s,off)
     {var _m_=Stdlib_sys[9] - 9 | 0,_n_=Stdlib_sys[9] - 9 | 0;
      return caml_bytes_get(s,off) << _n_ >> _m_}
    var set_int8$0=caml_bytes_set,unsafe_get_uint8$0=caml_bytes_unsafe_get;
    function unsafe_get_int8$0(s,off)
     {return caml_bytes_unsafe_get(s,off)
             <<
             (Stdlib_sys[9] - 9 | 0)
             >>
             (Stdlib_sys[9] - 9 | 0)}
    function unsafe_set_int8$0(s,off,v){return unsafe_set_char$0(s,off,v)}
    function get_uint16$5(s,off)
     {return Stdlib_sys[11]
              ?caml_bytes_get16(s,off)
              :caml_bswap16(caml_bytes_get16(s,off))}
    function get_int16$5(s,off)
     {var _k_=Stdlib_sys[9] - 17 | 0,_l_=Stdlib_sys[9] - 17 | 0;
      return get_uint16$5(s,off) << _l_ >> _k_}
    function get_int32$5(s,off)
     {return Stdlib_sys[11]
              ?caml_bytes_get32(s,off)
              :caml_int32_bswap(caml_bytes_get32(s,off))}
    function get_int64$5(s,off)
     {return Stdlib_sys[11]
              ?caml_bytes_get64(s,off)
              :caml_int64_bswap(caml_bytes_get64(s,off))}
    function set_int16$5(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set16(s,off,v)
              :caml_bytes_set16(s,off,caml_bswap16(v))}
    function set_int32$5(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set32(s,off,v)
              :caml_bytes_set32(s,off,caml_int32_bswap(v))}
    function set_int64$5(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set64(s,off,v)
              :caml_bytes_set64(s,off,caml_int64_bswap(v))}
    function get_float$5(buff,i)
     {return caml_int32_float_of_bits(get_int32$5(buff,i))}
    function get_double$5(buff,i)
     {return caml_int64_float_of_bits(get_int64$5(buff,i))}
    function set_float$5(buff,i,v)
     {return set_int32$5(buff,i,caml_int32_bits_of_float(v))}
    function set_double$5(buff,i,v)
     {return set_int64$5(buff,i,caml_int64_bits_of_float(v))}
    function get_uint16$6(s,off)
     {return Stdlib_sys[11]
              ?caml_bytes_get16(s,off)
              :caml_bswap16(caml_bytes_get16(s,off))}
    function get_int16$6(s,off)
     {var _i_=Stdlib_sys[9] - 17 | 0,_j_=Stdlib_sys[9] - 17 | 0;
      return get_uint16$6(s,off) << _j_ >> _i_}
    function get_int32$6(s,off)
     {return Stdlib_sys[11]
              ?caml_bytes_get32(s,off)
              :caml_int32_bswap(caml_bytes_get32(s,off))}
    function get_int64$6(s,off)
     {return Stdlib_sys[11]
              ?caml_bytes_get64(s,off)
              :caml_int64_bswap(caml_bytes_get64(s,off))}
    function set_int16$6(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set16(s,off,v)
              :caml_bytes_set16(s,off,caml_bswap16(v))}
    function set_int32$6(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set32(s,off,v)
              :caml_bytes_set32(s,off,caml_int32_bswap(v))}
    function set_int64$6(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set64(s,off,v)
              :caml_bytes_set64(s,off,caml_int64_bswap(v))}
    function get_float$6(buff,i)
     {return caml_int32_float_of_bits(get_int32$6(buff,i))}
    function get_double$6(buff,i)
     {return caml_int64_float_of_bits(get_int64$6(buff,i))}
    function set_float$6(buff,i,v)
     {return set_int32$6(buff,i,caml_int32_bits_of_float(v))}
    function set_double$6(buff,i,v)
     {return set_int64$6(buff,i,caml_int64_bits_of_float(v))}
    function get_uint16$7(s,off)
     {return Stdlib_sys[11]
              ?caml_bswap16(caml_bytes_get16(s,off))
              :caml_bytes_get16(s,off)}
    function get_int16$7(s,off)
     {var _g_=Stdlib_sys[9] - 17 | 0,_h_=Stdlib_sys[9] - 17 | 0;
      return get_uint16$7(s,off) << _h_ >> _g_}
    function get_int32$7(s,off)
     {return Stdlib_sys[11]
              ?caml_int32_bswap(caml_bytes_get32(s,off))
              :caml_bytes_get32(s,off)}
    function get_int64$7(s,off)
     {return Stdlib_sys[11]
              ?caml_int64_bswap(caml_bytes_get64(s,off))
              :caml_bytes_get64(s,off)}
    function set_int16$7(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set16(s,off,caml_bswap16(v))
              :caml_bytes_set16(s,off,v)}
    function set_int32$7(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set32(s,off,caml_int32_bswap(v))
              :caml_bytes_set32(s,off,v)}
    function set_int64$7(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set64(s,off,caml_int64_bswap(v))
              :caml_bytes_set64(s,off,v)}
    function get_float$7(buff,i)
     {return caml_int32_float_of_bits(get_int32$7(buff,i))}
    function get_double$7(buff,i)
     {return caml_int64_float_of_bits(get_int64$7(buff,i))}
    function set_float$7(buff,i,v)
     {return set_int32$7(buff,i,caml_int32_bits_of_float(v))}
    function set_double$7(buff,i,v)
     {return set_int64$7(buff,i,caml_int64_bits_of_float(v))}
    function get_uint16$8(s,off)
     {return Stdlib_sys[11]
              ?caml_bswap16(caml_bytes_get16(s,off))
              :caml_bytes_get16(s,off)}
    function get_int16$8(s,off)
     {var _e_=Stdlib_sys[9] - 17 | 0,_f_=Stdlib_sys[9] - 17 | 0;
      return get_uint16$8(s,off) << _f_ >> _e_}
    function get_int32$8(s,off)
     {return Stdlib_sys[11]
              ?caml_int32_bswap(caml_bytes_get32(s,off))
              :caml_bytes_get32(s,off)}
    function get_int64$8(s,off)
     {return Stdlib_sys[11]
              ?caml_int64_bswap(caml_bytes_get64(s,off))
              :caml_bytes_get64(s,off)}
    function set_int16$8(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set16(s,off,caml_bswap16(v))
              :caml_bytes_set16(s,off,v)}
    function set_int32$8(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set32(s,off,caml_int32_bswap(v))
              :caml_bytes_set32(s,off,v)}
    function set_int64$8(s,off,v)
     {return Stdlib_sys[11]
              ?caml_bytes_set64(s,off,caml_int64_bswap(v))
              :caml_bytes_set64(s,off,v)}
    function get_float$8(buff,i)
     {return caml_int32_float_of_bits(get_int32$8(buff,i))}
    function get_double$8(buff,i)
     {return caml_int64_float_of_bits(get_int64$8(buff,i))}
    function set_float$8(buff,i,v)
     {return set_int32$8(buff,i,caml_int32_bits_of_float(v))}
    function set_double$8(buff,i,v)
     {return set_int64$8(buff,i,caml_int64_bits_of_float(v))}
    function get_uint16$9(s,off){return caml_bytes_get16(s,off)}
    function get_int16$9(s,off)
     {var _c_=Stdlib_sys[9] - 17 | 0,_d_=Stdlib_sys[9] - 17 | 0;
      return caml_bytes_get16(s,off) << _d_ >> _c_}
    function get_int32$9(s,off){return caml_bytes_get32(s,off)}
    function get_int64$9(s,off){return caml_bytes_get64(s,off)}
    function set_int16$9(s,off,v){return caml_bytes_set16(s,off,v)}
    function set_int32$9(s,off,v){return caml_bytes_set32(s,off,v)}
    function set_int64$9(s,off,v){return caml_bytes_set64(s,off,v)}
    function get_float$9(buff,i)
     {return caml_int32_float_of_bits(caml_bytes_get32(buff,i))}
    function get_double$9(buff,i)
     {return caml_int64_float_of_bits(caml_bytes_get64(buff,i))}
    function set_float$9(buff,i,v)
     {return caml_bytes_set32(buff,i,caml_int32_bits_of_float(v))}
    function set_double$9(buff,i,v)
     {return caml_bytes_set64(buff,i,caml_int64_bits_of_float(v))}
    var get_uint16$10=caml_bytes_get16;
    function get_int16$10(s,off)
     {var _a_=Stdlib_sys[9] - 17 | 0,_b_=Stdlib_sys[9] - 17 | 0;
      return caml_bytes_get16(s,off) << _b_ >> _a_}
    var
     get_int32$10=caml_bytes_get32,
     get_int64$10=caml_bytes_get64,
     set_int16$10=caml_bytes_set16,
     set_int32$10=caml_bytes_set32,
     set_int64$10=caml_bytes_set64;
    function get_float$10(buff,i)
     {return caml_int32_float_of_bits(caml_bytes_get32(buff,i))}
    function get_double$10(buff,i)
     {return caml_int64_float_of_bits(caml_bytes_get64(buff,i))}
    function set_float$10(buff,i,v)
     {return caml_bytes_set32(buff,i,caml_int32_bits_of_float(v))}
    function set_double$10(buff,i,v)
     {return caml_bytes_set64(buff,i,caml_int64_bits_of_float(v))}
    var
     EndianBytes=
      [0,
       [0,
        get_char$0,
        get_uint8$0,
        get_int8$0,
        get_uint16$5,
        get_int16$5,
        get_int32$5,
        get_int64$5,
        get_float$5,
        get_double$5,
        set_char$0,
        set_int8$0,
        set_int16$5,
        set_int32$5,
        set_int64$5,
        set_float$5,
        set_double$5],
       [0,
        unsafe_get_char$0,
        unsafe_get_uint8$0,
        unsafe_get_int8$0,
        get_uint16$6,
        get_int16$6,
        get_int32$6,
        get_int64$6,
        get_float$6,
        get_double$6,
        unsafe_set_char$0,
        unsafe_set_int8$0,
        set_int16$6,
        set_int32$6,
        set_int64$6,
        set_float$6,
        set_double$6],
       [0,
        get_char$0,
        get_uint8$0,
        get_int8$0,
        get_uint16$7,
        get_int16$7,
        get_int32$7,
        get_int64$7,
        get_float$7,
        get_double$7,
        set_char$0,
        set_int8$0,
        set_int16$7,
        set_int32$7,
        set_int64$7,
        set_float$7,
        set_double$7],
       [0,
        unsafe_get_char$0,
        unsafe_get_uint8$0,
        unsafe_get_int8$0,
        get_uint16$8,
        get_int16$8,
        get_int32$8,
        get_int64$8,
        get_float$8,
        get_double$8,
        unsafe_set_char$0,
        unsafe_set_int8$0,
        set_int16$8,
        set_int32$8,
        set_int64$8,
        set_float$8,
        set_double$8],
       [0,
        get_char$0,
        get_uint8$0,
        get_int8$0,
        get_uint16$9,
        get_int16$9,
        get_int32$9,
        get_int64$9,
        get_float$9,
        get_double$9,
        set_char$0,
        set_int8$0,
        set_int16$9,
        set_int32$9,
        set_int64$9,
        set_float$9,
        set_double$9],
       [0,
        unsafe_get_char$0,
        unsafe_get_uint8$0,
        unsafe_get_int8$0,
        get_uint16$10,
        get_int16$10,
        get_int32$10,
        get_int64$10,
        get_float$10,
        get_double$10,
        unsafe_set_char$0,
        unsafe_set_int8$0,
        set_int16$10,
        set_int32$10,
        set_int64$10,
        set_float$10,
        set_double$10]];
    caml_register_global(2,EndianBytes,"EndianBytes");
    return}
  (function(){return this}()));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLjAsImZpbGUiOiJvY3BsaWJfZW5kaWFuLmNtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJuYW1lcyI6W10sInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkIiLCJzb3VyY2VzQ29udGVudCI6W119
