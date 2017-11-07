<template>
  <div id="app">
    <loading v-show="getLoading"></loading>
    <!--<keep-alive>-->
    <transition
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
    >
    <router-view></router-view>
    </transition>
    <!--</keep-alive>-->
    <footbar v-show="getFoot"></footbar>
  </div>
</template>

<script>


  import footbar from './components/footbar.vue';
  import {mapGetters} from 'vuex';
export default {
  name: 'app',
  data () {
    return {
      msg: '斗破苍穹'
    }
  },
  components:{
   footbar
  },
  computed:mapGetters([
    'getFoot','getLoading'
  ]),
  mounted(){
      this.changePath(this.$route.path);
  },
  methods:{
    changePath(path){
      if (/home|create|free|self|anli/.test(path)) {

        this.$store.dispatch('showFoot');

      }
      if (/regist|list|detail/.test(path)) {
        this.$store.dispatch('hideFoot');
      }
    }
  },
  watch:{
    $route(to){//监听路由对象
      this.changePath(to.path);

      console.log('去哪了', to.path)//获取路由指向

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
