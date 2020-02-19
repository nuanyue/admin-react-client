import React from "react";
import { Button,message } from 'antd'

export default class App extends React.Component{
    handleClick = ()=>{
        message.success('This is a success message');
    }
    render(){
        return <Button type="primary" onClick={ this.handleClick }>primary</Button>
    } 
}