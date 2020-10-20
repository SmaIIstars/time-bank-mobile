<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 16:43:56
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-20 18:41:55
-->
<template>
  <div class="page-wrapper">
    <NavBar class="personal-nav-bar-wrapper">
      <div slot="left" class="nav-left" @click="backIcon">
        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
      </div>

      <div slot="center" class="nav-mid">
        <span>个人信息</span>
      </div>

      <div slot="right" class="nav-right">
        <span>编辑</span>
      </div>
    </NavBar>

    <div class="avatar">
      <el-avatar :src="user.avatar" :size="100"></el-avatar>
    </div>

    <PersonalDisplayBar />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { CHANGE_ISITEM } from "store/modules/settingModule/constants";

import NavBar from "common/components/navbar/NavBar";
import PersonalDisplayBar from "../../../../components/common/mainDisplayBar/Personal";

export default {
  name: "Personal",
  components: {
    NavBar,
    PersonalDisplayBar,
  },

  created() {
    this.initValue();
    this.getUserInfo();
  },

  data() {
    return {
      user: {},
    };
  },

  methods: {
    ...mapMutations("setting", {
      changeIsItem: CHANGE_ISITEM,
    }),

    initValue() {
      // isItem
      this.changeIsItem({ value: true });
    },
    getUserInfo() {
      this.user = this.$store.state.user.userInfo;
    },

    backIcon() {
      this.$router.replace("/profile");

      this.changeIsItem({ value: false });
    },
  },
};
</script>

<style scoped lang="less">
.page-wrapper {
  .personal-nav-bar-wrapper {
    height: 38px;

    .nav-left,
    .nav-right {
      width: 50px;
      height: 38px;
      line-height: 38px;
      // background-color: red;

      text-align: center;
    }
    .nav-mid {
      flex: 1;
      line-height: 38px;
    }
  }

  .avatar {
    padding: 50px 0;
    text-align: center;
  }
}
</style>