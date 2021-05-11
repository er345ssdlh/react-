/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-13 11:41:24
 * @LastEditors: Andy
 * @LastEditTime: 2021-05-06 14:44:17
 */
import React from 'react'
import { HashRouter} from 'react-router-dom';
import router from "@/router/routerMap";
import { routerView } from '@/utils/view'
export default () => (
  <HashRouter>
      {routerView(router)}
  </HashRouter>
)
