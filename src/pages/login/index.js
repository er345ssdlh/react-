/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 13:41:36
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-28 17:23:52
 */

import React, { Component } from 'react'
import {Form, Input, Button,notification} from 'antd'
import { UnlockOutlined, UserOutlined } from '@ant-design/icons';
import md5 from 'md5'
class Login extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props, context) {
    super(props)
    this.state = {
      username: '',
      password: 'capgemini',
    }
  }
  componentDidMount() {
    sessionStorage.removeItem('user')
  }
  render() {
    const centerBox = {
      width:'340px',
      height:'240px',
      padding:'20px',
      position:'absolute',
      left: 0,
      right: 0,
      top: '130px',
      margin: 'auto',
      backgroundColor:'rgba(132, 175, 155,.7)',
      borderRadius:'10px',
      textAlign:'center'
    }
    const onFinish = (values) => {
      console.log('提交成功:', values);
      if(values.password === this.state.password){
        sessionStorage.setItem('user',values.username)
        this.props.history.push({pathname:'/home/Page1',query:{user:values.username}})
      }else {
        notification.info({
          message: '信息输入有误！',
        });
      }
    }
    const onFinishFailed = (errorInfo) => {
      console.log('提交失败:', errorInfo);
    }
    return (
      <div className='loginPag'>
        <Form style={centerBox} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          {/* <p style={{fontSize:'24px',color:'#fff'}}>react+antd+antv+todoList+mockjs+redux</p> */}
          <p style={{fontSize:'24px',color:'#fff'}}>XXXXX后台管理系统</p>
          <Form.Item name="username">
            <Input allowClear prefix={<UserOutlined className="site-form-item-icon" />} className='w300' placeholder="请输入用户名" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password prefix={<UnlockOutlined className="site-form-item-icon" />} allowClear className='w300' placeholder="请输入用户密码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
export default Login;