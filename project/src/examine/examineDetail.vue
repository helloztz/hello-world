<template>
  <div class="examine-detail">
    <el-row type="flex" justify="space-between" class="detail-top">
      <el-col :span="12">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/examine' }">考试</el-breadcrumb-item>
          <el-breadcrumb-item>{{examineDetail.examinationName}}</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="12">
        <div class="time-box">
          <span>剩余时间：</span>
          <span>{{canUseTime}}</span>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="space-between" style="min-height: 300px;">
      <el-col :span="16">
        <examine-left :examineDetail="examineDetail" @saveData="saveLocal"></examine-left>
      </el-col>
      <el-col :span="8">
        <examine-right :examineDetail="examineDetail"></examine-right>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import examineLeft from './moduleCom/examineLeft'
import examineRight from './moduleCom/examineRight'
import {examineDetail} from '@/api/examine/index.js'
import {countdownTime} from '@/utils/index.js'
import setting from '@/settings.js'
export default {
  name: 'examineDetail',
  components: {
    examineLeft,
    examineRight
  },
  data () {
    return {
      examinationId: '',
      canUseTime: '',
      examineDetail: {},
      questionList: []
    }
  },
  methods: {
    getExamineDetail () {
      let params = {
        appId: 'wx129eaf6876332fba',
        uId: '633',
        examinationId: this.examinationId
      }
      examineDetail(params)
        .then(res => {
          if (res.data.code === 1) {
            this.examineDetail = res.data.data
            let examineStatus = this.examineDetail.userExaminationStatus
            let userExaminationId = this.examineDetail.userExaminationId
            let examinationStatus = this.examineDetail.examinationStatus
            let lists = JSON.parse(JSON.stringify(this.examineDetail.questionInfoList)).map(ele => {
            let question = ele['answerX'].split(';')
              ele['answerX'] = question
              ele['isAnswer'] = false
              ele['answer'] = ''
              return ele
            })
            let questionList = lists
            let examineLocal = window.localStorage.getItem(this.examinationId)
            if (examinationStatus === 1 && userExaminationId !== null && examineStatus === 1) { // 段点考试,倒计时没结束
              if (examineLocal) {
                this.examineDetail.questionInfoList = JSON.parse(examineLocal).data
                this.examineDetail.canUseTime = JSON.parse(examineLocal).time
              }
            }
            if (examinationStatus === 1 && userExaminationId !== null && examineStatus === 0) { // 段点考试，倒计时结束了
              let list = []
              if (examineLocal) {
                list = JSON.parse(examineLocal).data
              }
              this.$router.push({
                path: '/examineResult',
                query: {
                  questionList: JSON.stringify(list)
                }
              })
            }
            if (examinationStatus === 2 && userExaminationId === null) { // 考试结束了,用户没有参加考试
              this.$router.push({
                path: '/examineResult',
                query: {
                  questionList: JSON.stringify(questionList)
                }
              })
            }
            if (examinationStatus === 2 && userExaminationId !== null) { // 考试结束了,用户参加了考试
              let list = []
              if (examineLocal) {
                list = JSON.parse(examineLocal).data
              }
              this.$router.push({
                path: '/examineResult',
                query: {
                  questionList: list
                }
              })
            }
            let timeFn = countdownTime(this.examineDetail.canUseTime)
            timeFn((val, time) => {
              if (this.$route.path !=='/examineDetail') {
                clearInterval(time)
              }
              this.canUseTime = val
              setting.examineData.time = val
              let data = {
                data: this.questionList,
                time: val
              }
              window.localStorage.setItem(this.examinationId, JSON.stringify(data))
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    getRouterQuery () {
      this.examinationId = this.$route.query.examinationId
    },
    saveLocal (val) {
      this.questionList = val
    }
  },
  mounted () {
    this.getRouterQuery()
    this.getExamineDetail()
  },
}
</script>
<style scoped>
.examine-detail {
  width: 1100px;
  margin: 0px auto;
  padding-bottom: 10px;
}
.time-box {
  text-align: right;
  line-height: 1;
}
.detail-top {
  padding: 20px 0px;
}
</style>
