<!--
 * @Autor: Smallstars
 * @Date: 2020-10-22 10:18:00
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-23 17:55:15
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
import NestedScroll from "@better-scroll/nested-scroll";

export default {
  name: "Scroll",

  created() {},

  mounted() {
    this.createScroll();

    this.getScrollPosition();
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
        nestedScroll: true,
      });

      // console.log(this.scroll);
    },

    getScrollPosition() {
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on("scroll", (position) => {
          // console.log(position);
          this.$emit("getScrollPosition", position);
        });
      }
    },
  },
};
</script>

<style scoped>
</style>