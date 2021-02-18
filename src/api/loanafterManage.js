/*
 * @Author: xxuzhong.wang
 * @Date: 2021-02-04 11:10:05
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-18 14:20:15
 * @Description: 
 */
// 贷后管理
// import axios from "@/utils/axios";
// import baseURL from "./api.js";

// //获取批量调额列表
// export const getBatchAdjustmentsList = params => {
//     return axios.get('../../../json/singlePostloanApply.json', params);
// };


//使用newAxios的文件
import Http from "../utils/newAxios"
export const getBatchAdjustmentsList = data => {
    return Http({
        url: '../../../json/singlePostloanApply.json',
        method: 'get',
        params: data
    });
};