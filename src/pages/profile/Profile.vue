<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 10:15:41
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-19 23:57:43
-->
<template>
  <div>
    <div v-show="!isItem">
      <Header class="header-wrapper" />
      <ProfileDisplayBar class="profile-display-bar-wrapper" />
    </div>
    <router-view />
  </div>
</template>

<script>
import Header from "./cpns/Header";
import ProfileDisplayBar from "components/common/mainDisplayBar/ProfileDisplayBar";
export default {
  name: "Profile",
  components: {
    Header,
    ProfileDisplayBar,
  },

  created() {},

  data() {
    return {
      isItem: false,
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.header-wrapper {
  padding: 30px 0;
}

.profile-display-bar-wrapper {
  margin-top: 10px;
}
</style>