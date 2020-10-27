<!--
 * @Autor: Smallstars
 * @Date: 2020-10-22 10:18:00
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-27 14:28:34
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

      // 监听滚动
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on("scroll", (pos) => {
          this.$emit("scroll", pos);
        });
      }
    },

    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    },

    backTop(x, y, time = 500) {
      console.log(1);
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style scoped>
</style>