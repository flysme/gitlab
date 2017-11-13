<template>
      <div class="tabbar" id="tabbar">
        <!-- 判断底部tabbar栏显示问题 status -->
        <div v-if='status'>
            <mt-tabbar v-model="selected" fixed >  
              <mt-tab-item id="first">  
                <img slot="icon" src="../../assets/logo.png">  
                首页  
              </mt-tab-item>  
              <mt-tab-item id="second">  
                <img slot="icon" src="../../assets/logo.png">  
                精华  
              </mt-tab-item>  
              <mt-tab-item id="third">  
                <img slot="icon" src="../../assets/logo.png">  
                最新  
              </mt-tab-item>  
              <mt-tab-item id="fourth">  
                <img slot="icon" src="../../assets/logo.png">  
                我的  
              </mt-tab-item>  
            </mt-tabbar> 
       </div> 
      </div>
</template>
<script>
      import {mapGetters,mapState} from 'vuex';
      export default{
        name:'tabbar',
        data(){
          return {
            selected:'first'
          }
        },
        mounted(){
          // router 用来指定模块名
          console.log(this.status);
          // console.log(this.$store.state.router.status);
        },
        methods:{

        },
        computed:{
          // 这样使用 status 会报undefined
          // ...mapState([
          //       "status",
          //   ]),
          // 应该这样使用
            ...mapState({
                status: state => state.devicePage.status
            }) 
            // 第三种方法
          // status () {
          //  return this.$store.state.router.status
          //  }
        },
        watch:{
          selected(val,old){
              this.$router.push({ path: '/page/'+val});
          }
        }
      }

</script>
<style>
  
</style>