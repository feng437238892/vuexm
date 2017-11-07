<template>
  <div class="create">
    <div class="header container-fluid">
      <div class="input-group searchself">
        <span class="input-group-addon"><span class="glyphicon glyphicon-search"></span>
        </span>
        <input type="text" class="form-control" placeholder="书名/作者/关键字"><span class="input-group-addon">搜索</span>
      </div>
    </div>
    <!--<div class="footer container-fluid">-->
      <!--<div class="list-group bomtab">-->
        <!--<a href="case.html" class="list-group-item" style="margin-left:0px;">书架</a>-->
        <!--<a href="free.html" class="list-group-item">免费</a>-->
        <!--<a href="index.html" class="list-group-item">书城</a>-->
        <!--<a href="create.html" class="list-group-item">搜索</a>-->
        <!--<a href="self.html" class="list-group-item">我的</a>-->
      <!--</div>-->
    <!--</div>-->
    <div class="container-fluid booklab">
      <span class="label label-default">玄幻</span>
      <span class="label label-primary">仙侠/修真</span>
      <span class="label label-danger">武侠</span>
      <span class="label label-info">网游</span>
      <span class="label label-success">历史</span>
      <span class="label label-info">穿越</span>
      <span class="label label-warning">军事</span>
      <span class="label label-success">青春/校园</span>
      <span class="label label-danger">霸道总裁</span>
      <span class="label label-info">言情</span>
      <span class="label label-danger">悬疑</span>
      <span class="label label-warning">乡村</span>
    </div>
    <!--<div class="container-fluid bgk"></div>-->
    <div class="container-fluid bookli">
      <router-link to="/detail/1">
        <img src="/src/assets/img/f20.jpg" />
      </router-link>
      <p class="bookTitle">斗破苍穹</p>
      <p class="bookCon">这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！</p>
      <p class="bookmsg"><span>作者:天蚕土豆</span><span>订阅：250000</span><span>点击:10000000</span></p>
    </div>
    <div class="container-fluid bookli">
      <router-link to="/detail/3">
        <img src="/src/assets/img/f19.jpg" />
      </router-link>
      <p class="bookTitle">斗破苍穹</p>
      <p class="bookCon">这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！</p>
      <p class="bookmsg"><span>作者:天蚕土豆</span><span>订阅：250000</span><span>点击:10000000</span></p>
    </div>
    <div class="container-fluid bookli">
      <router-link to="/detail/1">
        <img src="/src/assets/img/f18.jpg" />
      </router-link>
      <p class="bookTitle">斗破苍穹</p>
      <p class="bookCon">这里是属于斗气的世界，没有花俏艳丽的魔法，有的，仅仅是繁衍到巅峰的斗气！</p>
      <p class="bookmsg"><span>作者:天蚕土豆</span><span>订阅：250000</span><span>点击:10000000</span></p>
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
        $(".bomtab a:eq(3)").css("background", "#b2b4b4");
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
  @import '../assets/css/create.css'
</style>