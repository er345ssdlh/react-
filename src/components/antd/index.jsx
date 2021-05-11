/*
 * @Descripttion: antd 分页列表
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-21 15:29:18
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-22 09:28:29
 */
import React, { Component } from 'react'
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
class Hello extends Component {
    constructor(props){
      super(props);
      this.state = {
        value:[]
      }
    }
    componentDidMount() {
        console.log('欢迎使用后台管理平台欢迎使用后台管理平台')
        for (let i = 0; i < 23; i++) {
            this.state.value.push({
                href: 'https://ant.design',
                title: `作者 ${i}`,
                avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4248629026,2640799651&fm=26&gp=0.jpg',
                description:
                '副标题副标题副标题，副标题副标题，副标题副标题副标题副标题副标题',
                content:
                '内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要，内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要内容摘要',
            });
        }
    }
    render() {
        const IconText = ({ icon, text }) => (
            <Space>
                {React.createElement(icon)}
                {text}
            </Space>
        );
      return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log('pagination', page);
                },
                pageSize: 10,
            }}
            dataSource={this.state.value}
            header={<div>
                带分页的列表
            </div>}
            footer={
            <div>
                <b>ant design</b> 到底部了
            </div>
            }
            renderItem={item => (
            <List.Item
                key={item.title}
                actions={[
                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                ]}
                extra={
                <img
                    width={272}
                    alt="logo"
                    src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3791123780,4261799713&fm=26&gp=0.jpg"
                />
                }
            >
                <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
                />
                {item.content}
            </List.Item>
            )}
        />
      );
    }
  }
   
  export default Hello;