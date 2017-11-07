<template>
  <div class="list">
    <div class="container-fluid clickbook">
      <img src="/src/assets/image/homeimg1.jpg" />
      <div class="bookm">
        <div class="bookn">斗破苍穹</div>
        <div class="jdu">作者:<span>天蚕土豆</span></div>
        <div class="jdu">类别:<span>玄幻</span></div>
        <div class="btnji">
          <router-link to="/home" tag="button" class="btn btn-default">加入书架</router-link>

          <router-link to="/free" tag="button" class="btn btn-default">开始阅读</router-link>
        </div>
      </div>
    </div>
    <!--<div class="container-fluid bgk"></div>-->
    <div class="container-fluid jiesao">
      简介
    </div>
    <div class="container-fluid jscon">
      <p>钱么？或者，名气？地位？荣耀？在国家和民族危难关头，有人挺身而出，找到了挽救危亡的道路。天赋也一般，只是生了一副好皮囊</p>
    </div>
    <div class="container-fluid listtit">
      书籍目录
    </div>
    <div class="container-fluid booklist">
      <a href="content.html"><li>第一章 接头异变</li></a>
      <a href="content.html"><li>第二章 真实目的</li></a>
      <a href="content.html"><li>第三章 码数米的秘密</li></a>
      <a href="content.html"><li>第一章 拂袖而去</li></a>
      <a href="content.html"><li>第二章 挑拨离间</li></a>
      <a href="content.html"><li>第三章 天下第二</li></a>
      <a href="content.html"><li>第一章 坐地起价</li></a>
      <a href="content.html"><li>第二章 严厉批评</li></a>
      <a href="content.html"><li>第三章 傻不拉几</li></a>
      <a href="content.html"><li>第一章 温柔反应</li></a>
      <a href="content.html"><li>第二章 风雨计划</li></a>
      <a href="content.html"><li>第三章 吐露心声</li></a>
    </div>
    <div class="container-fluid scfoot">

    </div>
  </div>
</template>
<script>
  import $ from 'jquery';
  export default{
    mounted(){
      $(function () {
        var h = $(window).height();
        var head = $(".header").height();
        var foot = $(".footer").height();
        var content = h - head - foot;
        $(".bomtab a:eq(4)").css("background", "#b2b4b4");
        var w = $(window).width();
        $("#homeimg").css("marginTop", head);
        $("#homeimg").css("width", w);
        var conh = $(window).width();
        $(".bomtab a").mouseover(function () {
          $(".bomtab a").css("background", "#ffffff");
          $(this).css("background", "#b2b4b4");
        });
      });
    }
  }
</script>
<style>
  @import '../assets/css/list.css';
  
</style>