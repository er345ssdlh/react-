/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 13:41:36
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-28 15:30:14
 */
import React from 'react'
import { Table, Tag, Space } from 'antd';
import { postMockList } from "@/api";
class httpDemo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            dataSource:[],
            columns:[
                {
                    title: '姓名',
                    dataIndex: 'userName',
                    key: 'userName',
                },{
                    title: '性别',
                    dataIndex: 'sex',
                    key: 'sex',
                },{
                    title: '地址',
                    dataIndex: 'address',
                    key: 'address',
                }
            ]
        }
    }
    componentDidMount() { // 组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染
        postMockList({
            a:1
        }).then((res)=>{
            console.log('Mock success:',res)
            if (res && res.code == 200){
                console.log(res.result.list)
                this.setState({
                    dataSource: res.result.list
                })
            }
        });
    }
    render(){
        return(
            <Table dataSource={this.state.dataSource} columns={this.state.columns} />
        )
    }
} 
export default httpDemo;