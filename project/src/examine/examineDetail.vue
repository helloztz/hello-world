<template>
  <div class="examine-detail">
    <el-row type="flex" justify="space-between" class="detail-top">
      <el-col :span="12">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">考试</el-breadcrumb-item>
          <el-breadcrumb-item>健康管理师模拟考试</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="12">
        <div class="time-box">
          <span>剩余时间：</span>
          <span>00：55</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="space-between">
      <el-col :span="16">
        <examine-left></examine-left>
      </el-col>
      <el-col :span="8">
        <examine-right></examine-right>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import examineLeft from './moduleCom/examineLeft'
import examineRight from './moduleCom/examineRight'
export default {
  name: 'examineDetail',
  components: {
    examineLeft,
    examineRight
  }
}
</script>
<style scoped>
.examine-detail {
  width: 1100px;
  margin: 0px auto;
}
.time-box {
  text-align: right;
  line-height: 1;
}
.detail-top {
  padding: 20px 0px;
}
</style>
