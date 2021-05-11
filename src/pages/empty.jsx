/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-13 11:41:24
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-27 17:23:25
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
          {routerView(this.props.childen)}
        </div>
      );
    }
  }
   
  export default empty;