<template>
  <div class="reg">
    <div class="header container-fluid">
      注册
    </div>
    <div class="container-fluid loginfrom">
      <form action="#" method="post">
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-star-empty"></span></span>
          <input type="text" class="form-control" placeholder="昵称">
        </div>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
          <input type="text" class="form-control" placeholder="账号">
        </div>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>
          <input type="password" class="form-control" placeholder="请设置密码">
        </div>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>
          <input type="password" class="form-control" placeholder="请确认密码">
        </div>
        <!--<button type="button" class="btn btn-info btn-lg btn-block">确认注册</button>-->

        <router-link to="/self" class="btn btn-info btn-lg btn-block" tag="button">确认注册</router-link>
      </form>
      <button type="button" class="btn btn-success history" onclick="history.go(-1)"><span class="glyphicon glyphicon-chevron-left"></span>返回</button>
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
  @import '../assets/css/regist.css'
</style>