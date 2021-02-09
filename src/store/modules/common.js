/*
 * @Author: xiaoyu.ren
 * @Date: 2019-06-14 17:15:20
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-08 16:22:38
 * @Description: 公共接口查询
 */

const state = {
    needTags: true,
    fullLoading: false,
    /**
     * 以下是单个数据字典查询
     *  */
    sys_dept_type: [], //机构类型
    sys_role_type: [], //角色类型
    approve_stat: [], //审批状态
    cust_source: [] //用户来源
};

const mutations = {
    saveNeedTag(state, response) {
        state.needTags = response;
    },
    saveLoading(state, response) {
        state.fullLoading = response;
    },
};

const actions = {
    //是否开启多页签模式
    changeNeedTags({
        commit
    }, params) {
        commit("saveNeedTag", params);
    },
    changeLoading({
        commit,
    }, params) {
        commit('saveLoading', params);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};