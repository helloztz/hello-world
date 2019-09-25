<template>
  <!-- 练习 练习详情页面 -->
  <div>
    <div class="videocontent">
      <div class="Video">
        <div>
          <el-page-header @back="goBack" content="训练结果展示"></el-page-header>
        </div>

        <div class="detail" style="margin-top:10px;">
          <p class="chapterTitleP">{{topicName}} 章节练习</p>
          <div class="resultContent">
            <div class="resultCell" v-for="(item,index) in dataList" :key="index">
              <span
                class="chapterTitleCell"
                :class="{'complete':item.state==1,'error':item.state==2}"
              >{{item.state==0?'未答':item.state==1?'正确':'错误'}}</span>
              <span>第{{index+1}}题</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="endBtn">
      <el-button type="info" @click="goBack()">返回</el-button>
      <el-button type="primary" @click="restart()">重新练习</el-button>
    </div>
  </div>
</template>

<script>
import Navbar from "@/navbar/Navbar";
import { setLocalStorage } from "@/utils/index.js";
import { getPracticeDetail } from "@/api/practice/index.js";
import {intersection} from '@/utils/index'
export default {
  name: "ShowResult",
  components: {
    Navbar
  },
  data() {
    return {
      topicName: "",
      dataList: []
    };
  },
  created() {
    this.topicName = this.$route.query.topicName;
    var params = {
      appId: this.$route.query.appId,
      uId: this.$route.query.uId,
      topicId: this.$route.query.topicId,
      topicAnswerId: this.$route.query.topicAnswerId
    };
    let that = this;
    getPracticeDetail(params).then(function(response) {
      var data = response.data.data;
      that.dataList = data;
      that.dataList.forEach(item => {
        if (item.questionType == 1) {
          if (item.userAnswer && item.questionAnswer == item.userAnswer) {
            item.state = 1;
          }
          if (item.userAnswer && item.questionAnswer != item.userAnswer) {
            item.state = 2;
          }
        } else if (item.questionType == 2) {
          if (item.userAnswer) {
            var arr1 = item.questionAnswer.split(";");
            var arr2 = item.userAnswer.split(";");
            if (arr1.length == intersection(arr1,arr2).length) {
              item.state = 1;
            }else{
              item.state = 2;
            }
          }
        }
      });
    });
    // state  0 未答题  1 正确 2 错误
  },
  methods: {
    goBack() {
      this.$router.push({ path: "/Classify" });
    },
    restart() {
      // 重新开始   restart 1 重新开始
      setLocalStorage("judge-restart" + this.$route.query.topicId, "1");
      this.$router.push({
        path: "/Detail",
        query: {
          topicName: this.$route.query.topicName,
          topicId: this.$route.query.topicId,
          topicAnswerId: this.$route.query.topicAnswerId
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.Video {
  background: #eee;
}
.videocontent {
  width: 1100px;
  margin: 10px auto 0;
  background-color: #fff;
}
.video {
  margin-top: 10px;
}
.el-page-header {
  background: #fff;
  padding: 25px;
}
.Video .left {
  background: #fff;
  float: left;
  width: calc(70% - 10px);
  padding: 10px;
  box-sizing: border-box;
}

.Video .left .video {
  margin-bottom: 2rem;
}
.Video .left .detials {
  padding: 0 3rem;
}

.Video .right {
  background: #fff;
  float: right;
  width: calc(30%);
  padding: 10px 10px 50px 10px;
  box-sizing: border-box;
}

.Video .right button {
  width: 100%;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.testTitle {
  margin-top: 10px;
  padding: 0 10px;
  span:nth-child(1) {
    margin-right: 40px;
  }
}
.detail {
  margin-top: 10px;
  padding: 0 10px 10px 10px;
  background: #fff;
}
.theTitle {
  label {
    display: block;
    margin: 10px 0;
  }
}
.choiceContent {
  padding-left: 10px;
}
.submitBtn {
  text-align: center;
  padding: 10px 0 20px 0;
}
.endBtn {
  text-align: center;
  margin-top: 60px;
}

.collapse-title {
  flex: 1 0 90%;
  order: 1;
}
.chapterTitleP {
  text-align: center;
  padding: 10px;
  font-size: 18px;
}
.resultContent {
  padding: 0 20px 20px 75px;
  // text-align: center;
}
.resultCell {
  text-align: left;
  display: inline-block;
  white-space: nowrap;
  margin-right: 5px;
  font-size: 14px;
  width: 100px;
  margin-bottom: 5px;
}
.chapterTitleCell {
  background-color: #909399;
  color: #fff;
  padding: 3px 8px;
  border-radius: 20px;
}
.complete {
  background-color: #67c23a;
}
.success {
  background-color: #67c23a;
}
.error {
  background-color: #ff4d4f;
}
</style>
<style lang="less">
</style>
