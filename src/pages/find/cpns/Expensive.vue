<!--
 * @Autor: Smallstars
 * @Date: 2020-10-22 11:22:32
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-24 13:55:37
 * @Description: 
-->
<template>
  <div>
    <div class="page-wrapper">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h4>最高悬赏</h4>
        </div>

        <div class="wrapper" ref="expensiveRef">
          <div class="content">
            <InfoWrapper
              v-for="taskItem of $store.state.task.taskList"
              :key="taskItem.id"
              class="task-item"
              @click.native="taskItemClick"
            >
              <div slot="title" class="title">
                <img :src="taskItem.imgUrl[0]" alt="" />
              </div>

              <div slot="content" class="task-content">
                <div class="task-content-top">
                  <div class="task-title">
                    {{ taskItem.title }}
                  </div>

                  <div>
                    <div class="task-city">
                      {{ taskItem.city }}
                    </div>
                  </div>
                </div>

                <div class="task-content-bottom">
                  <div class="task-integral">积分: {{ taskItem.integral }}</div>
                </div>
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
import NestedScroll from "@better-scroll/nested-scroll";

import InfoWrapper from "components/common/infoItem/InfoWrapper";

export default {
  name: "Expensive",

  components: {
    InfoWrapper,
  },
  created() {},
  mounted() {
    this.init();
  },

  data() {
    return {};
  },

  methods: {
    init() {
      // console.log("init");
      // 需要等wrapper挂载完
      this.scroll = new BScroll(this.$refs.expensiveRef, {
        click: true,
        stopPropagation: true,

        scrollY: true,

        observeDOM: true,
      });
      // console.log(this.scroll);
    },

    taskItemClick() {
      this.$router.push("/task");
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
    height: 300px;
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

        .task-city {
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;

          color: #bfbfbf;
        }

        .task-integral {
          font-size: 16px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>