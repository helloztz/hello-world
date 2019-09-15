<template>
  <div class="examine-module">
    <div>
      <span class="grow-1 title">
        {{examineDetails.examinationName}}
      </span>
      <!-- <span class="right-width">
        {{examineDetails.canUseTime}}
      </span> -->
    </div>
    <div>
      <span>
        考试时间：
      </span>
      <span>
        {{examineDetails.startTime}}
      </span>
    </div>
    <div>
      <span>
        试题数量：
      </span>
      <span>
        {{examineDetails.questionNum}}
      </span>
    </div>
    <div>
      <span class="grow-1">
        <span>考试时长：</span>
        <span>
          {{examineDetails.canUseTime + '分钟'}}
        </span>
      </span>
      <span class="right-width">
        <el-button type="success" @click="submitForm(examineDetails)" :disabled="btnStatus">{{btnText}}</el-button>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'examineModule',
  data () {
    return {

    }
  },
  props: {
    examineDetails: {
      type: Object
    }
  },
  methods: {
    submitForm (param) {
      this.$router.push({
        path: '/examineDetail',
        query: {
          examinationId: param.testPaperId
        }
      })
    }
  },
  computed: {
    btnText () {
      let status = this.examineDetails.examinationStatus
      let text = ''
      if (status === 0) {
        text = '未开始'
      } else if (status === 1) {
        text = '开始考试'
      } else {
        text = '已结束'
      }
      return text
    },
    btnStatus () {
      let status = this.examineDetails.examinationStatus
      if (status === 1 || status === 2) {
        return false
      } else {
        return true
      }
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
