/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-25 14:07:24
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-28 14:47:33
 */
import http from '@/utils/http';

import "@/mock"
/**
 * get
 */
export const getMockList = () => {
  return http("get",'/getMockList')
}
/**
 * post
 */
export const postMockList = (data) => {
  return http("post",'/postMockList',data)
}