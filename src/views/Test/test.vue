<!--
 * @Author: xxuzhong.wang
 * @Date: 2021-02-18 09:44:26
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-19 10:20:42
 * @Description: 
-->

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
      <el-button type="primary" @click="testData" class="submit_btn">测试数据</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { getBatchAdjustmentsList } from "../../api/loanafterManage"
import { getCurrentInstance } from "vue";//就是当前实例
export default {
  name: 'Test',
  data() {
    return {
      this: getCurrentInstance(),

    }
  },
  methods: {
    testData() {
      console.log("测试数据")
      let params = {
        pageNum: 1,
        pageSize: 10,
      }
      this.$store.commit('common/saveLoading', true);
      getBatchAdjustmentsList({ ...params }).then((res) => {
        console.log(res)
        this.$store.commit('common/saveLoading', false);

      })
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