<template>
  <div class="learn">
    <van-nav-bar title="已购课程"></van-nav-bar>
    <course-content-list></course-content-list>
    <TabBar></TabBar>
  </div>
</template>

<script>
import { NavBar } from 'vant'
import TabBar from '@/components/TabBar/index.vue'
import CourseContentList from '@/components/ContentList/CourseContentList.vue'
export default {
  components: {
    TabBar,
    CourseContentList,
    VanNavBar: NavBar
  }
}
</script>

<style lang="scss" scoped>
.course-content-list{
  top: 50px;
  bottom: 50px;
}
</style>
