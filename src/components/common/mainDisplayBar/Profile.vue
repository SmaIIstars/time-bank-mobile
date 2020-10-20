<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 14:37:22
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-20 11:51:57
-->
<template>
  <DisplayBar class="display-bar-wrapper">
    <DisplayBarItem class="item">
      <div slot="item-left">
        <span class="text">修改密码</span>
      </div>

      <div slot="item-right">
        <i class="fa fa-lg fa-lock icon" aria-hidden="true"></i>
      </div>
    </DisplayBarItem>
    <el-divider />

    <DisplayBarItem class="item">
      <div slot="item-left">
        <span class="text">邀请朋友</span>
      </div>

      <div slot="item-right">
        <i class="fa fa-lg fa-user-plus icon" aria-hidden="true"></i>
      </div>
    </DisplayBarItem>
    <el-divider />

    <DisplayBarItem class="item" :itemClickCallback="durationClick">
      <div slot="item-left">
        <span class="text">志愿时长&amp;个人时长</span>
      </div>

      <div slot="item-right">
        <i class="fa fa-lg fa-gift icon" aria-hidden="true"></i>
      </div>
    </DisplayBarItem>
    <el-divider />

    <DisplayBarItem class="item">
      <div slot="item-left">
        <span class="text">支付</span>
      </div>

      <div slot="item-right">
        <i class="fa fa-lg fa-credit-card-alt icon" aria-hidden="true"></i>
      </div>
    </DisplayBarItem>
    <el-divider />

    <DisplayBarItem class="item" :itemClickCallback="settingsClick">
      <div slot="item-left">
        <span class="text">设置</span>
      </div>

      <div slot="item-right">
        <i class="fa fa-lg fa-cogs icon" aria-hidden="true"></i>
      </div>
    </DisplayBarItem>
  </DisplayBar>
</template>

<script>
import { mapMutations } from "vuex";
import { CHANGE_ISITEM } from "store/modules/settingModule/constants";

import DisplayBar from "common/components/displayBar/DisplayBar";
import DisplayBarItem from "common/components/displayBar/DispalyBarItem";

export default {
  name: "ProfileDisplayBar",
  components: {
    DisplayBar,
    DisplayBarItem,
  },
  created() {},

  data() {
    return {};
  },

  computed: {},

  methods: {
    ...mapMutations("setting", {
      changeIsItem: CHANGE_ISITEM,
    }),

    durationClick() {
      this.changeIsItem({
        value: true,
      });
      this.$router.replace("/profile/service");
    },

    settingsClick() {
      // console.log(this.isItem);
      // this.$store.state.setting.isItem = true;
      this.changeIsItem({
        value: true,
      });
      this.$router.replace("/profile/settings");
    },
  },
};
</script>

<style scoped lang="less">
.display-bar-wrapper {
  .item {
    padding: 10px 0;

    .text {
      font-size: 13px;
      padding-left: 14px;
    }

    .item-right > div {
      width: 20px;
      height: 20px;
      margin-right: 20px;

      line-height: 20px;
      text-align: center;
    }
  }
}

.el-divider--horizontal {
  width: auto;
  margin: 6px 24px 18px 24px;
}
</style>