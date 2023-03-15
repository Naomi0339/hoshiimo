// メニューオープナーここから
$(".openbtn1").click(function () {
  //ボタンがクリックされたら
  $(this).toggleClass("active"); //ボタン自身に activeクラスを付与し
  $("#openbtn1_nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
});

$(".openbtn1_nav_list a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".openbtn1").removeClass("active"); //ボタンの activeクラスを除去し
  $("#openbtn1_nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスも除去
});
// メニューオープナーここまで

// main_viewここから
$(".slider").not(".slick-initialized").slick({
  fade: true, //切り替えをフェードで行う。初期値はfalse。
  autoplay: true, //自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 3000, //次のスライドに切り替わる待ち時間
  speed: 1000, //スライドの動きのスピード。初期値は300。
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1, //スライドを画面に3枚見せる
  slidesToScroll: 1, //1回のスクロールで3枚の写真を移動して見せる
  arrows: true, //左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
  dots: true, //下部ドットナビゲーションの表示
  pauseOnFocus: false, //フォーカスで一時停止を無効
  pauseOnHover: false, //マウスホバーで一時停止を無効
  pauseOnDotsHover: false, //ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$(".slider").on("touchmove", function (event, slick, currentSlide, nextSlide) {
  $(".slider").not(".slick-initialized").slick("slickPlay");
});

// アコーディオンメニュー
$(function () {
  $(".js-accordion-title").on("click", function () {
    $(this).siblings(".accordion-text").slideToggle(200);
    $(".js-accordion-title").not($(this)).siblings(".accordion-text").slideUp();
  });
});
//ページトップ
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    //上から200pxスクロールしたら
    $("#page_top").removeClass("DownMove"); //#page-topについているDownMoveというクラス名を除く
    $("#page_top").addClass("UpMove"); //#page-topについているUpMoveというクラス名を付与
  } else {
    if ($("#page_top").hasClass("UpMove")) {
      //すでに#page-topにUpMoveというクラス名がついていたら
      $("#page_top").removeClass("UpMove"); //UpMoveというクラス名を除き
      $("#page_top").addClass("DownMove"); //DownMoveというクラス名を#page-topに付与
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$("#page_top a").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0, //ページトップまでスクロール
    },
    500
  ); //ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false; //リンク自体の無効化
});

// スクロールしたら下からふわっと浮き上がる
$(function () {
  $(window).scroll(function () {
    $("section").each(function () {
      var top = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > top - height + 100) {
        $(this).addClass("scrollin");
      }
    });
  });
});

var headNav = $(".header_container_navi_top_menu");
/* 初期表示、スクロール時にイベント開始 */
$(window).on("load scroll", function () {
  const judge = headNav.hasClass("is_show");
  console.log(judge);
  /* スクロール位置の高さが500pxより大きい、かつis_showクラスがない場合 */
  if ($(this).scrollTop() > 500 && headNav.hasClass("is_show") == false) {
    headNav.css("display", "flex");
    headNav.css({ top: "-72px" }); /* ヘッダーの高さ分マイナスにする */
    headNav.addClass("is_show");
    headNav.animate({ top: 0 }, 600);
  } else if ($(this).scrollTop() < 200 && headNav.hasClass("is_show") == true) {
    /* スクロール位置の高さが200pxより小さい、かつis_showクラスがある場合 */
    headNav.removeClass("is_show");
    headNav.css("display", "none");
  }
});
