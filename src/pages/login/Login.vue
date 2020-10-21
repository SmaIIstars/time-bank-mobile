<!--
 * @Autor: Smallstars
 * @Date: 2020-10-20 16:56:11
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-21 16:44:36
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
      <el-form
        ref="loginFormRef"
        :model="dynamicValidateFormDates"
        :rules="dynamicValidateFormRules"
      >
        <el-form-item prop="email" class="form-item-email">
          <el-input
            placeholder="邮箱"
            clearable
            v-model="dynamicValidateFormDates.email"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="密码"
            clearable
            v-model="dynamicValidateFormDates.password"
            show-password
          ></el-input>
        </el-form-item>

        <div class="forget-password">
          <span class="forget-password-text">忘记密码?</span>
        </div>

        <el-form-item>
          <!-- @click="submitForm('ruleForm')" -->
          <el-button type="primary" round @click="submitClick('loginFormRef')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <div class="footer">
      <div>
        <span>还没有账号？</span>
        <span @click="goRegisterPage">注册</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { CHANGE_ISSHOW_MAINTABBAR } from "store/modules/settingModule/constants";

import { getUserInfo } from "servers/user";
import { CHANGE_USERINFO } from "store/modules/userModule/constants";

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
    const validateEmail = (rule, value, callback) => {
      let emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!value) {
        callback(new Error("邮箱不能为空"));
      } else if (!emailReg.test(value)) {
        callback(new Error("请输入正确邮箱"));
      }
      // 注意： 自定义校验规则必须保证每个分支都调用了callback方法
      callback();
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码长度应大于6个字符"));
      }
      callback();
    };

    return {
      dynamicValidateFormDates: {
        email: "",
        password: "",
      },

      dynamicValidateFormRules: {
        email: [{ validator: validateEmail, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
      },
    };
  },

  methods: {
    ...mapMutations("setting", {
      changeIsShowMainTabBar: CHANGE_ISSHOW_MAINTABBAR,
    }),
    ...mapMutations("user", {
      change_userInfo: CHANGE_USERINFO,
    }),

    initValue() {
      this.changeIsShowMainTabBar({ value: false });
    },

    goRegisterPage() {
      this.$router.push("/register");
    },

    submitClick(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          getUserInfo().then((res) => {
            this.change_userInfo({
              userInfo: res,
            });
            console.log(this.$store.state.user.userInfo);
            this.changeIsShowMainTabBar({ value: true });
            this.$router.push("/find");
          });
        } else {
          console.log("表单验证失败");
        }
      });
    },
  },
};
</script>

<style scoped lang="less">
.page-wrapper {
  display: flex;
  flex-flow: column;
  height: 100vh;

  .nav-left {
    padding: 10px;
  }

  .title {
    margin: 20px 10px;
  }

  .login-form {
    .form-item-email {
      padding: 10px 0;
    }
    .forget-password {
      display: flex;
      flex-flow: row-reverse;

      .forget-password-text {
        margin-right: 10%;
      }
    }
  }

  .footer {
    position: absolute;
    text-align: center;

    width: 100%;
    bottom: 0px;
    margin-bottom: 10%;
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

.el-button {
  border-radius: 50px;
  margin: 20px 0;
  width: 80%;
  height: 50px;

  font-size: 20px;
}

/deep/ .el-form-item__error {
  margin-left: 10%;
}
</style>



