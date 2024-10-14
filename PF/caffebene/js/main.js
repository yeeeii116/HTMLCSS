$(".Top").click(function(e){
    e.preventDefault();
    $("html, body").stop().animate({scrollTop: 0},800);
})

var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let num = Math.floor(Math.random()*5);
let num1 = Math.floor(Math.random()*5);
let num2 = Math.floor(Math.random()*5);
let num3 = Math.floor(Math.random()*5);
let num4 = Math.floor(Math.random()*5);
let num5 = Math.floor(Math.random()*5);

$(".img").find(".cat").attr("src",`images/cat${num}.png`);
$(".img").find(".cat1").attr("src",`images/cat${num1}.png`);
$(".img").find(".cat2").attr("src",`images/cat${num2}.png`);
$(".img").find(".cat3").attr("src",`images/cat${num3}.png`);
$(".img").find(".cat4").attr("src",`images/cat${num4}.png`);
$(".img").find(".cat5").attr("src",`images/cat${num5}.png`);

$(".img").hover(function(e){
    e.preventDefault();
    $(this).find(".h_img").addClass("on");
},function(){
    $(this).find(".h_img").removeClass("on");
});

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    // loopAdditionalSlides : 1,
    centeredSlides: false,
    // slidesOffsetBefore: 150,
    // slidesOffsetAfter: 100,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$(".swiper-slide").hover(function(e){
    e.preventDefault();
    $(this).find("img").css("border","3px solid #3a466a");
},function(){
    $(this).find("img").css("border","none");
});
