<template>
  <div class="shopcart">
   <div class="content">
     <div class="content-left">
       <div class="logo-wrapper">
         <div class="logo" :class="{'highlight':totalCount > 0}">
           <i class="icon-shopping_cart" :class="{'highlight':totalCount > 0}"></i>
         </div>
         <div class="num" v-show="totalCount > 0"> {{ totalCount }}</div>
       </div>
       <div class="price" :class="{'highlight':totalPrice > 0}">￥{{ totalPrice }}元</div>
       <div class="desc">另需配送费{{ deliveryPrice }}元</div>
     </div>
     <div class="content-right">
       <div class="pay" :class="payClass">
         {{ payDesc }}
       </div>
     </div>
   </div>
    <transition name="drop">
      <div class="ball-container">
        <div v-for="ball in balls" v-show="ball.show" class="ball"></div>
        <div class="inner"></div>
      </div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      selectFoods: {
        type: Array,
        default() {
          return [{
            count: 1,
            price: 10
          }];
        }
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        balls: [
          {
          show: false
        },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          }
        ]
      };
    },
    computed: {
      totalPrice() {
        let total = 0;
        this.selectFoods.forEach((food) => {
          total += food.price * food.count;
        });
        return total;
      },
      totalCount() {
        let count = 0;
        this.selectFoods.forEach((food) => {
          count += food.count;
        });
        return count;
      },
      payDesc() {
        if (this.totalPrice === 0) {
          return '￥' + this.minPrice + '元起送';
        } else if (this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice;
          return '还差￥' + diff + '元起送';
        } else {
          return '结算';
        }
      },
      payClass() {
        if (this.totalPrice < this.minPrice) {
          return 'not-enough';
        } else {
          return 'enough';
        }
      }
    }
  };
</script>
<style rel="stylesheet/styles" type="text/css">
.shopcart{
  position: fixed;
  bottom: 0px;
  left:0;
  z-index: 50;
  width:100%;
  height: 48px;
  background:#000;
}
 .shopcart .content{
    display: flex;
    width:100%;
    height:100%;
    background:#141d27;
    font-size:0;
    color:rgba(255,255,255,0.4);
  }
 .content-left{
    flex:1;
  }
 .content-left .logo-wrapper{
   display: inline-block;
   position: relative;
   top: -10px;
   margin:0 12px;
   padding: 6px;
   width: 56px;
   height: 56px;
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
   vertical-align: top;
   -webkit-border-radius:50%;
   -moz-border-radius:50%;
   border-radius:50%;
   background: #141d27;
 }
 .logo-wrapper .logo{
   height:100%;
   width:100%;
   -webkit-border-radius:50%;
   -moz-border-radius:50%;
   border-radius:50%;
   background:#2b343c;
   text-align: center;
 }
.logo-wrapper .logo.highlight{
  background:rgb(0,160,220);
}
 .logo .icon-shopping_cart{
   line-height: 44px;
   font-size: 24px;
   color: #80858a;
 }
 .logo .icon-shopping_cart.highlight{
   color:#ffffff;
 }
 .logo-wrapper .num{
   position: absolute;
   top:0;
   right:0;
   width: 24px;
   height: 16px;
   line-height:16px;
   text-align: center;
   background:red;
   border-radius: 16px;
   font-size: 9px;
   font-weight:700;
   color:white;
   box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
 }
 .content-left .price{
   display: inline-block;
   vertical-align: top;
   font-size: 16px;
   font-weight:700;
   line-height: 24px;
   margin-top:12px;
   box-sizing: border-box;
   padding-right: 12px;
   border-right:1px solid rgba(255,255,255,0.1);
   color:#2b343c;
 }
 .content-left .price.highlight{
   color: #ffffff;
 }

 .content-left .desc{
   display: inline-block;
   vertical-align: top;
   line-height: 24px;
   margin: 12px;
   font-size: 10px;
   font-weight:700;
   color: #2b343c;
 }
  .content-right{
    flex:0 0 105px;
    width: 105px;
    text-align: center;
    line-height: 48px;
  }
  .content-right .pay{
    width:100%;
    height:100%;
    font-size: 12px;
    font-weight:700;
  }
.content-right .pay.not-enough{
  background:#2b333b;
}
  .content-right .pay.enough{
    background: #00b43c;
    color:white;
  }
.ball-container{
  -webkit-transition: all 0.4s ;
  -moz-transition: all 0.4s ;
  -ms-transition: all 0.4s ;
  -o-transition: all 0.4s ;
  transition: all 0.4s ;
}

.ball-container .ball{
  position: fixed;
  left: 32px;
  bottom: 22px;
  z-index: 200;
}
  .ball.drop-enter,.ball.drop-leave-active{

  }
  .ball .inner{
    width: 16px;
    height: 16px;
    -webkit-border-radius:50%;
    -moz-border-radius:50%;
    border-radius:50%;
    background:rgb(0,160,220);
    -webkit-transition: all 0.4s ;
    -moz-transition: all 0.4s ;
    -ms-transition: all 0.4s ;
    -o-transition: all 0.4s ;
    transition: all 0.4s ;
  }
</style>
