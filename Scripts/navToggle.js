/*
    Toggle Animation and Style
*/
$(".toggle-button").click(function () {
    $(".nav-align").slideToggle(300);
});
$(window).resize(function () {
    if ($(window).width() > 768) {
        $(".nav-align").removeAttr('style');
    }
});