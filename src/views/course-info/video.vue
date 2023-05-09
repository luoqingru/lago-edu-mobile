<template>
  <div>
    <van-nav-bar
    title="视频"
    left-text="返回"
    left-arrow
    @click-left="$router.back()"></van-nav-bar>
    <div class="video-content">
       <video id="example_video_1" class="video-js vjs-default-skin vjs-big-play-centered" controls preload="none" width="600" height="400" >
    <source src="@/assets/video/贝加尔湖畔.mp4" type="video/mp4">
  </video>
    </div>

  </div>
</template>

<script>
import { NavBar } from 'vant'
export default {
  props: {
    lessonId: {
      type: [String, Number],
      reuqired: true
    }
  },
  components: {
    VanNavBar: NavBar
  }
}
</script>

<style>
 .video-content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
</style>
