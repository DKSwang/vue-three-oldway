/*
 * @Author: xxuzhong.wang
 * @Date: 2021-01-29 10:39:01
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-01-29 17:13:44
 * @Description: 
 */
import * as api from "@/api/loginAPI";
const state = {};
const mutations = {};
const actions = {
    //登录
    queryLogin({
        commit
    }, params) {
        return api.loginFN(params);
    },
    //退出登录
    UserlogOut({
        commit
    }, params) {
        return api.logOutFN(params);
    }
};
export default {
    namespaced: true,
    state,
    actions,
    mutations
};