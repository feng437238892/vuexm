<template>
  <div class="case">
    <div class="footer container-fluid">
      <div class="list-group bomtab">
        <a href="case.html" class="list-group-item" style="margin-left:0px;">书架</a>
        <a href="free.html" class="list-group-item">免费</a>
        <a href="index.html" class="list-group-item">书城</a>
        <a href="create.html" class="list-group-item">搜索</a>
        <a href="self.html" class="list-group-item">我的</a>
      </div>
    </div>
    <div class="container-fluid clickbook">
      <img src="/src/assets/image/homeimg1.jpg" />
      <div class="bookm">
        <div class="bookn"></div>
        <div class="jdu">已读32.5%</div>
        <div class="btnji">
        <router-link tag="button" to="/list" class="btn btn-info">继续阅读</router-link>
        </div>
      </div>
    </div>
    <div class="container-fluid clsjing">
      <div class="mfbook">
        <img src="/src/assets/img/f4.jpg" />
        <div class="bookname">斗破苍穹 </div>
        <div class="bookautor">天蚕土豆</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f20.jpg" />
        <div class="bookname">斗破苍穹 </div>
        <div class="bookautor">天蚕土豆</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f21.jpg" />
        <div class="bookname">一念永恒 </div>
        <div class="bookautor">耳根</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f22.jpg" />
        <div class="bookname">永生</div>
        <div class="bookautor">天蚕土豆</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f15.jpg" />
        <div class="bookname">斗破苍穹 </div>
        <div class="bookautor">天蚕土豆</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f12.jpg" />
        <div class="bookname">斗破苍穹 </div>
        <div class="bookautor">天蚕土豆</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f11.jpg" />
        <div class="bookname">斗破苍穹 </div>
        <div class="bookautor">梁羽生</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f7.jpg" />
        <div class="bookname">翡翠娃娃 </div>
        <div class="bookautor">古龙</div>
      </div>
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
        $(".bomtab a:eq(0)").css("background", "#b2b4b4");
        var w = $(window).width();
        $("#homeimg").css("marginTop", head);
        $("#homeimg").css("width", w);
        var conh = $(window).width();
        $(".bomtab a").mouseover(function () {
          $(".bomtab a").css("background", "#ffffff");
          $(this).css("background", "#b2b4b4");
        });
        $(".clickbook img").attr("src", $(".mfbook img:eq(0)").attr("src"));
        $(".bookn").text($(".bookname:eq(0)").text());
        $(".mfbook img").click(function () {
          //alert($(this).next().text());
          $(".bookn").text($(this).next().text());
          $(".clickbook img").attr("src", $(this).attr("src"));
        });
      });
    }
  }
</script>
<style>
  @import '../assets/css/case.css'
</style>