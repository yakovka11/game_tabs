$(document).ready(function () {
  $('.item-head').on('click', '.item-tab:not(.active-tab)', (function (event) {
      $('.item-tab').removeClass('active-tab');
      $(this).addClass('active-tab');
      $('.item-body').removeClass('active').eq($(this).index()).addClass('active');
  }))
});