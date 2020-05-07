/*
封装基础的请求函数，后续给index.js请求每个模块的再次封装
data={},type='GET'默认值
*/

import axios from "axios";
export default function ajax(url,data={},type='GET'){
    if(type==='GET'){
        return axios.get(url,{params:data})
    }else if(type==='POST'){
        return axios.post(url,data)
    }
}