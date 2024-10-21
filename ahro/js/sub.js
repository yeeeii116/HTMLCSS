$(function(){
    $("#menu").hover(function(){
        $(".sub").addClass("on");
        $(".sub_bg").addClass("on");
    },function(){
        $(".sub").removeClass("on");
        $(".sub_bg").removeClass("on");
    });

    let bool = true;
	$(".menu_ico").click(function(){
		if(bool){
			$(".menu_ico span").addClass("on");
			$(".pop_menu").addClass("on");
		}else{
			$(".menu_ico span").removeClass("on");
			$(".pop_menu").removeClass("on");
		}
		bool = !bool;
	});
});