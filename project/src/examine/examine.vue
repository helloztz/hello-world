<template>
  <div class="examine">
    <div class="examine-title">
        章节考试列表
    </div>
    <el-row :gutter="20">
      <el-col :span="8">
        <examine-com></examine-com>
      </el-col>
      <el-col :span="8">
        <examine-com></examine-com>
      </el-col>
      <el-col :span="8">
        <examine-com></examine-com>
      </el-col>
      <el-col :span="8">
        <examine-com></examine-com>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import examineCom from './moduleCom/examineCom'
export default {
  name: 'examine',
  components: {
    examineCom
  }
}
</script>
<style scoped>
.examine {
  width: 1100px;
  margin: 0 auto;
}
.examine-title {
  line-height: 60px;
  background: white;
  border-radius: 5px;
  color: #15416e;
  padding-left: 20px;
  font-weight: 700;
  font-size: 24px;
  margin-top: 10px;
}
</style>
