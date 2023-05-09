<template>
  <div>
    <CourseHeader></CourseHeader>
    <CourseContent></CourseContent>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar/index.vue'
import CourseHeader from '@/views/course/components/CourseHeader'
import CourseContent from '@/views/course/components/CourseContent'
export default {
  components: {
    TabBar,
    CourseHeader,
    CourseContent
  }
}
</script>

<style>

</style>
