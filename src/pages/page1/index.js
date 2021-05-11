/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-13 09:43:05
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-22 15:02:27
 */
import React from 'react'
import Jsxgrammar from '../../components/jsx/hello'
class Page1 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            content:'jsx 语法练习'
        }
    }
    render(){
        return(
            <Jsxgrammar />
        )
    }
} 
export default Page1;