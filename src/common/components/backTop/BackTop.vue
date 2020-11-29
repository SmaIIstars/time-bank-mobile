<!--
 * @Autor: Smallstars
 * @Date: 2020-10-27 14:05:08
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-27 14:12:25
 * @Description: 
-->
<template>
  <div v-show="isShow">
    <div class="back-top-wrapper"></div>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  created() {},

  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
.back-top-wrapper {
  position: absolute;

  width: 50px;
  height: 50px;
  background-color: red;

  bottom: 80px;
  right: 30px;
}
</style>