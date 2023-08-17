/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-08-16 17:54:45
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-08-17 10:06:00
 * @FilePath: \vue3-ts-app\src\directive\permission\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { store } from "@/store";
import { Directive, DirectiveBinding } from "vue";

/**
 * 按钮权限校验
 */
export const hasPerm: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    // 「超级管理员」拥有所有的按钮权限
    const roles = store.state.user.roles;
    console.log("roles", roles);

    if (roles.includes("管理员")) {
      return true;
    }
    // 「其他角色」按钮权限校验
    const { value } = binding;
    if (value) {
      const requiredPerms = value; // DOM绑定需要的按钮权限标识，例如system:user:add
      // 判断vuex的buttons中是否存在传入的权限标识
      const hasPerm = store.state.user.buttons?.some((button: string) => {
        return requiredPerms.includes(button);
      });
      // 不存在，从DOM结构中移除这个按钮
      if (!hasPerm) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error('需要权限!"');
    }
  },
};
