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
    var data={"code":200,"data":[{"Counter":2066,"Year":"2010","Price":5176.705310317493,"Amount":54227.34415425292,"Level":"一级"},{"Counter":3642,"Year":"2010","Price":9106.553170020594,"Amount":95247.82896769185,"Level":"三级"},{"Counter":2092,"Year":"2010","Price":5307.063316183487,"Amount":57162.075177588085,"Level":"二级"},{"Counter":4754,"Year":"2010","Price":11744.379151717178,"Amount":124100.09280275439,"Level":"四级"},{"Counter":2234,"Year":"2010","Price":5560.407034523705,"Amount":58711.56341408846,"Level":"未分级"},{"Counter":11,"Year":"2010","Price":24.596538199999998,"Amount":238.14483309999997,"Level":null},{"Counter":2104,"Year":"2011","Price":5279.8486509765025,"Amount":55266.5658520461,"Level":"一级"},{"Counter":3512,"Year":"2011","Price":8891.438859455986,"Amount":93343.67040899202,"Level":"三级"},{"Counter":2144,"Year":"2011","Price":5355.029560716999,"Amount":56745.48785253802,"Level":"二级"},{"Counter":4742,"Year":"2011","Price":11808.605841846183,"Amount":122607.68727059728,"Level":"四级"},{"Counter":2283,"Year":"2011","Price":5717.392105844907,"Amount":60839.74244736894,"Level":"未分级"},{"Counter":12,"Year":"2011","Price":34.2897211,"Amount":370.1966861,"Level":null},{"Counter":2057,"Year":"2012","Price":5112.058785296002,"Amount":52801.179455540005,"Level":"一级"},{"Counter":3567,"Year":"2012","Price":9182.134329523944,"Amount":96572.26657253102,"Level":"三级"},{"Counter":2116,"Year":"2012","Price":5358.124788051198,"Amount":55694.30201161345,"Level":"二级"},{"Counter":4740,"Year":"2012","Price":11909.271030829614,"Amount":127027.71323749085,"Level":"四级"},{"Counter":2306,"Year":"2012","Price":5718.37528709179,"Amount":61183.308660365044,"Level":"未分级"},{"Counter":9,"Year":"2012","Price":21.32159196,"Amount":200.8262466,"Level":null},{"Counter":2028,"Year":"2013","Price":5021.887628835685,"Amount":52497.67210141636,"Level":"一级"},{"Counter":3568,"Year":"2013","Price":8918.664706275964,"Amount":96133.6669951646,"Level":"三级"},{"Counter":2113,"Year":"2013","Price":5378.915898038488,"Amount":56840.29514020195,"Level":"二级"},{"Counter":4737,"Year":"2013","Price":11857.920778577645,"Amount":125205.70580059558,"Level":"四级"},{"Counter":2333,"Year":"2013","Price":5846.015883091797,"Amount":62066.03733662602,"Level":"未分级"},{"Counter":16,"Year":"2013","Price":36.456827589999996,"Amount":398.32578090000004,"Level":null},{"Counter":2086,"Year":"2014","Price":5035.4960093501595,"Amount":51581.18592779912,"Level":"一级"},{"Counter":3573,"Year":"2014","Price":9042.495064112405,"Amount":93951.35853205922,"Level":"三级"},{"Counter":2202,"Year":"2014","Price":5562.547088916003,"Amount":59670.51107120098,"Level":"二级"},{"Counter":4675,"Year":"2014","Price":11847.587569343003,"Amount":125735.51329224574,"Level":"四级"},{"Counter":2247,"Year":"2014","Price":5639.076984195445,"Amount":59432.547493570135,"Level":"未分级"},{"Counter":10,"Year":"2014","Price":25.621103559999998,"Amount":366.6322568,"Level":null},{"Counter":2032,"Year":"2015","Price":5078.557699231,"Amount":53902.56623792599,"Level":"一级"},{"Counter":3555,"Year":"2015","Price":8897.134203291795,"Amount":93313.92311627323,"Level":"三级"},{"Counter":2071,"Year":"2015","Price":5218.95872098749,"Amount":54295.48688425005,"Level":"二级"},{"Counter":4804,"Year":"2015","Price":12086.155940370068,"Amount":127443.79287226213,"Level":"四级"},{"Counter":2326,"Year":"2015","Price":5949.572658940013,"Amount":62502.347665765934,"Level":"未分级"},{"Counter":7,"Year":"2015","Price":17.24475325,"Amount":166.6433416,"Level":null},{"Counter":2025,"Year":"2016","Price":5111.359051532994,"Amount":54066.73354648005,"Level":"一级"},{"Counter":3576,"Year":"2016","Price":8879.267988538946,"Amount":91907.32193001888,"Level":"三级"},{"Counter":2128,"Year":"2016","Price":5367.995445502194,"Amount":56774.35522529493,"Level":"二级"},{"Counter":4765,"Year":"2016","Price":11959.098207814737,"Amount":124495.55249781965,"Level":"四级"},{"Counter":2288,"Year":"2016","Price":5751.77160709531,"Amount":60378.998041343526,"Level":"未分级"},{"Counter":15,"Year":"2016","Price":36.723791176,"Amount":352.57873698500003,"Level":null},{"Counter":2038,"Year":"2017","Price":5102.2981904495055,"Amount":53468.32396646598,"Level":"一级"},{"Counter":3631,"Year":"2017","Price":9077.292898841617,"Amount":94623.60999230294,"Level":"三级"},{"Counter":2095,"Year":"2017","Price":5196.722761901606,"Amount":56253.685735922416,"Level":"二级"},{"Counter":4675,"Year":"2017","Price":11582.411542823977,"Amount":121736.74276103066,"Level":"四级"},{"Counter":2340,"Year":"2017","Price":5871.088048033397,"Amount":61593.014856189744,"Level":"未分级"},{"Counter":14,"Year":"2017","Price":44.09601396000001,"Amount":380.23077836,"Level":null},{"Counter":2009,"Year":"2018","Price":4978.494961613903,"Amount":52392.14603670486,"Level":"一级"},{"Counter":3662,"Year":"2018","Price":9245.18210048101,"Amount":98135.9531817039,"Level":"三级"},{"Counter":2149,"Year":"2018","Price":5412.727476998986,"Amount":57063.90864314002,"Level":"二级"},{"Counter":4678,"Year":"2018","Price":11787.750169207533,"Amount":123228.34937745964,"Level":"四级"},{"Counter":2288,"Year":"2018","Price":5863.975589486707,"Amount":61920.16979536756,"Level":"未分级"},{"Counter":8,"Year":"2018","Price":17.17757898,"Amount":175.77928469999998,"Level":null},{"Counter":2112,"Year":"2019","Price":5323.493999116693,"Amount":55702.36752288301,"Level":"一级"},{"Counter":3584,"Year":"2019","Price":8968.595275776734,"Amount":94068.91520247924,"Level":"三级"},{"Counter":2186,"Year":"2019","Price":5541.256763708306,"Amount":57739.639515438066,"Level":"二级"},{"Counter":4681,"Year":"2019","Price":11807.619167115,"Amount":124702.88656633416,"Level":"四级"},{"Counter":2220,"Year":"2019","Price":5614.164649440302,"Amount":58672.8145141889,"Level":"未分级"},{"Counter":14,"Year":"2019","Price":32.18378683,"Amount":395.6697805,"Level":null}],"msg":"","success":true}
    console.log(data.data);
    var SqlList=data.data.sql();
    console.log(SqlList.where(a=>a.Level!=null).groupBy(a=>{return a.Level}).
    select(a=>{return {Level:a.key,BarData:a.value.map(b=>parseFloat(b.Amount.toFixed(2)))}}).get());
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
