<template>
  <div class="examine-right">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        {{examineDetail.examinationName}}
      </div>
      <examine-card :questionList="questionList"></examine-card>
      <div class="card-btn" v-show="questionList.length > 0">
        <el-button type="success" @click="backExamineDetail" :disabled="questionList.length === 0">提交</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
import {eventBus} from '@/utils/index.js'
import examineCard from './answerCard'
export default {
  name: 'examineRight',
  data () {
    return {
      questionList: []
    }
  },
  components: {
    examineCard
  },
  props: {
    examineDetail: {
      type: Object
    }
  },
  methods: {
    backExamineDetail () {
      this.$router.push({
        path: '/examineResult',
        query: {
          questionList: JSON.stringify(this.questionList),
          examinationId: this.$route.query.examinationId
        }
      })
    }
  },
  created () {
    eventBus.$on('setStatus', val => {
      this.questionList = val
    })
  }
}
</script>
<style>
  .examine-right .el-card {
    height: 100% !important;
  }
</style>
<style scoped>
  .examine-right {
    height: 100%
  }
  .card-btn {
    padding-top: 20px;
    text-align: center;
  }
</style>
