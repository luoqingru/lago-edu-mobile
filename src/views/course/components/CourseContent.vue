<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>
    <img src="@/assets/0713/005HRSKEgy1h9rwlcb058j330i20cx6p.jpg" alt="">
  </van-swipe-item>
  <van-swipe-item>
    <img src="@/assets/0713/005HRSKEgy1h9rwlidw5jj32l01q0npd.jpg" alt="">
  </van-swipe-item>
  <van-swipe-item>
    <img src="@/assets/0713/07130306F0A378AEBA8B2E794370AA5FE189_1677375604426.jpeg" alt="">
  </van-swipe-item>
  <van-swipe-item>
    <img src="@/assets/0713/008jO9C7gy1h994hh8047j31hc0u0aiv.jpg" alt="">
  </van-swipe-item>
</van-swipe>
<!-- 底部课程列表 -->
<CourseContentList></CourseContentList>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant'
// import { getAllAds } from '@/services/course'
import CourseContentList from '@/components/ContentList/CourseContentList.vue'
export default {
  data () {
    return {
      adList: []
    }
  },
  // created () {
  //   this.getAdList()
  // },
  // methods: {
  //   async getAdList () {
  //     const { data } = await getAllAds({ spaceKeys: '999' })
  //     console.log(data)
  //   }
  // },
  components: {
    CourseContentList,
    VanSwipe: Swipe,
    VanSwipeItem: SwipeItem
  }
}
</script>

<style lang="scss" scoped>
.my-swipe{
  width: 100%;
}
.my-swipe .van-swipe-item{
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.my-swipe img{
  height: 170px;
}
.course-content-list{
  top: 220px;
  bottom: 50px;
}
</style>
