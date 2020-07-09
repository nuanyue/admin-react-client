/* 入口js */
import React from "react";
import ReactDOM from "react-dom";
// import 'antd/dist/antd.css';
import App from "./App";
import memoryUtils from "./utils/memoryUtils"
import stroageUtils from "./utils/stroageUtils"

//读取loacl中的user给内存中user，这样当刷新的时候入口js就会把local中的user给内存中user
memoryUtils.user = stroageUtils.getUser()

ReactDOM.render(<App></App>,document.getElementById('root'))
