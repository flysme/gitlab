<template>
  <div id="first">
    <!--  <swiper :options="swiperOption" style="height:100vh">
          <swiper-slide v-for="item in $store.getters.devicesourceList" style="height:100vh">
            <video :src="item.videouri"  style="width:100%;height:100%;" autoplay ></video>
          </swiper-slide>
    </swiper> -->
    <div class="layui-form-item">
    <label class="layui-form-label">账户</label>
    <div class="layui-block">
        <!-- v-validate="'required|min:3|alpha'" -->
        <!-- required min alpha  这些具体可以到 zh_CN.js去看，有方法-->
        <input v-model="name" v-validate="'required|min:3|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" name="name" class="layui-input" placeholder="账户">
        <span v-show="errors.has('name')" class="text-style" v-cloak> {{ errors.first('name') }} </span>
        <div>
          <input type="text" name="phone" v-validate="'required|phone'">
          <span>{{ errors.first('phone') }}</span>
        </div>
        <br> 
          <div>
          <input type="text" name="qq" v-validate>
          <span>{{ errors.first('qq') }}</span>
        </div>
    </div>
</div>
  </div>
</template>
<script>
  import {mapGetters,mapState} from 'vuex';
  export default{
    data () {
      return{
        name:''
      }
    },
    created(){
      this.init();
    },
    mounted(){
      console.log(this.$store.getters.devicesourceList,'xxxxx')
      console.log('name',name)
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
        this.getSourceList();
      },
      getSourceList(){
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