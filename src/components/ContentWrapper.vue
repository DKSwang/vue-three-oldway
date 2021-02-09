<!--
 * @Author: xiaoyu.ren
 * @Date: 2019-06-18 17:28:44
 * @LastEditors: xuzhong.wang
 * @LastEditTime: 2021-02-08 10:26:39
 * @Description: 内容
 -->
<template>
  <div class="template-content">
    <slot name="default"></slot>
    <div class="template-content-title">
      <slot name="title">
      </slot>

      <div class="template-content-title-extra">
        <slot name="extra-btn">

        </slot>
      </div>
    </div>
    <div class="template-content-main">
      <slot name="grid">

      </slot>
    </div>
    <div class="template-bottom-button">
      <slot name="bottom-btn">

      </slot>
    </div>

  </div>
</template>

<script >
export default {
  name: 'ContentWrapper',
  data() {
    return {

    }
  }

}
</script>

<style scoped lang="scss">
</style>