<!--
 * @Author: xxuzhong.wang
 * @Date: 2021-02-07 15:41:03
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-08 09:22:29
 * @Description: 
-->
<template>
  <div class="not-find" @click="toHomePage">
    <img src="../../assets/images/404.jpeg" alt="">
  </div>
</template>

<script>
// @ is an alias to /src

import { getCurrentInstance } from "vue";//就是当前实例
export default {
  name: 'Home',
  data() {
    return {
      this: getCurrentInstance()
    }
  },
  methods: {
    toHomePage() {
      this.$router.push({ path: "/" }); // 强制切换当前路由 path
    },
    //进入页面倒计时
    backToHome() {
      setTimeout(() => {
        this.$router.push({ path: "/" }); // 强制切换当前路由 path
      }, 5000);
    }

  },
  mounted() {
    this.backToHome()
  }

}
</script>
<style scoped lang="scss">
.not-find {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.not-find img {
  width: 100%;
  height: 100%;
}
</style >



