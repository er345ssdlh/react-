import React from 'react';
import { Form, Input, Button } from 'antd';

class AppForm extends React.Component {
  render () {
    const onFinish = (values) => {
      this.props.AddTodoItem({
        id:Math.floor(Math.random()*100), // 随机数
        text:values.addTodo, // 写的字
        complete:false
      });
    };
    const onFinishFailed = (errorInfo) => {
      console.log('提交失败:', errorInfo);
    };
    return (
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item name="addTodo">
          <Input className='w300' placeholder="添加内容" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default AppForm;