/*
 * @Descripttion: 
 * @version: 
 * @Author: lzy
 * @Date: 2021-04-28 14:18:48
 * @LastEditors: Andy
 * @LastEditTime: 2021-04-28 15:32:47
 */
var Mock = require('mockjs')
//延时200-600毫秒请求到数据
Mock.setup({
  timeout: '1000-2000'
})
Mock.mock("/getMockList","get",{  
      "code":200,
      "msg":"",
      "result":{
        //"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
          "userinfo|4":[{   			//生成四个如下格式的数据
            "id|+1":1, 						//数字从1开始，后续依次加1
            "name":"@cname",			//名字为随机中文名
            "age|18-28":25, 			//年龄是18-28之间的随机数
            "sex|1":["男","女"],	 //性别是数组里的随机一项
            "job|1":["web","teacher","python","php"]   //job是数组里的随机一项
        }]
      }
})
Mock.mock("/postMockList","post",{
      "code":200,
      "msg":"",
      "result":{
        "list|15":[{
            "key|+1":1,
            "userName":"@cname",
            "sex|1":['男','女'],
            "birthday":"2020-5-20",
            "address":"@province",
            "time":"09:00"
        }],
        "page":1,
        "page_size":1,
        "total":100
    }
})