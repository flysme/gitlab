export default{
    devicesourceList(state,getters){
        return state.sourceList.filter(source=>source.videouri.length>0);
    }
}