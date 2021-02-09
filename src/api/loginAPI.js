/*
 * @Author: xiaoyu.ren
 * @Date: 2019-06-14 16:53:36
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-07 17:30:51
 * @Description:
 */
import axios from "../utils/axios";
import baseURL from "./api.js";
/*
请求本地假数据 必须用get方法，静态json数据在 static目录下。
参考 登录方法 和 参考static目录下面的 loginData.json  假数据 必须是json类型
*/

// 登录
export const loginFN = params => {
    // return axios.post(`${baseURL.baseURL}/sys/login`, params);
    return axios.get("../../../json/menu.json", params);
};

// 退出登录
export const logOutFN = params => {
    return axios.get(`${baseURL.baseURL}/sys/logout`, params);
};
// 修改密码
export const replacePassword = params => {
    return axios.get("../../../json/menu.json", params);
};