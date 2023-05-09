<template>
  <div class="user">
    <van-cell-group>
      <!-- 用户信息区域 -->
  <van-cell class="userinfo" :border="false">
    <!-- 左侧头像 -->
    <van-image src="https://img01.yzcdn.cn/vant/cat.jpeg" width="50" height="50" round></van-image>
    <!-- 右侧用户信息内容 -->
    <div class="user-info-content">
      <h3>昵称</h3>
      <span>
        <van-icon name="edit"></van-icon>
        编辑个人资料
      </span>
    </div>
  </van-cell>
  <!-- 账户信息 -->
  <van-cell class="account-info">
     <van-grid :border="false">
  <van-grid-item>
    <span class="grid-item-value">
      14.05
    </span>
    <span>学习时长</span>
  </van-grid-item>
  <van-grid-item>
    <span class="grid-item-value">
      213
    </span>
    <span>学分</span>
  </van-grid-item>
  <van-grid-item>
    <span class="grid-item-value">
      200
    </span>
    <span>钱包/勾豆</span>
  </van-grid-item>
  <van-grid-item>
    <span class="grid-item-value">
      1
    </span>
    <span>优惠券</span>
  </van-grid-item>
</van-grid>
  </van-cell>
  <van-cell icon="user-o" value="收益200元" is-link title="分销中心"></van-cell>
  <van-cell icon="setting-o" is-link title="个性化设置"></van-cell>
  <van-cell icon="down" is-link title="我的下载"></van-cell>
  <van-cell icon="question-o" is-link title="帮助与反馈"></van-cell>
  <van-cell icon="info-o" value="v2.0.0" is-link title="关于拉钩教育"></van-cell>
    </van-cell-group>

    <TabBar></TabBar>
  </div>
</template>

<script>
import { Cell, CellGroup, Icon, Image, Grid, GridItem } from 'vant'
import TabBar from '@/components/TabBar/index.vue'
export default {
  components: {
    TabBar,
    VanCell: Cell,
    VanCellGroup: CellGroup,
    VanGrid: Grid,
    VanGridItem: GridItem,
    VanIcon: Icon,
    VanImage: Image
  }
}
</script>

<style lang="scss" scoped>
.userinfo{
  padding: 30px 20px 0;
  background-color: rgb(248,150,3);
}
.userinfo .van-cell__value{
  display: flex;
  // justify-content: space-between;
}
.user-info-content{
  margin-left: 15px;
}
.user-info-content h3{
  margin: 5px;
  font-size: 18px;
}
.account-info{
  background-color: rgb(248,150,3);
  margin-top: -1px;
}
.account-info .van-cell__value{
  border-radius: 10px;
}
</style>
