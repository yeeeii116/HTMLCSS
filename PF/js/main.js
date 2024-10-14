$(function(){
    let ht = $(window).scrollTop();
   $(window).scroll(function(){
        let ht = $(window).scrollTop();
        if(ht > 800){
            $(".go_top").css("opacity","1");
        }else{
            $(".go_top").css("opacity","0");
        }
   });

   $(".go_top").click(function(){
        $("html, body").animate({scrollTop:0},800);
   });

   $(".profil_btn").click(function(){
        $("html, body").animate({scrollTop:920},800);
   });
   $(".skills_btn").click(function(){
        $("html, body").animate({scrollTop:1520},800);
   });
   $(".work_btn").click(function(){
        $("html, body").animate({scrollTop:2400},800);
   });
   $(".contc_btn").click(function(){
        $("html, body").animate({scrollTop:5300},800);
   });

    const showNav = gsap.from('header', { 
        yPercent: -100,
        paused: true,
        duration: 0.2
        }).progress(1);

        ScrollTrigger.create({
        start: "top top",
        end: "max",
        // markers: false,
        onUpdate: (self) => {
            self.direction === -1 ? showNav.play() : showNav.reverse()
        }
    });
    const showBg = gsap.from('.header_wrap', { 
        yPercent: -100,
        paused: true,
        duration: 0.2
        }).progress(1);

        ScrollTrigger.create({
        start: "top top",
        end: "max",
        // markers: true,
        onUpdate: (self) => {
            self.direction === -1 ? showBg.play() : showBg.reverse()
        }
    });

    const progressBar = document.querySelector(".bar");
    let scrollNum = 0;
    let documentHeight = 0;

    // 전체 문서에서 얼마나 스크롤되었는지 계산
    const getPercent = (scroll, total) => {
    return (scroll / total) * 100;
    };

    window.addEventListener("scroll", () => {
    // scroll top이기 때문에 height가 5000px이면 5000에서 화면높이를 뺀 값까지만 나온다.
    scrollNum = document.documentElement.scrollTop; // 또는 window.scrollY 사용 가능

    // scroll top값을 기준으로 계산할 것이기 때문에 문서의 전체 길이에서 화면 크기만큼 빼준다.
    documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    // 전체 문서에서 몇 %만큼 스크롤되었는지 계산해 progress bar의 width를 바꿔준다.
    progressBar.style.width = getPercent(scrollNum, documentHeight) + "%";
    });

    const ani1 = gsap.timeline(); //할당 재선언 안됨
    ani1.from("#sec3 .item .wave",{
        height:0,
    opacity:0,
    });
    ScrollTrigger.create({
        animation: ani1,
        trigger:"#sec3",
        // markers: true,
        start:"top top", 
        end: "130% top",
        pin: true, 
        scrub: true,
        anticipatePin: 1,
    });
 })