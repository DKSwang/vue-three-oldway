<!--
 * @Author: xxuzhong.wang
 * @Date: 2021-02-07 16:51:16
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-08 14:39:19
 * @Description: 
-->
<template>
  <el-drawer title="设置中心" size="300px" v-model="showPannel" :with-header="false" @close="closeDrawer">
    <slot />
  </el-drawer>
</template>

<script>
import { getCurrentInstance } from "vue";//就是当前实例
export default {
  name: 'RightPanel',
  props: ['showPannel'],
  data() {
    return {
      this: getCurrentInstance(),
    }
  },
  computed: {
    get: (val) => {
      return this.showPannel;
    },
    set: (val) => {
      this.$emit("close", val);
    }
  },
  methods: {
    closeDrawer() {
      this.$emit("close", false);
    }
  },
  mounted() {
  }
}
</script>


<style lang="scss" scoped>
</style>
