// 　ハンバーガーメニューの操作
$(function(){
  // 初期状態でハンバーガーメニューを非表示
  $("#hamburger-background").hide();
  $("#hamburger-menu").hide();
  let showHamburger = false;
  // ハンバーガーメニューをクリックしたときの処理
  $("#menu, #menu-about, #menu-contact").click(function(){
    $("#hamburger-background").toggle();
    $("#hamburger-menu").toggle("slow");
    $("html").toggleClass("scroll-lock");
    $("#hamburger-top").toggleClass('is-active-top');
    $("#hamburger-middle").toggleClass('is-active-middle');
    $("#hamburger-bottom").toggleClass('is-active-bottom');
    if (showHamburger == false) {
      $('.header__hamburger-text').css('color', '#FFF');
      $('.header__hamburger-top').css('background-color', '#FFF');
      $('.header__hamburger-middle').css('background-color', '#FFF');
      $('.header__hamburger-bottom').css('background-color', '#FFF');
      showHamburger = true;
    }else{
      var scroll = $('#scroll-point').offset().top + $('#scroll-point').height(); // ターゲットの位置取得
      if($(window).scrollTop() > scroll){ //fvが画面外になったら
        // $('.header__logo').css('fill', '#000'); 
        $('.header__hamburger-text').css('color', '#000');
        $('.header__hamburger-top').css('background-color', '#000');
        $('.header__hamburger-middle').css('background-color', '#000');
        $('.header__hamburger-bottom').css('background-color', '#000');
      }else{
        $('.header__hamburger-text').css('color', '#FFF');
        $('.header__hamburger-top').css('background-color', '#FFF');
        $('.header__hamburger-middle').css('background-color', '#FFF');
        $('.header__hamburger-bottom').css('background-color', '#FFF');
      }
      showHamburger = false;
    }
  });
});

