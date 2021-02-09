/*
 * @Author: xxuzhong.wang
 * @Date: 2021-02-07 15:41:03
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-08 15:06:39
 * @Description: 
 */
import {
    createApp
} from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//引入UI组件
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import {
    ElMessage
} from 'element-plus'

//引入公共样式
import "./assets/commonLess/common.scss";
import "./assets/commonLess/components.scss";
import "./assets/iconFont/iconfont.css";
import "./assets/commonLess/wrapper.scss";
//对$message进行二次封装
let package_message = (options) => {
    ElMessage.closeAll();
    ElMessage({
        message: options.message,
        type: options.type,
        duration: 2000,
        onClose: options.onClose
    });
}
//引入全局封装的东西
import baseURL from "@/api/api"; //公共的url前缀

//实例化vue
const app = createApp(App);
//引入插件
import moment from "moment";
import bus from "./utils/eventBus"
//引入全局封装的东西
app.config.globalProperties.$message = package_message;
app.config.globalProperties.$baseUrl = baseURL.baseURL;
app.config.globalProperties.$moment = moment;
app.config.globalProperties.$bus = bus;






app
    .use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')