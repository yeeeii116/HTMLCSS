$(function(){
    AOS.init({
        easing: "ease",
        duration: 1000,
        offset: 150,
        delay: 300,
    });

    $(".Top").click(function(e){
        e.preventDefault();
        $("html, body").stop().animate({scrollTop: 0},800);
    })

    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    var swiper2 = new Swiper(".mySwiper2", {
        direction: "vertical",
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});



