﻿/// <reference path="jquery.min.js" />
/// <reference path="../bootstrap/js/bootstrap.min.js" />
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