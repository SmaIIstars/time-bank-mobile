<!--
 * @Autor: Smallstars
 * @Date: 2020-10-27 10:19:04
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-27 11:26:31
 * @Description: 
-->

<template>
  <div v-if="comments.length !== 0">
    <div v-for="comment of comments" :key="comment.id" class="comment-wrapper">
      <div class="header-comment">
        <div class="left">
          <el-avatar :src="comment.avatar" :size="60" class="avatar" />
          <div class="info">
            <div class="name">{{ comment.name }}</div>
            <div class="time">{{ commentTime }}</div>
          </div>
        </div>

        <div class="right">
          <div class="integral">
            <div>积分</div>
            {{ comment.userIntegral }}
          </div>
        </div>
      </div>

      <div class="comment">
        <div>{{ comment.comment }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCommentInfo } from "servers/comment";
import { dateFromNowFormat } from "utils/formatUtil";

export default {
  name: "comment",
  created() {
    this.getCommentInfo();
  },
  mounted() {},

  data() {
    return {
      comments: [],
    };
  },

  methods: {
    getCommentInfo() {
      getCommentInfo().then((res) => {
        this.comments = res.comments;
        console.log(this.comments);
      });
    },
  },

  computed: {
    commentTime() {
      return dateFromNowFormat(this.comments.commentTime, "day");
    },
  },
};
</script>

<style scoped lang="less">
.comment-wrapper {
  margin: 40px 0;

  .header-comment {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
      flex: 7;
      display: flex;
      align-items: center;

      .avatar {
        display: inline-block;
        max-width: 60px;
      }
      .info {
        flex: 1;
        margin-left: 10px;

        .name {
          font-weight: 600;
        }
        .time {
          color: #9f9f9f;
        }
      }
    }

    .right {
      flex: 1;

      margin-left: 5px;
      .integral {
        font-size: 14px;
      }
    }
  }

  .comment {
    margin-top: 15px;
    color: #9f9f9f;
  }
}
</style>