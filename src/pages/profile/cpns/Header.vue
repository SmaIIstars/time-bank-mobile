<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Smallstars
 * @Date: 2020-10-18 15:41:04
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-20 00:01:49
-->
<template>
  <div class="header-wrapper">
    <div class="header-left">
      <h2 class="username">Smallstars</h2>
      <span class="integral">积分: 100</span>
    </div>
    <div class="header-right">
      <img
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/quality,q_1/resize,m_mfit,h_60,w_60"
        alt="暂无图片"
        class="avatar"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  created() {},

  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped lang="less">
.header-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;

  .header-left {
    display: flex;
    flex: 2;
    margin-left: 24px;
    // justify-content: space-between;
    // align-items: center;

    flex-flow: column;

    .integral {
      margin-top: 5px;

      font-size: 12px;
      color: #6f6f6f;
    }
  }

  .header-right {
    flex: 1;
    text-align: center;

    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
}
</style>