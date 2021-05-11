import React from 'react'
import AppTodos from './AppTodos'

class AppList extends React.Component {
  SubmitDelete (id) {
    this.props.DeleteItemTop(id)
  }

  ChangeDone (id) {
    this.props.ChangeCompleteTop(id);
  }
  render () { 
    var value = this.props.choosevalue;
    const a = this.props.data.map(({ id, text, complete,deleteFlag }, index) => {
      if (value == 1 && !deleteFlag) { // q全部
        return (
          <AppTodos 
            key={index} 
            id={id} 
            text={text} 
            complete={complete} 
            DeleteItem={this.SubmitDelete.bind(this)} 
            ChangeCompleteItem={this.ChangeDone.bind(this)} 
          />
         )
      }
      if (value == 2 && complete === false && !deleteFlag) { // 已完成
        return (
          <AppTodos 
            key={index} 
            id={id} 
            text={text} 
            complete={complete} 
            DeleteItem={this.SubmitDelete.bind(this)} 
            ChangeCompleteItem={this.ChangeDone.bind(this)} 
          />
         )
      }
      if (value == 3 && complete === true && !deleteFlag) { // 未完成
        return (
          <AppTodos 
            key={index} 
            id={id} 
            text={text} 
            complete={complete}
            DeleteItem={this.SubmitDelete.bind(this)} 
            ChangeCompleteItem={this.ChangeDone.bind(this)}  
          />
         )
      }
    })
    return (
      <div> { a } </div>
    )
  }
}

export default AppList;