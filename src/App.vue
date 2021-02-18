<!--
 * @Author: xxuzhong.wang
 * @Date: 2021-02-07 15:41:03
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-18 09:05:21
 * @Description: 
-->
<template>
  <!-- <div id="app">
    <router-view />
  </div> -->
  <div id="app" :class="{noScroll:fullLoading}">
    <div class="fullLoading" v-show="fullLoading">
      <img src="./assets/images/5-160914192R4-50.gif" alt="">
      <!-- 拼命加载... -->
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState('common', ['fullLoading']),
  },

}
</script>>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
}
.noScroll {
  overflow: hidden;
}
.fullLoading {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: rgba(238, 238, 238, 0.2);
  img {
    width: 80px;
    height: 80px;
    position: absolute;
    border-radius: 4px;
    top: 50%;
    left: 50%;
    margin-top: -40px;
    margin-left: -40px;
  }
}
</style>
