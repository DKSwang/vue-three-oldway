/*
 * @Author: xxuzhong.wang
 * @Date: 2021-02-09 16:58:28
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-18 14:20:53
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
const http = axios.create({
    baseURL: baseURL,
    timeout: 30000
})
http.interceptors.request.use(
    config => {
        //请求发送之前的配置,让每个请求都携带tokenId
        let tokenId = getStore("token") ? getStore("token") : "";
        config.headers['Content-Type'] = "application/json;charset=UTF-8;";
        config.headers['tokenId'] = tokenId;
        config.headers['timestamp'] = Date.parse(new Date())
        //公共参数-项目不同公共参数不同
        config.params['timestamp'] = config.headers['timestamp'];
        config.params['userId'] = tokenId.userId;
        config.params['tokenId'] = tokenId.tokenId;
        config.params['branchId'] = tokenId.branchId;
        return config

    },
    error => {
        Promise.reject(error)
    }
)
//加载的loading
//store.dispatch('common/saveLoading', true);
//拦截器
http.interceptors.response.use(
    response => {
        if (response.status == 200) {
            let responseData = response.data;
            // store.dispatch('common/saveLoading', false);
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
        // store.dispatch('common/saveLoading', false);
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
)

export default http