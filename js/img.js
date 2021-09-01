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
    autoplay: 3000,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  })
});
