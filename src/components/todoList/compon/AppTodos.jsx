import React from 'react'
import { Button } from 'antd';
var styles = {
  'content':{
    margin:'10px',
    paddingBottom:'10px',
    borderBottom:'1px solid #ccc'
  },
  'title': {
    display:'inline-block',
    width:'200px',
    fontWeight:'bold'
  },
  'delete': {
    marginLeft: '10px',
    marginRight: '10px'
  },
}

class AppTodos extends React.Component {
  handleChangeComplete (id) {
      this.props.ChangeCompleteItem(id);
  }

  handleDelete (id) {
      this.props.DeleteItem(id);
  }
  render () {
    return (
      <div style={styles.content}>
        <span style={styles.title}>
          {this.props.text}
        </span>
        <span style={styles.title} className={!this.props.complete?'textRed':''}>
          {this.props.complete ? '已完成' : '未完成'}
        </span>
        <span style={styles.title}>{this.props.id}</span>
        <Button style={styles.delete} type="primary" size='small' onClick={this.handleDelete.bind(this,this.props.id)}>
            删除
        </Button> 
        <Button type="primary" size='small' onClick={this.handleChangeComplete.bind(this,this.props.id)}>
            修改状态
        </Button> 
      </div>
    )
  }
}

export default AppTodos;