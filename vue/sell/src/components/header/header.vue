<template>
<div class="header">
 <div class="content-wrapper">
   <div class="avatar">
     <img width="64" height="64" :src="seller.avatar" alt="">
   </div>
   <div class="content">
     <div class="title">
       <span class="brand"></span>
       <span class="name">{{ seller.name }}</span>
     </div>
     <div class="description">
       {{ seller.description }}/{{ seller.deliveryTime }}分钟送达
     </div>
     <div v-if="seller.supports" class="support">
       <span class="icon" :class="classMap[seller.supports[0].type]"></span>
       <span class="text">{{ seller.supports[0].description }}</span>
     </div>
   </div>
 </div>
  <div class="bulletin-wrapper"></div>
</div>
</template>
<script type="text/ecmascript-6">
export default{
  props: {
    seller: {
      type: Object
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }
};
</script>
<style rel="stylesheet/style" type="text/css">
.header{
  color:white;
  background: #000;
}
  .header .content-wrapper{
    padding:24px 12px 18px 24px;
    font-size:0;
  }
  .header .avatar{
    display: inline-block;
    vertical-align: top;
  }
  .avatar img{
    border-radius:4px;
  }
  .header .content{
    display: inline-block;
    margin-left:16px;
  }
  .content .title{
    margin:2px 0 8px 0;
  }
  .content .description{
    margin-bottom:10px;
    line-height:12px;
    font-size:12px;
  }
  .support .text{
    line-height: 12px;
    font-size: 12px;
    vertical-align: top;
  }
 .support .icon{
    display: inline-block;
   vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 14px;
    -webkit-background-size:12px 12px;
    background-size:12px 12px;
    background-repeat:no-repeat;
  }
  .support .decrease{
    background-image: url("decrease_1@2x.png");
  }
  .support .discount{
    background-image: url("discount_1@2x.png");
  }
  .support .guarantee{
    background-image: url("guarantee_1@2x.png");
  }
  .support .invoice{
    background-image: url("invoice_1@2x.png");
  }
  .support .special{
    background-image: url("special_1@2x.png");
  }
 .content .title .brand{
   width:30px;
   height: 18px;
   display: inline-block;
   vertical-align: top;
   background-image: url("brand@2x.png");
   background-size: 30px 18px;
  }
@media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio:  3) {
  .content .title .brand{
    background-image: url("brand@3x.png");
  }
  .support .decrease{
    background-image: url("decrease_1@3x.png");
  }
  .support .discount{
    background-image: url("discount_1@3x.png");
  }
  .support .guarantee{
    background-image: url("guarantee_1@3x.png");
  }
  .support .invoice{
    background-image: url("invoice_1@3x.png");
  }
  .support .special{
    background-image: url("special_1@3x.png");
  }
}
  .name{
    margin-left: 6px;
    font-size:16px;
    font-weight:bold;
  }
</style>
