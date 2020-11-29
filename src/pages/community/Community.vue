<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 13:09:40
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-11-29 21:37:38
-->
<template>
  <div class="wrapper" ref="community">
    <div class="content">
      <div class="nav-bar-wrapper">
        <NavBar>
          <div slot="left" class="nav-left" @click="backIcon">
            <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
          </div>
        </NavBar>
      </div>

      <div class="header">
        <div class="header-title">
          <div class="left">{{ community.title }}</div>
          <div class="right">{{ community.integral }} 积分</div>
        </div>
        <div class="header-info">
          <div class="address">{{ community.city }}</div>
          <div class="member">{{ community.member }} / 总服务人数</div>
        </div>
      </div>

      <InfoWrapper class="instruction">
        <div slot="title" class="title">介绍</div>
        <div slot="content" class="content">{{ community.description }}</div>
      </InfoWrapper>

      <InfoWrapper class="mark">
        <div slot="title" class="title">
          <div class="left">
            <span class="scroe">{{ community.score }}</span>
          </div>

          <div class="right">
            <span>综合评分</span>
            <div class="stars" v-if="badStarNumber">
              <span
                class="fa fa-star"
                v-for="(item, index) in goodStarNumber"
                :key="index"
              >
              </span>
              <span
                class="fa fa-star-o"
                v-for="(item, index) in badStarNumber"
                :key="index + 5"
              >
              </span>
            </div>
          </div>
        </div>
        <div slot="content" class="content">
          <div class="progress-bar-wrapper">
            <span class="progress-bar-title">态度</span>
            <el-progress
              class="progress-bar"
              :percentage="community.attitude"
              :show-text="false"
            ></el-progress>
          </div>

          <div class="progress-bar-wrapper">
            <span class="progress-bar-title">位置</span>
            <el-progress
              class="progress-bar"
              :percentage="community.position"
              :show-text="false"
            ></el-progress>
          </div>

          <div class="progress-bar-wrapper">
            <span class="progress-bar-title">时长</span>
            <el-progress
              class="progress-bar"
              :percentage="community.duration"
              :show-text="false"
            ></el-progress>
          </div>
        </div>
      </InfoWrapper>

      <InfoWrapper class="images-wrapper">
        <div slot="title" class="img-title">照片</div>
        <div
          slot="content"
          v-for="(item, index) in community.imgUrl"
          :key="index"
        >
          <img :src="item" alt="" />
        </div>
      </InfoWrapper>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BScroll from "better-scroll";
import ObserveDOM from "@better-scroll/observe-dom";

import { getCommunity } from "servers/community";
import { CHANGE_COMMUNITYINFO } from "store/modules/communityModule/constants";
import NavBar from "common/components/navbar/NavBar";
import InfoWrapper from "components/common/infoItem/InfoWrapper";

export default {
  name: "Community",
  created() {
    this.getCommunity();
  },

  mounted() {
    this.initBS();
  },

  data() {
    return {};
  },

  computed: {
    community() {
      return this.$store.state.community.communityObject;
    },
    goodStarNumber() {
      return Math.floor(this.community.score / 2);
    },
    badStarNumber() {
      return 5 - this.goodStarNumber;
    },
  },

  components: {
    NavBar,
    InfoWrapper,
  },

  methods: {
    ...mapMutations("community", {
      chageInfo: CHANGE_COMMUNITYINFO,
    }),

    getCommunity() {
      getCommunity().then((res) => {
        console.log(res);
        this.chageInfo(res);
      });
    },

    initBS() {
      this.scroll = new BScroll(this.$refs.community, {
        click: true,
        scrollY: true,
        observeDOM: true,
      });
      // console.log(this.scroll);
    },

    backIcon() {
      this.$router.replace("/find");
    },
  },
};
</script>

<style scoped lang='less'>
.wrapper {
  height: calc(100vh - 49px);
  overflow: hidden;
  .nav-bar-wrapper {
    width: 100%;
    height: 150px;

    background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603345945361&di=e87a0eb9b5d20aa52efd8a2c7dd9bccf&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F26%2F20160326214450_4uB8X.jpeg")
      no-repeat center/cover;

    .nav-left {
      width: 50px;
      height: 38px;
      line-height: 38px;
      // background-color: red;

      text-align: center;
    }
  }

  .header {
    .header-title {
      height: 50px;
      font-weight: 600;

      display: flex;
      justify-content: space-around;
      align-items: center;

      .left {
        font-size: 20px;
      }
      .right {
        font-size: 16px;
      }
    }

    .header-info {
      display: flex;
      align-items: center;
      justify-content: space-around;

      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  .instruction {
    padding: 15px 10px;
    .title {
      margin: 10px 0;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  .mark {
    .title {
      display: flex;
      align-items: center;

      .left {
        font-size: 40px;
        margin: 0 10px;
        color: red;
      }

      .right {
        display: flex;
        flex-flow: column;
      }
      .stars {
        display: flex;
        color: red;
      }
    }

    .content {
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 90%;

      .progress-bar-wrapper {
        margin: 10px 0;
        display: flex;
        // justify-content: space-between;
        align-items: center;

        .progress-bar-title {
          margin-right: 15px;
        }

        .progress-bar {
          max-width: 80%;
          flex: 1;
        }
      }
    }
  }

  .images-wrapper {
    margin: 10px;

    .img-title {
      margin: 20px 0;
      color: rgba(0, 0, 0, 0.5);
    }

    img {
      width: 100%;
    }
  }
}
</style>