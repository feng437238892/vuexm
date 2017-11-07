<template>
    <div class="home">
      <div class="header container-fluid">书城
      </div>

      <img id="homeimg" src="/src/assets/image/homeimg1.jpg" />
      <div class="content container-fluid row">
        <div class="navcls col-xs-1 bj1"></div>
        <div class="navcls col-xs-1 bj2"></div>
        <div class="navcls col-xs-1 bj3"></div>
        <div class="navcls col-xs-1 bj4"></div>
        <div class="navcls col-xs-1 bj5"></div>
        <div class="navcls2 col-xs-1" style="margin-left:30px;">分类</div>
        <div class="navcls2 col-xs-1">排行</div>
        <div class="navcls2 col-xs-1">女频</div>
        <div class="navcls2 col-xs-1">男频</div>
        <div class="navcls2 col-xs-1">完结</div>
      </div>
      <div class="container-fluid blitil">

      </div>
      <div class="container-fluid bookli" v-for="(item,index) in arr" :key="index">
        <img :src="item.img"/>
        <p class="bookTitle">{{item.title}}</p>
        <p class="bookCon">
          {{item.content}}
        </p>
        <p class="bookmsg">
          <span></span>
          <span>item.subscribe</span>
          <span>item.click</span>
        </p>


      </div>
      <div class="container-fluid lookmore">
        <button type="button" class="btn btn-success btn-lg btn-block more">查看更多</button>
      </div>
      <div class="container-fluid scfoot">

      </div>
    </div>
</template>
<script>
  import $ from 'jquery';
  import footbar from './footbar.vue';
  export default{
    data(){
      return{
        arr:[]
      }
    },
    created(){
      this.$store.dispatch('showLoading');//显示loading
      setTimeout(()=>{
        this.$http({
          url:'/data/index.json',
        }).then((res)=>{
          this.$store.dispatch('hideLoading');//隐藏loading
          this.arr=res.data;
          console.log(this.arr);
        }).catch((res)=>{
          console.log(res);
        })
      },3000)

    },
    mounted(){
      $(function () {
        console.log(this.arr)
        var h = $(window).height();
        var head = $(".header").height();
        var foot = $(".footer").height();
        var content = h - head - foot;
        $(".bomtab a:eq(2)").css("background", "#b2b4b4");
        var w = $(window).width();
        $("#homeimg").css("marginTop", head);
        $("#homeimg").css("width", w);
        var conh = $(window).width();
        $(".bomtab a").mouseover(function () {
          $(".bomtab a").css("background", "#ffffff");
          $(this).css("background", "#b2b4b4");
        });
      });
    },
    components:{
      footbar
    }

}

</script>
<style>
 @import '../assets/css/index.css';
 
</style>