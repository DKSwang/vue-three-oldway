/*
 * @Author: xxuzhong.wang
 * @Date: 2021-01-28 17:29:11
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-03 17:19:29
 * @Description: 
 */
import axios from "axios";
import router from "../router";
import {
    ElMessage
} from 'element-plus'
import {
    getStore
} from "./utils";
const baseURL = "";

axios.interceptors.response.use(
    function (response) {
        if (response.status == 200) {
            let responseData = response.data;
            if (responseData.code == 1001) {
                //1001登录失效
                router.replace({
                    path: "/"
                });
            }
            if (responseData.code != 200) {
                ElMessage.closeAll();
                ElMessage.error(responseData.msg);
            }
            return responseData;
        } else {
            ElMessage.closeAll();
            ElMessage.error("系统错误");
            return {};
        }
    },
    err => {
        ElMessage.closeAll();
        if (err.response && err.response.status) {
            if (err.response.status == 404) {
                ElMessage.error("服务器找不到了");
            } else if (err.response.status == 504) {
                ElMessage.error("请求超时");
            } else if (err.response.status == 502) {
                ElMessage.error("网关错误");
            } else if (err.response.status == 500) {
                ElMessage.error("服务器异常");
            } else {
                ElMessage.error("未知错误");
            }
        } else {
            ElMessage.error("服务异常");
        }
        return Promise.resolve(err);
    }
);

class Axios {
    get(url, params, headers) {
        return axios({
            url,
            method: "get",
            params,
            baseURL,
            headers: {
                Accept: "application/json; charset=utf-8",
                "Content-Type": "application/json;charset=UTF-8;",
                token: getStore("token") ? getStore("token") : ""
            }
        });
    }
    post(url, params, headers) {
        return axios({
            url,
            method: "post",
            data: {
                params: params
            },
            baseURL,
            headers: {
                Accept: "application/json; charset=utf-8",
                "Content-Type": "application/json;charset=UTF-8;",
                token: getStore("token") ? getStore("token") : ""
            }
        });
    }
}

export default new Axios();