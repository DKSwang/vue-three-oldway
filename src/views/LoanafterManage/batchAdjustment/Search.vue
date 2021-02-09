<!--
 * @Author: xiaoyu.ren
 * @Date: 2019-06-19 13:46:56
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-08 16:29:56
 * @Description: 批量调额-查询
 -->
<template>
  <div>
    <search-wrapper>
      <el-form :inline="true" :model="formParams" label-width="80px" ref="searchForm" size="small">
        <hidden-form>
          <template v-slot:text="scope">折叠筛选条件</template>
          <el-form-item label="卡号/账户" prop="cardNo" class="br-form-item-label">
            <el-input class="br-input" placeholder="请输入卡号/账户" v-model.trim="formParams.cardNo"></el-input>
          </el-form-item>

          <el-form-item label="姓名" prop="name" class="br-form-item-label">
            <el-input class="br-input" placeholder="请输入姓名" v-model.trim="formParams.name"></el-input>
          </el-form-item>

          <el-form-item label="调整前额度" prop="beforeAdjustSelect" class="br-form-item-label">
            <InputRange v-model="formParams.beforeAdjustSelect" @input="(val)=>handleInput(val,'before')" />
          </el-form-item>

          <template v-slot:hidden="scope">
            <el-form-item label="调整后额度" prop="afterAdjustSelect" class="br-form-item-label">
              <InputRange v-model="formParams.afterAdjustSelect" @input="(val)=>handleInput(val,'after')" />
            </el-form-item>

            <el-form-item label="产品名称" prop="proName" class="br-form-item-label">
              <el-input class="br-input" placeholder="请输入产品名称" v-model.trim="formParams.proName"></el-input>
            </el-form-item>

            <el-form-item label="导入批次号" prop="importNo" class="br-form-item-label">
              <el-input class="br-input" placeholder="请输入导入批次号" v-model.trim="formParams.importNo"></el-input>
            </el-form-item>

            <el-form-item label="导入时间" prop="timeSelect" class="br-form-item-label">
              <el-date-picker v-model="formParams.timeSelect" type="daterange" format="yyyy-MM-dd" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" class="br-datepicker" :clearable="false">
              </el-date-picker>
            </el-form-item>
          </template>
        </hidden-form>
        <el-form-item label-width="0px">
          <el-button class="br-btn template-search-btn" type="primary" @click="search">查询</el-button>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-button class="br-btn template-reset-btn" @click="resetForm('searchForm')">重置</el-button>
        </el-form-item>

      </el-form>
    </search-wrapper>
  </div>
</template>

<script >
import { mapActions, mapState } from 'vuex';
import { getCurrentInstance } from "vue";//就是当前实例
import SearchWrapper from "@/components/SearchWrapper.vue";
import HiddenForm from "@/components/HiddenForm.vue";
import InputRange from "@/components/InputRange.vue";
export default {
  name: '',
  data() {
    return {
      this: getCurrentInstance(),
      formParams: {
        cardNo: "", //卡号
        name: "", //姓名

        beforeAdjustSelect: [], //调整前额度
        beforeAdjustStart: "", //调整前额度-start
        beforeAdjustEnd: "", //调整前额度-end

        afterAdjustSelect: [], //期望调整后额度
        afterAdjustStart: "", //期望调整后额度-start
        afterAdjustEnd: "", //期望调整后额度-end

        timeSelect: [], //导入时间
        startDate: "", //导入时间-start
        endDate: "", //导入时间-ened

        importNo: "", //导入批次号
        proName: "" //产品名称
      }

    }
  },
  components: {
    "search-wrapper": SearchWrapper,
    "hidden-form": HiddenForm,
    InputRange
  },
  methods: {
    ...mapActions("batchAdjustment", ["queryList", 'saveSearchDataFN']),
    handleInput(val, which) {
      if (which == "before") {
        this.formParams.beforeAdjustSelect = val.length > 0 ? val : [];
        this.formParams.beforeAdjustStart = val[0] !== null ? val[0] : "";
        this.formParams.beforeAdjustEnd = val[1] !== null ? val[1] : "";
      } else {
        this.formParams.afterAdjustSelect = val.length > 0 ? val : [];
        this.formParams.afterAdjustStart = val[0] !== null ? val[0] : "";
        this.formParams.afterAdjustEnd = val[1] !== null ? val[1] : "";
      }
    },

    search() {
      let val = this.formParams.timeSelect;
      this.formParams.startDate = val[0] !== null ? val[0] : "";
      this.formParams.endDate = val[1] !== null ? val[1] : "";

      let params = {
        ...this.searchData,
        ...this.formParams
      };
      delete params.beforeAdjustSelect;
      delete params.afterAdjustSelect;
      delete params.timeSelect;

      this.queryList(params);
      this.saveSearchDataFN(params);
    },
    resetForm() {
      this.formParams.beforeAdjustStart = "";
      this.formParams.beforeAdjustEnd = "";
      this.formParams.afterAdjustStart = "";
      this.formParams.afterAdjustEnd = "";
      this.formParams.startDate = "";
      this.formParams.endDate = "";

      this.$refs.searchForm["resetFields"]();
    }
  },
  computed: {
    ...mapState("batchAdjustment", [
      "searchData",
    ])
  },

  created() {
    this.saveSearchDataFN({
      pageNum: 1,
      pageSize: 10
    });
    this.queryList(this.searchData);
  }
}


</script>

<style scoped lang="scss">
</style>