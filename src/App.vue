<template>
  <div id="app">
    <div class="text">hello world nb !!</div>
    <router-view></router-view>
    <loading></loading>
    <div style="width: 400px; height: 200px; border: 1px solid red; margin: 20px auto;">
      <scroll-bar>
        <p>第1条数据</p>
        <p>第2条数据</p>
        <p>第3条数据</p>
        <p>第4条数据</p>
        <p>第5条数据</p>
        <p>第6条数据</p>
        <p>第7条数据</p>
        <p>第8条数据</p>
        <p>第1条数据</p>
        <p>第2条数据</p>
        <p>第3条数据</p>
        <p>第4条数据</p>
        <p>第5条数据</p>
        <p>第6条数据</p>
        <p>第7条数据</p>
        <p>第8条数据</p>
        <p>第1条数据</p>
        <p>第2条数据</p>
        <p>第3条数据</p>
        <p>第4条数据</p>
        <p>第5条数据</p>
        <p>第6条数据</p>
        <p>第7条数据</p>
        <p>第8条数据</p>
      </scroll-bar>
    </div>
    <br>

    <div style="width: 200px;height: 100px;border: 1px solid red; margin: 20px auto;">
      <loop-scroll :loop-data="[1]">
        <p>第1条数据</p>
        <p>第2条数据</p>
        <p>第3条数据</p>
        <p>第4条数据</p>
        <p>第5条数据</p>
        <p>第6条数据</p>
        <p>第7条数据</p>
        <p>第8条数据</p>
      </loop-scroll>
    </div>
    <div style="width: 200px;height: 50px;border: 1px solid red; margin: 20px auto;">
      <loop-scroll :loop-data="[1]" mode='left'>
        <p>第1条数据</p>
        <p>第2条数据</p>
        <p>第3条数据</p>
        <p>第4条数据</p>
        <p>第5条数据</p>
        <p>第6条数据</p>
        <p>第7条数据</p>
        <p>第8条数据</p>
      </loop-scroll>
    </div>
  </div>
</template>

<script>
  export default {
    name: "app",
    data () {
      return {
        loopData: []
      };
    }
  };
</script>

<style>
 * {
    margin: 0;
    padding: 0;
  }
  #app {
    width: 100%;
    height: 100%;
  }
</style>