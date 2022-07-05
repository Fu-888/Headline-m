// 引入
import request from '@/utils/request'
// 请求登陆接口
export const login = (data) =>
  request({
    url: '/v1_0/authorizations',
    method: 'POST',
    data
  })

//   获取短信验证码
export const getCode = (mobile) =>
  request({
    url: `/v1_0/sms/codes/${mobile}`,
    method: 'GET'
  })
