

import actions from './actions'
import mutations from './mutations'
import getters from './getters'
export default {
    state:{
      status:true,
      sourceList:[],
      swiperOption: {
          paginationClickable: false,
          autoplayDisableOnInteraction: false,
           direction : 'vertical',
          loop: false,
          grabCursor : false,
           onTransitionStart(swiper){
             console.log(swiper.activeIndex,swiper)
           },
          coverflow: {
          　　rotate: 30,
          　　stretch: 10,
          　　depth: 60,
          　　modifier: 2,
          　　slideShadows : false
          　　}
          },
    },
    actions,
    mutations,
    getters:getters,
}