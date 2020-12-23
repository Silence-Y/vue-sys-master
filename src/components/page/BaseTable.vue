<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb>
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 用户信息
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 表格内容 -->
    <div class="container">
      <div class="handle-box">
        <el-button type="primary" icon="el-icon-delete" class="handle-del mr10">批量删除</el-button>
        <el-button
          type="primary"
          icon="el-icon-circle-plus-outline"
          size="small"
          @click="handleAdd"
        >新增</el-button>
        <el-input v-model="query.name" placeholder="用户名" class="handle-input mr10"></el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>

      <!-- 列表页面 -->
      <el-table
        :data="users"
        border
        class="table"
        ref="multipleTable"
        header-cell-class-name="table-header"
      >
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="phone" label="手机" width="180"></el-table-column>
        <el-table-column sortable prop="date" label="出生日期" width="180"></el-table-column>
        <el-table-column prop="address" label="地址" width="240"></el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">{{ scope.row.status ? '启用' : '禁用' }}</template>
        </el-table-column>
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="scope">
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              type="text"
              icon="el-icon-delete"
              class="red"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页功能 -->
      <div class="pagination">
        <el-pagination
          background
          layout="total, prev, pager, next"
          :current-page="query.pageIndex"
          :page-size="query.pageSize"
          :total="pageTotal"
        ></el-pagination>
      </div>
    </div>

    <!--弹出框，新增、编辑 -->
    <el-dialog :title="dialogTitle" :visible.sync="userFormVisible" width="30%">
      <el-form ref="userForm" :model="user" :rules="rules" label-width="70px">
        <el-form-item label="姓名" prop="name" label-width="50px">
          <el-input v-model="user.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机" label-width="50px">
          <el-input v-model="user.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="出生日期" label-width="50px">
          <el-date-picker
            v-model="user.date"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="地址" label-width="50px">
          <el-input v-model="user.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态" label-width="50px">
          <el-switch
            v-model="user.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="0"
          ></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="userFormVisible = false">取消</el-button>
        <el-button type="primary" @click="submitUser('userForm')">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { fetchData } from "../../api/index";
export default {
  data() {
    return {
      query: {
        address: "",
        name: "",
        pageIndex: 1,
        pageSize: 10
      },
      users: [],
      // 新增或者编辑
      user: {
        id: "",
        name: "",
        phone: "",
        date: "",
        address: "",
        status: 0
      },
      multipleSelection: [],
      pageTotal: 0,

      // 是否展示编辑弹出框
      userFormVisible: false,
      dialogTitle: "",
      rowIndex: 9999,
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
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
};
</script>

<style scoped>
.handle-box {
  margin-bottom: 20px;
}

.handle-select {
  width: 120px;
}

.handle-input {
  width: 300px;
  display: inline-block;
  margin-left: 20px;
}
.table {
  width: 100%;
  font-size: 14px;
}
.red {
  color: #ff0000;
}
.mr10 {
  margin-right: 10px;
}
.table-td-thumb {
  display: block;
  margin: auto;
  width: 40px;
  height: 40px;
}
</style>