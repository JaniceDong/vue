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
   <div v-if="seller.supports" class="support-count" @click="showDetail">
    <span class="count">{{ seller.supports.length }}个</span>
    <i class="icon-keyboard_arrow_right"></i>
  </div>
 </div>
  <div class="bulletin-wrapper" @click="showDetail">
    <span class="bulletin-title"></span><span class="bulletin-text">{{ seller.bulletin }}</span>
    <i class="icon-keyboard_arrow_right"></i>
  </div>
  <div class="background">
    <img :src="seller.avatar" width="100%" height="100%" >
  </div>
  <div v-show="detailShow" class="detail" @click="hiddenDetail">
    <div class="detail-wrapper clearfix">
      <div class="detail-main">
       <h1 class="name"> {{ seller.name}}</h1>
        <div class="star-wrapper">
          <star :size="48" :score="seller.score"></star>
        </div>
        <div class="title">
          <div class="line"></div>
          <div class="text">优惠信息</div>
          <div class="line"></div>
        </div>
        <ul v-if="seller.supports" class="supports">
          <li class="support-item" v-for="item in seller.supports">
            <span class="icon" :class="classMap[seller.supports[$index].type]"></span>
            <span class="text">{{ seller.supports[$index].description}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="detail-close">
      <i class="icon-close"></i>
    </div>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
  import star from '../star/star.vue';
export default{
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      detailShow: true
    };
  },
  methods: {
    showDetail() {
      this.detailShow = true;
    },
    hiddenDetail() {
      this.detailShow = false;
    }
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  },
  components: {
    star
  }
};
</script>
<style rel="stylesheet/style" type="text/css">
  @import url(../../common/styles/icon.css);
.header{
  color:white;
  position: relative;
  background:rgba(7,17,27,0.5);
  overflow: hidden;
}
  .header .content-wrapper{
    padding:24px 12px 18px 24px;
    font-size:0;
    position:relative;
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
.support-count{
  position:absolute ;
  right: 12px;
  bottom: 14px;
  padding:0 8px;
  height: 24px;
  line-height: 24px;
  -webkit-border-radius:14px;
  -moz-border-radius:14px;
  border-radius:14px;
  background:rgba(0,0,0,0.2);
  text-align: center;
  font-size:10px;
}
.support-count .count{
  font-size:10px;
  vertical-align: top;
}
.icon-keyboard_arrow_right{
  font-size: 10px;
  line-height:24px;
  margin-left:2px;
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
    margin-right: 7px;
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
.bulletin-wrapper{
  height:28px;
  line-height: 28px;
  padding:0 22px 0 12px;
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  background:rgba(7,17,27,0.2);
}
.background{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index: -1;
  filter:blur(10px);
}
  .detail{
    position: fixed;
    z-index: 100;
    left:0;
    top:0;
    width:100%;
    height:100%;
    overflow: auto;
    background: rgba(7,17,27,0.8);
  }
  .bulletin-wrapper .bulletin-title{
    display: inline-block;
    width:22px;
    height: 12px;
    margin-top:8px;
    vertical-align: top;
    background-size: 22px 12px;
    background-image: url(bulletin@2x.png);
    background-repeat:no-repeat;
  }
  @media (min-device-pixel-ratio:3),(-webkit-device-pixel-ratio: 3) {
    .bulletin-wrapper .bulletin-title{
      background-image: url(bulletin@3x.png);
    }
  }
  .bulletin-wrapper .bulletin-text{
    font-size: 10px;
    font-weight:200;
    margin:0 4px;
    vertical-align: top;
  }
  .bulletin-wrapper .icon-keyboard_arrow_right{
    position: absolute;
    font-size: 10px;
    right: 12px;
    top: 2px;
  }
  .detail-wrapper{
    min-height:100%;
    width:100%;
  }
  .detail-wrapper .detail-main{
    margin-top: 64px;
    padding-bottom: 64px;
  }
  .detail-wrapper .name{
    line-height: 16px;
    text-align: center;
    font-size: 16px;
    font-weight:700;
  }
  .detail-wrapper .title{
    display: flex;
    width:80%;
    margin: 28px auto 24px auto;
  }
  .title .line{
    flex: 1;
    position: relative;
    top: -6px;
    border-bottom:1px solid rgba(255,255,255,0.2);
  }
  .title .text{
    padding:0 12px;
    font-weight: 700;
    font-size: 14px;
  }
 .star-wrapper{
   margin-top: 18px;
   padding:2px 0;
   text-align:center;
  }
 .detail-main .supports{
   width:80%;
   margin:0 auto;
 }
 .supports .support-item{
   margin-bottom: 12px;
   padding:0 12px;
   font-size:0;
 }
  .supports .support-item:last-child{
    margin-bottom:0;
  }
  .support-item .icon{
    display: inline-block;
    width:16px;
    height: 16px;
    vertical-align: top;
    margin-right: 6px;
    -webkit-background-size:16px 16px;
    background-size:16px 16px;
    background-repeat:no-repeat;
  }
  .support-item .text{
    line-height: 12px;
    font-size: 12px;
  }
  .support-item .decrease{
    background-image: url("decrease_2@2x.png");
  }
  .support-item .discount{
    background-image: url("discount_2@2x.png");
  }
  .support-item .guarantee{
    background-image: url("guarantee_2@2x.png");
  }
  .support-item .invoice{
    background-image: url("invoice_2@2x.png");
  }
  .support-item .special{
    background-image: url("special_2@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio:  3) {
    .support-item .decrease{
      background-image: url("decrease_2@3x.png");
    }
    .support-item .discount{
      background-image: url("discount_2@3x.png");
    }
    .support-item .guarantee{
      background-image: url("guarantee_2@3x.png");
    }
    .support-item .invoice{
      background-image: url("invoice_2@3x.png");
    }
    .support-item .special{
      background-image: url("special_2@3x.png");
    }
  }
  .detail-close{
    position: relative;
    width: 32px;
    height: 32px;
    margin:-64px auto 0 auto;
    clear: both;
    font-size: 32px;
  }

</style>
