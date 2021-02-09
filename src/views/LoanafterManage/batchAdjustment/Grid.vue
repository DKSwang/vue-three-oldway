<!--
 * @Author: xiaoyu.ren
 * @Date: 2019-06-19 13:48:34
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-08 16:43:08
 * @Description: 批量调额-列表
 -->
<template>
  <div>
    <content-wrapper>
      <template v-slot:title="scope">
        列表信息
      </template>
      <template v-slot:extra-btn="scope">
        <renderBtn code="">
          <el-button size="small" type="primary" class="br-btn">导入</el-button>
        </renderBtn>
      </template>
      <template v-slot:grid="scope">
        <el-table stripe :data="list.cardAccountInfo" class="br-table">
          <el-table-column label="卡号/账户" prop="customerName" min-width="120" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="姓名" prop="name"></el-table-column>
          <el-table-column label="身份证号" prop="idNo" min-width="150"></el-table-column>
          <el-table-column label="产品名称" prop="proName"></el-table-column>
          <el-table-column label="网点机构" prop="dotOrgan"></el-table-column>
          <!-- <el-table-column label="调整前额度" prop="beforeAmt" min-width="100">
            <template slot-scope="scope">
              {{scope.row.beforeAmt|money}}
            </template>
          </el-table-column>
          <el-table-column label="调整后额度" prop="afterAmt" min-width="120">
            <template slot-scope="scope">
              {{scope.row.afterAmt|money}}
            </template>
          </el-table-column> -->
          <el-table-column label="发放日期" prop="grantDate" min-width="100"></el-table-column>
          <el-table-column label="导入时间" prop="importTime" min-width="150"></el-table-column>
          <el-table-column label="导入批次号" prop="importNo" min-width="100"></el-table-column>
        </el-table>

        <Pages :pageNum="list.pageNum" :pageSize="list.pageSize" :total="list.total" @changePage="changePageFn" />

      </template>
    </content-wrapper>
  </div>
</template>

<script >
import { mapActions, mapState } from 'vuex';
import { getCurrentInstance } from "vue";//就是当前实例
import ContentWrapper from "@/components/ContentWrapper.vue";
import Pages from "@/components/Pages.vue";
import renderBtn from "../../../components/renderBtn.vue"
export default {
  name: 'Grid',
  data() {
    return {

    }
  },
  methods: {
    ...mapActions("batchAdjustment", ["queryList", 'saveSearchDataFN']),
    changePageFn(val) {
      let parame = {
        ...this.searchData,
        pageNum: val.pageNum,
        pageSize: val.pageSize
      };
      this.queryList(parame);
      this.saveSearchDataFN(parame);
    }
  },
  components: {
    "content-wrapper": ContentWrapper,
    Pages,
    renderBtn
  },
  computed: {
    ...mapState("batchAdjustment", [
      "searchData", "list"
    ])

  }
}
</script>

<style scoped lang="scss">
</style>