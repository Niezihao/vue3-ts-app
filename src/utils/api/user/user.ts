/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-08-01 11:36:27
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-08-02 11:37:33
 * @FilePath: \vue3-ts-app\src\utils\api\user\user.ts
 */
// 导入axios实例
import $http from "../../http";
// 导入获取refreshToken的方法
import { getRefreshToken } from "@/utils/auth";
// 获取图形验证码
export const getCheckCode = (uuid: number) => {
  return $http({
    url: "/user/checkCode?uuid=" + uuid,
    method: "get",
  });
};
// 刷新过期token
export const refreshToken = () => {
  return $http({
    url: "/user/refreshToken",
    method: "post",
    data: { refreshToken: getRefreshToken() },
  });
};
// 添加用户登录请求 data如果约定好可以添加ts 接口类型
export const userLogin = (form: loginForm) => {
  return $http({
    url: "/user/login",
    method: "post",
    data: form,
  });
};
export const listUser = (params: userQueryParams) => {
  return $http({
    url: "/user/list",
    method: "get",
    params: params,
  });
};
export const addUser = (form: userEditForm) => {
  return $http({
    url: "/user/addUser",
    method: "post",
    data: form,
  });
};
export const updateUser = (form: userEditForm) => {
  return $http({
    url: "/user/editUser/" + form.user_id,
    method: "post",
    data: form,
  });
};
export const delUser = (ids: object) => {
  return $http({
    url: "/user/delUser",
    method: "post",
    data: ids,
  });
};
export const updatePwd = (form: submitPass) => {
  return $http({
    url: `/user/editPwd`,
    method: "post",
    data: form,
  });
};
// 根据id获取用户数据
export const getUserInfoById = (user_id: number) => {
  return $http({
    url: `/user/queryUserInfo/${user_id}`,
    method: "get",
  });
};
