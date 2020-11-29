<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 15:41:04
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-21 17:57:43
-->
<template>
  <div class="header-wrapper" v-if="user.isLogined">
    <div class="header-left">
      <h2 class="username">{{ user.username }}</h2>
      <span class="integral">积分: {{ user.integral }}</span>
    </div>
    <div class="header-right">
      <el-avatar :src="user.avatar" :size="60" />
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
  created() {},

  data() {
    return {};
  },

  computed: {
    user() {
      return this.$store.state.user.userInfo;
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