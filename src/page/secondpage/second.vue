<template>
  <div id="second">
         <p>过滤器filter的使用</p> 
        <div>{{name | reverseStr}}</div>
        <div>{{name | reverseStr}}</div>
        <div>{{name | reverseStr}}</div>
        <div>{{name | reverseStr}}</div>
        <div>{{name | reverseStr}}</div>

  </div>
</template>
<script>
  export default{
    data () {
      return {
          name:"我是大头"
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
</style>