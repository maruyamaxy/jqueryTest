$(function() {
  // $('.slider').slick();
  $('.slider').slick({
    // 自動再生
    autoplay:true,
    // 自動再生のスライド切り替え時間
    autoplaySpeed:5000,
    // インジケーター
    dots:true,
  });

  // 下記 Swiper
  var mySwiper = new Swiper ('.swiper-container', {
    effect: "flip",
    loop: true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  })
});
