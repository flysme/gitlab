<template>
  <div id="third" :class="['red',{'green':cls}]">
      <!-- 最新 -->


        <div v-for="(item,idx) in ['d02316dafdd794346a4009c79feb9aa93']">
          <div v-if="VIEWS[ item ]&&VIEWS[ item ].__meta__ &&VIEWS[ item ].__meta__.__event__ && VIEWS[ item ].__meta__.__event__.default_uri">
            <div :id="item" class='ssssss'>
              <layouts :datas="{VIEWS:VIEWS,item:item}" v-if="VIEWS[ item ].view == 'linear_layout'" ></layouts>
              <div class="contact-button" v-if="VIEWS[ item ]&&VIEWS[ item ].__meta__ && VIEWS[ item ].__meta__.hasConversation">
                          我是最外层的客服
              </div>
            </div>
          </div>
          <div>
            <div :id="item">
              <!-- <template is="layout" wx:if="{{VIEWS[ item ].view == 'linear_layout'}}" data="{{VIEWS: VIEWS, item: item, data: data,BASKET:BASKET}}" /> -->
              <layouts :datas="{VIEWS:VIEWS,item:item}"></layouts>
            </div>
          </div>
       </div>




  </div>
    


</template>
 <script>
      import layouts from "@/components/common/layout.vue"
 
      import dataitem from "../../../static/data.json";
      export default{
        data(){
          return {
              cls:true,
              VIEWS:{}
          }
        },
        mounted(){
          // console.log(mockdata,'mockdata')
            // this.$get('/user').then((data)=>{
            //   console.log(data,'xxxxx');
            // });
            console.log(dataitem.result,'dataitem')
            this.VIEWS=dataitem.result;
        },
        methods:{
         
        },
        components:{
          layouts
        }
      }
  </script>
  <style>
    .red{
      color: red;
      font-size: 100px;
    } 
    .green{
      color: pink;
      font-size: 30px;
    }

  </style>