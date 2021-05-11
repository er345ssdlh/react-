/*
 * @Descripttion: react生命周期
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 16:15:25
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-22 12:44:46
 */
import React, { Component } from 'react'
import { Button } from 'antd';
import LifeCycle from './TestSon'
class Lifecycle  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: Math.random() * 100
        };
    }

    propsChange() {
        this.setState({
            num: Math.random() * 100
        });
    }

    setLifeCycleState() {
        this.refs.rLifeCycle.setTheState();
    }

    forceLifeCycleUpdate() {
        this.refs.rLifeCycle.forceItUpdate();
    }

    parentForceUpdate() {
        this.forceUpdate();
    }
    render() {
        const itemStyle = {margin: '10px'};
        return (
            <div id='container'>
                <Button type="primary" onClick={this.propsChange.bind(this)}>父传子数据改变</Button>
                <Button type="primary" style = { { margin: '10px', } } onClick={this.setLifeCycleState.bind(this)}>调用子方法修改子的数据</Button>
                <Button type="primary" style = {itemStyle} onClick={this.forceLifeCycleUpdate.bind(this)}>调用子forceUpdate()</Button>
                <Button type="primary" className='buttonss' onClick={this.parentForceUpdate.bind(this)}>调用父forceUpdate()</Button>
                <LifeCycle ref="rLifeCycle" num={this.state.num}></LifeCycle>
            </div>
        );
    }
}

export default Lifecycle
