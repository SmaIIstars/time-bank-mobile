<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-20 11:53:45
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-21 16:57:44
-->
<template>
  <DisplayBar class="display-bar-wrapper">
    <DisplayBarItem class="item">
      <div slot="item-left">
        <span class="text">志愿服务</span>
      </div>

      <div slot="item-right">
        {{ $store.state.user.userInfo.duration.volunteer }}
      </div>
    </DisplayBarItem>
    <el-divider />

    <DisplayBarItem class="item">
      <div slot="item-left">
        <span class="text">个人服务</span>
      </div>

      <div slot="item-right">
        {{ $store.state.user.userInfo.duration.personal }}
      </div>
    </DisplayBarItem>
  </DisplayBar>
</template>

<script>
import DisplayBar from "common/components/displayBar/DisplayBar";
import DisplayBarItem from "common/components/displayBar/DispalyBarItem";

export default {
  name: "ServiceDisplayBar",
  created() {},

  components: {
    DisplayBar,
    DisplayBarItem,
  },

  data() {
    return {
      msg: "Service",
    };
  },

  methods: {},
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