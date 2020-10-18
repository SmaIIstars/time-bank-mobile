<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 10:30:52
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-18 13:20:16
-->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>