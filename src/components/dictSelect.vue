<!--
 * @Author: xiaoyu.ren
 * @Date: 2020-03-28 13:44:01
 * @LastEditors: xiaoyu.ren
 * @LastEditTime: 2020-03-28 14:44:01
 * @Description: 数据字典下拉框组件
 -->
<template>
  <el-select v-model="dictValue" placeholder="请选择" @change="handleChange" :disabled="disabled">
    <el-option value="" label="全部" v-if="showAll" :key="'all'"></el-option>
    <el-option v-for="(item, index) in $store.state.common[dictType]
                ? $store.state.common[dictType]
                : []" :value="item.id" :label="item.value" :key="index"></el-option>
  </el-select>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class dictSelect extends Vue {
  @Prop() value;
  @Prop(String) dictType;
  @Prop(Boolean) showAll;
  @Prop(Boolean) disabled;

  dictValue: any = "";
  @Watch("value", { deep: true, immediate: true })
  onChanged(val, oldVal) {
    this.dictValue = val;
  }

  handleChange(val) {
    this.$emit("changeSelect", val);
  }
}
</script>
<style lang="scss" scoped></style>