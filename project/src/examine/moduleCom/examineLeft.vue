<template>
  <el-card class="box-card">
    <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>第{{page}}题</el-breadcrumb-item>
        <el-breadcrumb-item>{{totalQuestion}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="question-list" v-for="(item, index) in questionList" :key="index" v-show="index === (page -1)">
      <div class="problem-title">
        <span>
          {{item.question}}
        </span>
      </div>
      <div class="examine-radio">
        <el-radio-group v-model="radio">
          <el-radio :label="ele" v-for="(ele, inde) in item.answerX" :key="inde" @change="changeRadio">{{ele}}</el-radio>
        </el-radio-group>
      </div>
      <div class="left-but">
        <el-button type="success" @click="nextQuestion(item)" :disabled="index===questionList.length - 1">提交</el-button>
      </div>
    </div>
  </el-card>
</template>
<script>
import {eventBus, setExamineQuestion, getUserInfor} from '@/utils/index.js'
import {submitQuestion} from '@/api/examine/index.js'
import settings from '@/settings.js'
export default {
  name: 'examineLeft',
  data () {
    return {
      radio: '',
      page: 1,
      currentQuestion: [],
      questionList: [],
      questionId: '',
      examinationId: '',
      userAnswer: '',
      isLsat: 0
    }
  },
  props: {
    examineDetail: {
      type: Object
    }
  },
  computed: {
    totalQuestion () {
      if (this.examineDetail.questionNum) {
        let total = this.examineDetail.questionNum
        return `共${total}道题`
      } else {
        return '共0道题'
      }
    }
  },
  watch: {
    examineDetail: {
      handler (newVal, oldVal) {
        if (newVal && newVal.questionInfoList) {
          this.examineDetail.questionNum = newVal.questionInfoList.length
          let list = JSON.parse(JSON.stringify(newVal.questionInfoList)).map(ele => {
            let question = ele['answerX'].split(';')
            ele['answerX'] = question
            ele['isAnswer'] = false
            ele['answer'] = ''
            return ele
          })
          this.questionList = list
        }
      },
      // immediate: true,
      deep: true
    }
  },
  methods: {
    nextQuestion (item) {
      this.questionId = item.questionId
      let page = this.page - 1
      this.setQuestionStatus(page,item)
      if (this.$route.query.mes === undefined) {
        this.subQuestion()
      }
      this.radio = ''
      this.page+=1
    },
    changeRadio (val) {
      this.userAnswer = val
    },
    setQuestionStatus (index, item) {
      if (index === this.questionList.lenght) { // 是否为最后一题
        this.isLsat = 1
      }
      let questionAnswer = item.questionAnswer
      if (this.radio !== '') { // 该道题答过了
        this.questionList[index]['isAnswer'] = true
        this.questionList[index]['answer'] = this.radio
      }
      let questions = JSON.stringify(this.questionList)
      // setExamineQuestion(questions)
      eventBus.$emit('setStatus', this.questionList)
      this.$emit('saveData', this.questionList)
    },
    initQueParams () {
      let params = {
        examinationId: this.examinationId,
        // appId: settings.global.appId,
        // uId: getUserInfor().autoId,
        appId: 'wx129eaf6876332fba',
        uId: '633',
        questionId: this.questionId,
        questionOrder: this.page,
        isLsat: this.isLsat,
        userAnswer: this.userAnswer
      }
      return params
    },
    subQuestion () {
      let parse = this.initQueParams()
      submitQuestion(parse)
        .then(res => {

        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.examinationId = this.$route.query.examinationId
    eventBus.$emit('setStatus', this.questionList)
    eventBus.$on('setQue', val => {
      this.page = val.index + 1
      this.radio = val.item.answer
    })
  }
}
</script>
<style>
  .box-card {
    height: 100% !important;
  }
</style>
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
