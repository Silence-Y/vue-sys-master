<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-calendar"></i> 编辑器
        </el-breadcrumb-item>
        <el-breadcrumb-item>富文本编辑器</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="container">
      <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
      <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
    </div>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";
export default {
  name: "editor",
  data() {
    return {
      content: "",
      editorOption: {
        placeholder: "Hello World"
      }
    };
  },
  components: {
    quillEditor
  },
  methods: {
    submit() {
      console.log(this.content);
      this.$message.success("提交成功！");
    }
  }
};
</script>

<style scoped>
.editor-btn {
  margin-top: 20px;
}
</style>