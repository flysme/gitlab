import Vue from 'vue';


Vue.filter('reverseStr', function(value) {
    return value.split('').reverse().join('')
});