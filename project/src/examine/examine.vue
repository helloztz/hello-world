<template>
  <div class="examine">
    <div class="examine_hiden">
    <div class="examine-title">
        章节考试列表
    </div>
    <el-row :gutter="20">
      <el-col :span="12" v-for="(item, index) in examineList" :key="index">
        <examine-com :examineDetails="item"></examine-com>
      </el-col>
    </el-row>
    </div>
  </div>
</template>
<script>
import examineCom from './moduleCom/examineCom'
import settings from '@/settings.js'
import {getUserInfor} from '@/utils/index.js'
import {getExamineList} from '@/api/examine/index.js'
export default {
  name: 'examine',
  components: {
    examineCom
  },
  data () {
    return {
      examineList: []
    }
  },
  methods: {
    getExamineList () {
      let params = {
        appId: settings.global.appId,
        uId: getUserInfor().autoId,
      }
      getExamineList(params)
        .then(res => {
          if (res.data.code === 1) {
            this.examineList = res.data.data
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getExamineList()
  }
}
</script>
<style scoped>
.examine {
  width: 1100px;
  margin: 0 auto;
  padding-bottom: 10px;
}
.examine-title {
  line-height: 60px;
  background: white;
  border-radius: 5px;
  color: #15416e;
  padding-left: 20px;
  font-weight: 700;
  font-size: 24px;
  margin-top: 10px;
}
</style>
