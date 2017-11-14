import * as types from './mutations_type';

/**
 * 引入请求公共域名
 */
 import { url } from '@/service/url';



export default {
      devicetabbar({ commit },bool){
          commit(types.devicetabbar , bool);
      },
      getSourceList({commit},that){
        that.$get(`/api/${ url }&page=1`).then(res=>{
            console.log(res.data.list,'res')
            commit(types.getSourceList,res.data.list);
        })
      }
}