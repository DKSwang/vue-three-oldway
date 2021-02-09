<!--
 * @Author: xxuzhong.wang
 * @Date: 2021-02-07 15:41:03
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-08 14:48:47
 * @Description: 
-->
<template>
  <div class="template-container">
    <div class="contentBox">
      <img style="width: 100%; height: 100%" :src="url" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  data() {
    return {
      url: require("../../assets/images/home.png")
    }
  }

}
</script>
<style scoped lang="scss">
.template-container {
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
</style>