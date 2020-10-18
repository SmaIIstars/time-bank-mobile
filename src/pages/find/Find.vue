<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 10:14:34
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-18 13:51:04
-->
<template>
  <div>Find</div>
</template>

<script>
import { test } from "../../servers/find";

export default {
  name: "Find",
  created() {
    test().then((res) => {
      console.log(res);
    });
  },

  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
</style>