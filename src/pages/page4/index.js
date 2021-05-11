/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 13:41:36
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-22 14:56:16
 */
import React from 'react'
import Antd from '../../components/antd/index'
class AntdClass extends React.Component {
    constructor(props){
        super(props)
        this.state={
            content:'antv 练习'
        }
    }
    render(){
        return(
            <Antd />
        )
    }
} 
export default AntdClass;