<template>
  <div class="examine-list">
    <div class="isSuccess">
      <div class="no_question" v-for="(item, index) in questionList" :key="index" v-show="!item.isAnswer" @click="goCurrentQuestion(index, item)">
        <span>未答</span>
        <span>第{{index + 1}}题</span>
      </div>
    </div>
    <div class="isSuccess">
      <div class="yes_question" v-for="(item, index) in questionList" :key="index" v-show="item.isAnswer" @click="goCurrentQuestion(index, item)">
        <span>已答</span>
        <span>第{{index + 1}}题</span>
      </div>
    </div>
  </div>
</template>
<script>
import {eventBus} from '@/utils/index.js'
export default {
  name: 'answerCard',
  data () {
    return {

    }
  },
  props: {
    questionList: {
      type: Array
    }
  },
  methods: {
    goCurrentQuestion (index, item) {
      eventBus.$emit('setQue', {
        index,
        item
      })
    },
  }
}
</script>
<style scoped>
    .examine-list {
    display: flex;
    flex-wrap: wrap;
  }
  .isSuccess {
    width: 50%;
    text-align: center;
    max-height: 190px;
    overflow: auto;
  }

  .no_question {
    cursor: pointer;
  }
  .yes_question {
    cursor: pointer;
  }
  .no_question span:first-child {
    border-radius: 5px;
    background: #cccccc;
    line-height: 1;
    padding: 3px 8px;
    font-size: 12px;
    color: white;
  }
  .no_question span:last-child {
    font-size: 12px;
  }
  .yes_question span:first-child {
    border-radius: 5px;
    background: green;
    line-height: 1;
    padding: 3px 8px;
    font-size: 12px;
    color: white;
  }
  .yes_question span:last-child {
    font-size: 12px;
  }
</style>
