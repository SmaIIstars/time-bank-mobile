<!--
 * @Autor: Smallstars
 * @Date: 2020-10-22 10:18:00
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-24 14:51:31
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
    this.createScroll();
  },

  props: {
    probeType: {
      type: Number,
      default: 0,
    },

    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      scroll: null,
    };
  },

  methods: {
    createScroll() {
      // 需要等wrapper挂载完

      this.scroll = new BScroll(this.$refs.scrollWrapperRef, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad,

        observeDOM: true,
      });

      // console.log(this.scroll);
    },
  },
};
</script>

<style scoped>
</style>