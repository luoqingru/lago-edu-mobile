<template>
  <div class="course-content-list">
    <van-pull-refresh v-model="isRefreshing" @refresh="onRefresh">
       <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="(item,index) in list" :key="item" @click="$router.push({name:'course-info',params:{courseId:index}})">
    <div>
      <img src="@/assets/0713/0713F5EEC58C73298698C615EC60A6A2D2EC_1677375626218.jpeg" alt="">
    </div>
    <div class="course-info">
      <h3>{{ item }}</h3>
      <p class="course-preview">333</p>
      <p class="price-container">
        <span class="course-discounts">￥222</span>
        <s class="course-price">￥16</s>
      </p>
    </div>
  </van-cell>
</van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { PullRefresh, Cell, List } from 'vant'
export default {
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      currentPage: 1,
      pageSize: 10,
      isRefreshing: false
    }
  },
  methods: {
    async onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // const { data } = await getQueryCourse({ currentPage: this.currentPage, pageSize: 10, states: 1 })
      // this.currentPage++
      // console.log(data)
      setTimeout(() => {
        if (this.isRefreshing) {
          this.list = []
          this.isRefreshing = false
        }
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    },
    onRefresh () {
      // 清空列表数据
      this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    }

  },
  components: {
    VanPullRefresh: PullRefresh,
    VanCell: Cell,
    VanList: List
  }
}
</script>

<style lang="scss" scoped>
.course-content-list{
  position: fixed;
  top: 0px;
  bottom: 0px;
  // 左右贴边
  left: 0;
  right: 0;
  overflow-y:auto;
}
.van-cell__value{
  height: 100px;
  display: flex;
  padding: 10px 0;
}
.van-cell img{
  width: 75px;
  height: 100%;
  border-radius: 5px;
  margin-right: 10px;
}
.course-info{
  display: flex;
  flex-direction: column;
  flex: 1;
}
.course-info .course-preview{
  flex-grow: 1;
}
.course-info .course-discounts{
  color: #ff7452;
  margin-right: 10px;
}
p,h3{
  margin: 0;
}
</style>
