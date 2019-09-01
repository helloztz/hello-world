<template>
  <div class="examine-right">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        卡片名称
      </div>
      <div class="examine-list">
        <div class="isSuccess">
          <span>未答</span>
          <span>第一题</span>
        </div>
        <div class="isSuccess">
          <span>未答</span>
          <span>第一题</span>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'examineRight'
}
</script>
<style scoped>
  .examine-list {
    display: flex;
  }
  .isSuccess {
    width: 50%;
  }
  .isSuccess span:first-child {
    border-radius: 5px;
    background: #cccccc;
    line-height: 1;
    padding: 3px 8px;
    font-size: 12px;
  }
  .isSuccess span:last-child {
    font-size: 12px;
  }
</style>
