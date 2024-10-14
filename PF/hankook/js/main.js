$(function(){
    let bool=true;
   $(".menu").click(function(){
        if(bool){
            $("#popup").css({"left":"0","top":"0"});
            $(".top_right .logo2").css("display","none"); 
            $(this).find("span").addClass("on");
            $("body").addClass("on");
        }else{
            $("#popup").css({"left":"100%","top":"0"});
            $(".top_right .logo2").css("display","block");
            $(this).find("span").removeClass("on");
            $("body").removeClass("on");
        }
        bool = !bool;
   });
   
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

   $(".row_bgcolr .btn_opener").click(function(){
       if(bool){
            $(".row_bgcolr .item_list").addClass("on");
            $(".row_bgcolr .dropdown_value input").addClass("on");
            $(".row_bgcolr .btn_opener i").addClass("on");
       }else{
            $(".row_bgcolr .item_list").removeClass("on");
            $(".row_bgcolr .dropdown_value input").removeClass("on");
            $(".row_bgcolr .btn_opener i").removeClass("on");
       }
       bool = !bool;
   });

   $(".copy_right .btn_opener").click(function(){
       if(bool){
            $(".copy_right .item_list").addClass("on");
            $(".copy_right .dropdown_value input").addClass("on");
            $(".copy_right .btn_opener i").addClass("on");
       }else{
            $(".copy_right .item_list").removeClass("on");
            $(".copy_right .dropdown_value input").removeClass("on");
            $(".copy_right .btn_opener i").removeClass("on");
       }
       bool = !bool;
   });

   var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  AOS.init({
      easing: "ease",
      duration: 1000,
      offset: 120,
      /*스크롤에 얼마나 반응할지를 설정. 해당요소가 스크롤링이 120픽셀이상 진행될때 애니메이션이 시작되도록 지정 */
      delay: 200,
  });

  const ani = gsap.timeline();
  ani.from(".sec2 .sec2_wrap .s2_bg",{
      scale: 1.3,
  });
  ScrollTrigger.create({
      animation: ani,
      trigger:".sec2",
      markers: false,
      start:"top top",
      scrub: true,
  });
});