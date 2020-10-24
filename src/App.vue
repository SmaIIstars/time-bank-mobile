<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-17 22:53:23
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-24 14:44:29
-->

<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view />
    <!-- </keep-alive> -->
    <MainTabBar v-if="$store.state.setting.isShowMainTabBar" />
  </div>
</template>

<script>
import MainTabBar from "components/common/mainTabBar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style scoped>
</style>
