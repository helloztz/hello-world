<template>
  <!-- 练习 练习详情页面 -->
  <div>
    <div class="videocontent">
      <div class="Video">
        <div>
          <el-page-header @back="goBack" content="详情页面"></el-page-header>
        </div>
        <div class="testTitle">
          <span>
            <i class="el-icon el-icon-edit-outline"></i> 练习
          </span>
          <span>
            <i class="el-icon-folder-opened"></i> 章节练习
          </span>
        </div>
        <div class="detail" style="margin-top:10px;">
          <div class="left">
            <div class="theTitle detail-title-content">
              <p>第 {{showIndex+1}} 题/共 {{dataList.length}} 题</p>
              <div>
                <p>{{ showData.questionType==1?'【单选】':'【多选】'}}{{showData.question}}</p>
                <div class="choiceContent">
                  <el-radio-group
                    :change="change()"
                    v-model="radio"
                    v-if="showData.questionType==1"
                  >
                    <el-radio
                      :label="item"
                      v-for="(item,index) in showData.answerX"
                      :key="index"
                    >{{item}}</el-radio>
                  </el-radio-group>
                  <el-checkbox-group :change="change()" v-model="checkList" v-else>
                    <el-checkbox
                      :label="item"
                      v-for="(item,index) in showData.answerX"
                      :key="index"
                    >{{item}}</el-checkbox>
                  </el-checkbox-group>
                </div>
              </div>
            </div>
            <div class="submitBtn">
              <el-button @click="prev()" :class="{'hide':showIndex==0}">上一题</el-button>
              <el-button @click="lookResult()">查看答案</el-button>
              <el-button @click="next()" :class="{'hide':showIndex==dataList.length-1}">下一题</el-button>
            </div>
            <div class="endBtn">
              <el-button type="primary" @click="restart()">重新开始</el-button>
              <el-button type="primary" @click="end()">结束训练</el-button>
            </div>
          </div>
          <div class="right">
            <div style="margin-bottom:20px">
              <el-collapse v-model="activeNames" class="customClass">
                <el-collapse-item name="1">
                  <span class="collapse-title" slot="title">{{topicName}}</span>
                  <el-row class="chapterTitle">
                    <el-col :span="8" v-for="(item,index) in dataList" :key="index">
                      <div
                        class="show-title-cell"
                        :class="{'active-show-title-cell':index==showIndex}"
                        @click="jump(index)"
                      >
                        <span
                          class="chapterTitleCell"
                          :class="{'complete':item.state==1}"
                        >{{item.state==0?'未答':'已答'}}</span>
                        <span class="title-text-index">第{{index+1}}题</span>
                      </div>
                    </el-col>
                  </el-row>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
          <div style="clear:both"></div>
        </div>
      </div>
    </div>

    <!-- 结束训练提示框 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>您确定要结束训练吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="endTraining()">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 重新开始提示框 -->
    <el-dialog title="提示" :visible.sync="dialogVisibleRestart" width="30%">
      <span>您确定要重新开始训练吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleRestart = false">取 消</el-button>
        <el-button type="primary" @click="restartConfirm()">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 查看答案提示框 -->
    <el-dialog title="正确答案" :visible.sync="dialogVisibleResult" width="30%">
      <span>{{showData.questionAnswer}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleResult = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Navbar from "@/navbar/Navbar";
import {
  getPracticeDetail,
  getRestartTopic,
  getSaveQuestion
} from "@/api/practice/index.js";
import settings from "@/settings.js";
import {
  getUserInfor,
  setLocalStorage,
  removeLocalStorage,
  getLocalStorage
} from "@/utils/index.js";

export default {
  name: "Detail",
  components: {
    Navbar
  },
  data() {
    return {
      showData: {},
      showIndex: 0,
      dataList: [],
      checkList: [],
      radio: "",
      activeNames: ["1"],
      dialogVisible: false,
      dialogVisibleResult: false,
      dialogVisibleRestart: false,
      topicName: "",
      topicAnswerId: "",
      topicId:"",
      appId:"",
      uId:""
    };
  },
  created() {
    // 代表重新开始练习
    var that = this;
    // 参数初始化
    this.topicAnswerId = this.$route.query.topicAnswerId;
    this.topicName = this.$route.query.topicName;
    this.topicId=this.$route.query.topicId;
    this.appId=settings.global.appId;
    this.uId= getUserInfor().autoId;

    var localData = getLocalStorage("practice-data" + this.topicId);
   
    var judgeRestart = getLocalStorage("judge-restart" + this.topicId);
    if(judgeRestart){
      this.restartConfirm();
      removeLocalStorage("judge-restart" + this.topicId);
      return ;
    }


    var params = {
      appId: this.appId,
      uId: this.uId,
      topicId: this.topicId,
      topicAnswerId: this.topicAnswerId ? this.topicAnswerId : ""
    };
   
    getPracticeDetail(params).then(function(response) {
      var data = response.data.data;
      that.dataList = data;
      that.dataList.forEach(item => {
        item.answerX=item.answerX.replace(/&lt;/g,'<');
        item.answerX=item.answerX.replace(/&gt;/g,'>');
        item.answerX = item.answerX.split(";");
        // state  0 未答题  1 已答题
        item.state = item.userAnswer ? 1 : 0;
      });
      let currentIndex=localData?localData.currentIndex:0;
      that.showIndex = currentIndex;
      that.showData = that.dataList[currentIndex];
      if (that.showData.userAnswer && that.showData.questionType == 1) {
        that.radio = that.showData.userAnswer;
      } else if (that.showData.userAnswer && that.showData.questionType == 2) {
        that.checkList = that.showData.userAnswer.split(";");
      }
    });
  },
  methods: {
    goBack() {
      this.$router.push({ path: "/Classify" });
    },
    endTraining() {
      this.dialogVisible = false;
      
      removeLocalStorage("practice-data" + this.topicId);
      // 结束训练
      if (this.showIndex == this.dataList.length - 1) {
        this.breakPoint(1);
      }
      this.$router.push({
        path: "/ShowResult",
        query: {
          topicName: this.topicName,
          topicId: this.topicId,
          topicAnswerId:this.topicAnswerId,
          appId: this.appId,
          uId: this.uId,
        }
      });
    },
    prev() {
      //上一步
      this.showIndex--;
      this.showData = this.dataList[this.showIndex];
      this.saveAnswer();
      setLocalStorage("practice-data" + this.topicId, {
        currentIndex: this.showIndex
      });
    },
    next() {
      //下一步
      this.showIndex++;
      this.showData = this.dataList[this.showIndex];
      this.saveAnswer();
      setLocalStorage("practice-data" + this.topicId, {
        currentIndex: this.showIndex
      });
      this.breakPoint(0);
    },
    breakPoint(isLsat) {
      var index=this.showIndex;
      // 最后一题
      if(isLsat==1){
        index=index+1;
      }
      // 断点答题 存储数据
      var saveData = this.dataList[index - 1];
      
      var params = {
        appId: this.appId,
        uId: this.uId,
        topicId: saveData.topicId, //练习id
        topicAnswerId: this.topicAnswerId ? this.topicAnswerId : "", // 选填 一道题都没有答过的情况下不传，只要答过一道题必传（第一次答题后接口会返回改参数）
        questionOrder: index, //第几题
        userAnswer: saveData.userAnswer, //用户答案
        isLsat: isLsat, //是否是最后一题 1 是 0 不是
        questionId: saveData.autoId //题Id
      };
      let that = this;
      getSaveQuestion(params).then(function(response) {
        var data = response.data.data;
        that.topicAnswerId = data.topicAnswerId;
      });
    },
    lookResult() {
      //查看答案
      this.dialogVisibleResult = true;
    },
    jump(index) {
      // 点击右边进行跳转
      this.showIndex = index;
      this.showData = this.dataList[this.showIndex];
      this.saveAnswer();
      this.breakPoint(0);
    },
    change() {
      var userAnswer = "";
      if (this.showData.questionType == 1) {
        if (this.radio == "") {
          return;
        }
        userAnswer = this.radio;
      } else {
         if (this.checkList.length < 1) {
          return;
        }
        userAnswer = typeof this.checkList=='string'?this.checkList:this.checkList.join(";");
      }
      this.dataList[this.showIndex].userAnswer = userAnswer;
      // 判断题目是否已答
      this.dataList[this.showIndex].state = 1;
    },
    end() {
      // 结束训练
      this.dialogVisible = true;
    },
    restart() {
      this.dialogVisibleRestart = true;
    },
    restartConfirm() {
      // 重新开始
      var params = {
        appId: this.appId,
        uId: this.uId,
        topicAnswerId: this.topicAnswerId
      };
      var that = this;
      getRestartTopic(params).then(function(response) {
        var data = response.data.data;
        that.dataList = data;
        that.dataList.forEach(item => {
          item.answerX = item.answerX.split(";");
          // state  0 未答题  1 已答题
          item.state = 0;
        });
        that.showIndex = 0;
        that.showData = that.dataList[0];
        that.topicAnswerId='';
        that.radio='';
        that.checkList=[];
        // 清空本地存储的数据
        setLocalStorage("practice-data" + that.$route.query.topicId, {
          currentIndex: 0
        });
        that.dialogVisibleRestart = false;
      });
    },
    saveAnswer() {
      let userAnswer = this.dataList[this.showIndex].userAnswer;
      if (this.showData.questionType == 1) {
        this.radio = userAnswer ? userAnswer : "";
      } else {
        this.checkList =  userAnswer && userAnswer.length > 0 ? userAnswer.split(';') : [];
      }
    }
  }
};
</script>

<style scoped lang="less">
.Video {
  background: #eee;
}
.hide {
  opacity: 0;
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
  margin-top: 30px;
}

.collapse-title {
  flex: 1 0 90%;
  order: 1;
}
.title-text-index {
  margin-left: 2px;
}
.show-title-cell {
  padding: 3px 0;
}
.show-title-cell:hover {
  box-shadow: 1px 2px 10px -3px rgb(0, 0, 0);
  border-radius: 20px;
}
.active-show-title-cell {
  box-shadow: 1px 2px 10px -3px rgb(0, 0, 0);
  border-radius: 20px;
}
</style>
<style lang="less">
.right .el-collapse-item__header {
  background: rgb(250, 249, 250) !important;
  line-height: 30px;
  height: 30px;
  border-bottom: 1px solid #ebeef5;
  padding-left: 7px;
}
.chapterTitle {
  text-align: center;
}
.chapterTitleCell {
  background-color: #909399;
  color: #fff;
  padding: 3px 8px;
  border-radius: 20px;
}
.chapterTitle {
  .el-col {
    margin-top: 10px;
    cursor: pointer;
  }
}
.right .el-collapse-item__content {
  padding-bottom: 8px;
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
.detail-title-content {
  .el-radio-group {
    width: 100%;
    .el-radio__label {
      white-space: normal;
    }
  }
}
</style>
