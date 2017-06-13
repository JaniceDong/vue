<template>
  <div class="cartcontrol">
    <div class="cart-decrease " v-show="food.count>0" @click="decreaseCart" transition="move">
      <span class="inner icon-remove_circle_outline"></span>
    </div>
    <div class="cart-count"  v-show="food.count>0">{{ food.count }}</div>
    <div class="cart-increase icon-add_circle" @click="addCart"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart(event) {
       if (!event._constructed) {
         return;
       }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
          this.food.count = 1;
        } else {
          this.food.count ++;
        }
      },
      decreaseCart(event) {
        if (!event._constructed) {
          return;
        }
       this.food.count --;
      }
    }
  };
</script>
<style rel="stylesheet/style" type="text/css">
  .cartcontrol{
    font-size:0;
  }
  .cartcontrol .cart-decrease{
    display: inline-block;
    padding:6px;
  }
  .cart-decrease .inner{
    line-height:24px;
    font-size: 24px;
    color:rgb(0,160,220);
  }
  .cartcontrol .cart-count{
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding: 6px;
    line-height: 24px;
    font-size: 10px;
    text-align: center;
    color: rgb(147,159,153);
    font-weight:700;
  }
  .cartcontrol .cart-increase{
    display: inline-block;
    padding:6px;
    line-height:24px;
    font-size: 24px;
    color:rgb(0,160,220);
  }
</style>
