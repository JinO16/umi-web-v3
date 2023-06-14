import request, { extend } from "umi-request";

// 接口通用前缀地址
const baseUrl = '/ekpsj16';

const createClient = (baseUrl: string) => {
  const request = extend({
    prefix: baseUrl
  });
  return request;
}

// @TODO options类型
// 返回拦截
request.interceptors.response.use((response: Response) => {
  // 自定义返回值，错误处理和上报等
  console.log('response===>', response);
  return response;
  // @ts-ignore
}, (error: Error) => {
  // 自定义返回报错，错误处理和上报等
  return Promise.reject(error);
})



// @TODO params的类型
const get = (url: string, params: any) => createClient(baseUrl)(url, {
  method: 'get',
  params,
  headers: {
    'X-Requested-With': 'XMLHttpRequest', 
  }
}).then((data) => data);

const post = <T, U>(url: string, data: T) => createClient(baseUrl)(url, {
  method: 'post',
  data,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json; charset=UTF-8',
  }
}).then((data) => data);

export default {
  get,
  post
}