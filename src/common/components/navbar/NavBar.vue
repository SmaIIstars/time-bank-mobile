<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-20 11:20:59
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-20 11:25:13
-->
<template>
  <div class="nav-bar-wrapper">
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot name="center"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  created() {},

  data() {
    return {
      msg: "NavBar",
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.nav-bar-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>