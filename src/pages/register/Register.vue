<!--
 * @Autor: Smallstars
 * @Date: 2020-10-20 16:56:11
 * @LastEditors: Smallstars
 * @LastEditTime: 2020-10-23 19:10:15
 * @Description: 
-->
<template>
  <div class="page-wrapper">
    <NavBar>
      <div slot="left" class="nav-left" @click="backLoginPage">
        <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
      </div>
    </NavBar>

    <div class="title">
      <h2>注册</h2>
    </div>

    <div class="login-form">
      <!-- form中的model和item中的prop要对应 -->
      <el-form
        :rules="dynamicValidateFormRules"
        :model="dynamicValidateFormDate"
        ref="registerFormRef"
      >
        <el-form-item prop="nickname" class="form-item-nickname">
          <el-input
            placeholder="昵称"
            clearable
            v-model="dynamicValidateFormDate.nickname"
          ></el-input>
        </el-form-item>

        <el-form-item prop="email" class="form-item-email">
          <el-input
            placeholder="邮箱"
            clearable
            v-model="dynamicValidateFormDate.email"
          ></el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            type="pass"
            placeholder="密码"
            clearable
            v-model="dynamicValidateFormDate.password"
            show-password
          ></el-input>
        </el-form-item>

        <el-form-item prop="checkPassword">
          <el-input
            type="password"
            placeholder="确认密码"
            clearable
            v-model="dynamicValidateFormDate.checkPassword"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <!-- @click="submitForm('ruleForm')" -->
          <el-button
            type="primary"
            round
            @click="submitClick('registerFormRef')"
          >
            注册并登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="footer">
      <span>《应用协议》</span>
      <span>注册即代表您同意本协议</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { CHANGE_ISSHOW_MAINTABBAR } from "store/modules/settingModule/constants";

import { getUserInfo } from "servers/user";
import { CHANGE_USERINFO } from "store/modules/userModule/constants";

import NavBar from "common/components/navbar/NavBar";

export default {
  name: "Register",
  components: {
    NavBar,
  },
  created() {
    this.initValue();
  },

  data() {
    /**
     * 自定义验证规则
     * 位置注意是在 return 之前
     */
    const validateNickname = (rule, value, callback) => {
      if (value.length < 2 || value.length > 8) {
        callback(new Error("昵称应在2~8个字符之间"));
      }
      callback();
    };

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

    const validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error("密码长度应大于6个字符"));
      }
      callback();
    };
    const validateCheckPass = (rule, value, callback) => {
      if (value !== this.dynamicValidateFormDate.password) {
        callback(new Error("确认密码与上方不符"));
      }
      callback();
    };

    return {
      dynamicValidateFormDate: {
        nickname: "",
        email: "",
        password: "",
        checkPassword: "",
      },

      dynamicValidateFormRules: {
        nickname: [{ validator: validateNickname, trigger: "change" }],
        email: [{ validator: validateEmail, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPassword: [{ validator: validateCheckPass, trigger: "blur" }],
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

    backLoginPage() {
      this.$router.push("/login");
    },

    submitClick(formName) {
      // console.log(formName);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // console.log("true");
          getUserInfo().then((res) => {
            this.change_userInfo({
              userInfo: res,
            });
            // console.log(this.$store.state.user.userInfo);
            this.changeIsShowMainTabBar({ value: true });
            this.$router.push("/find");
          });
        } else {
          // console.log("false");
          console.log("表单验证失败");
        }
      });
      // console.log("end");
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
  background-color: #13c2c2;
}

/deep/ .el-form-item__error {
  margin-left: 10%;
}
</style>



