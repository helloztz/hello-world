<template>
  <div>
    <navbar></navbar>
    <div class="listcont">
        <div class='listWarp'> 
        <div style=" borderBottom: 1px solid #CCC;" >
          <h4 style="padding-left:4%">课程列表</h4>
        </div>
        <div style="padding: 1rem;background-color:#EEE" >
          <div class='list' v-for="item in list" :key=item.id>
            <div class="list-img">
                <img :src=item.courseImgs alt="">
            </div>
            <div class='content'>
              <h2>健康管理课堂</h2>
              <p>共{{item.subsectionCount}}小节|{{item.studyCount}}人已学</p>
              <p>目前已完成12个小结，加油!</p>
              <div style="width:400px"><el-progress :percentage=item.progress></el-progress></div>
              <el-button type="primary" @click="student()">开始学习</el-button>
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/navbar/Navbar'
export default {
    name:'List',
    components:{
        Navbar
    },
    data(){
      return{
            list:[]
      }
    },
    created(){
      this.geturl();
    },
    methods:{
      student(){
        this.$router.push({path:'/Video'})
      },
      geturl(){
        let api = this.HOST + '/myCourses?appId=wx129eaf6876332fba&uId=649'
        this.$axios.post(api).then((response) => {
            this.list = response.data.data
            console.log(this.list)
        })
      }
    }
}
</script>

<style scoped>
.listcont{
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
    margin:0 5rem;
    background-color: #fff;
    background-position: left top;
    background-size: 320px 160px;
    background-repeat: no-repeat;
    margin-bottom: 1.5rem;
    
  }
  .list{
      display: flex;
  }
    .list .list-img{
      width: 40%;
    }
    .list .list-img img{
        width: 100%;
        height: 100%;
    }
  .list .content {
    width: 60%;
    padding: 1rem 0 0 2rem;
  }
  .el-progress-bar{
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
    margin-bottom:2rem;
  }
  .Video .left .detials {
    padding: 0 3rem;
  }
  
  .Video .right {
    background: #fff;
    float: left;
    width:calc(30% - 2rem);
    padding: 1rem 1rem 3.6rem;
    margin: 1rem;
    box-sizing: border-box;
  }
  
  .Video .right button{
    width: 100%;
    text-align: left;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
  }
  .el-button--primary{
      position: absolute;
      bottom: 20px;
      right: 30px;
  }
  
  
</style>