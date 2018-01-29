<template>
  <div id="second">
         <p>过滤器filter的使用</p> 
        <div>{{name | reverseStr}}</div>
        <div>{{name | reverseStr}}</div>
        <div>{{name | reverseStr}}</div>
        <div>{{name | reverseStr}}</div>
        <div>{{name | reverseStr}}</div>
        <div :id='name' v-on:click="get(name)">点击</div>
        <!-- <div class="item item{{style}}">11111111111</div> -->
        <div :class="['item',{item1:style==1}]">11111111111</div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
          name:"我是大头",
          style:1,
      }
    },
    methods:{
        get(e){
          console.log(e,'eeeee');
        }
    }
  }
</script>
<style scoped>
    #second{
      width: 100%;
      height: 100vh;
      background: blue;
      color: #fff;
    }
    .item{
      font-size: 10px;
      font-weight: bold;
    }
    .item1{
      color: blue;
    }
</style>