$(function() {
  $('#page_top').hide();
  // top地点からスクロールを行ったらボタン表示
  $(window).scroll(function () {
    if($(window).scrollTop() > 0) {
      $('#page_top').slideDown(600);
    } else {
      $('#page_top').slideUp(600);
    }
  });

  //ページトップへのスクロール
  $('#page_top').click(function () {
    //id名#page_topがクリックされたら、以下の処理を実行
    $("html,body").animate({scrollTop:0},"600");
  });
});
