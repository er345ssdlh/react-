import React from 'react'
import { Button } from 'antd';
var styles = {
  'top': {
    margin: 20
  }
}

class AppFooter extends React.Component {
  handleComplete (id) {
      this.props.SubmitChooseValue(id);
  }
  render () {
    return (
      <div>
        <h2 style={styles.top}>筛选</h2>
        <Button 
           style={styles.top} 
           onClick={this.handleComplete.bind(this,1)}
         > 
           全部 
        </Button>
        <Button 
           style={styles.top} 
           onClick={this.handleComplete.bind(this,2)}
        > 
           还未完成 
        </Button>
        <Button 
           style={styles.top} 
           onClick={this.handleComplete.bind(this,3)}
        > 
           已完成 
        </Button>
      </div>
    )
  }
}

export default AppFooter;