/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-12 14:44:16
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-28 14:56:21
 */
import { getMockList } from "@/api";
// action也是函数
export function setPageTitle (data) {
    return (dispatch, getState) => {
      dispatch({ type: 'SET_PAGE_TITLE', data: data })
    }
  }
  
  export function setInfoList (data) {
    return (dispatch, getState) => {
      getMockList().then((res)=>{
        let { code,result } = res
        if(code == 200) {
          console.log('mock success:',res)
          dispatch({ type: 'SET_INFO_LIST', data: result.userinfo })
        }
      })
    }
  }