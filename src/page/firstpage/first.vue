<template>
  <div id="first">
     <swiper :options="swiperOption" style="height:100vh">
          <swiper-slide v-for="item in $store.getters.devicesourceList" style="height:100vh">
            <video :src="item.videouri"  style="width:100%;height:100%;" autoplay ></video>
          </swiper-slide>
    </swiper>
  </div>
</template>
<script>
  import {mapGetters,mapState} from 'vuex';
  export default{
    data () {
      return{

      }
    },
    created(){
      this.init();
    },
    mounted(){
      console.log(this.$store.getters.devicesourceList,'xxxxx')
    },
    computed:{
        ...mapState({
            sourceList: state => state.devicePage.sourceList,
            swiperOption: state => state.devicePage.swiperOption
        }) 
    },
    methods:{
      init(){
          // 获取所有数据   由于actions中的this指向不同 ，所以需要把this传过来
          this.$store.dispatch('getSourceList',this);
      },
      buyshop(){
          this.$router.push({ path: 'detail/buy/'});
          this.$store.dispatch('devicetabbar' , false);
      }
    },
    components:{
      
    }

  }
</script>
<style scoped>
    #first{
      width: 100%;
      height: 100vh;
      background: pink;
    }
    img[lazy=loading] {
      width: 5px;
      height: 5px;
      margin: auto;
    }
    .hidden{
      display: none;
    }
</style>