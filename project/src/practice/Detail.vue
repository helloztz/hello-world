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
            <div class="theTitle">
              <p>第 1 题/共 16 题</p>
              <div>
                <p>【单选】最先提出健康管理的概念的国家是</p>

                <div class="choiceContent">
                  <el-radio-group v-model="radio">
                    <el-radio
                      :label="item.demo"
                      v-for="(item,index) in radioData"
                      :key="index"
                    >{{item.label}}</el-radio>
                  </el-radio-group>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div style="margin-bottom:20px">
              <el-collapse v-model="activeNames" class="customClass">
                <el-collapse-item name="1">
                  <span class="collapse-title" slot="title">第一章</span>
                  <el-row class="chapterTitle">
                    <el-col :span="8">
                      <span class="chapterTitleCell">未答</span>
                      <span>第1题</span>
                    </el-col>
                    <el-col :span="8">
                      <span class="chapterTitleCell complete">已答</span>
                      <span>第2题</span>
                    </el-col>
                    <el-col :span="8">
                      <span class="chapterTitleCell">未答</span>
                      <span>第3题</span>
                    </el-col>
                    <el-col :span="8">
                      <span class="chapterTitleCell">未答</span>
                      <span>第4题</span>
                    </el-col>
                  </el-row>
                </el-collapse-item>
                <el-collapse-item name="2">
                  <span class="collapse-title" slot="title">第一章</span>
                  <el-row class="chapterTitle">
                    <el-col :span="8">
                      <span class="chapterTitleCell">未答</span>
                      <span>第1题</span>
                    </el-col>
                    <el-col :span="8">
                      <span class="chapterTitleCell">未答</span>
                      <span>第1题</span>
                    </el-col>
                    <el-col :span="8">
                      <span class="chapterTitleCell">未答</span>
                      <span>第1题</span>
                    </el-col>
                  </el-row>
                </el-collapse-item>
                <el-collapse-item name="3">
                  <span class="collapse-title" slot="title">第一章</span>
                  <el-row class="chapterTitle">
                    <el-col :span="8">
                      <span class="chapterTitleCell">未答</span>
                      <span>第1题</span>
                    </el-col>
                    <el-col :span="8">
                      <span class="chapterTitleCell">未答</span>
                      <span>第1题</span>
                    </el-col>
                    <el-col :span="8">
                      <span class="chapterTitleCell">未答</span>
                      <span>第1题</span>
                    </el-col>
                  </el-row>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
          <div style="clear:both"></div>
        </div>
        <div class="submitBtn">
          <el-button>上一题</el-button>
          <el-button>查看答案</el-button>
          <el-button>下一题</el-button>
        </div>
      </div>
    </div>
    <div class="endBtn">
      <el-button type="primary" @click="dialogVisible = true">结束训练</el-button>
    </div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>您确定要结束训练吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="endTraining()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Navbar from "@/navbar/Navbar";

export default {
  name: "Detail",
  components: {
    Navbar
  },
  data() {
    return {
      radioData: [
        {
          label: "美国",
          demo: "美国"
        },
        {
          label: "中国",
          demo: "中国"
        },
        {
          label: "日本",
          demo: "日本"
        },
        {
          label: "英国",
          demo: "英国"
        }
      ],
      radio: "",
      activeNames: ["1", "2", "3"],
      dialogVisible: false
    };
  },
  methods: {
    goBack() {
      this.$router.push({ path: "/Classify" });
    },
    endTraining() {
      this.dialogVisible = false;
      this.$router.push({ path: "/ShowResult" });
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
</style>
