<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 10:15:41
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-20 18:56:13
-->
<template>
  <div>
    <div v-show="!isItem">
      <Header class="header-wrapper" @click.native="personalClick" />
      <ProfileDisplayBar class="profile-display-bar-wrapper" />
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import {
  CHANGE_ISITEM,
  CHANGE_ISSHOW_MAINTABBAR,
} from "store/modules/settingModule/constants";

import Header from "./cpns/Header";
import ProfileDisplayBar from "components/common/mainDisplayBar/Profile";

export default {
  name: "Profile",
  components: {
    Header,
    ProfileDisplayBar,
  },

  created() {
    this.initValue();
  },

  data() {
    return {};
  },
  computed: {
    // state 写在计算属性当中
    ...mapState("setting", {
      isItem: (state) => state.isItem,
    }),
  },

  methods: {
    ...mapMutations("setting", {
      changeIsItem: CHANGE_ISITEM,
      changeIsShowMainTabBar: CHANGE_ISSHOW_MAINTABBAR,
    }),

    initValue() {
      this.changeIsItem({ value: false });
      this.changeIsShowMainTabBar({ value: true });
    },

    personalClick() {
      this.$router.push("/profile/personal");
    },
  },
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