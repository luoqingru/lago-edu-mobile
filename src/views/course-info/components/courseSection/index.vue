<template>
  <div class="course-section">
    <!-- <img src="@/assets/0713/7AEA1956859DD0055C3D7767DFCAB405_1677339612527.jpeg" alt=""> -->
    <h2 class="section">{{name}}</h2>
    <p class="lesson" v-for="(item,index) in song" :key="item" @click="handleClick(item,index)">
      <span>{{item}}</span>
      <van-icon name="play-circle" size="20"></van-icon>
    </p>
  </div>
</template>

<script>
import { Icon } from 'vant'
export default {
  props: {
    name: {
      required: true,
      type: String
    },
    song: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleClick (item, index) {
      this.$router.push({
        name: 'lesson-video',
        params: { lessonId: index }
      })
    }
  },
  components: {
    VanIcon: Icon
  }
}
</script>

<style lang="scss" scoped>
.course-section{
  padding: 0 20px;
}
.lesson{
  display: flex;
  line-height: 20px;
  justify-content: space-between;

}
</style>
