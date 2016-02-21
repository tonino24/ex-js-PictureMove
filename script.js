$(document).ready(function() {
  $('#move').on('click', function() {
    $("#monimg").animate({
      left: $('#absyx').val() + "px",
      top: $('#ordy').val() + "px"
    });
  });
});
