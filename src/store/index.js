/*
 * @Author: xxuzhong.wang
 * @Date: 2021-02-07 15:41:03
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-07 16:42:29
 * @Description: 
 */
import {
    createStore
} from 'vuex'
import login from "./modules/login"
import common from "./modules/common"
import modifyPassword from "./modules/modifyPassword"
import batchAdjustment from "./modules/batchAdjustment"
export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        login,
        common,
        modifyPassword,
        batchAdjustment
    }
})