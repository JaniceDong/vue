<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease " v-show="food.count>0" @click="decreaseCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
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
    transition: all 0.4s linear;
  }
  .cart-decrease .inner{
    display: inline-block;
    line-height:24px;
    font-size: 24px;
    color:rgb(0,160,220);
    transition: all 0.4s linear;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
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
  .move-enter,.move-leave-active{
    opacity:0;
    -webkit-transform: translate3D(24px,0,0);
    -moz-transform: translate3D(24px,0,0);
    -ms-transform: translate3D(24px,0,0);
    -o-transform: translate3D(24px,0,0);
    transform: translate3D(24px,0,0);
  }
  .move-leave,.move-enter-active{
    opacity:1;
    -webkit-transform: translate3D(0,0,0);
    -moz-transform: translate3D(0,0,0);
    -ms-transform: translate3D(0,0,0);
    -o-transform: translate3D(0,0,0);
    transform: translate3D(0,0,0);
  }
  .move-enter .inner,.move-leave-active .inner{
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
</style>
