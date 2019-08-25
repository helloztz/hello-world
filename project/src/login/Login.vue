<template>
    <div class="login">
        <div class="box">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>手机登陆</span>
            </div>
            <el-form :model="ruleForm" label-width="10" class="RegisterForm" :rules="rules" ref="ruleForm">
                <el-form-item prop="phone"  label=" ">
                    <el-input v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item prop="code" class="code"  label=" ">
                    <el-input v-model="ruleForm.code" placeholder="请输入验证码" style="width:55%;display:flex"></el-input>
                    <el-button type="button" @click="sendCode" :disabled="disabled">{{btntxt}}
                    </el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" class="btn">登录</el-button>
                </el-form-item>
            </el-form>
          </el-card>
        </div>
      </div>
</template>
<script>
import {login, getVerificationCode} from '@/api/login/index.js'
import {countdown, setUserInfor, getUserInfor} from '@/utils/index.js'
let startMinuts = countdown()
export default {
  name:'Login',
  data () {
    let validatePhone = (rule, value ,callback) => {
      let reg = /^1[3456789]\d{9}$/
      if (value === '') {
        return callback(new Error('手机号码不能为空'));
      } else if (!reg.test(value)) {
        return callback(new Error('手机号码有误'));
      } else {
        callback()
      }
    }
    let validateCode = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('手机验证码不能为空'));
      } else if (value.length !== 5) {
        return callback(new Error('手机验证码必须为六位'));
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        phone: '',
        code: '',
      },

      disabled: false,
      time: 0,
      btntxt: "发送验证码",
      rules: {
        phone: [{ validator: validatePhone, trigger: 'blur' }],
        code: [{validator: validateCode, trigger: 'blur'}]
      }
    }
  },
  methods: {
    //手机验证发送验证码
    sendCode () {
      let data = {
        appId: 'wx129eaf6876332fba',
        phone: this.ruleForm.phone
      }
      let params = data
      getVerificationCode(params)
        .then(res => {
          if (res.data.code === 1) {
            startMinuts((val) => {
              this.btntxt = val
              this.disabled = true
              this.ruleForm.code = '88888'
              if (val === 1) {
                this.btntxt = '发送验证码'
                this.disabled = false
              }
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = this.initParams()
          login(params)
            .then(res => {
              if (res.data.code === 1) {
                let userInfor = res.data.data
                this.$router.push({
                  path: '/'
                })
                setUserInfor(JSON.stringify(userInfor))
              }
            })
            .catch(err => {
              console.log(err)
            })
        } else {
          return false;
        }
      });
    },
    initParams () {
      let data = {
        appId: 'wx129eaf6876332fba',
        phone: this.ruleForm.phone,
        vCode: this.ruleForm.code
      }
      return data
    }
  },
  mounted () {

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
