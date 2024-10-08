
    $("header").hover(function(){
        $(".logo a").css("backgroundImage","url(https://www.yuhancare.com/data/yuhancare/inc/img_new/common/yuhancare_logo_all_white.png)")
        $(".bg1").css("borderBottom","1px solid #888");
    },function(){
        $(".logo a").css("backgroundImage","url(images/yuhancare_logo_white.png)");
        $(".bg1").css("borderBottom","1px solid rgba(34, 34, 34, 0.1)");
    });

    let bool = true;
    $(".lang_select").click(function(){
        if(bool){
            $(".lang_select").addClass("on");
            $(".lang_list").addClass("on");
        }else{
            $(".lang_select").removeClass("on");
            $(".lang_list").removeClass("on");
        }
        bool = !bool;
    });

    $(".lang_list li").hover(function(){
        $(this).find("a").css("color","#444");
        $(this).css("backgroundColor","rgba(255,255,255,0.4");
    },function(){
        $(this).find("a").css("color","#717171");
        $(this).css("backgroundColor","rgba(255,255,255,0.7");
    });
  
    $(".intro .yuhancare .item li").eq(0).addClass("on");
    $(".mask .zoom_circle").eq(0).addClass("on");
    $(".intro .btn li").eq(0).addClass("on");
    $(".intro .btn li").click(function(){
        let i = $(this).index();
        console.log(i);
        $(".intro .btn li").removeClass("on");
        $(".intro .yuhancare .item li").removeClass("on");
        $(".intro .btn li").eq(i).addClass("on");
        $(".intro .yuhancare .item li").eq(i).addClass("on");
        $(".mask span").removeClass("on");
        $(".mask span").eq(i).addClass("on");
    });

    $(function () {
    // $(".analects .imgbox img:first-child").nextAll().hide(); 
    // img:first-child 이후에 나오는 모든 것 숨기기
    $(".analects .imgbox img").hide(); //img 모두 숨기기
    $(".analects .imgbox img").eq(0).show(); //첫번째 img만 보이게 하기

    $(".analects .desc p").eq(0).nextAll().hide(); //첫번째 .desc p 이후에 나오는 모든 것 숨기기

    setInterval(function () {
    let imgFirst = $(".analects .imgbox img").eq(0);
    imgFirst.fadeOut(1000).next().fadeIn(1000); //첫번째img가 1초동안 페이드아웃된 후 두번째img가 1초동안 페이드인
    $(".analects .imgbox").append(imgFirst); // 첫번째img가 다시 첫번째로 돌아와 계속 반복될 수 있도록. 4초동안 인터벌

    let txtFirst = $(".analects .desc p").eq(0);
    txtFirst.fadeOut(1000).next().fadeIn(1000);
    $(".analects .desc").append(txtFirst);
    }, 4000);
    });

    $(".link_list").click(function(){
        if(bool){
            $(".link_list ul").addClass("on");
            $(".link_open").addClass("on");
        }else{
            $(".link_list ul").removeClass("on");
            $(".link_open").removeClass("on");
        }
        bool = !bool;
    });

    //  let item = document.querySelectorAll(".intro .yuhancare .item li")
            // let btn = document.querySelectorAll(".intro .btn li")

            // item[0].classList.add("on")
            // btn[0].querySelector("a").classList.add("on")

            // function myfnc(){
            //     btn.forEach(function(value,key){
            //         value.querySelector("a").classList.remove("on");
            //     })
            // }

            // btn.forEach(function(value,key){
            //     value.onclick = function(e){
            //         e.preventDefault();
            //         myfnc();
            //         item.forEach(function(value,key){
            //             value.classList.remove("on");
            //         })
            //         value.querySelector("a").classList.add("on");
            //         item[key].classList.add("on");

            //     }
            // });

            const progressCircle = document.querySelector(".autoplay-progress svg");
            const progressContent = document.querySelector(".autoplay-progress span");
            let cb = document.querySelectorAll(".bottom_wrap .center_bottom li");
            cb[0].querySelector("a").classList.add("on");
            var swiper = new Swiper(".mySwiper", {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                on: {
                    slideChange: function(){
                        for(let i=0;i<3;i++){
                            cb[i].querySelector("a").classList.remove("on");
                        }
                        cb[this.realIndex].querySelector("a").classList.add("on");
                    }
                }
            });
            cb.forEach(function(v,k){
                v.onclick = function(){
                    swiper.slideTo(k);
                }
            });
            $(".people .swiper-slide").eq(0).find("img").css("opacity","1")
            var swiper2 = new Swiper(".mySwiper2", {
                effect:"fade",
                loop: true,
                // autoplay: {
                //     delay: 5000,
                //     disableOnInteraction: false,
                //     pauseOnMouseEnter: true,
                // },
                on:{
                    slideChange:function(){
                        console.log(this.realIndex);
                    // $(".people .swiper-slide").find("img").css("opacity","0");
                    $(".people .swiper_slide").eq(this.realIndex).find("img").css("opacity","1")   
                    }
                }
            });

 