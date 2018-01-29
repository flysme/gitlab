<template>
  <div class="hello">
    <Headers></Headers>
    <transition :name="transitionName">
        <router-view class="child-view" style="width:350px;height:350px;background:red;"></router-view>
    </transition>
       <router-view class="child-views" name="register" style="width:50%;height:350px;background:pink;"></router-view> 
   <tabbar :message='my' ref="profile"></tabbar>
  </div>
</template>

<script>
  import Headers from '@/components/common/header.vue'
  import tabbar from '@/components/common/tabbar.vue'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        transitionName:'slide-left',
        my:'我的'
      }
    },
    components:{
      tabbar,
      Headers
    },
    beforeRouteUpdate (to, from, next) {
        // 如果isBack为true时，证明是用户点击了回退，执行slide-right动画
         let isBack = this.$router.isBack;
         console.log(isBack,'isBack');
         if (isBack) {
            this.transitionName = 'slide-right'
         } else {
            this.transitionName = 'slide-left'
         }
         // 做完回退动画后，要设置成前进动画，否则下次打开页面动画将还是回退
         this.$router.isBack = false
           next()
      },
      mounted(){
          console.log(this.$refs.profile)
      }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only
<style lang="scss" scoped>
       $primary-color: red;
      .btn {
        color: $primary-color; 
        font-size:20px; 
        /*//编译后就成了 color:#333;类似于js的变量！*/
      }
      .child-view {
          position: fixed;
          width:100%;
          overflow:auto; 
          transition: all .8s cubic-bezier(.55,0,.1,1);
        }
      .slide-left-enter, .slide-right-leave-active {
        opacity: 0;
        -webkit-transform: translate(50px, 0);
        transform: translate(50px, 0);
      }
      .slide-left-leave-active, .slide-right-enter {
        opacity: 0;
        -webkit-transform: translate(-50px, 0);
        transform: translate(-50px, 0);
      }
</style>
