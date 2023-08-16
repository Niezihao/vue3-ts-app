/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-08-01 11:32:41
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-08-01 11:36:02
 * @FilePath: \vue3-ts-app\types\user.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 用户查询表单类型
 */
declare interface userQueryParams {
    currentPage: number; // 当前页
    pageSize: number; // 每页条数
    username?: string | undefined;
    status?: number | undefined;
  }
  /**
   * 用户编辑表单类型
   */
  declare interface userEditForm {
    user_id: number;
    action: string;
    username: string;
    old_password: string;
    password: string;
    repassword: string;
    status: number;
    role_ids: any[];
  }
  