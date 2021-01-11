# vue-sys-master
## 前言
基于Vue+Element-ui开发的后台管理系统模板
## 技术栈
+ Vue  
+ Vue-router  
+ Element-UI  
+ Mock.js
## 功能实现
:pencil: 登录、登出  
:pencil: 基本表格  
:pencil: 基本表单  
:pencil: 富文本编辑器和Markdown编辑器  
:pencil: sChart.js图表（柱状图/折线图/饼状图/环形图）  
:pencil: 使用Mock.js模拟用户数据
## 运行
1. 安装依赖
``` bash
npm install
```
2. 本地运行
``` bash
npm run dev
```
3. 编译打包
``` bash
npm run build
```
## 项目预览
:link:   https://silence-y.github.io/vue-sys-master/dist
## 功能介绍
### 1.表格
表格主要使用Element-UI组件库实现，用户数据使用Mock.js模拟生成。  
部分代码如下：
``` javascript
import Mock from 'mockjs'
const Random = Mock.Random
// 用户数据
const userDate = () => {
    let users = [];
    for (let i = 0; i < 10; i++) {
        let user = {
            'id': i + 1,
            'name': Random.cname(),
            'phone': Mock.mock(/^1[0-9]{10}$/),
            'date': Random.date('yyyy-MM-dd'),
            'address': Mock.mock('@county(true)'),
            'status': Random.integer(0, 1)
        }
        users.push(user)
    }
    return users
}
// 生成接口，便于调用
Mock.mock('/api/users', userDate)
```
在组件中使用mock模拟数据
``` javascript
 created() {
    this.getUsers();
  },
  methods: {
    // 获取用户列表数据模拟数据
    getUsers() {
      this.loading = true;
      this.$http("/api/users").then(res => {
        // console.log(res);
        this.users = res.data;
        this.pageTotal = res.pageTotal || 100;
      });
    },
    // 触发搜索按钮
    handleSearch() {
      this.$set(this.query, "pageIndex", 1);
    },
    // 新增数据
    handleAdd() {
      this.dialogTitle = "新增";
      this.user = Object.assign({}, this.userBackup);
      this.userFormVisible = true;
    },

    // 编辑操作
    handleEdit(index, row) {
      console.log(row);
      this.dialogTitle = "编辑";
      this.user = Object.assign({}, row);
      this.userFormVisible = true;
      this.rowIndex = index;
    },
    // 保存编辑
    submitUser(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let id = this.user.id;
          // 如果存在就修改
          if (id) {
            this.users.splice(this.rowIndex, 1, this.user);
          } else {
            // 如果不存在就新增
            this.user.id = this.users.length + 1;
            this.users.unshift(this.user);
          }
          this.userFormVisible = false;
          this.$message({
            type: "success",
            message: id ? "修改成功" : "新增成功"
          });
        }
      });
    },
    // 删除操作
    handleDelete(index, row) {
      // 二次确认删除
      this.$confirm(`确定删除用户【${row.name}】吗？`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        // 用户列表里删除数据
        this.users.splice(index, 1);
        this.$message({
          type: "success",
          message: "删除成功"
        }).catch(() => {
          console.log("取消删除");
        });
      });
    }
  }
```
### 2.sChart.js图表库的使用
sChart.js 作为一个小型简单的图表库，没有过多的图表类型，只包含了柱状图、折线图、饼状图和环形图四种基本的图表。麻雀虽小，五脏俱全。sChart.js 基本可以满足这四种图表的需求。
文档(中英文)：[lin-xin.gitee.io/example/schart/](lin-xin.gitee.io/example/schart/)  
文档写的很清楚了，我也基本上是将文档中的例子copy过来的，大家直接去看文档就可以啦~
## 项目截图
### 登录
![登录](https://github.com/Silence-Y/vue-sys-master/blob/master/screenshots/img_login.png)
### 用户列表
![用户列表](https://github.com/Silence-Y/vue-sys-master/blob/master/screenshots/img_user.png)
### 表单
![表单](https://github.com/Silence-Y/vue-sys-master/blob/master/screenshots/img_form.png)
### 图表
![sChart.js图表](https://github.com/Silence-Y/vue-sys-master/blob/master/screenshots/img_scharts.png)
