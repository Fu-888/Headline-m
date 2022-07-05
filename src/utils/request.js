// 封装请求模块
import axios from 'axios'
// 创建实例
const request = axios.create({
  baseURL: 'http://42.192.129.12:8000'
})

export default request
