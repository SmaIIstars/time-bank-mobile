<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 10:14:34
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-21 20:13:25
-->
<template>
  <div>Find</div>
</template>

<script>
import { mapMutations } from "vuex";

import { CHANGE_TASK_LIST } from "../../store/modules/taskModule/constants";
import { getTaskInfo } from "servers/task";

export default {
  name: "Find",
  created() {
    this.getTaskInfo();
  },

  data() {
    return {};
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
  },
};
</script>

<style scoped>
</style>