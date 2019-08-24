<template>
<div>
  <navbar></navbar>
  <div class="videocontent">
    <div class="Video">
      <div style="borderBottom: 1px solid #EEE">
        <el-page-header @back="goBack" content="详情页面"></el-page-header>
      </div>
      <div style="">
        <div class="left">
          <div class="video">
              <div class="player">
                  <video-player class="video-player vjs-custom-skin"
                      ref="videoPlayer"
                      :playsinline="true"
                      style="object-fit:fill"
                      :options="playerOptions"
                      :x5-video-player-fullscreen="true"
                      @pause="onPlayerPause($event)"
                      @play="onPlayerPlay($event)"
                      @fullscreenchange="onFullscreenChange($event)"
                      @click="fullScreen"
                  >
                  </video-player>

              </div>
          </div>
          <div class="detials">
            <h3 style="textAlign: center">第一章 内容要点</h3>
            <p>一.健康管理定义</p>
          </div>
        </div>
        <div class="right">
          <div style="margin-bottom:20px">选择课程</div>
          <el-tree :props="defaultProps" @node-click="handleNodeClick" highlight-current = "true" v-for='item in dataList' :key='item.id'></el-tree>
        </div>
        <div style="clear:both"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from '@/navbar/Navbar'
import {videoPlayer} from 'vue-video-player';
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
            preload: 'auto', 
            language: 'zh-CN',
            aspectRatio: '16:9', 
            fluid: true, 
            sources: [{
                type: "video/mp4",
                src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" 
            }],
            poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
            width: document.documentElement.clientWidth,
            notSupportedMessage: '此视频暂无法播放，请稍后再试', 
            controlBar: {
                fullscreenToggle: true  //全屏按钮
            }
        },
      dataList:{

      },
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  computed:{
      player(){
          return this.$refs.videoPlayer.player
      },
  },
  created(){
    this.geturl();
  },
  methods: {
    goBack() {
      this.$router.push({path:'/List'})
    },
    handleNodeClick(data) {
      console.log(data);
    },
    onPlayerPlay (player) {
      // console.log('player play!', player)
    },
    geturl(){
      // let appid =this.$store.getters.user_name
      // console.log(appid);
      let api = this.HOST + '/courseDetail?appId=wx129eaf6876332fba&uId=649&gId=14'
      this.$axios.post(api).then((response) => {
          let list = response.data.data.goodsChapterList
          // console.log(list)
          for (let i = 0; i < list.length; i++) {
              // let obj = {
              //     label: list[i].chapterName,
              //     id: data[j][id],
              //     children: []
              // };
                this.dataList=list[i].chapterName
                return this.dataList
            }
      })
    },
    
  }
};
</script>

<style scoped>
.Video{
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
</style>