<template>
    <div class="login">
        <div class="box">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>手机登陆</span>
            </div>
            <el-form :model="Register" ref="RegisterForm" label-width="0" class="RegisterForm">
                <el-form-item prop="phone">
                    <el-input v-model="Register.phone" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item prop="验证码" class="code">
                    <el-input v-model="Register.sendcode" placeholder="请输入验证码" style="width:55%;display:flex"></el-input>
                    <el-button type="button" @click="sendcode" :disabled="disabled" v-if="disabled==false">发送验证码
                    </el-button>
                    <el-button type="button" @click="sendcode" :disabled="disabled" v-if="disabled==true">{{btntxt}}
                    </el-button>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="submitForm" class="btn">登录</el-button>
                </el-form-item>
            </el-form>
          </el-card>
        </div>
      </div>
</template>
<script>
// import store from "../store";
export default {
    name:'Login', 
    data() {
            return {
                Register: {
                    phone: '',
                    sendcode: '',
                },

                disabled: false,
                time: 0,
                btntxt: "重新发送",
            }
        },
        methods: {
            //手机验证发送验证码
            sendcode() {
                const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
                if (this.Register.phone == '') {
                    this.$message({
                        message:'手机号不能为空',
                        center: true
                    })
                    return
                }
                if (!reg.test(this.Register.phone)) {
                    this.$message({
                        message:'请输入正确的手机号',
                        center:true
                    })
                    return
                } else {
                    let api = this.HOST + '/getVerificationCode?phone='+this.Register.phone+'&appId=wx129eaf6876332fba'
                    this.$axios.post(api).then((response) => {
                      // console.log(response)
                      if(response.data.code == "1"){
                        this.$message({
                          message: '发送成功',
                          type: 'success',
                          center:true
                        });
                        this.time = 60;
                        this.disabled = true;
                        this.timer();
                      }else{
                        this.$message({
                          message: '发送失败',
                          center:true
                        });
                      }
                    })
                    
                }
            },
            //60S倒计时
            timer() {
                if (this.time > 0) {
                    this.time--;
                    this.btntxt = this.time + "s后重新获取";
                    setTimeout(this.timer, 1000);
                } else {
                    this.time = 0;
                    this.btntxt = "获取验证码";
                    this.disabled = false;
                }
            },
            submitForm(){
              const reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
              if (!reg.test(this.Register.phone)) {
                    this.$message({
                        message:'请输入正确的手机号',
                        center:true
                    })
                    return
                } else {
                  let api = this.HOST + '/phoneLogin?phone='+this.Register.phone+'&vCode='+this.Register.sendcode+'&appId=wx129eaf6876332fba'
                  this.$axios.post(api).then(function(response) {
                    if(response.data.code == "1"){
                      // this.$router.go(-1)
                      let _this = this;
                        setTimeout(function(){
                             _this.$router.push({path:'/'});
                        },500)
                        sessionStorage.setItem('token',response.data.data);
                        this.$store.commit("handleUserName",{
                          user_name:response.data.data.wechatName,
                          user_logo:response.data.data.headImgUrl,
                          auto_id:response.data.data.headImgUrl,
                          app_id:response.data.data.appId,
                        });
                      }else if(response.data.code == "0"){
                          this.$message({
                          message: '验证不正确！',
                            center:true
                          });
                      }
                    }.bind(this)).catch(function(err){})
              }
            }
        }
}
</script>
<style>
  .login{
    position: fixed;
    left:0;
    top:0;
    right:0;
    bottom: 0;
    overflow: hidden;
    background-color:#444;
  }
  .box{
    width: 500px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  
  .el-input--small .el-input__inner{
    height: 40px;
    line-height: 40px;
  }
  .el-form-item--small .el-form-item__content, .el-form-item--small .el-form-item__label{
    line-height: 40px;
  }
  .el-button--button,.el-button--small.is-round{
    margin-left: 5%;
    width: 40%;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
  }
  .btn{
    width: 100%;
    margin-left: 0;
  }
  .el-form-item__content{
    display: flex;
  }
  
</style>