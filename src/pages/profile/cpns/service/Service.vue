<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 16:44:27
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-20 17:47:17
-->
<template>
  <div>
    <!-- 头部 -->
    <NavBar>
      <div slot="left" class="nav-left" @click="backIcon">
        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
      </div>
    </NavBar>

    <h4 class="title">时长</h4>
    <ServiceDisplayBar />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import {
  CHANGE_ISITEM,
  CHANGE_ISSHOW_MAINTABBAR,
} from "store/modules/settingModule/constants";

import NavBar from "common/components/navbar/NavBar";
import ServiceDisplayBar from "components/common/mainDisplayBar/Service";

export default {
  name: "Service",
  created() {
    // profile/settings刷新重置
    this.initValue();
  },
  components: {
    NavBar,
    ServiceDisplayBar,
  },

  data() {
    return {};
  },

  methods: {
    ...mapMutations("setting", {
      changeIsItem: CHANGE_ISITEM,
      changeIsShowMainTabBar: CHANGE_ISSHOW_MAINTABBAR,
    }),

    initValue() {
      // isItem
      this.changeIsItem({ value: true });
      this.changeIsShowMainTabBar({ value: false });
    },

    backIcon() {
      this.$router.replace("/profile");

      this.changeIsItem({ value: false });
      this.changeIsShowMainTabBar({ value: true });
    },
  },
};
</script>

<style scoped lang="less">
.title {
  margin: 10px 0 10px 10px;
}
.nav-left {
  padding: 10px;
}
</style>