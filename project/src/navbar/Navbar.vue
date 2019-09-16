<template>
    <div class="nav" :class="{isFixed: navFixed}">
      <div class="content">
        <el-row>
          <el-col :span="5">
            <div class="logo">
              <img :src="Logoimgurl" :alt="LogoimgAlt" />
              <span style="font-size:15px">{{LogoimgAlt}}</span>
            </div>
          </el-col>
          <el-col :span="14">
            <el-menu
              router
              :default-active="$route.path"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              text-color="black"
              active-text-color="#409eff"
            >
              <el-menu-item index="/">首页</el-menu-item>
              <el-menu-item index="/List">学习</el-menu-item>
              <el-menu-item index="/Classify">练习</el-menu-item>
              <el-menu-item index="/examine">考试</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="5">
            <div class="message" v-if="flag">
              <el-button type="success" @click="submitForm">登录</el-button>
            </div>
            <div class="message" v-else>
              <img :src="userSrc" />
              <span style="font-size:15px;margin-left:5px;">{{userName}}</span>
              <el-button type="success" @click="exitHandle">退出</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>
<script>
import { getUserInfor, throttle, removeUserInfor } from "@/utils/index.js";
import settings from '@/settings.js'
import { initInfo } from "@/api/navbar/index.js";

export default {
  name: "Navbar",
  data() {
    return {
      Logoimgurl: "",
      LogoimgAlt: "",
      flag: false,
      userSrc: "",
      userName: "",
      navFixed: false
    };
  },
  created() {
    this.geturl();
  },
  methods: {
    handleSelect(){},
    geturl() {
      let params={
        appId:settings.global.appId
      }
      initInfo(params).then(response => {
        this.Logoimgurl = response.data.data.companyInfo.companyLogo;
        this.LogoimgAlt = response.data.data.companyInfo.companyName;
      });
    },
    submitForm() {
      this.$router.push({ path: "/Login" });
    },
    exitHandle () {
      removeUserInfor()
      this.$router.push({
        path: '/'
      })
    },
    setLoginStatus() {
      let status = getUserInfor();
      if (status) {
        this.flag = false;
        this.userSrc = status.headImgUrl;
        this.userName = status.realName;
      } else {
        this.flag = true;
      }
    },
    keydownHandle (ev) {
      if (ev.keyCode === 123) {
        return false
      }
    },
    scrollHandle () {
      let scrollTop = document.documentElement.scrollTop
      if (scrollTop >= 80) {
        this.navFixed = true
      } else {
        this.navFixed = false
      }
    }
  },
  mounted () {
    this.setLoginStatus();
    let throttleScro = throttle(this.scrollHandle)
    window.addEventListener('keydown', this.keydownHandle)
    window.addEventListener('scroll', throttleScro)
  },
  beforeDestroy () {
    window.removeEventListener('keydown', this.keydownHandle)
  }
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 80px;
  background: #fff;
  transition: all 0.5s;
}
.isFixed {
  position: fixed;
  top: 0px;
  left: 0px;
  box-shadow: 0px 1px 5px #cccccc;
  z-index: 100
}
.content {
  /* width: 1100px; */
  margin: 0 auto;
}
.logo {
  height: 80px;
  text-align: center;
}
.logo img {
  margin: 15px 15px;
  vertical-align: center;
  height: 50px;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-button--success {
  background-color: #409eff;
  border-color: #409eff;
}
.el-menu.el-menu--horizontal {
  border: 0;
}
.el-menu--horizontal > .el-menu-item {
  height: 80px;
  line-height: 80px;
}
.el-menu--horizontal > .el-menu-item:hover {
  border-bottom: 1px solid #1890ff;
}
.el-menu--horizontal > .el-menu-item a {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
  font-weight: bold;
  text-decoration: none;
}
.el-menu--horizontal > .el-menu-item a:hover {
  color: #1890ff;
}
.message {
  height: 80px;
  line-height: 80px;
}
.message img {
  vertical-align: middle;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.activeClass{
    color:#1890ff !important;
}
</style>
