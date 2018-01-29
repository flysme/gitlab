import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/page/HelloWorld'
// import first from '@/page/firstpage/first'
import second from '@/page/secondpage/second'
import third from '@/page/thirdpage/third'
import fourth from '@/page/fourthpage/fourth'
import login from '@/page/login/index'
import register from '@/page/login/register'
import buy from '@/page/otherpage/detail'

Vue.use(Router)


// 增强原方法，好处是旧的业务模块不需要任何变动
Router.prototype.go = function () {
  this.isBack = true
  window.history.go(-1)
}
// 或者你可以新建一个方法
Router.prototype.goBack = function () {
  this.isBack = true
  this.go(-1)
}



const router = new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'Hello',
       // 默认为第二个子路由
      component:HelloWorld,
      children:[
          { path: '/page/first', component:resolve => require(['@/page/firstpage/first'], resolve)},
          { path: '/page/second', component: second},
          { path: '/page/third', component: third},
          { path: '/page/detail/buy/', component: buy},
          { path: '/page/fourth', components:{
              default:login,
              register:resolve => require(['@/page/login/register'],resolve),
            }
          },
      ]
    },
    {
      path:'/register',
      name: 'register',
      component:resolve => require(['@/page/login/register'],resolve),
      meta:{nologin:false}
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to.matched.some,'to.matched')
  console.log(to.matched.some(record => record.meta.nologin),'xxxx');
  // next({ path: '/register' });
    next();
//   if(to.matched.some(record => record.meta.nologin)) {
// console.log(to.matched.some(record => record.meta.nologin));
//     // 这个路由需要auth,检验是否登录了.
// next()
//     // let isLogin = auth.checkAuth();
//     console.log('need login', isLogin);
//     if(!isLogin){

//         // 没有登录,重定向到登录页面    

//       console.error('Place login!')
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     }else{
//       next()
//     }
//   }else{
//     next()
//   }
})

// router.beforeEach((to, from, next) => {
//   // console.log(to,from,next);
//   console.log(to.matched.some(record => !record.meta.nologin));
// })

export default  router;
