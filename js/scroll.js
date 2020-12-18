$(function () {
  // ページ読み込み時に実行したい処理
  // contactページからのジャンプ
  $(window).on('load', function () {
    var query = location.search;
    if (query) {
      var value = decodeURIComponent(query).split('=');
      // 到着地点を取得
      var target = $(value[1]);

      // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
      const offset = -30;
      // 到着地点を数値で取得
      var position = target.offset().top + offset;
      // スムーズスクロール
      $('body,html').animate({ scrollTop: position }, 400, 'swing');
      return false;
    }
  });

  // ページ内スクロール
  $(function () {
    // #で始まる出発地点をクリックした場合に処理を実行
    $('a[href^="#"]').click(function () {
      // ハンバーガーメニューを消す
      $("#hamburger-background").hide();
      $("#hamburger-menu").hide("slow");
      $("html").removeClass("scroll-lock");
      $("#hamburger").removeClass('is-active');
      // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
      const offset = -30;
      // 出発地点の値を取得
      var href = $(this).attr("href");
      // 到着地点を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 到着地点を数値で取得
      var position = target.offset().top + offset;
      // スムーススクロール
      $('body,html').animate({ scrollTop: position }, 400, 'swing');
      return false;
    });
  });

  // スクロール量でヘッダー文字色変更
  $(window).scroll(function () {
    var scroll = $('#scroll-point').offset().top + $('#scroll-point').height(); // ターゲットの位置取得
    if ($(window).scrollTop() > scroll) { //fvが画面外になったら
      changeHeaderColor("#000");
    } else {
      changeHeaderColor("#FFF");
    }
  });

  // ヘッダーの色を変更する関数
  function changeHeaderColor(color){
    $('#icon, #digsmile, #inc').css('fill', color);
    $('.header__hamburger-text').css('color', color);
    $('.header__hamburger-top').css('background-color', color);
    $('.header__hamburger-middle').css('background-color', color);
    $('.header__hamburger-bottom').css('background-color', color);
  }
});
