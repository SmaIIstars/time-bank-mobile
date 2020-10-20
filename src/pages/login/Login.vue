<!--
 * @Autor: Smallstars
 * @Date: 2020-10-20 16:56:11
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-20 20:03:22
 * @Description: 
-->
<template>
  <div class="page-wrapper">
    <NavBar>
      <div slot="left" class="nav-left">
        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
      </div>
    </NavBar>

    <div class="title">
      <h2>登录</h2>
    </div>

    <div class="login-form">
      <el-form>
        <el-form-item>
          <el-input
            type="email"
            placeholder="邮箱"
            clearable
            v-model="email"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-input
            type="password"
            placeholder="密码"
            clearable
            v-model="password"
            show-password
          ></el-input>
        </el-form-item>

        <div class="forget-password">
          <span class="forget-password-text">忘记密码?</span>
        </div>

        <el-form-item>
          <!-- @click="submitForm('ruleForm')" -->
          <el-button type="primary">提交</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="footer">footer</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { CHANGE_ISSHOW_MAINTABBAR } from "store/modules/settingModule/constants";

import NavBar from "../../common/components/navbar/NavBar";

export default {
  name: "Login",
  components: {
    NavBar,
  },
  created() {
    this.initValue();
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    ...mapMutations("setting", {
      changeIsShowMainTabBar: CHANGE_ISSHOW_MAINTABBAR,
    }),
    initValue() {
      this.changeIsShowMainTabBar({
        value: false,
      });
    },
  },
};
</script>

<style scoped lang="less">
.page-wrapper {
  display: flex;
  flex-flow: column;

  .nav-left {
    padding: 10px;
  }

  .title {
    margin: 20px 10px;
  }

  .forget-password {
    display: flex;
    flex-flow: row-reverse;

    .forget-password-text {
      margin-right: 38px;
    }
  }
}

.el-form-item /deep/ .el-form-item__content {
  // background-color: red;
  text-align: center;
}

.el-input {
  width: 80%;
  // /deep/ <==> >>>
  /deep/ .el-input__inner {
    height: 50px;
    border-radius: 20px;
  }
}
</style>



