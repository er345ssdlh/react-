/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-13 11:41:24
 * @LastEditors: Andy
 * @LastEditTime: 2021-05-06 16:37:43
 */
import React, { Component } from 'react'
import { routerView } from '@/utils/view'
class empty extends Component {
    constructor(props){
      super(props);
      this.state = {
      }
    }
    componentDidMount(){
    }
    render() {
      return (
        <div className='layout'>
          阿三大苏打实打实的
        </div>
      );
    }
  }
   
  export default empty;