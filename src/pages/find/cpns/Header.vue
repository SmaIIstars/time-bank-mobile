<!--
 * @Autor: Smallstars
 * @Date: 2020-10-22 10:07:07
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-22 11:15:36
 * @Description: 
-->
<template>
  <div class="header-wrapper">
    <div class="search-input-wrapper">
      <div class="search-input-title">
        <span>你所在的城市有合适志愿者服务吗？</span>
      </div>
      <el-input
        placeholder="搜索任务"
        v-model="input"
        clearable
        prefix-icon="fa fa-search fa-lg"
      ></el-input>
      <el-button round>搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  created() {},

  data() {
    return {
      input: "",
    };
  },

  methods: {},
};
</script>

<style scoped lang="less">
.header-wrapper {
  position: relative;
  height: 400px;

  background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603345945361&di=e87a0eb9b5d20aa52efd8a2c7dd9bccf&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201603%2F26%2F20160326214450_4uB8X.jpeg")
    no-repeat center/cover;

  // opacity: 0.4;

  .search-input-wrapper {
    position: absolute;

    height: 150px;
    width: 90%;
    text-align: center;
    bottom: 0;
    transform: translate(5%, 30%);

    background-color: white;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-evenly;

    border-radius: 30px;

    .search-input-title {
      position: absolute;
      top: -40px;

      color: white;
      font-size: 20px;
      font-weight: 600;
    }

    .el-input {
      width: 80%;

      /deep/ .el-input__inner {
        height: 45px;
        border-radius: 20px;
      }
    }

    .el-button {
      width: 80%;
      height: 45px;
      background-color: papayawhip;
    }
  }
}
</style>