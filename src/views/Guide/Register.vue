<template>
  <div class="root">
    <div style="font-size: 1.8em;margin-left: 5%;font-weight: bold">智慧书房</div>
    <div style="margin-left:5%;color: red;">{{ tip }}</div>
    <input type="text" v-model="username" placeholder="请输入用户名">
    <input type="password" v-model="password" placeholder="请输入密码">
    <input type="password" v-model="p2" placeholder="请确认密码">
    <div class="btn" @click="submit">注册</div>
    <div class="register" @click="$router.replace('/login')">已有账号，立即登录</div>
  </div>
</template>

<script>
import request from "../../../request";

export default {
  name: "Register",
  props: {},
  data() {
    return {
      username: '',
      password: '',
      p2: '',
      tip: ''
    }
  },
  methods: {
    submit() {
      if (this.password !== this.p2) {
        this.tip = '两次密码输入不一致'
        return;
      }
      if (this.password === '' || this.username === '' || this.p2 === '') {
        this.tip = '请输入完整信息'
        return
      }
      request.post('/public/register',
          {
            username: this.username,
            password: this.password
          }).then(res => {
        if (res.code === 200) {
          this.tip = '注册成功'
        } else {
          this.tip = '用户名已存在'
        }
      })
    }
  },
  created() {

  }
}
</script>

<style scoped>
.root {
  padding-top: 30vh;
  display: flex;
  flex-direction: column;
}

.root > * {
  margin-bottom: 1.3em;
}

.register {
  text-align: center;
}
input{
  border: none;
  margin-left: 5%;
  width: 90%;
  box-sizing: border-box;
  line-height: 44px;
  height: 44px;
  border-radius: 50px;
  background: #dce6e8;
  padding: 0 1em;
}

</style>
