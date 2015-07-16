/* reference :
 * http://stackoverflow.com/questions/9652944/jquery-page-scroll-to-different-page
 */

var jump = function(e) {
  e.preventDefault();

  $('html, body').animate({

    scrollTop : $("header.hero").height()

  }, 500);
}

var jumpUp = function(e) {
  e.preventDefault();

  var target = $(this);
  $('html, body').animate({

    scrollTop : $(target).parent().prev("section").offset().top - 200

  }, 15000);

}

var jumpDown = function(e) {
  e.preventDefault();

  var target = $(this);

  $('html, body').animate({

    scrollTop : $(target).parent().next().offset().top - 200

  }, 500);
}

var hero = function(e) {
  e.preventDefault();

  var target = $(this);

  $('html, body').animate({
    scrollTop : $(".hero").offset().top
  }, 1000);
}

var team = function(e) {
  e.preventDefault();

  var target = $(this);

  $('html, body').animate({
    scrollTop : $(".container section#members").offset().top
  }, 1000);
}

var environment = function(e) {
  e.preventDefault();

  var target = $(this);

  $('html, body').animate({
    scrollTop : $(".container section#environment").offset().top
  }, 1000);
}

var join = function(e) {
  e.preventDefault();

  var target = $(this);

  $('html, body').animate({
    scrollTop : $(".container section#join_us").offset().top
  }, 1000);
}

 //x_colors: ['#ffffff', '#ffffff', '#ffffff', '#f0f0f0', '#e3e3e3', '#d7d7d7', '#cacaca', '#bfbfbf', '#ababab', '#989898', '#8e8e8e', '#848484']

$(function(){

  //MAC에서 '산돌SD고딕'으로 한글 표시 -- check whether or not a valid func
  if(navigator.appVersion.indexOf("Mac") != -1) {
    $(html).css("%base-font-kr", "산돌SD고딕");
  }

  //canvas : HTML5
  //old vers. IE에서 HTML5 지원 안되는데 이런 경우에 대한 처리 -> image 삽입 or polyfill?
  //src :  http://www.yjn.kr/bbs/board.php?bo_table=prog_html&wr_id=771

  var pattern = Trianglify({
    width : $("canvas").width(), height : $("canvas").height(), cell_size: 300, x_colors: ['#bfcccf', '#ced8da', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'], y_colors: ['#91a7ad','#bfcccf', '#ced8da', '#ffffff', '#ffffff', '#ffffff'], variance: 1
  });

  var draw_canvas = document.getElementById("trianglify");


  pattern.canvas(draw_canvas);


  $("img.center_logo").css("margin-left", -$('img.center_logo').width()/2);
  $(".vision").css("margin-left", -$('.vision').width()/2);


  $(".people_dancing img:even").addClass("animation_dance").addClass("dance_property");
  $(".people_dancing img:odd").addClass("animation_danceReverse").addClass("dance_property");


  $("#join_us .group div").each(function(){
    $(this).mouseenter(function(){
      var target = $(this);

      target.css("background-color", "#a32c2c");
      target.children("h1").css("opacity", "0");
      target.children("p").css("opacity", "1");
    })
    .mouseleave(function(){
      var target = $(this);

      target.css("background-color", "#bbbbbb");
      target.children("h1").css("opacity", "1");
      target.children("p").css("opacity", "0");
    })
  });


  $(".responsibility").css("margin-left", -$(".responsibility").width()/2);
  $("#button").css("margin-left", -$("#button").width()/2);

  //$(window).scroll(function(){
    ////src : www.ordinarycoder.com/jquery-fade-content-scroll

    //$(".container section").each(function(){
      //if(this.id == "members"){
        //$(".container section#members section").each(function(){
          //$(this).addClass("fadeInBlock");
        //});
      //}
      //else {
        //$(this).addClass("fadeInBlock");
      //}
    //});

    //$(".fadeInBlock").each(function(i){
      //var bottom_of_object = $(this).position().top + $(this).outerHeight();
      //var bottom_of_window = $(window).scrollTop() + $(window).height();

      ////adjust the added number to either have a delay of that the content starts fading a bit before you reach it
      //bottom_of_window = bottom_of_window + 200;

      //if(bottom_of_window > bottom_of_object) {
        //$(this).animate({'opacity' : '1'}, 1000);
      //}
    //})
  //});

  $(".scroll").bind("click", jump);
  $(".arrow").bind("click", jumpDown);
  $(".arrowReverse").bind("click", jumpUp);
  
  $(".global-nav-item .logo .banner_logo").bind("click", hero);
  $("ul.global-nav-list li:first").bind("click", team);
  $("ul.global-nav-list li:nth-child(2)").bind("click", environment);
  $("ul.global-nav-list li:nth-child(3)").bind("click", join);

  $('#members section').each(function(){
    $($(this).find(".profile img")).click(function(){
      $($($(this).closest(".profile")).find("p")).toggle();
      $($($(this).closest(".profile")).find("#example")).toggle();
    });
  });

  /*
  * source : jsfiddle.net/tcloninger/e5qad/
  */

});
