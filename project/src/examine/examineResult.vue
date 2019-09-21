<template>
  <div class="examine-result">
    <div class="examine-bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">考试</el-breadcrumb-item>
        <el-breadcrumb-item>考试结果</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="result-content">
      <el-row>
        <el-col :span="16">
          <div class="progess-box">
            <div>
              <el-progress type="circle" :percentage="25"></el-progress>
            </div>
            <div>
              <div class="padding50">恭喜您完成了本次考试！</div>
              <div>
                <span>正确：{{correstAnswer.length}}</span>
                <span>错误：{{errorAnswer.length}}</span>
                <!-- <span>本场及格线：30分</span> -->
              </div>
            </div>
          </div>
          <div class="result-tabs">
            <el-tabs v-model="activeName">
              <el-tab-pane label="全部" name="first">
                <examine-card :questionList="allAnswer"></examine-card>
              </el-tab-pane>
              <el-tab-pane label="查看正确" name="second">
                <examine-card :questionList="correstAnswer"></examine-card>
              </el-tab-pane>
              <el-tab-pane label="查看错误" name="third">
                <examine-card :questionList="errorAnswer"></examine-card>
              </el-tab-pane>
            </el-tabs>
            <el-button type="success" @click="reconnect">重新练习</el-button>
          </div>
        </el-col>
        <!-- <el-col :span="8">
          <div>数据参考</div>
          <ul>
            <li>
              <span>当前参与人数：</span>
              <span>44人</span>
            </li>
            <li>
              <span>当前正答率：</span>
              <span>44%</span>
            </li>
            <li>
              <span>当前及格率：</span>
              <span>25%</span>
            </li>
            <li>
              <span>当前及格人数：</span>
              <span>11人</span>
            </li>
            <li class="float">
              <div>
                <span>当前最高分：</span>
                <span>41分</span>
              </div>
              <div>
                共2人
              </div>
            </li>
            <li class="float">
              <div>
                <span>当前最低分：</span>
                <span>0分</span>
              </div>
              <div>
                共2人
              </div>
            </li>
          </ul>
        </el-col> -->
      </el-row>
    </div>
  </div>
</template>
<script>
import examineCard from './moduleCom/answerCard'
import {intersection} from '@/utils/index'
export default {
  name: 'examineResult',
  data () {
    return {
      activeName: 'first',
      correstAnswer: [],
      errorAnswer: [],
      allAnswer: []
    }
  },
  components: {
    examineCard
  },
  methods: {
    getQuery () {
      let list = this.$route.query.questionList
      if (list === undefined || list.length === 0) return
      let questionList = JSON.parse(list)
      let radios = questionList.filter(ele => ele.questionType === 1)
      let checks = questionList.filter(ele => ele.questionType === 2)
      let correstAnswer = radios.filter(ele => {
        return ele.answer === ele.questionAnswer
      })
      let errorAnswer = radios.filter(ele => {
        return ele.answer !== ele.questionAnswer
      })
      let corresCheck = checks.filter(ele => {
        let answer = ele.questionAnswer.split(';')
        let resultArr = intersection(answer, ele.answer)
        return resultArr.length > 0
      })
      let errorCheck = checks.filter(ele => {
        let answer = ele.questionAnswer.split(';')
        let resultArr = intersection(answer, ele.answer)
        return resultArr.length === 0
      })
      this.correstAnswer = correstAnswer.concat(corresCheck)
      this.errorAnswer = errorAnswer.concat(errorCheck)
      this.allAnswer = questionList
    },
    reconnect () {
      let id = this.$route.query.examinationId
      this.$router.push({
        path: '/examineDetail',
        query: {
          mes: 'go',
          examinationId: id
        }
      })
    }
  },
  mounted () {
    this.getQuery()
  }
}
</script>
<style scoped>
.progess-box {
  display: flex;
  align-items: center;
}
.examine-result {
  width: 1100px;
  margin: 0px auto;
}
.examine-bread {
  padding: 40px 0px;
}
.padding50 {
  padding-bottom: 50px;
}
.float {
  display: flex;
}
.float div:last-child {
  flex-grow: 1;
  text-align: right;
}
</style>
