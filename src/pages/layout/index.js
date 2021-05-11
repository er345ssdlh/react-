/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 13:41:36
 * @LastEditors: Andy
 * @LastEditTime: 2021-05-06 17:38:03
 */
import React from 'react'
import { Layout, Menu,Dropdown, Button } from 'antd';
import { connect } from 'react-redux'
import './style.css'
const { Header, Sider, Content } = Layout;
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import { routerView,deepMenuList } from '@/utils/view' // 子路由
class List extends React.Component {
    constructor(props){
        super(props)
        this.state={
            collapsed: false,
            page:['']
        }
    }
    toggle(){
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    menuClick(e){
        this.props.history.push(e.key)
        this.setState({
            page:[e.key],
            username:''
        })
    }
    componentWillMount() {// 页面刷新会到此
        this.setState({
            page:[this.props.location.pathname]
        })
        const sessinUser = sessionStorage.getItem('user')
		const {query} = this.props.location
		if (sessinUser || query && query.user) {
			this.setState({
			    username:sessinUser || query.user
            },()=>{
				console.log('赋值完毕')
			})
		}else {
			this.props.history.push('/login')
		}
    }
    componentWillReceiveProps(nextProps) { // 前进后退可以到此
        this.setState({
            page:[nextProps.location.pathname]
        })
    }
    loginOut(){
        this.props.history.push('/login')
    }
    render(){
        let { lllPageTitle } = this.props
        const menu = (
            <Menu>
                <Menu.Item onClick={this.loginOut.bind(this)}>
                    退出登录
                </Menu.Item>
            </Menu>
        )
        return(
            <Layout className='layout'>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.page} onClick={this.menuClick.bind(this)}>
                        {deepMenuList(this.props.childen)}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle.bind(this),
                        })}
                        {
                            lllPageTitle
                        }
                        <Dropdown overlay={menu} placement="bottomLeft" arrow>
                            <div style={{float:'right',marginRight:'20px',corsor:'pointer'}}>{this.state.username}</div>
                        </Dropdown>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                        margin: '10px',
                        padding: 20,
                        minHeight: 280,
                        overflowX:'auto',
                        }}
                    >
                        
                        {routerView(this.props.childen)}
                    </Content>
                </Layout>
            </Layout>
        )
    }
} 
const mapStateToProps = (state) => {
    return {
      lllPageTitle: state.pageTitle,
    }
  }
export default connect(mapStateToProps)(List);