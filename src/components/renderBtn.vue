<!--
 * @Author: xiaoyu.ren
 * @Date: 2020-03-27 17:12:31
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-08 10:43:34
 * @Description: 按钮权限组件
 -->
<template >
  <!-- v-if="localCodes.includes(code)" -->
  <span class="permission-btn">
    <slot></slot>
  </span>
</template>

<script >
import { Base64 } from "js-base64";
import { getStore } from "@/utils/utils";

export default {
  name: 'RenserBtn',
  props: ['code'],
  data() {
    return {
      localCodes: []
    }
  },
  created() {
    let tempCodes = getStore("btn")
      ? JSON.parse(Base64.decode(getStore("btn")))
      : [];
    this.localCodes = tempCodes;
  }
}
</script>

<style lang="scss" scoped>
.permission-btn + .permission-btn {
  margin-left: 10px;
}
</style>
