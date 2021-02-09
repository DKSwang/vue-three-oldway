<!--
 * @Author: xiaoyu.ren
 * @Date: 2019-01-09 11:28:52
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-08 10:42:00
 * @Description: 查询
 -->
<template>
  <div class="template-search">
    <div class="template-search-content">
      <div class="template-search-content-input-group">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchWrapper',
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
</style>