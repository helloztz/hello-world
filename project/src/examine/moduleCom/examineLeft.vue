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
      <div class="examine-radio" v-if="item.questionType === 1">
        <el-radio-group v-model="radio">
          <el-radio :label="ele" v-for="(ele, index) in item.answerX" :key="index" @change="changeRadio">{{ele}}</el-radio>
        </el-radio-group>
      </div>
      <div class="examine-radio" v-else>
        <el-checkbox-group v-model="checkList">
          <el-checkbox :label="ele" v-for="(ele, inde) in item.answerX" :key="inde" @change="changeBox(index)"></el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="left-but">
        <el-button type="success" @click="nextQuestion(item, index)" :disabled="index===questionList.length">提交</el-button>
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
      isLsat: 0,
      checkList: []
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
            if (ele.questionType === 2) {
              ele['answer'] = []
            } else {
              ele['answer'] = ''
            }
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
    nextQuestion (item, index) {
      this.questionId = item.questionId
      let page = this.page - 1
      this.setQuestionStatus(page,item)
      if (this.$route.query.mes === undefined) {
        this.subQuestion()
      }
      if (this.page === this.questionList.length) {
        return
      }
      if (item.questionType === 1) {
        this.radio = this.questionList[this.page].answer
      } else {
        this.checkList = this.questionList[this.page].answer
      }
      this.page+=1
    },
    changeRadio (val) {
      this.userAnswer = val
    },
    changeBox (index) {
      this.userAnswer = this.checkList.join(';')
      this.questionList[index].answer = this.checkList
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
      if (this.checkList.length > 0) {
        this.questionList[index]['isAnswer'] = true
        this.questionList[index]['answer'] = this.checkList
      }
      let questions = JSON.stringify(this.questionList)
      // setExamineQuestion(questions)
      eventBus.$emit('setStatus', this.questionList)
      this.$emit('saveData', this.questionList)
    },
    initQueParams () {
      let params = {
        examinationId: this.examinationId,
        appId: settings.global.appId,
        uId: getUserInfor().autoId,
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
      if (val.item.questionType === 1) {
        this.radio = val.item.answer
      } else {
        this.checkList = val.item.answer
      }
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
.examine-radio .el-checkbox-group {
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
