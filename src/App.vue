<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-17 22:53:23
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-18 15:18:28
-->

<template>
  <div id="app">
    <router-view />
    <MainTabBar />
  </div>
</template>

<script>
import MainTabBar from "./components/common/mainTabBar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style scoped>
</style>
