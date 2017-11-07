<template>
  <div class="self">
    <div class="header container-fluid">
      请先登录
    </div>


    <div class="container-fluid loginfrom">
      <form action="#" method="post">
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
          <input type="text" class="form-control" placeholder="账号">
        </div>
        <div class="input-group">
          <span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>
          <input type="password" class="form-control" placeholder="密码">
        </div>
        <button type="button" class="btn btn-info btn-lg btn-block">登录</button>
      </form>
      <!--<button type="button" class="btn btn-info btn-lg btn-block" onclick="window.location.href = 'regist.html'; ">注册</button>-->
      <router-link to="/regist" class="btn btn-info btn-lg btn-block" tag="button">注册</router-link>
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
  @import '../assets/css/self.css'

</style>