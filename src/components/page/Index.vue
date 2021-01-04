<template>
  <div>
    <div class="console">THANK YOU , WELCOME TO HERE</div>

    <div class="items">
      <div class="user-info">
        登录时间：
        <span>{{ Utils.todayDate() }}</span>
      </div>
      <div class="user-info">
        登录地点：
        <span>武汉</span>
      </div>
    </div>
  </div>
</template>

<script>
import Schart from "vue-schart";
import bus from "../common/bus";
export default {
  name: "dashboard",
  data() {
    return {
      name: localStorage.getItem("ms_username"),
      data: []
    };
  },
  components: {
    Schart
  },
  computed: {},
  methods: {
    changeDate() {}
  }
};
</script>

<style scoped>
.console {
  font-size: 36px;
  text-align: center;
  margin-top: 350px;
}
.items {
  position: absolute;
  height: 50px;
  width: 240px;
  top: 10px;
  right: 20px;
  padding: 10px 10px 10px 10px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.items .user-info {
  font-size: 14px;
  color: #999;
  line-height: 25px;
}
/* 
.user-info span {
  margin-left: 70px;
} */
</style>