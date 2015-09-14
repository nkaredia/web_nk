/*
    Scroll Animation
*/
function scroll(link) {
    console.log(link);
    $('html,body').animate({
        scrollTop: $(link).offset().top
    }, {
        speed: 2000,
        easing: "easeInOutExpo"
    });
};