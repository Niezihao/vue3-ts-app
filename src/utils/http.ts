/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-17 11:16:47
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-17 11:16:56
 */
import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
const BASE_URL = ""; //请求接口url 如果不配置 则默认访问链接地址
const TIME_OUT = 20000; // 接口超时时间
const instance = Axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});
// 添加请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// 添加响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log(response);
    return response.data;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
export default instance;
