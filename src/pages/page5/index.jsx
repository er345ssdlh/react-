/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 13:41:36
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-22 15:01:33
 */
import React from 'react'
import TodoList from '../../components/todoList/todoList'
class todoListClass extends React.Component {
    constructor(props){
        super(props)
        this.state={
            content:'todoList练习'
        }
    }
    render(){
        return(
            <TodoList />
        )
    }
} 
export default todoListClass;