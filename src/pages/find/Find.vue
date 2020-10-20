<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 10:14:34
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-20 16:03:01
-->
<template>
  <div>Find</div>
</template>

<script>
import { getUserInfo } from "servers/user";

export default {
  name: "Find",
  created() {
    getUserInfo().then((res) => {
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