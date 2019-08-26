<template>
  <div>
    <navbar></navbar>
    <div class="videocontent">
      <div class="Video">
        <div>
          <el-page-header @back="goBack" content="详情页面"></el-page-header>
        </div>
        <div style="margin-top:10px;">
          <div class="left">
            <div>
              <p>第 {{ nodeNumber }} 节 {{firstNodeName}}</p>
            </div>
            <div class="video">
              <div class="player">
                <video-player
                  class="video-player vjs-custom-skin"
                  ref="videoPlayer"
                  :playsinline="true"
                  style="object-fit:fill"
                  :options="playerOptions"
                  :x5-video-player-fullscreen="true"
                  @pause="onPlayerPause($event)"
                  @play="onPlayerPlay($event)"
                  @fullscreenchange="onFullscreenChange($event)"
                  @click="fullScreen"
                ></video-player>
              </div>
            </div>
            <div class="detials">
              <img :src="firstNodeDetailImg" alt="第一节详情图片" />
            </div>
          </div>
          <div class="right">
            <div style="margin-bottom:20px">选择课程</div>
            <el-tree
              :data="chapterData"
              :load="loadNode"
              lazy
              :props="defaultProps"
              @node-click="handleNodeClick"
            ></el-tree>
          </div>
          <div style="clear:both"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/navbar/Navbar";
import { videoPlayer } from "vue-video-player";
import {
  getChapterList,
  getNodeList,
  getNodeDetailList
} from "@/api/learn/index.js";
export default {
  name: "Video",
  components: {
    videoPlayer,
    Navbar
  },
  data() {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: "auto",
        language: "zh-CN",
        aspectRatio: "16:9",
        fluid: true,
        sources: [
          {
            type: "video/mp4",
            src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
          }
        ],
        poster:
          "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        controlBar: {
          fullscreenToggle: true //全屏按钮
        }
      },
      chapterData: [],
      dataList: {},
      firstNodeName: "",
      firstNodeDetailImg: "",
      defaultProps: {
        children: "children",
        label: "label",
        isLeaf: "leaf"
      },
      appId: "",
      uId: "",
      gId: "",
      nodeNumber:1
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  created() {
    this.geturl();
  },
  methods: {
    fullScreen(){
    },
    goBack() {
      this.$router.push({ path: "/List" });
    },
    handleNodeClick(data) {
      let that = this;
      var params = {
        appId: this.appId,
        gId: this.gId,
        uId: this.uId,
        subId: data.nodeId
      };
      getNodeDetailList(params).then(response => {
        let data = response.data.data;
        that.processData(data);
      });
    },
    loadNode(node, resolve) {
      if (node.level == 1) {
        var params = {
          appId: this.appId,
          chapterId: node.data.chapterId
        };
        getNodeList(params).then(response => {
          let data = response.data.data;
          let newData = [];
          data.forEach(item => {
            newData.push({
              label: item.subsectionName,
              nodeId: item.autoId,
              leaf: true
            });
          });
          resolve(newData);
        });
      }
    },
    onPlayerPlay(player) {
     
    },
    processData(data) {
      this.firstNodeName = data.firstSubsection
        ? data.firstSubsection.subsectionName
        : data.subsection.subsectionName;
      this.nodeNumber = data.firstSubsection
        ? data.firstSubsection.subsectionOrder
        : data.subsection.subsectionOrder;
      data.subsectionQiniuInfo.forEach(item => {
        if (item.imgType == 3) {
          this.playerOptions.poster = item.imgUrl;
        } else if (item.imgType == 1) {
          this.firstNodeDetailImg = item.imgUrl;
        } else if (item.imgType == 2) {
          this.playerOptions.sources[0].src = item.imgUrl;
        }
      });
    },
    geturl() {
      this.appId = this.$route.query.appId;
      this.uId = this.$route.query.uId;
      this.gId = this.$route.query.gId;
      let that = this;
      var params = {
        appId: that.appId,
        uId: that.uId,
        gId: that.gId
      };
      getChapterList(params).then(response => {
        let data = response.data.data;
        data.goodsChapterList.forEach(item => {
          that.chapterData.push({
            label: item.chapterName,
            chapterId: item.autoId
          });
        });
        that.processData(data);
      });
    }
  }
};
</script>

<style scoped>
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
</style>