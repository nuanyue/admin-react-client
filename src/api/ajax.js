/*
封装基础的请求函数，后续给index.js请求每个模块的再次封装
data={},type='GET'默认值
由于每次请求都要catch,因此优化，再次包裹一个promise
*/

import axios from "axios";
import {message} from "antd";

export default function ajax(url, data = {}, type = 'GET') {
    //resolve 成功，reject失败
    return new Promise((resolve, reject) => {
        // 1.执行异步请求
        let prom
        if (type === 'GET') {
            prom = axios.get(url, { params: data })
        } else if (type === 'POST') {
            prom = axios.post(url, data)
        }
        //如果请求的prom成功了 调用resolve
        prom.then((res) => {
            resolve(res)
            // 失败了 不调用reject，因为这样做还是会重复
        }).catch((error) => {
            message.error('请求出错，错误信息：'+error.message)
        })
    })

}