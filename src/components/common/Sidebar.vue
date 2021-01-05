<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      unique-opened
      router
    >
      <!-- text-color="#bfcbd9"
      active-text-color="#20a0ff"-->
      <!-- background-color="#324157" -->
      <template v-for="item in items">
        <!-- 如果有二级目录 -->
        <template v-if="item.subs">
          <!-- 二级目录 -->
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <!-- 如果有三级目录 -->
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <!-- 如果没有三级目录 -->
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>

        <!-- 如果没有二级目录 -->
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template> 

<script>
import bus from "../common/bus";
export default {
  data() {
    return {
      collapse: false,
      items: [
        {
          icon: "el-icon-lx-home",
          index: "index",
          title: "系统首页"
        },
        {
          icon: "el-icon-lx-cascades",
          index: "table",
          title: "用户信息"
        },
        // {
        //   icon: "el-icon-lx-copy",
        //   index: "tabs",
        //   title: "系统消息"
        // },
        {
          icon: "el-icon-lx-calendar",
          index: "form",
          title: "基本表单"
        },
        {
          icon: "el-icon-lx-calendar",
          index: "3-2",
          title: "编辑器",
          subs: [
            {
              index: "editor",
              title: "富文本编辑器"
            },
            {
              index: "markdown",
              title: "markdown编辑器"
            }
          ]
        },

        {
          icon: "el-icon-pie-calendar",
          index: "upload",
          title: "文件上传"
        },
        {
          icon: "el-icon-pie-calendar",
          index: "charts",
          title: "图表汇总"
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  created() {
    bus.$on("collapse", msg => {
      this.collapse = msg;
      bus.$emit("collapse-content", msg);
    });
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>