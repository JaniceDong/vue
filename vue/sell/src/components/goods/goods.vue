<template>
<div class="goods">
  <div class="menu-wrapper">
    <ul>
      <li v-for="item in goods" class="menu-item">
        <span class="text border-1px">
          <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{ item.name }}
        </span>
      </li>
    </ul>
  </div>
  <div class="foods-wrapper">
  <ul>
    <li v-for="item in goods" class="food-list">
      <h1 class="title">{{ item.name }}</h1>
      <ul>
        <li v-for="food in item.foods" class="food-item border-1px">
          <div class="icon">
            <img :src="food.icon" alt="">
          </div>
          <div class="content">
            <h2 class="name">{{ food.name }}</h2>
            <p class="desc"> {{ food.description }}</p>
            <div class="extra">
              <span>月售{{ food.selCount }}份</span>
              <span>好评率{{ food.rating }}%</span>
            </div>
            <div class="price">
              <span>￥ {{ food.price }}</span>
              <span v-show="food.oldPrice">￥ {{ food.oldPrice }}</span>
            </div>
          </div>
        </li>
      </ul>
    </li>
  </ul>
  </div>
</div>
</template>
<script type="text/ecmascript-6">
  const ERR_OK = 0;
export default{
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: []
    };
  },
  created() {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    this.$http.get('/api/goods').then((response) => {
      response = response.body;
      if (response.errno === ERR_OK) {
        this.goods = response.data;
        console.log(this.goods);
      }
    });
  }
};
</script>
<style type="text/css">
  .goods{
    display: flex;
    position: absolute;
    top: 174px;
    bottom: 46px;
    width:100%;
    overflow: hidden;
  }
 .goods .menu-wrapper{
   flex:0 0 80px;  /*等分  缩放 占位空间*/
   width: 80px;    /*虽然定义了占位空间但是不写宽度android会出问题*/
   background:#f3f5f7;
 }
  .menu-item{
   display: table;
    width: 56px;
    height: 54px;
    line-height: 14px;
    padding:0 12px;
 }
  .menu-item .icon{
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 2px;
    -webkit-background-size:12px 12px;
    background-size:12px 12px;
    background-repeat:no-repeat;
  }
  .menu-item .text{
    display: table-cell;
    width: 56px;
    vertical-align: middle;
    font-size: 12px;
  }
  .menu-item .decrease{
    background-image: url("decrease_1@2x.png");
  }
  .menu-item .discount{
    background-image: url("discount_1@2x.png");
  }
  .menu-item .guarantee{
    background-image: url("guarantee_1@2x.png");
  }
  .menu-item .invoice{
    background-image: url("invoice_1@2x.png");
  }
  .menu-item .special{
    background-image: url("special_1@2x.png");
  }
  @media (-webkit-min-device-pixel-ratio: 3),(min-device-pixel-ratio:  3) {
    .menu-item .decrease{
      background-image: url("decrease_1@3x.png");
    }
    .menu-item .discount{
      background-image: url("discount_1@3x.png");
    }
    .menu-item .guarantee{
      background-image: url("guarantee_1@3x.png");
    }
    .menu-item .invoice{
      background-image: url("invoice_1@3x.png");
    }
    .menu-item .special{
      background-image: url("special_1@3x.png");
    }
  }
  .foods-wrapper{
    flex:1;
  }
  .foods-wrapper .title{
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left:2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147,153,159);
    background: #f3f5f7;
  }
.food-item{
  display: flex;
  margin: 18px;
  padding-bottom: 18px;
}
  .food-item:last-child{

  }
</style>
