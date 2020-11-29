<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 13:09:40
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-11-29 14:39:02
-->
<template>
  <div class="community-wrapper">
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

    <div class="instruction">
      <div>{{ community.description }}</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import NavBar from "common/components/navbar/NavBar";
import { getCommunity } from "servers/community";
import { CHANGE_COMMUNITYINFO } from "store/modules/communityModule/constants";

export default {
  name: "Community",
  created() {
    this.getCommunity();
  },

  data() {
    return {};
  },

  computed: {
    community() {
      return this.$store.state.community.communityObject;
    },
  },

  components: {
    NavBar,
  },

  methods: {
    ...mapMutations("community", {
      chageInfo: CHANGE_COMMUNITYINFO,
    }),

    getCommunity() {
      getCommunity().then((res) => {
        // console.log(res);
        this.chageInfo(res);
      });
    },

    backIcon() {
      this.$router.replace("/find");
    },
  },
};
</script>

<style scoped lang='less'>
.community-wrapper {
  height: 100vh;
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
}
</style>