/*
 * @Author: xiaoyu.ren
 * @Date: 2019-02-27 19:47:54
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-07 17:07:02
 * @Description: common公共接口
 */
import axios from "@/utils/axios";
//import baseURL from "./api.js";

// 公共获取字典接口
export const getDictByType = params => {
    //   return axios.post(`${baseURL.baseURL}/system/getDicts`, params);
    return axios.get("../../../json/dicts.json", params);
};