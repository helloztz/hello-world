<template>
  <!-- 练习 练习详情页面 -->
  <div>
    <div class="videocontent">
      <div class="Video">
        <div>
          <el-page-header @back="goBack" content="训练结果展示"></el-page-header>
        </div>

        <div class="detail" style="margin-top:10px;">
          <p class="chapterTitleP">健康管理师章节练习</p>
            <div class="resultContent">
              <div>第一章</div>
              <div class="resultCell">
                <span class="chapterTitleCell">未答</span>
                <span>第1题</span>
              </div>
              <div class="resultCell">
                <span class="chapterTitleCell success">正确</span>
                <span>第2题</span>
              </div>
              <div class="resultCell">
                <span class="chapterTitleCell error">错误</span>
                <span>第3题</span>
              </div>
              <div class="resultCell">
                <span class="chapterTitleCell">未答</span>
                <span>第4题</span>
              </div>
              <div class="resultCell">
                <span class="chapterTitleCell">未答</span>
                <span>第5题</span>
              </div>
            </div>
        </div>
      </div>
    </div>
    <div class="endBtn">
      <el-button type="info" @click="goBack()">返回</el-button>
      <el-button type="primary" >再练一次</el-button>
    </div>

  </div>
</template>

<script>
import Navbar from "@/navbar/Navbar";

export default {
  name: "ShowResult",
  components: {
    Navbar
  },
  data() {
    return {

    }
  },
  methods: {
    goBack() {
      this.$router.push({ path: "/Classify" });
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
.chapterTitleP{
  text-align:center;
  padding: 10px;
  font-size:18px;
}
.resultContent{
  padding: 0 20px 20px 20px;
}
.resultCell{
  display:inline-block;
  white-space: nowrap;
  margin-right:5px;
  font-size: 14px;
}
</style>
<style lang="less">


</style>
