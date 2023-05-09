<template>
  <div class="pay">
    <van-cell-group>
  <van-cell class="course-info">
    <img src="@/assets/0713/008wNsO8gy1hb1mppuqpdj31dn0u0q9d.jpg" alt="">
    <div class="price-info">
      <div class="course-name">快乐再出发</div>
      <div class="price">￥713</div>
    </div>
  </van-cell>
  <van-cell class="account-info">
    <div>购买信息</div>
    <div>购买课程后使用此账号登录【拉钩教育】学习课程</div>
    <div class="username">当前账号：{{ phone }}</div>
  </van-cell>
  <van-cell class="pay-channel">
    <div class="title">
      <p>支付方式</p>
      <van-radio-group v-model="radio">
      <van-cell-group>
      <van-cell @click="radio = '1'">
        <template #title>
          <img src="http://www.lgstatic.com/lg-app-fed/pay/images/wechat_b787e2f4.png" alt="">
          <span>微信支付</span>
        </template>
        <template #right-icon>
          <van-radio name="1" />
        </template>
      </van-cell>
      <van-cell title="支付宝" clickable @click="radio = '2'">
        <template #title>
          <img src="http://www.lgstatic.com/lg-app-fed/pay/images/ali_ed78fdae.png" alt="">
          <span>支付宝支付</span>
        </template>
        <template #right-icon>
          <van-radio name="2" />
        </template>
      </van-cell>
      </van-cell-group>
      </van-radio-group>
    </div>
    <van-button @click="handlePay">￥713 立即支付</van-button>
  </van-cell>
</van-cell-group>
  </div>
</template>

<script>
import { Cell, Button, CellGroup, RadioGroup, Radio, Toast } from 'vant'
export default {
  data () {
    return {
      radio: '1'
    }
  },
  computed: {
    phone () {
      const { phone } = JSON.parse(localStorage.getItem('userInfo'))
      const phone1 = phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
      return phone1
    }
  },
  methods: {
    handlePay () {
      Toast.success('成功')
      this.$router.push({
        name: 'learn'
      })
    }
  },
  components: {
    VanButton: Button,
    VanCell: Cell,
    VanCellGroup: CellGroup,
    VanRadio: Radio,
    VanRadioGroup: RadioGroup
  }
}
</script>

<style lang="scss" scoped>
.pay{
  position: absolute;
  width: 100%;
  height: 100%;
}
.van-cell-group{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.course-info{
  height: 170px;
  padding: 40px 20px 0;
  margin-bottom: 10px;
  box-sizing: border-box;
}
.course-info img{
  width: 80px;
  height: 107px;
  border-radius: 5px;
  margin-right: 20px;
}
.course-info .van-cell__value{
  display: flex;

}
.course-info .price-info{
  height: 107px;
  padding: 5px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.price-info .price{
  font-size: 22px;
  font-weight: 700;
  color: #ff7452;
}
.account-info{
  height: 120px;
  margin-bottom: 10px;
}
.account-info div:nth-child(2){
  font-size: 12px;
  color: #999;
}
.account-info .username{
  margin-top: 20px;
  font-size: 16px;
}
.pay-channel{
  flex: 1;
}
.pay-channel .van-cell{
  padding: 20px 10px;
}
.pay-channel .van-cell__value{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.pay-channel .van-cell__title{
  display: flex;
  align-items: center;
}
.pay-channel .van-cell img{
  width: 28px;
  height: 28px;
}
.pay-channel .van-cell span{
  font-size: 16px;
  margin-left: 10px;
}
// 右侧单选框选中的颜色改变
::v-deep .van-radio__icon--checked .van-icon{
  background-color: #fbc546;
  border-color: #fbc546;
}
.pay-channel .van-button{
  background: linear-gradient(270deg,#faa83e,#fbc546);
  border-radius: 20px;
  margin-bottom: 5px;
  font-size: 18px;
}
</style>
