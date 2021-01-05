import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/',
    component: () => import( /* webpackChunkName: "home" */ '../components/common/Home.vue'),
    meta: {
      title: '自述文件'
    },
    children: [{
        path: '/index',
        component: () => import( /* webpackChunkName: "dashboard" */ '../components/page/index.vue'),
        meta: {
          title: '系统首页'
        }
      },
      {
        path: '/table',
        component: () => import( /* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
        meta: {
          title: '基础表格'
        }
      },
      {
        path: '/tabs',
        component: () => import( /* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
        meta: {
          title: 'tab选项卡'
        }
      },
      {
        path: '/form',
        component: () => import( /* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
        meta: {
          title: '基本表单'
        }
      },
      {
        // 富文本编辑器组件
        path: '/editor',
        component: () => import( /* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
        meta: {
          title: '富文本编辑器'
        }
      },
      {
        // markdown组件
        path: '/markdown',
        component: () => import( /* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
        meta: {
          title: 'markdown编辑器'
        }
      },
      {
        // 图片上传组件
        path: '/upload',
        component: () => import( /* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
        meta: {
          title: '文件上传'
        }
      },
      {
        // vue-schart组件
        path: '/charts',
        component: () => import( /* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
        meta: {
          title: 'schart图表'
        }
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( /* webpackChunkName: "login" */ '../components/page/Login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( /* webpackChunkName: "login" */ '../components/page/Register.vue'),
    meta: {
      title: '登录'
    }
  }

]

const router = new VueRouter({
  routes
})

export default router
