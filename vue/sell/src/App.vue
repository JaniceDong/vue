<template>
  <div id="app">
    <site-header :seller="seller"></site-header>
    <ul class="tab border-1px border-2px">
      <li>
        <router-link to="/goods">商品</router-link>
      </li>
      <li>
        <router-link to="/ratings">评论</router-link>
      </li>
      <li>
        <router-link to="/seller">商家</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import SiteHeader from './components/header/header.vue';

  const ERR_OK = 0;

  export default {
    data() {
      return {
        seller: {
        }
      };
    },
    components: {
      SiteHeader
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        response = response.body;
        console.log(response.data);
        if (response.errno === ERR_OK) {
          this.seller = response.data;
        }
      });
    }
  };
</script>

<style rel="stylesheet/style" type="text/css">
  ul {
    display: flex;
    height: 4rem;
    justify-content: space-around;
    align-items: center;
  }

  li {
    flex: 1;
    text-align: center;
    list-style: none;
    height:100%;
    line-height: 40px;
  }

  a {
    color: #42b983;
    display: block;
    font-size: 20px;
    color:rgb(77,85,93);
  }
  a.active{
    color:rgb(240,20,20);
  }
  #app .tab{
    display:flex;
    width:100%;
    height:40px;
    line-height:40px;
  }
  .tab-item{
    flex:1;
    text-align:center;;
  }

</style>
