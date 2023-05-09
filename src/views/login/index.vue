<template>
  <div>
    <van-nav-bar
  title="登录"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
<van-form @submit="onSubmit">
  <van-field
    v-model="form.phone"
    name="phone"
    label="手机号"
    placeholder="请输入手机号"
    :rules="[{ required: true, message: '请填写手机号' },{validator:phoneCheck,message:'格式有误，请重新输入'}]"
  />
  <van-field
    v-model="form.password"
    type="password"
    name="密码"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' },{validator:pwdCheck,message:'格式有误，请重新输入'}]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit" :loading="isLoading">登录</van-button>
  </div>
</van-form>
  </div>
</template>

<script>
// import { login } from '@/services/user'
import { NavBar, Form, Field, Button, Toast } from 'vant'
export default {
  data () {
    return {
      form: {
        phone: '',
        password: ''
      },
      isLoading: false
    }
  },
  components: {
    VanNavBar: NavBar,
    VanForm: Form,
    VanButton: Button,
    VanField: Field
  },
  methods: {
    onClickLeft () {
      // this.$Toast('返回');
      this.$router.back()
    },
    phoneCheck (val) {
      return /^1\d{10}$/.test(val)
    },
    pwdCheck (val) {
      return /^[a-zA-Z0-9]{6,12}$/.test(val)
    },
    async onSubmit () {
      this.isLoading = true
      Toast.success('登录成功')
      // const { data } = await login(this.form)
      // console.log(data)
      // if (data.state === 1) {
      //   this.$toast.success('登录成功')
      // } else {
      //   this.$toast.fail('登录失败')
      // }
      localStorage.setItem('userInfo', JSON.stringify(this.form))
      // 跳转
      this.$router.push(this.$route.query.redirect || '/')
      this.isLoading = false
    }
  }
}
</script>

<style>

</style>
