import React, { Component } from 'react'
class LifeCycle extends Component {
    // 1. 挂载卸载过程
    constructor(props) { // 完成了React数据的初始化
        super(props); // 只要使用了constructor()就必须写super(),否则会导致this指向错误。
        this.state = {str: "hello"};
    }

    componentWillMount() { // 已经经历了constructor()初始化数据后，但是还未渲染DOM时
        console.log("componentWillMount");
    }

    componentDidMount() { // 组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染
        console.log("componentDidMount");
    }

    componentWillUnmount() { // 在此处完成组件的卸载和数据的销毁。
        console.log("componentWillUnmount");
    }

    // 2. 更新过程
    componentWillReceiveProps(nextProps) { // 在接受父组件改变后的props需要重新渲染组件时用到的比较多
        console.log("componentWillReceiveProps");
    }

    shouldComponentUpdate() { // 唯一用于控制组件重新渲染的生命周期，由于在react中，setState以后，state发生变化，组件会进入重新渲染的流程，在这里return false可以阻止组件的更新
        console.log("shouldComponentUpdate");
        return true;        // 记得要返回true
    }

    componentWillUpdate() { // shouldComponentUpdate返回true以后，组件进入重新渲染的流程，进入componentWillUpdate
        console.log("componentWillUpdate");
    }

    componentDidUpdate() { // 组件更新完毕后，react只会在第一次初始化成功会进入componentDidmount,之后每次重新渲染后都会进入这个生命周期
        console.log("componentDidUpdate");
    }

    setTheState() {
        let s = "hello";
        if (this.state.str === s) {
            s = "HELLO";
        }
        this.setState({
            str: s
        });
    }

    forceItUpdate() {
        this.forceUpdate();
    }

    render() {
        return(
            <div>
                <span>Props:<h2>{parseInt(this.props.num)}</h2></span>
                <br />
                <span>State:<h2>{this.state.str}</h2></span>
            </div>
        );
    }
}
export default LifeCycle