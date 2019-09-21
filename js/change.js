$(function() {
  // セレクトをチェンジを行ったら文言変更
  $('.selectBox').on('change', function() {
    $('option:selected').val();
    var select = $('option:selected').text();
    $('.text').text(select);
  });

  $('.sex').on('change', function() {
    $(this).val();
  });
});
