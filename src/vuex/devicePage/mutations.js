import * as type from './mutations_type';

export default {
  [type.devicetabbar](state,bool){
      state.status = bool;
  },
  [type.getSourceList](state,res){
      state.sourceList=res;
  }
}