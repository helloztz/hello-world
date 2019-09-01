<template>
  <div class="examine-module">
    <div>
      <span class="grow-1 title">
        健康管理师模拟考试1
      </span>
      <span class="right-width">
        59：55
      </span>
    </div>
    <div>
      <span>
        考试时间：
      </span>
      <span>
        2019.9.10 10:10
      </span>
    </div>
    <div>
      <span>
        试题数量
      </span>
    </div>
    <div>
      <span class="grow-1">
        <span>考试时长：</span>
        <span>60分钟</span>
      </span>
      <span class="right-width">
        <el-button type="success" @click="submitForm">{{btnText}}</el-button>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'examineModule',
  data () {
    return {
      btnText: '未开始'
    }
  },
  methods: {
    submitForm () {
      this.$router.push({
        path: '/examineDetail'
      })
    }
  }
}
</script>
<style scoped>
.examine-module {
  padding: 10px;
  border-radius: 5px;
  background: white;
  margin-top: 10px;
}
.examine-module div {
  display: flex;
}
.examine-module:hover {
  box-shadow: 5px 5px 5px #ccc;
}
.grow-1 {
  flex-grow: 1;
}
.right-width {
  width: 100px;
  text-align: right;
}
.title{
  color: #15416e;
  font-size: 20px;
  font-weight: 700;
}
</style>
