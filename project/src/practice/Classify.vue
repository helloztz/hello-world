<template>
  <!-- 练习 选择练习类型 -->
  <div>
    <div class="listcont">
      <div class="listWarp">
        <div>
          <h4 class="paddingLeft20">章节练习列表</h4>
        </div>
        <div style="background:rgb(236,239,242); overflow: hidden;padding-bottom:30px;">
          <el-row :gutter="20">
            <el-col :span="12" v-for="(item, index) in dataList" :key="index">
              <div class="list listCard">
                <div class="content">
                  <h4>{{item.topicName}}</h4>
                  <p>共 {{item.totalNum}} 题</p>
                  <p>目前已完成 {{item.completeNum}} 个题目，加油!</p>
                  <div>
                    <el-progress  :percentage="item.progress"></el-progress>
                  </div>
                  <el-button type="primary" @click="startPractice(item)">开始练习</el-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/navbar/Navbar";
import { getPracticeList } from "@/api/practice/index.js";
import settings from "@/settings.js";
import { getUserInfor,removeLocalStorage } from "@/utils/index.js";
export default {
  name: "Classify",
  components: {
    Navbar
  },
  data() {
    return {
      dataList:[]
    };
  },
  methods: {
    startPractice(item) {
      if(item.topicAnswerId){
        removeLocalStorage('practice-data'+item.topicId);
      }
      this.$router.push({
        path: "/Detail",
        query: {
          topicId:item.topicId,
          topicName:item.topicName,
          topicAnswerId:item.topicAnswerId
        }
      });
    }
  },
  created() {
    var params = {
      appId: settings.global.appId,
      uId: getUserInfor().autoId
    };
    var that = this;
    getPracticeList(params).then(function(response) {
      var data = response.data.data;
      that.dataList=data;
      that.dataList.forEach(item => {
        item.completeNum=Math.round(item.totalNum*Number(item.topicProgress)/100);
        item.progress=Math.floor(item.completeNum/item.totalNum*100*10)/10;
      });
    });
  }
};
</script>

<style scoped lang="less">
p {
  margin: 0;
}
h4 {
  margin: 17px 0;
}
.listcont {
  width: 1100px;
  margin: 0 auto;
  background-color: #fff;
}
.listWarp {
  overflow: hidden;
  margin-top: 10px;
  clear: both;
}
.listWarp .list {
  position: relative;
  background-color: #fff;
  background-position: left top;
  background-size: 320px 160px;
  background-repeat: no-repeat;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}
.list {
  display: flex;
}
.list .list-img {
  width: 40%;
}
.list .list-img img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.list .content {
  padding: 0 0 0 15px;
}
.el-progress-bar {
  width: 90%;
}
.list .Btn {
  position: absolute;
  right: 15px;
  bottom: 15px;
}

.Video .left {
  background: #fff;
  float: left;
  width: calc(70% - 2rem);
  padding: 1rem 1rem 3.6rem;
  margin: 1rem;
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
  float: left;
  width: calc(30% - 2rem);
  padding: 1rem 1rem 3.6rem;
  margin: 1rem;
  box-sizing: border-box;
}

.Video .right button {
  width: 100%;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.el-button--primary {
  position: absolute;
  bottom: 20px;
  right: 30px;
}
.content {
  h4 {
    margin-top: 10px;
  }
}
.list:hover {
  box-shadow: 5px 5px 5px #ccc;
}
</style>
