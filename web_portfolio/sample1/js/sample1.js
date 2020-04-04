$(".slider").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true
});
$(function() {
  $(".Toggle").click(function() {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".NavMenu").addClass("active"); //クラスを付与
    } else {
      $(".NavMenu").removeClass("active"); //クラスを外す
    }
  });
});
jQuery(".icon-hamburger").on("click", function() {
  if (jQuery(".menu-container .menu").css("display") === "block") {
    jQuery(".menu-container .menu").slideUp("1500");
  } else {
    jQuery(".menu-container .menu").slideDown("1500");
  }
});
