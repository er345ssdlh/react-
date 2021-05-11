import React from 'react'
import AppList from './AppList'  // 添加数据组件
import AppForm from './AppForm' // 列表组件
import AppFooter from './AppFooter' // 筛选组件

var styles = {
    'title': {
        margin:'10px 0 10px 0'
    },
    'center':{
        textAlign:'center'
    }
}
class TodoListIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            choosevalue : 1, // 1全选 2未完成 3已完成
            data: this.props.data // 数据源头在这里
        }
    }
    OnAddTodoItem (newItem) { // AppForm 添加数据
        let newdata = this.state.data.concat(newItem);
        this.setState({data : newdata});
    }
    ChooseValue (id) { // AppFooter 修改状态
        this.setState({choosevalue:id});
    }
    AllChangeComplete(id){ // 改变状态
        let newdata = this.state.data.map((item,index) => {
            if(item.id === id) {
              item.complete = !item.complete;
            }
            return item;
        })
        this.setState({data : newdata});
    }
    AllOnDeleteItem(id){ // 删除
        console.log()
        let newdata = this.state.data.map(function (item) {
            if (item.id == id) {
                item.deleteFlag = true
            }
            return item
        })
        this.setState({ data: newdata })
    }
    render() {
        const { data,choosevalue } = this.state;
        return (
        <div style={styles.center}>
            <h1 style={styles.title}>My TodoList with React</h1>
            <AppForm AddTodoItem={this.OnAddTodoItem.bind(this)}/>
            <AppList 
                data={data} 
                choosevalue={choosevalue} 
                ChangeCompleteTop={this.AllChangeComplete.bind(this)}
                DeleteItemTop={this.AllOnDeleteItem.bind(this)} 
            />
            <AppFooter SubmitChooseValue={this.ChooseValue.bind(this)}/>
        </div>
        )
    }
  }
   
  export default TodoListIndex;