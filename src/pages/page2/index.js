/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-13 09:43:05
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-22 12:44:59
 */
import React from 'react'
import Lifecycle from '../../components/lifeCycle/TestFar'
class Page2 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            content:'认识生命周期（控制台）'
        }
    }
    render(){
        return(
            <Lifecycle />
        )
    }
} 
export default Page2;