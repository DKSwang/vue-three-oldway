<!--
 * @Author: xiaoyu.ren
 * @Date: 2020-03-23 10:15:24
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-08 16:26:44
 * @Description: 分页组件
 -->
<template>
  <div>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageNum" :page-size="pageSize" :page-sizes="pageSizeList" :layout="isShowSizeList ? 'total, sizes, prev, pager, next, jumper' : 'total, prev, pager, next, jumper'" :total="Number(total)" class="br-pagination">
    </el-pagination>
  </div>
</template>
<script >
import { getCurrentInstance } from "vue";//就是当前实例
export default {
  name: 'Pages',
  props: {
    pageNum: {
      default: 1
    },
    pageSize: {
      default: 10
    },
    total: {
      default: 0
    },
    isShowSizeList: {
      default: true
    },
    autoScroll: {
      default: true
    }
  },
  data() {
    return {
      this: getCurrentInstance(),
      pageSizeList: []
    }
  },
  methods: {
    handleSizeChange(pageSize) {
      this.$emit("changePage", { pageNum: this.pageNum, pageSize: pageSize });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    },
    handleCurrentChange(pageNum) {
      this.$emit("changePage", { pageNum: pageNum, pageSize: this.pageSize });
      if (this.autoScroll) {
        scrollTo(0, 800);
      }
    }
  }


}
</script>