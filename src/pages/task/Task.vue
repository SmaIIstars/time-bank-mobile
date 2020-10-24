<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 13:10:11
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-24 14:54:32
-->
<template>
  <Scroll class="task-page-wrapper" v-if="taskInfo && taskInfo.imgUrl">
    <div class="header-img">
      <img :src="taskInfo.imgUrl[0]" alt="" />
    </div>

    <div class="task-title">
      <h2 class="title">{{ taskInfo.title }}</h2>

      <div class="content">
        <span class="city">{{ taskInfo.city }}</span>
        <span class="integral">积分: {{ taskInfo.integral }}</span>
        <span class="public-time">{{ publicTime }}</span>
      </div>
    </div>

    <div class="task-description">
      <el-divider content-position="left">
        <div class="divider-text">介绍</div>
      </el-divider>

      <div class="description">
        <span>{{ taskInfo.description }}</span>
      </div>
    </div>

    <div class="task-img">
      <div v-for="imgUrl of taskInfo.imgUrl" :key="imgUrl">
        <img :src="imgUrl" alt="" />
      </div>
    </div>

    <div class="task-comment">
      <el-divider content-position="left">
        <div class="divider-text">评论</div>
      </el-divider>
    </div>

    <!-- {{ taskInfo }} -->
  </Scroll>
</template>

<script>
import { mapMutations } from "vuex";
import { dateFormat } from "utils/formatUtil";

import { CHANGE_TASK_LIST } from "store/modules/taskModule/constants";
import { getTaskInfo } from "servers/task";

import Scroll from "../../components/common/scroll/Scroll";

export default {
  name: "Task",

  components: {
    Scroll,
  },

  created() {
    if (this.$store.state.task.taskList.length === 0) {
      this.getTaskInfo();
    }
  },
  mounted() {
    this.taskInfo = this.$store.state.task.taskList[0];
  },

  data() {
    return {
      taskInfo: {},
    };
  },

  methods: {
    ...mapMutations("task", {
      changeTaskList: CHANGE_TASK_LIST,
    }),

    getTaskInfo() {
      getTaskInfo().then((res) => {
        this.changeTaskList(res);
        this.taskInfo = this.$store.state.task.taskList[0];
      });
    },
  },

  computed: {
    publicTime() {
      return dateFormat(this.taskInfo.time.public, `发布时间: MM-DD `);
    },
  },
};
</script>

<style scoped lang="less">
.wrapper {
  height: calc(100vh - 49px);
}

.task-page-wrapper {
  .header-img {
    width: 100%;
    height: 100px;

    img {
      width: 100%;
      transform: translateY(-50%);
      /* 设置高斯模糊 */
      filter: blur(5px);
    }
  }

  .task-title {
    margin-top: 40px;

    .title {
      margin-left: 10px;
    }

    .content {
      margin: 20px 10px 10px 10px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      color: #bfbfbf;
    }
  }

  .task-description {
    margin: 40px 10px 20px 10px;

    .divider-text {
      font-size: 18px;
      color: #bfbfbf;
    }

    .description {
      margin: 0 10px;
    }
  }

  .task-img {
    margin: 0 10px;

    img {
      width: 100%;
    }
  }

  .task-comment {
    margin: 40px 10px 10px 20px 10px;
  }
}
</style>