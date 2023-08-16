/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-08-01 10:48:58
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-08-01 10:57:57
 * @FilePath: \vue3-ts-app\src\utils\auth.ts
 */
import Cookies from "js-cookie";
// 设置token键值
const TokenKey = "Access-Token";
/**
 * 获取token
 */
export function getToken() {
  return Cookies.get(TokenKey);
}
/**
 * 设置token
 * @param token
 */
export function setToken(token: string) {
  return Cookies.set(TokenKey, token);
}
/**
 * 移除token
 */
export function removeToken() {
  return Cookies.remove(TokenKey);
}
// refreshToken键值
const RefreshTokenKey = "Refresh-Token";
export function getRefreshToken() {
  return Cookies.get(RefreshTokenKey);
}
export function setRefreshToken(token: string) {
  return Cookies.set(RefreshTokenKey, token, { expires: 7 });
}
export function removeRefreshToken() {
  return Cookies.remove(RefreshTokenKey);
}
