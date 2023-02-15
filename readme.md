## taro app

### 安装 yarn

### 启动 yarn dev:h5 

### 脚手架 taro-cli https://taro-docs.jd.com/docs/apis/framework/getCurrentPages

#### UI组件库 [nutui] https://nutui.jd.com/taro/react/1x/#/zh-CN/component/configprovider

### 请求 
- @param string url
- @param string method GET | POST | PUT | DELETE | FORM
- @param object data
- @param object options

`js
import Taro from '@tarojs/taro';
Taro.getApp().request(url, method = 'GET', data = {})
`

### 获取路由参数 
`js 
import { useRouter } from "@tarojs/taro";
const router = useRouter()
`

