$(function(){
    $("header").hover(function(){
        $(".logo a").css("backgroundImage","url(https://www.yuhancare.com/data/yuhancare/inc/img_new/common/yuhancare_logo_all_white.png)")
        $(".bg1").css("borderBottom","1px solid #888");
    },function(){
        $(".logo a").css("backgroundImage","url(./images/yuhancare_logo_white.png)");
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

    $(".path_item").eq(0).addClass("on");

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

    let btn = document.querySelectorAll(".tab_list li");
        let con = document.querySelectorAll(".tab_match > li");
        btn[0].classList.add("on");
        con[0].classList.add("on");

        function myfnc(){
            btn.forEach(function(value,key){
                value.classList.remove("on");
            })
        }

        btn.forEach(function(value,key){
            value.onclick = function(e){
                e.preventDefault();
                
                con.forEach(function(v,k){
                    con[k].classList.remove("on");
                    console.log(k);
                })
                myfnc();
                btn[key].classList.add("on");
                con[key].classList.add("on");
            }
        })
});