<template>
  <div class="free">
    <div class="header container-fluid">
      <div class="searchbook"><span class="glyphicon glyphicon-search"></span>书名/作者/关键字</div>
    </div>

    <div class="container-fluid booklab">
      <router-link to="/detail/1"><span class="label label-default">玄幻</span>
      </router-link>
      <router-link to="/detail/1"> <span class="label label-primary">仙侠/修真</span>
      </router-link>
      </router-link>
      <router-link to="/detail/1"> <span class="label label-primary">武侠</span>
      </router-link>
      <router-link to="/detail/1"> <span class="label label-primary">网游</span>
      </router-link>
      <router-link to="/detail/1"> <span class="label label-primary">历史</span>
      </router-link>
      <span class="label label-info">穿越</span>

      <span class="label label-warning">军事</span>
      <span class="label label-success">青春/校园</span>
      <span class="label label-danger">霸道总裁</span>
      <span class="label label-info">言情</span>
      <span class="label label-danger">悬疑</span>
      <span class="label label-warning">乡村</span>
    </div>
    <div class="container-fluid bgk"></div>
    <div class="container-fluid clstil">
      <div class="icoself"></div>免费精品
    </div>
    <div class="container-fluid clsjing">
      <div class="mfbook">
        <router-link to="/detail/1">
          <img src="/src/assets/img/f11.jpg" />
        </router-link>
        <div class="bookname">星辰变</div>
        <div class="bookautor">大浪淘沙</div>
      </div>
      <div class="mfbook">
        <router-link to="/detail/1">
          <img src="/src/assets/img/f27.jpg" />
        </router-link>
        <div class="bookname">轩辕剑</div>
        <div class="bookautor">胡歌</div>
      </div>
      <div class="mfbook">
        <router-link to="/detail/2">
          <img src="/src/assets/img/f28.jpg" />
        </router-link>
        <div class="bookname">三国演义</div>
        <div class="bookautor">罗贯中</div>
      </div>
      <div class="mfbook">
        <router-link to="/detail/1">
          <img src="/src/assets/img/f29.jpg" />
        </router-link>
        <div class="bookname">水浒传</div>
        <div class="bookautor">施耐庵</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f22.jpg" />
        <div class="bookname">斗破苍穹</div>
        <div class="bookautor">天蚕土豆</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f21.jpg" />
        <div class="bookname">都市兵王</div>
        <div class="bookautor">一叶子</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f13.jpg" />
        <div class="bookname">女神老婆</div>
        <div class="bookautor">天骄</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f14.jpg" />
        <div class="bookname">斗破苍穹 </div>
        <div class="bookautor">天蚕土豆</div>
      </div>
    </div>
    <div class="container-fluid lookmore">
      <button type="button" class="btn btn-primary btn-lg btn-block more">查看更多</button>
    </div>
    <div class="container-fluid bgk"></div>
    <div class="container-fluid clstil">
      <div class="icoself"></div>男生免费
    </div>
    <div class="container-fluid clsjing">
      <div class="mfbook">
        <router-link to="/detail/4">
          <img src="/src/assets/img/f15.jpg" />
        </router-link>
        <div class="bookname">巅峰剑王</div>
        <div class="bookautor">天蚕土豆</div>
      </div>
      <div class="mfbook">
        <router-link to="/detail/2">
          <img src="/src/assets/img/f16.jpg" />
        </router-link>
        <div class="bookname">巅峰剑王</div>
        <div class="bookautor">天蚕土豆</div>
      </div>
      <div class="mfbook">
        <router-link to="/detail">
          <img src="/src/assets/img/f17.jpg" />
        </router-link>
        <div class="bookname">武之霸王</div>
        <div class="bookautor">天蚕土豆</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f18.jpg" />
        <div class="bookname">侠行天下</div>
        <div class="bookautor">一梦已成神</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f18.jpg" />
        <div class="bookname">追魂一笑</div>
        <div class="bookautor">何望琴</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f18.jpg" />
        <div class="bookname">最佳电影人 </div>
        <div class="bookautor">爱过一只猫</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f19.jpg" />
        <div class="bookname">肆虐华娱</div>
        <div class="bookautor">都有一个梦</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f20.jpg" />
        <div class="bookname">斗破苍穹 </div>
        <div class="bookautor">天蚕土豆</div>
      </div>
    </div>
    <div class="container-fluid lookmore">
      <button type="button" class="btn btn-warning btn-lg btn-block more">查看更多</button>
    </div>
    <div class="container-fluid bgk"></div>
    <div class="container-fluid clstil">
      <div class="icoself"></div>女生免费
    </div>
    <div class="container-fluid clsjing">
      <div class="mfbook">
        <router-link to="/detail">
          <img src="/src/assets/img/f20.jpg" />
        </router-link>
        <div class="bookname">霸道总裁爱上</div>
        <div class="bookautor">超级坦克科比</div>
      </div>
      <div class="mfbook">
        <router-link to="/detail">
          <img src="/src/assets/img/f21.jpg" />
        </router-link>
        <div class="bookname">极品女友</div>
        <div class="bookautor">雨声下</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f22.jpg" />
        <div class="bookname">诛仙</div>
        <div class="bookautor">萧鼎</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f23.jpg" />
        <div class="bookname">神墓</div>
        <div class="bookautor">辰南</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f25.jpg" />
        <div class="bookname">坏蛋是怎样炼成的</div>
        <div class="bookautor">六安</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f25.jpg" />
        <div class="bookname">极品公子</div>
        <div class="bookautor">叶无道</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f22.jpg" />
        <div class="bookname">天涯明月刀</div>
        <div class="bookautor">你爱上我了</div>
      </div>
      <div class="mfbook">
        <img src="/src/assets/img/f26.jpg" />
        <div class="bookname">笑傲江湖 </div>
        <div class="bookautor">天蚕土豆</div>
      </div>
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
  export default{
  mounted(){
    $(function () {
      var h = $(window).height();
      var head = $(".header").height();
      var foot = $(".footer").height();
      var content = h - head - foot;
      $(".bomtab a:eq(1)").css("background", "#b2b4b4");
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
  @import '../assets/css/free.css'
</style>