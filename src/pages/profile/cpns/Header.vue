<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 15:41:04
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-20 17:55:58
-->
<template>
  <div class="header-wrapper" v-if="!$store.state.user.isLogined">
    <div class="header-left">
      <h2 class="username">{{ user.username }}</h2>
      <span class="integral">积分: {{ user.integral }}</span>
    </div>
    <div class="header-right">
      <el-avatar :src="user.avatar" :size="60"></el-avatar>
    </div>
  </div>
  <div v-else>
    <h1>请登录</h1>
  </div>
</template>

<script>
import { getUserInfo, UserInfo } from "servers/user";

export default {
  name: "Header",
  created() {
    this.getUserInfo();
  },

  data() {
    return {
      user: {},
    };
  },

  methods: {
    getUserInfo() {
      this.user = this.$store.state.user.userInfo;
      console.log(this.user);
    },
  },
};
</script>

<style scoped lang="less">
.header-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;

  .header-left {
    display: flex;
    flex: 2;
    margin-left: 24px;
    // justify-content: space-between;
    // align-items: center;

    flex-flow: column;

    .integral {
      margin-top: 5px;

      font-size: 12px;
      color: #6f6f6f;
    }
  }

  .header-right {
    flex: 1;
    text-align: center;
  }
}
</style>