<template>
  <div>
    <!-- <navbar></navbar> -->
    <div class="listcont">
      <div class="listWarp">
        <div>
          <h4 class="paddingLeft20">课程列表</h4>
        </div>
        <div style="background:rgb(236,239,242); overflow: hidden;">
          <div class="list listCard" v-for="item in list" :key="item.id">
            <div class="list-img">
              <img :src="item.courseImgs" alt />
            </div>
            <div class="content">
              <h2>{{item.courseName}}</h2>
              <p>共 {{item.subsectionCount}} 小节 | {{item.studyCount}} 人已学</p>
              <p>目前已完成 {{item.completed}} 个小节，加油!</p>
              <div>
                <el-progress :percentage="parseFloat(item.progress)"></el-progress>
              </div>
              <el-button type="primary" @click="student(item.gId)">开始学习</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/navbar/Navbar";
import { getCourseList } from "@/api/learn/index.js";
import settings from "@/settings.js";
import { getUserInfor } from "@/utils/index.js";

export default {
  name: "List",
  components: {
    Navbar
  },
  data() {
    return {
      list: []
    };
  },
  created() {
    this.geturl();
  },
  methods: {
    student(gId) {
      this.$router.push({
        path: "/Video",
        query: {
          gId: gId,
          appId: settings.global.appId,
          uId: getUserInfor().autoId
        }
      });
    },
    geturl() {
      let that = this;
      let params = {
        appId: settings.global.appId,
        uId: getUserInfor().autoId
      };
      getCourseList(params).then(response => {
        that.list = response.data.data;
        that.list.forEach(function(item) {
          item.completed = Math.ceil(
            (item.subsectionCount * parseFloat(item.progress)) / 100
          );
        });
      });
    }
  }
};
</script>

<style scoped>
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
  width: 60%;
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
</style>
