<!--
 * @Autor: Smallstars
 * @Date: 2020-10-23 10:00:49
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-23 10:01:49
 * @Description: 
-->
<template>
  <div>
    <slot name="title"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "InfoWrapper",
  created() {},

  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
</style>