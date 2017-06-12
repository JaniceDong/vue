<template>
  <div class="shopcart">
   <div class="content">
     <div class="content-left">
       <div class="logo-wrapper">
         <div class="logo">
           <i class="icon-shopping_cart"></i>
         </div>
       </div>
       <div class="price">￥0元</div>
       <div class="desc">另需配送费{{ deliveryPrice }}元</div>
     </div>
     <div class="content-right">
       <div class="pay">
         ￥{{ minPrice }}元起送
       </div>
     </div>
   </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    computed: {
      totalPrice() {
        
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
 .logo .icon-shopping_cart{
   line-height: 44px;
   font-size: 24px;
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
    background:#2b3334;
    text-align: center;
    line-height: 48px;
  }
  .content-right .pay{
    width:100%;
    height:100%;
    font-size: 12px;
    font-weight:700;
  }
</style>
