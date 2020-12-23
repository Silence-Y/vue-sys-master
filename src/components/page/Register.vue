<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form
        :model="registerForm"
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="ms-content"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="registerForm.username" placeholder="username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input type="password" placeholder="password" v-model="registerForm.password">
            <el-button slot="prepend" icon="el-icon-lx-lock" class="btn">密码</el-button>
          </el-input>
        </el-form-item>
        <el-form-item></el-form-item>

        <div class="login-btn">
          <el-button type="primary" @click="submitForm('registerForm')">注册</el-button>
        </div>
        <p class="login-tips">
          <span>已有账号？</span>
          <router-link :to="{ name: 'login' }">登录</router-link>
        </p>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {}
  }
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  /* background-image: url(../../assets/img/login-bg.jpg); */
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
.login-tips a {
  font-size: 16px;
  color: #409eff;
  font-weight: bold;
}
.el-button {
  widows: 20px;
}
</style></div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>