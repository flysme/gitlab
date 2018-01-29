<template>
    <div>加载{{name}}
      <div :class="[{red:true}]">1111</div>
    </div>
</template>
<script>
   export default{
     data(){
        return {
          show:false
        }
     },
     props:['name'],
     mounted(){
        this.get();
     },
     methods:{
        get(){
          console.log(this.name,'xxxx');
        }
     }
   }
</script>
<style>
    .wrap{
      font-size: 19px;
    }
    .red{
      color: red;
    }
    .blue{
      color: pink;
    }

</style>