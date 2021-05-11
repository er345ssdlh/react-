import React, { Component } from 'react'

// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'

// 引入action
import { setPageTitle, setInfoList } from '../../store/actions.js'

class Test extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
  }
  handleCilck(){
    let { lllSetPageTitle } = this.props
    // 触发setPageTitle action
    lllSetPageTitle('redux设置新的标题')
  }
  handleList(){
    let { lllSetInfoList } = this.props
    
    // 触发setInfoList action
    lllSetInfoList()
  }
  render () {
    // 从props中解构store
    let { lllPageTitle, lllInfoList } = this.props
    // 使用store
    return (
      <div>
        <h1>{lllPageTitle}</h1>
        <p onClick={this.handleCilck.bind(this)} style={{margin:'10px'}}>点击更换名称</p>
        {
            lllInfoList.length > 0 ? (
                <ul>
                    {
                        lllInfoList.map(item => <li key={item.id}>{item.name},{item.age},{item.sex},{item.job}</li>)
                    }
                </ul>
            ):null
        }
        <p onClick={this.handleList.bind(this)} style={{margin:'10px'}}>点击请求mock列表数据</p>
      </div>
    )
  }
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state,ownProps) => {
  //state 是 Redux 的store
  //ownProps 是当前组件的props
  return {
    lllPageTitle: state.pageTitle,
    lllInfoList: state.infoList
  }
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    lllSetPageTitle (data) {
        // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
        dispatch(setPageTitle(data))
        // 执行setPageTitle会返回一个函数
        // 这正是redux-thunk的所用之处:异步action
        // 上行代码相当于
        /*dispatch((dispatch, getState) => {
            dispatch({ type: 'SET_PAGE_TITLE', data: data })
        )*/
    },
    lllSetInfoList (data) {
        dispatch(setInfoList(data))
    }
  }
}
/**
 * @name: connect
 * @msg: 把 React 组件和 Redux 的 store 真正连接起来 https://segmentfault.com/a/1190000015042646
 * @param {
 * mapStateToProps：'允许我们将store中的数据作为props绑定到组件上'，
 * mapDispatchToProps:'将action作为props绑定到组件上'，
 * mergeProps:'手动将state和dispach和当前组件props合并，可以不传，默认就会合并'，
 * options:'忽略'
 * }
 * @return {*}
 */
export default connect(mapStateToProps, mapDispatchToProps)(Test)