<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb>
        <el-breadcrumb-item>图片上传</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
      <div class="content-title">支持拖拽</div>
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <el-button class="btn" size="small" type="primary" @click="submitUpload">上传到服务器</el-button>
    </div>
    <!-- style="margin-left: 10px;" -->
  </div>
</template>

<script>
export default {
  name: "upload",
  data() {
    return {};
  },
  methods: {
    submitUpload() {
      // this.$refs.upload.submit();
      this.$message.success("上传成功！");
    }
  }
};
</script>

<style scoped>
.btn {
  margin-left: 10px;
  margin-top: 10px;
}
</style>