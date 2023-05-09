<template>
  <div class="course-info">
    <van-cell-group>
      <van-cell class="course-img">
        <img src="@/assets/0713/008wNsO8gy1hb1mppuqpdj31dn0u0q9d.jpg" alt="" />
      </van-cell>
      <van-cell class="course-description">
        <h2>快乐再就业</h2>
        <p>快乐再出发</p>
        <div class="course-sale-info">
          <p class="course-price">
            <span class="discounts">￥{{ price }}</span>
            <span>￥{{ prevprice }}</span>
          </p>
          <span class="tag">10w+已购</span>
          <span class="tag">每天更新</span>
        </div>
      </van-cell>
      <van-cell class="course-detail">
        <van-tabs sticky swipeable>
          <van-tab title="详情">
            <div>
              <img
                src="@/assets/0713/008jO9C7gy1h994hh8047j31hc0u0aiv.jpg"
                alt=""
              />
              <img
                src="@/assets/0713/005HRSKEgy1h9rwlidw5jj32l01q0npd.jpg"
                alt=""
              />
              <img
                src="@/assets/0713/007YXlwKgy1h9qhykapsdj30n00e4af3.jpg"
                alt=""
              />
              <img
                src="@/assets/0713/7AEA1956859DD0055C3D7767DFCAB405_1677339612527.jpeg"
                alt=""
              />
              <img
                src="@/assets/0713/008wNsO8gy1hb1mppuqpdj31dn0u0q9d.jpg"
                alt=""
              />
            </div>
          </van-tab>
          <van-tab title="内容">
            <CourseSection
              name="王糊糊"
              :song="['贝加尔湖畔', '就好', '一个人']"
            ></CourseSection>
            <CourseSection
              name="张真诚"
              :song="['有生之年', '嘉宾', '落魄']"
            ></CourseSection>
            <CourseSection
              name="陆一桶"
              :song="['拉过勾的', '表白白', '像你这样的朋友', '别丢了你的勇敢']"
            ></CourseSection>
          </van-tab>
        </van-tabs>
      </van-cell>
    </van-cell-group>
    <!-- 底部支付功能 -->
    <van-tabbar>
      <div class="left">
        <span>快乐秒杀</span>
        <span class="discounts">￥{{ price }}</span>
        <span>￥{{ prevprice }}</span>
      </div>
      <van-button type="primary" @click="handlePay">立即购买</van-button>
    </van-tabbar>
  </div>
</template>

<script>
import { Cell, Tabbar, Tab, Button, CellGroup, Tabs } from 'vant'
import CourseSection from './components/courseSection/index.vue'
export default {
  name: 'CourseInfo',
  props: {
    courseId: {
      required: true,
      type: [String, Number]
    }
  },
  data () {
    return {
      price: 713,
      prevprice: 9999
    }
  },
  components: {
    CourseSection,
    VanButton: Button,
    VanCell: Cell,
    VanCellGroup: CellGroup,
    VanTab: Tab,
    VanTabbar: Tabbar,
    VanTabs: Tabs
  },
  methods: {
    handlePay () {
      if (localStorage.getItem('userInfo')) {
        this.$router.push({
          name: 'pay',
          params: {
            courseId: this.courseId
          }
        })
      } else {
        this.$router.push({
          name: 'login',
          query: {
            redirect: this.$route.fullPath
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.course-img {
  padding: 0;
  height: 280px;
  width: 100%;
}
.course-description {
  padding: 10px 20px;
  height: 150px;
}
.course-sale-info {
  display: flex;
}
.course-sale-info .course-price {
  flex: 1;
  margin: 0;
}
.discounts {
  color: #ff7452;
  font-size: 24px;
  font-weight: 700;
}
.course-sale-info .tag {
  background-color: #f8f9fa;
  font-size: 12px;
  font-weight: 700;
  color: #666;
  margin-left: 10px;
  padding: 5px;
  line-height: 15px;
  border-radius: 5px;
}
.course-detail img {
  height: 280px;
}
.van-cell-group {
  width: 100%;
  position: fixed;
  top: 0;
  bottom: 50px;
  overflow-y: auto;
}
.van-tabbar {
  line-height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.van-tabbar .left {
  font-size: 12px;
  // margin-right: 20px;
}
.van-button {
  width: 50%;
  height: 80%;
}
</style>
