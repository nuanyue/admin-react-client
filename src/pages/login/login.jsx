import React from 'react'

import './login.less'
//图片不能直接在src中写了，要引入模块
import logo from './images/logo.png'
import { Layout, Card, Col, Row, Form, Icon, Input, Button } from 'antd';
import { login } from "../../api";
const { Header, Footer, Content } = Layout;

class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault()
        //得到表单中的所有数据，如果想要得到单个的可以使用设置的标识符this.props.form.getFieldsValue.username
        // const values = this.props.form.getFieldsValue()
        //console.log("form", values)

        //对所有表单进行校验，得到所有表单数据，自定义表单必须callback（）
        this.props.form.validateFields(async(err, values) => {
            if (!err) {
                // login(values).then((res)=>{
                //     if(res.status===0){
                //         console.log("res",res)
                //     }
                // })


                try{
                    let res = await login(values)
                    console.log('请求成功了',res.data)
                }catch(error){
                    console.log('请求出错了',error)
                }


            }else{
                console.log('校验失败')
            }
          });
        
    }
    render() {
        // 这里的from就是From.create()(Login)传递过来的
        const form = this.props.form
        const { getFieldDecorator } = form

        return (
            <Layout className="login">
                <Header className="login-header">
                    <img src={logo} alt="" />
                    <h1>React项目：后台管理系统</h1>
                </Header>
                <Content className="login-content">
                    <Row className="cardSty">
                        <Col span={9}></Col>
                        <Col span={6}>
                            <Card title="用户登录" bordered={false} >
                                <Form onSubmit={this.handleSubmit} className="login-form">
                                    <Form.Item>
                                        {/* username标识符，获取用户名的值就是通过标识符获取的 */}
                                        {
                                            getFieldDecorator('username', {
                                                rules: [
                                                    { required: true, message: '请输入用户名' },
                                                    { max: 12, min: 4, message: '用户名长度在4-12位之间' }
                                                ]
                                            })(
                                                <Input
                                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    placeholder="用户名"
                                                />
                                            )
                                        }
                                    </Form.Item>
                                    <Form.Item>
                                        {
                                            getFieldDecorator('password', { rules: [{ validator: this.validatorPwd }] })(
                                                <Input
                                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                    type="password"
                                                    placeholder="密码"
                                                />
                                            )
                                        }
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            登录
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </Content>
                <Footer className="login-footer">React项目：后台管理系统</Footer>
            </Layout>
        )
    }
    validatorPwd = (rule, value, callback) => {
        if (!value) {
            callback('请输入密码')
        } else if (value.length < 4) {
            callback('密码在4位和12位之间')
        } else if (value.length > 12) {
            callback('密码在4位和12位之间')
        }else{
            callback()
        }
    }

}

/*
    From.create()(Login)是高阶函数,就是函数调用后，返回的还是一个函数
    From.create()(Login)就是包装上面Login中的Form组件，生成一个新的组件：From(Login),
    新的组件会通过父子组件传值向Login组件的Form组件传递一个from属性,所以之前的Login组件也有from对象了，
    这里面有from的表单所有表单验证数据，通过this.props.form获取
 */

const WrapLogin = Form.create()(Login)
export default WrapLogin
