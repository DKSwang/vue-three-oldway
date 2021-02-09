/*
 * @Author: xxuzhong.wang
 * @Date: 2021-02-03 16:18:48
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-03 17:07:15
 * @Description: 
 */
import {
    replacePassword
} from "@/api/loginAPI";
const state = {};
const mutations = {};
const actions = {
    queryModify({
        commit
    }, params) {
        return replacePassword(params);
    }
};
export default {
    namespaced: true,
    state,
    actions,
    mutations
};