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
         <br> 
         <br> 
         <br> 
         <br> 
        <div>
          <input type="text" name="phone" v-validate="'required|phone'">
          <span>{{ errors.first('phone') }}</span>
        </div>
        <br> 
          <div>
          <input type="text" name="qq" v-validate="'required|qq'">
          <span>{{ errors.first('qq') }}</span>
        </div>
        <br>
        <br>
        <br>
        {{errors.has('name')}}
        {{errors.has('phone')}}
        {{errors.has('qq')}}
        <input type="submit" value="提交" v-focus :disabled="errors.has('name') || errors.has('phone') || errors.has('qq')"> 
        <div @click="setmess(2121212)">11111</div>
        <p>directive自定义指令的使用</p>
        <div v-drag style="width:200px;height:100px;background:red">我可以拖拽</div>
    </div>
</div>
  </div>
</template>
<script>
  import {mapGetters,mapState,mapActions} from 'vuex';
  import { Indicator } from 'mint-ui';
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
      console.log('name',name);
        Indicator.open('加载中...');
    },
    computed:{
        ...mapState({
            sourceList: state => state.devicePage.sourceList,
            swiperOption: state => state.devicePage.swiperOption
        }),
        // ...mapGetters({
        //     devicesourceList:devicesourceList
        // })
    },
    // methods:mapActions(['getSourceList']),
    methods:{
      ...mapActions(['getSourceList']),
      init(){
        this.getSourceList(this);
          // 获取所有数据   由于actions中的this指向不同 ，所以需要把this传过来
        // this.getSourceLists();
      },
      // 要点： 要写在methods下面，因为mapActions/mapMutations只是把action/mutation函数绑定到你的methods里了;你调methods里的方法的时候照常传参就可以了。
      // getSourceLists(){
          // this.$store.dispatch('getSourceList',this);
      // },
      buyshop(){
          this.$router.push({ path: 'detail/buy/'});
          this.$store.dispatch('devicetabbar' , false);
      },
      setmess(atr){
        console.log(atr)
      }
    },
    components:{

    },
    watch:{
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