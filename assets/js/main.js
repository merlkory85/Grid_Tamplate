$(document).ready(function () {
  $(".header-navbar__btn").on("click", function () {
    $(this).toggleClass("header-navbar__btn--active");
    $(".header-navbar__list").stop(true, true).slideToggle(500);
  });
});

// $(document).ready(function () {
//   $(".header-navbar__btn").click(function () {
//     $(this).toggleClass("header-navbar__btn--active");
//   });
// });
