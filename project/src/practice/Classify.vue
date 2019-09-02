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
            <el-col :span="12">
              <div class="list listCard">
                <div class="content">
                  <h4>健康管理师章节练习</h4>
                  <p>共 51 章节</p>
                  <p>目前已完成 2 个章节，加油!</p>
                  <div>
                    <el-progress :percentage="10"></el-progress>
                  </div>
                  <el-button type="primary" @click="startPractice()">开始练习</el-button>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="list listCard">
                <div class="content">
                  <h4>健康管理师章节练习</h4>
                  <p>共 51 章节</p>
                  <p>目前已完成 2 个章节，加油!</p>
                  <div>
                    <el-progress :percentage="10"></el-progress>
                  </div>
                  <el-button type="primary" @click="startPractice()">开始练习</el-button>
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
export default {
  name: "Classify",
  components: {
    Navbar
  },
  methods: {
    startPractice() {
      this.$router.push({
        path: "/Detail",
        query: {}
      });
    }
  }
};
</script>

<style scoped lang="less">
p {
  margin: 0;
}
h4{
  margin:17px 0;
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
