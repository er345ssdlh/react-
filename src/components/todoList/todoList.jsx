/*
 * @Descripttion: todoList
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-21 15:59:32
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-22 11:21:08
 */
import React, { Component } from 'react'
import Ind from './compon'
class todoList extends Component {
    constructor(props){
      super(props);
    }
    render() {
        let data = [
            {id: 0, text: '今夜星光闪闪!!!', complete: false},
            {id: 1, text: '爱你的心满满!!!', complete: false},
            {id: 2, text: '蹦砂卡拉卡!!!', complete: true},
        ]
      return (
          <Ind data={data} />
      );
    }
  }
   
  export default todoList;