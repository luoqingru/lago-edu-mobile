import Vue from 'vue'
import VueRouter from 'vue-router'
import Course from '@/views/course/index'
Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    name: 'course',
    component: Course
  },
  {
    path: '/learn',
    name: 'learn',
    component: () => import('@/views/learn/index'),
    meta: { requiresAuth: true }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user/index'),
    meta: { requiresAuth: true }
  },
  {
    path: '/course-info/:courseId',
    name: 'course-info',
    component: () => import('@/views/course-info/index'),
    props: true
  },
  {
    path: '/lesson-video/:lessonId',
    name: 'lesson-video',
    component: () => import('@/views/course-info/video.vue'),
    props: true
  },
  {
    path: '/pay/:courseId',
    name: 'pay',
    component: () => import('@/views/pay/index.vue'),
    props: true,
    meta: { requiresAuth: true }
  },
  {
    path: '*',
    name: 'error-page',
    component: () => import('@/views/error-page/index')
  }
]

const router = new VueRouter({
  routes
})
// 导航守卫进行登录检测与跳转
router.beforeEach((to, from, next) => {
  // 验证to 路由是否需要身份认证
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 验证是否存储了用户登录信息
    if (!localStorage.getItem('userInfo')) {
      return next({
        name: 'login',
        query: {
          redirect: to.fullPath
        }
      })
    } else { // 已经登录
      next()
    }
  } else {
    next()
  }
})

export default router
