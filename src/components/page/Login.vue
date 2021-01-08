<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">后台管理系统</div>
      <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="param.username" placeholder="username">
            <el-button slot="prepend" prefix-icon="profile" class="btn">用户名</el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="password"
            v-model="param.password"
            @keyup.enter.native="submitForm()"
          >
            <el-button slot="prepend" icon="el-icon-lx-lock">密码</el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm()">登录</el-button>
        </div>
        <!-- 免费注册用户 -->
        <!-- <p class="login-tips">
          <span>还没有账号？</span>
          <router-link :to="{ name: 'register' }">免费注册</router-link>
        </p>-->
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      param: {
        username: "admin",
        password: "123456"
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
    submitForm() {
      this.$refs.login.validate(valid => {
        if (valid) {
          this.$message.success("登录成功");
          localStorage.setItem("ms_username", this.username);
          this.$router.push("/index");
          // 页面信息需要变化
        } else {
          this.$message.error("请输入账号和密码");
          console.log("error submit");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/img/login-bg.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 400px;
  /* height: 280px; */
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid #ddd;
  overflow: hidden;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  padding-top: 20px;
  text-align: center;
  font-size: 30px;
  color: #909399;
  /* border-bottom: 1px solid #fff; */
}

.ms-content {
  padding: 20px 30px;
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
  width: 65px;
}
</style>