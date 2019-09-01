<template>
  <el-card class="box-card">
        <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>第2题</el-breadcrumb-item>
      <el-breadcrumb-item>共16题</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="problem-title">
    <span>
      【单选】最先提出健康管理国家
    </span>
  </div>
  <div class="examine-radio">
    <el-radio-group v-model="radio">
      <el-radio label="A"></el-radio>
      <el-radio label="B"></el-radio>
      <el-radio label="C"></el-radio>
      <el-radio label="D"></el-radio>
    </el-radio-group>
  </div>
  <div class="left-but">
    <el-button type="success" @click="submitForm">提交</el-button>
  </div>
  </el-card>
</template>
<script>
export default {
  name: 'examineLeft',
  data () {
    return {
      radio: ''
    }
  },
  methods: {
    submitForm () {
      this.$router.push({
        path: '/examineResult'
      })
    }
  },
}
</script>
<style>
.examine-radio .el-radio-group {
  display: flex;
  flex-direction: column;
}
.examine-radio .el-radio-group > .el-radio {
  padding: 5px 0px;
}
</style>
<style scoped>
.examine-radio {
  padding-left: 20px;
}
.left-but {
  text-align: right;
}
.examine-left {
  padding: 10px;
  border-radius: 5px;
  background: white;
}
.problem-title {
  padding: 20px 0px;
}
</style>
