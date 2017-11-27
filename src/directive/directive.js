import Vue from 'vue';

  Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

Vue.directive('drag',{bind(el,binding,vnode){
      console.log(el,'11111');
      console.log(binding.value,'2222');
      console.log(vnode,'333');

}})

Vue.filter('reverseStr', function(value) {
    return value.split('').reverse().join('')
});