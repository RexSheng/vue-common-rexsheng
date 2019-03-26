<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><button type="button" @click="$fullScreen()">全屏</button></li>
      <li><button type="button"@click="$exitFullScreen()">取消全屏</button></li>
      <li><input type="text" v-model="removeKey" placeholder="请输入要删除的key"></li>
      <li><button type="button" @click="remove()">清空缓存</button></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      removeKey:""
    }
  },
  mounted(){
    this.$storage.set("a",{name:"abc"});
    // this.$storage.set("b","生")
    this.$storage.set("a.c",["生","xu"])
    this.$storage.set("ff.gg",{age:12})
    Vue.storage.set("abc.efg",45)


    console.log("a",this.$storage.get("a"));
    console.log("ff.gg",this.$storage.get("ff.gg"));
console.log("abc",this.$storage.get("abc"));
console.log("abc.efg",this.$storage.get("abc.efg"));
    this.$cookie.set("a","adfasd",10)
    this.$setTimeout(function(){
      this.$cookie.del("a")
    },2000)
    // for(var i=0;i<10;i++){
    //   console.log("random"+i,this.$randomString(10))
    // }
    // console.log("window加密",window.btoa("shengxp:123"))
    // console.log("window解密",window.atob("c2hlbmd4cDoxMjM="))
    console.log("加密","shengxp:123".btoa())
    console.log("解密","c2hlbmd4cDoxMjM=".atob())
  },
  methods:{
    remove:function(){
      this.$storage.clear(this.removeKey);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
