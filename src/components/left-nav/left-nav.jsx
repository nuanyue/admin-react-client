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
                        <Link to="/home">
                            <BankOutlined />
                            <span>首页</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key="sub1" title={
                        <span>
                            <MailOutlined />
                            <span>商品</span>
                        </span>
                    }>
                        <Menu.Item key="5">
                            <Link to='/category'>品类管理</Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to='/product'>商品管理</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="user">
                        <Link to="/user">
                            <BankOutlined />
                            <span>用户管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="role">
                        <Link to="/role">
                            <BankOutlined />
                            <span>角色管理</span>
                        </Link>
                    </Menu.Item>
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