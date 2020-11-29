<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 13:10:11
 * @LastEditors: Smallstars
<<<<<<< HEAD
 * @LastEditTime: 2020-11-29 21:46:00
-->
<template>
  <div class="task-wrapper">
    <div class="header">
      <h4>我的任务</h4>
    </div>

    <div class="chage-raido">
      <el-radio v-model="isFinished" :label="false" @change="change"
        >未完成</el-radio
      >
      <el-radio v-model="isFinished" :label="true" @change="change"
        >已完成</el-radio
      >
    </div>

    <div class="page-wrapper">
      <el-card class="box-card">
        <div class="wrapper" ref="taskRef">
          <div class="content">
            <InfoWrapper
              v-for="taskItem of taskList"
              :key="taskItem.id"
              class="task-item"
            >
              <div slot="title" class="title">
                <img :src="taskItem.imgUrl[0]" alt="" />
              </div>

              <div slot="content" class="task-content">
                <div class="task-title">
                  {{ taskItem.title }}
                </div>

                <div class="task-city">
                  {{ taskItem.city }}
                </div>

                <div class="task-integral">积分: {{ taskItem.integral }}</div>
              </div>
            </InfoWrapper>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import ObserveDOM from "@better-scroll/observe-dom";

import InfoWrapper from "components/common/infoItem/InfoWrapper";
import MainTabBar from "components/common/mainTabBar/MainTabBar";

import { getMyTaskList } from "servers/task";

export default {
  name: "Task",
  components: {
    InfoWrapper,
    MainTabBar,
  },

  created() {
    this.getMyTaskList();
  },

  mounted() {
    this.init();
  },

  data() {
    return {
      totalTaskList: [],
      isFinished: false,
    };
  },

  computed: {
    taskList() {
      return this.totalTaskList.filter((item) => {
        return item.isFinish === this.isFinished;
      });
    },
  },

  methods: {
    init() {
      this.scroll = new BScroll(this.$refs.taskRef, {
        click: true,
        scrollY: true,
        observeDOM: true,
        nestedScroll: true,
      });
    },

    getMyTaskList() {
      getMyTaskList().then((res) => {
        this.totalTaskList = res.tasks;
      });
    },

    change(e) {
      this.isFinished = e;
    },
  },
};
</script>

<style scoped lang="less">
.task-wrapper {
  height: 100vh;
  overflow: hidden;
  .header {
    margin: 20px 0 20px 15px;
  }

  .chage-raido {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    margin: 10px 20px;
  }

  .page-wrapper {
    .box-card {
      margin: 0 10px;
      border-radius: 10px;
    }

    .wrapper {
      height: calc(100vh - 180px);
      overflow: hidden;

      .content {
        overflow: hidden;

        .task-item {
          display: flex;
          flex-flow: row;
          margin: 10px;

          border-radius: 10px;
          overflow: hidden;

          .title {
            flex: 5;
            overflow: hidden;

            img {
              width: 100%;
            }
          }

          .task-content {
            flex: 5;
            display: flex;
            flex-flow: column;
            justify-content: space-evenly;
            margin: 5px 0 0px 15px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

            .task-title {
              width: 100%;

              overflow: hidden;
              text-overflow: ellipsis;
            }
          }

          .task-city,
          .task-integral {
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;

            color: #bfbfbf;
          }
        }
      }
    }
  }
}
</style>