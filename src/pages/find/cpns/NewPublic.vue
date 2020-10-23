<!--
 * @Autor: Smallstars
 * @Date: 2020-10-22 11:22:32
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-23 17:52:22
 * @Description: 
-->
<template>
  <div class="page-wrapper">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>最新发布</span>
      </div>

      <div class="wrapper" ref="newPublicRef">
        <div class="content">
          <div class="content-wrapper">
            <InfoWrapper
              v-for="taskItem of $store.state.task.taskList"
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
      </div>
    </el-card>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import ObserveDOM from "@better-scroll/observe-dom";

import InfoWrapper from "components/common/infoItem/InfoWrapper";

export default {
  name: "NewPublic",

  components: {
    InfoWrapper,
  },
  created() {},
  mounted() {
    this.init();
  },

  data() {
    return {
      scroll: null,
    };
  },

  methods: {
    init() {
      // console.log("init");
      // 需要等wrapper挂载完
      this.scroll = new BScroll(this.$refs.newPublicRef, {
        click: true,
        scrollX: true,
        observeDOM: true,
      });
      // console.log(this.scroll);
    },

    taskItemClick() {
      // console.log(this.scroll);
    },
  },
};
</script>

<style scoped lang="less">
.page-wrapper {
  .box-card {
    margin: 0 10px;
    border-radius: 10px;
  }

  .wrapper {
    white-space: nowrap;
    overflow: hidden;

    .content {
      display: inline-block;
      .content-wrapper {
        display: flex;

        .task-item {
          display: flex;
          flex-flow: column;
          height: 180px;
          width: 120px;
          margin: 10px;

          border-radius: 10px;
          overflow: hidden;

          .title {
            flex: 5;
            overflow: hidden;

            img {
              height: 100%;
            }
          }

          .task-content {
            flex: 4;
            margin-top: 5px;
            margin-left: 3px;

            .task-title {
              width: 100%;

              overflow: hidden;
              text-overflow: ellipsis;
            }
          }

          .task-city,
          .task-integral {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>