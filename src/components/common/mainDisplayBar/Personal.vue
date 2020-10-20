<template>
  <DisplayBar class="display-bar-wrapper">
    <DisplayBarItem class="item">
      <div slot="item-left">
        <span class="title">用户名</span>
      </div>

      <div slot="item-right">
        <span class="content">
          {{ user.username }}
        </span>
      </div>
    </DisplayBarItem>
    <el-divider />

    <DisplayBarItem class="item">
      <div slot="item-left">
        <span class="title">邮箱</span>
      </div>

      <div slot="item-right">
        <span class="content">
          {{ user.email }}
        </span>
      </div>
    </DisplayBarItem>
    <el-divider />

    <DisplayBarItem class="item">
      <div slot="item-left">
        <span class="title">手机号</span>
      </div>

      <div slot="item-right">
        <span class="content">
          {{ user.phone }}
        </span>
      </div>
    </DisplayBarItem>
    <el-divider />

    <DisplayBarItem class="item">
      <div slot="item-left">
        <span class="title">生日</span>
      </div>

      <div slot="item-right">
        <span class="content">
          {{ user.birthday }}
        </span>
      </div>
    </DisplayBarItem>
    <el-divider />

    <DisplayBarItem class="item">
      <div slot="item-left">
        <span class="title">所在城市</span>
      </div>

      <div slot="item-right">
        <span class="content">
          {{ user.city }}
        </span>
      </div>
    </DisplayBarItem>
  </DisplayBar>
</template>

<script>
import DisplayBar from "common/components/displayBar/DisplayBar";
import DisplayBarItem from "common/components/displayBar/DispalyBarItem";

export default {
  name: "PersonalDisplayBar",
  components: {
    DisplayBar,
    DisplayBarItem,
  },

  created() {
    this.getUserInfo();
  },

  data() {
    return {
      user: {},
    };
  },

  methods: {
    getUserInfo() {
      this.user = this.$store.state.user.userInfo;
      console.log(this.user);
    },
  },
};
</script>

<style scoped lang="less">
.display-bar-wrapper {
  .item {
    display: flex;
    justify-content: space-between;

    padding: 10px 0;

    .title {
      font-size: 13px;
      padding-left: 14px;
    }

    .content {
      margin-right: 20px;
    }
  }
}

.el-divider--horizontal {
  width: auto;
  margin: 6px 24px 18px 24px;
}
</style>