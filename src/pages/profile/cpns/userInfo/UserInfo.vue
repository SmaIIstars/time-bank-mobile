<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-20 14:01:49
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-20 14:26:55
-->
<template>
  <div>
    <NavBar>
      <div slot="left" class="nav-left" @click="backIcon">
        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
      </div>

      <div slot="center" class="nav-mid">
        <span>个人信息</span>
      </div>

      <div slot="right" class="nav-right">
        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
      </div>
    </NavBar>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { CHANGE_ISITEM } from "store/modules/settingModule/constants";

import NavBar from "common/components/navbar/NavBar";

export default {
  name: "UserInfo",
  components: {
    NavBar,
  },

  created() {},

  data() {
    return {};
  },

  methods: {
    ...mapMutations("setting", {
      changeIsItem: CHANGE_ISITEM,
    }),

    backIcon() {
      this.$router.replace("/profile");

      this.changeIsItem({
        value: false,
      });
    },
  },
};
</script>

<style scoped lang="less">
.nav-left,
.nav-right {
  padding: 10px;
}
.nav-mid {
  flex: 1;
}
</style>