<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 14:35:54
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-18 15:00:08
-->
<template>
  <div class="display-bar-item" @click="itemClick">
    <div class="item-left">
      <slot name="item-left"></slot>
    </div>

    <div class="item-right">
      <slot name="item-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DispalyBarItem",
  created() {},

  data() {
    return {};
  },

  methods: {
    itemClick() {
      console.log(1);
    },
  },
};
</script>

<style scoped lang="less">
.display-bar-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 12px;

  .item-left {
    padding-left: 10px;
  }

  .item-right {
    padding-right: 10px;
  }
}
</style>