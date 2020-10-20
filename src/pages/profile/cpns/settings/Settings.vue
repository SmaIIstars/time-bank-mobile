<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 16:44:27
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-20 14:12:34
-->
<template>
  <div>
    <NavBar>
      <div slot="left" class="nav-left" @click="backIcon">
        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
      </div>
    </NavBar>

    <h4 class="title">设置</h4>
    <SettingsDisplayBar />

    <div class="sign-out-button">
      <el-button type="info" round>信息按钮</el-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { CHANGE_ISITEM } from "store/modules/settingModule/constants";

import NavBar from "common/components/navbar/NavBar";
import SettingsDisplayBar from "components/common/mainDisplayBar/Settings";

export default {
  name: "settings",

  components: {
    NavBar,
    SettingsDisplayBar,
  },
  created() {
    // 如果在profile/settings刷新重置isItem值
    this.initValue();
  },

  data() {
    return {};
  },

  methods: {
    ...mapMutations("setting", {
      changeIsItem: CHANGE_ISITEM,
    }),

    initValue() {
      // isItem
      this.changeIsItem({
        value: true,
      });
    },

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
.title {
  margin: 10px 0 10px 10px;
}
.nav-left {
  padding: 10px;
}
.sign-out-button {
  text-align: center;
  margin-top: 50px;
}
.el-button {
  width: 80%;
}
</style>