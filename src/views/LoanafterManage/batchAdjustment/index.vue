<!--
 * @Author: xiaoyu.ren
 * @Date: 2019-06-19 11:21:16
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-08 16:08:22
 * @Description: 批量调额
 -->
<template>
  <div class="template-container">
    <Search></Search>
    <Grid></Grid>
  </div>
</template>

<script >
import Search from "./Search.vue";
import Grid from "./Grid.vue";
export default {
  name: "BatchAdjustment",
  data() {
    return {

    }
  },
  components: {
    Search,
    Grid
  }
}
</script>

<style scoped lang="scss">
</style>