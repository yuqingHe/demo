// 基础demo
var demo1=new Vue({
    el:"#appFor",
    data:{
        message:"hello",
        todos:[{text:123},{text:4321}]
    },
    methods:{
        showMessage:function (params) {
            alert(this.message);
            this.message="nichousha"
        }
    }
});

//组件
Vue.component('comp1', {
   template: '<button v-on:click="counter2 += 1">{{ counter2 }}</button>',
   props: ['counter'],
   data:function () {
    return {counter2:this.counter}
  }
});
new Vue({
  el: '#comp',
  data:{
      counter21:21
  }
})