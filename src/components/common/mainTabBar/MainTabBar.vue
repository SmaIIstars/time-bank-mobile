<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 10:47:02
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-23 19:06:35
-->
<template>
  <TabBar class="main-tabbar">
    <TabBarItem
      path="/find"
      :activeColor="activeColor"
      class="tabbar-item"
      :itemClickCallback="findTabBarClick"
    >
      <div slot="item-icon">
        <i class="fa fa-search fa-lg" aria-hidden="true" />
      </div>
      <div slot="item-icon-active">
        <i class="fa fa-search fa-lg" aria-hidden="true" />
      </div>

      <div slot="item-text">发现</div>
    </TabBarItem>

    <TabBarItem
      path="/task"
      :activeColor="activeColor"
      class="tabbar-item"
      :itemClickCallback="taskTabBarClick"
    >
      <div slot="item-icon">
        <i class="fa fa-tasks fa-lg" aria-hidden="true" />
      </div>
      <div slot="item-icon-active">
        <i class="fa fa-tasks fa-lg" aria-hidden="true" />
      </div>

      <div slot="item-text">任务</div>
    </TabBarItem>

    <TabBarItem
      path="/community"
      :activeColor="activeColor"
      class="tabbar-item"
      :itemClickCallback="communityTabBarClick"
    >
      <div slot="item-icon">
        <i class="fa fa-comments-o fa-lg" aria-hidden="true" />
      </div>
      <div slot="item-icon-active">
        <i class="fa fa-comments-o fa-lg" aria-hidden="true" />
      </div>

      <div slot="item-text">社区</div>
    </TabBarItem>

    <TabBarItem
      path="/profile"
      :activeColor="activeColor"
      class="tabbar-item"
      :itemClickCallback="proflieTabBarClick"
    >
      <div slot="item-icon">
        <i class="fa fa-user fa-lg" />
      </div>
      <div slot="item-icon-active">
        <i class="fa fa-user fa-lg" />
      </div>

      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "common/components/tabbar/TabBar";
import TabBarItem from "common/components/tabbar/TabBarItem";

export default {
  name: "MainTabBar",

  components: {
    TabBar,
    TabBarItem,
  },
  created() {},

  data() {
    return {
      activeColor: "#13C2C2",
    };
  },

  methods: {
    // TabBarClick 点击事件
    findTabBarClick() {
      this.$router.replace("/find");
    },
    taskTabBarClick() {
      this.$router.replace("/task");
    },
    communityTabBarClick() {
      this.$router.replace("/community");
    },
    proflieTabBarClick() {
      // console.log("proflieTabBarClick");
      this.$router.replace("/profile");
    },
  },
};
</script>

<style scoped lang="less">
.main-tabbar {
  position: fixed;
  width: 100%;

  bottom: 0px;
  padding: 5px 0;
  background-color: #f6f6f6;

  .tabbar-item {
    padding: 3px;
  }
}
</style>