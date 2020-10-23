<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 10:14:34
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-23 17:41:36
-->
<template>
  <Scroll
    class="findpage-wrapper"
    :probeType="scrollOptions.probeType"
    @getScrollPosition="getScrollPosition"
  >
    <Header />
    <div class="task-items">
      <NewPublic class="item-module" />
      <Expensive class="item-module" />
    </div>
  </Scroll>
</template>

<script>
import { mapMutations } from "vuex";

import { CHANGE_TASK_LIST } from "store/modules/taskModule/constants";
import { getTaskInfo } from "servers/task";

import Scroll from "components/common/scroll/Scroll";
import Header from "./cpns/Header";
import NewPublic from "./cpns/NewPublic";
import Expensive from "./cpns/Expensive";

export default {
  name: "Find",
  components: {
    Scroll,
    Header,
    NewPublic,
    Expensive,
  },

  created() {
    this.getTaskInfo();
  },

  mounted() {},

  data() {
    return {
      scrollOptions: {
        probeType: 3,
      },
    };
  },

  methods: {
    ...mapMutations("task", {
      changeTaskList: CHANGE_TASK_LIST,
    }),

    getTaskInfo() {
      getTaskInfo().then((res) => {
        this.changeTaskList(res);
      });
    },

    getScrollPosition(pos) {
      // console.log(pos);
    },
  },
};
</script>

<style scoped lang="less">
.findpage-wrapper {
  height: calc(100vh - 49px);
  overflow: hidden;

  .task-items {
    padding-top: 80px;

    background-color: #f6f6f6;
  }

  .item-module {
    margin: 40px 0;
  }
}
</style>