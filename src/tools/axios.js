import axios  from 'axios'
import { Message } from "element-ui"
//request拦截
axios.interceptors.request.use(
    (config)=>{
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加
        // if (token) {
        //     config.headers.Authorization = token;
        // }
        return Promise.resolve(config);
    },(err)=>{
        console.log(err);
        Promise.reject(err);
    }
);
//respone拦截
//响应拦截主要是对返回做统一处理
axios.interceptors.response.use(
    response => {
        const res = response;
        console.log(res)
        if (res.status !== 200) {
            Message({
                message: res.message,
                type: 'error',
                duration: 5 * 1000
            });
            
            return Promise.reject('err');
        } else {
            return response.data;
        }
    },
    err => {
      //这里处理服务端错误
      console.log("err" + err); // for debug
      Message({
        message: err.message,
        type: "error",
        duration: 5 * 1000
      });
      return Promise.reject(err);
    }
);
const post = function(url,params = {}){
    return axios({
        method: 'post',
        url: `${url}`,
        data: params
      });
};
const get = function(url,params = {}){
    return axios({
        method: 'get',
        url: `${url}`,
        params:params
      });
};
export default {
    install(Vue, name = 'http') {
        //Object.defineProperty(Vue.prototype, name, {value: axios});
        Vue.prototype[name] = {
            get,
            post
        }
    }
}