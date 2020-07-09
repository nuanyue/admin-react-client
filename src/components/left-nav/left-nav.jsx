import React from 'react'
import './index.less'
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import logo from '../../assets/image/logo.png'
import {
    BankOutlined,
    MailOutlined,
    AppstoreOutlined
} from '@ant-design/icons';
const { SubMenu } = Menu;
/*左侧导航*/
export default class LeftNav extends React.Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <div className="left_nav">
                <Link to="/" className="left-nav-header">
                    <img src={logo} alt="logo"></img>
                    <h1>后台管理</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="13">
                        <BankOutlined />首页
                     </Menu.Item>
                    <SubMenu key="sub1" title={
                        <span>
                            <MailOutlined />
                            <span>商品</span>
                        </span>
                    }>
                        <Menu.Item key="5">品类管理</Menu.Item>
                        <Menu.Item key="6">商品管理</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="用户管理">
                        <Menu.Item key="1">用户管理</Menu.Item>
                        <Menu.Item key="2">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="3">Option 11</Menu.Item>
                            <Menu.Item key="4">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<AppstoreOutlined />} title="角色管理">
                        <Menu.Item key="5">角色管理</Menu.Item>
                        <Menu.Item key="6">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 11</Menu.Item>
                            <Menu.Item key="8">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<AppstoreOutlined />} title="图形图标">
                        <Menu.Item key="9">图形图标</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}