<template>
  <el-form ref="loginForm" class="login-form" status-icon :rules="loginRules" :model="loginForm" label-width="0">
    <el-form-item prop="username">
      <el-input v-model="loginForm.username" size="small" auto-complete="off" placeholder="请输入用户名" @keyup.enter.native="handleSignIn">
        <i slot="prefix" class="icon-yonghu" />
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input v-model="loginForm.password" size="small" :type="passwordType" auto-complete="off" placeholder="请输入密码" @keyup.enter.native="handleSignIn">
        <i slot="suffix" class="el-icon-view el-input__icon" @click="showPassword" />
        <i slot="prefix" class="icon-mima" />
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="small" class="login-submit" @click.native.prevent="handleSignIn">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'
export default {
  name: 'Userlogin',
  props: [],
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validateCode = (rule, value, callback) => {
      if (this.code.value !== value) {
        this.loginForm.code = ''
        this.refreshCode()
        callback(new Error('请输入正确的验证码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      checked: false,
      code: {
        src: '',
        value: '',
        len: 4,
        type: 'text'
      },
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度最少为6位', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 4, max: 4, message: '验证码长度为4位', trigger: 'blur' },
          { required: true, trigger: 'blur', validator: validateCode }
        ]
      },
      passwordType: 'password'
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {},
  methods: {
    showPassword() {
      this.passwordType === ''
        ? (this.passwordType = 'password')
        : (this.passwordType = '')
    },
    // handleLogin() {
    //   this.$refs.loginForm.validate(valid => {
    //     if (valid) {
    //       this.$store.dispatch('Login', this.loginForm).then(res => {
    //         this.$router.push({ path: '/dashboard/dashboard' })
    //       })
    //     }
    //   })
    // }
    handleSignIn() {
      console.log('===========注册')
    }
  }
}
</script>
<style>
</style>
