<template>
      <div>
          <div v-if="VIEWS[ item ]&&VIEWS[ item ].subviews"> 
                 <!-- 如果子元素是布局 引入自己-->
                 <div  v-for="(items,idx) in VIEWS[ item ].subviews">
                      <div v-if="VIEWS[ items ].__meta__&&VIEWS[ items ].__meta__.__event__&&VIEWS[ items ].__meta__.__event__.default_uri">
                          1111
                      </div>
                      <div v-else>
                           <div :id="items"  :class="[VIEWS[ items ].view]">
                              <layout :datas="{VIEWS:VIEWS,item:items}"></layout>
                          </div>
                      </div>
                  </div>
          </div>
           <div v-if="VIEWS[ item ]&&VIEWS[ item ].view != 'linear_layout'">
                   <!-- 如果子元素是控件 引入控件 -->
                    <div style="width:100px;height:100px;background:red">{{VIEWS[ item ].view}}</div>
           </div>
      </div>
</template>
<script>
    export default{
        name:'layout',
        data(){
          return {};
        },
        props:{
          datas:Object
        },
        methods:{
          widgetJump(data){
            console.log(data,'data');
          }
        },
        mounted(){
          console.log(this.datas,'data');
        },
        computed:{
          item(){
             return this.datas.item
          },
          VIEWS(){
            return this.datas.VIEWS
          }
        }
    }

</script>


