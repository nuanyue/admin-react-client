import React from 'react'
import { Redirect ,Route,Switch} from 'react-router-dom'
import memoryUtils from "../../utils/memoryUtils"
import { Layout } from 'antd';
import LeftNav from "../../components/left-nav/left-nav"
import Header from "../../components/header/header"
import Home from "../home/home"
import Category from "../category/category"
import User from "../user/user"
import Product from "../product/product"
import Role from "../role/role"
import Bar from "../charts/bar"
import Pie from "../charts/pie"
import Line from "../charts/line"



const { Footer, Sider, Content } = Layout;

export default class Admin extends React.Component {
    render() {
        const user = memoryUtils.user
        //判断是否登录
        if (!user || !user._id) {
            //自动跳转登录
            return <Redirect to="/login" />
        }
        return (
            //第一个{}说明里面是js代码 里面的{}代表的是一个js对象
            <Layout style={{height:'100%'}}>
                <Sider><LeftNav /></Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{background:'#ffffff'}}>
                        <Switch>
                            <Route path='/home' component={Home}></Route>
                            <Route path='/category' component={Category}></Route>
                            <Route path='/user' component={User}></Route>
                            <Route path='/product' component={Product}></Route>
                            <Route path='/role' component={Role}></Route>
                            <Route path='/bar' component={Bar}></Route>
                            <Route path='/pie' component={Pie}></Route>
                            <Route path='/line' component={Line}></Route>
                            <Redirect to="/"></Redirect>
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:'center',color:'#cccccc'}}>React后台管理项目</Footer>
                </Layout>
            </Layout>
        )
    }
}