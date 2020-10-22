<!--
 * @Autor: Smallstars
 * @Date: 2020-10-22 10:18:00
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-22 10:28:54
 * @Description: 
-->
<template>
  <div class="wrapper" ref="scrollWrapperRef">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",

  created() {},

  mounted() {
    // 需要等wrapper挂载完
    this.scroll = new BScroll(this.$refs.scrollWrapperRef, {});
  },

  data() {
    return {
      scroll: null,
    };
  },

  methods: {},
};
</script>

<style scoped>
</style>