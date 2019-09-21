$(function() {
  // アラート
  $('.alert').on('click', function() {
    alert('hell world');
  });

  // 文字変更
  $('.character').on('click', function() {
    $('.text').text('変更されました。');
  });

  // 色変更
  $('.color').on('click', function() {
    $('.back').css('background', '#00f');
  });

  // フィードイン
  $('.feed-in').on('click', function() {
    $('.feedIn').hide().fadeIn(3000);
  });

  // フィードアウト
  $('.feed-out').on('click', function() {
    $('.feedOut').fadeOut(3000);
  });

  // 文字追加
  $('.addCharacter').on('click', function() {
    $('.text2').append('追加されました。');
  });

  // 文字コピー
  $('.copyCharacter').on('click', function() {
    $('.text4').clone().appendTo('.text3');
  });

  // 表示
  $('.show').on('click', function() {
    $('.back2').show();
  });

  // 非表示
  $('.hide').on('click', function() {
    $('.back2').hide();
  });

  var topBtn=$('#page_top');
  topBtn.hide();
  //◇ボタンの表示設定
  $(window).scroll(function() {
    if($(this).scrollTop() > 80) {
      //---- 画面を80pxスクロールしたら、ボタンを表示する
      topBtn.fadeIn();
    }else{
      //---- 画面が80pxより上なら、ボタンを表示しない
      topBtn.fadeOut();
    }
  });

  // ◇ボタンをクリックしたら、スクロールして上に戻る
  topBtn.click(function() {
    $('body,html').animate({
    scrollTop: 0},500);
    return false;
  });

});
