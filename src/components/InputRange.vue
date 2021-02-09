<!--
 * @Author: xiaoyu.ren
 * @Date: 2019-01-09 11:28:52
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-08 16:07:31
 * @Description: 输入框区间
 -->
<template>
  <div class="range-container">
    <el-input class="br-input" :placeholder="startPlaceholder" v-model.number.trim="start" @blur="handleInput('start')"></el-input>
    <span class="range-span">-</span>
    <el-input class="br-input" :placeholder="endPlaceholder" v-model.number.trim="end" @blur="handleInput('end')"></el-input>
  </div>
</template>

<script >
import { getCurrentInstance } from "vue";//就是当前实例
export default {
  name: 'InputRange',
  props: {
    value: {
      type: Array
    },
    min: {
      type: [String, Number],
      default: 0
    },
    max: {

    },
    startPlaceholder: {
      type: String
    },
    endPlaceholder: {
      type: String
    }
  },
  data() {
    return {
      this: getCurrentInstance(),
      start: "",
      end: ""
    }
  },
  watch: {
    value() {
      this.setDefaultValue();
    }
  },

  created() {
    this.setDefaultValue();
  },
  methods: {
    setDefaultValue() {
      const val = this.value ? this.value : '';
      if (val.length === 2) {
        this.start = val[0] !== null ? val[0] : "";
        this.end = val[1] !== null ? val[1] : "";
      } else {
        this.start = "";
        this.end = "";
      }
    },
    handleInput(which) {
      if (which === "start") {
        if (typeof this.start === "string")
          this.start = this.start.replace(/[^0-9.]/gi, "");
        if (this.end !== "" && this.start > this.end) {
          this.start = this.min;
        }
      } else {
        if (typeof this.end === "string")
          this.end = this.end.replace(/[^0-9.]/gi, "");
        if (this.start !== "" && this.start > this.end) {
          this.end = this.max;
        } else if (this.start === "") {
          this.start = this.min;
        }
      }
      let s, e;
      s = this.start !== "" ? this.start : null;
      e = this.end !== "" ? this.end : null;
      this.$emit("input", [s, e]);
    }
  }
}

</script>

<style scoped lang="scss">
.range-container {
  display: inline-block;
  .br-input {
    width: 94px !important;
    .el-input__inner {
      width: 100%;
    }
  }
  .range-span {
    margin: 0 2px;
    display: inline-block;
  }
}
</style>