$(document).ready(function(){
   var ht = $(window).height();	
	$("section").height(ht);
	
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
		$(window).scrollTop(ht);
		location.reload();
	});

	let bool = true;
	$(".menu_ico").click(function(){
		if(bool){
			$(".menu_ico span").addClass("on");
		}else{
			$(".menu_ico span").removeClass("on");
		}
		bool = !bool;
	});
	
	$("#title li").on("click",function(e){
		e.preventDefault();
		var ht = $(window).height();
		var i = $(this).index();
		// console.log(ht);
		$("#title li").removeClass("on");
		$("#title li").eq(i).addClass("on");
		var nowTop = i*ht;			
		$("html,body").stop().animate({"scrollTop":nowTop},1400);
	});
	
	$(window).on("scroll",function(){	
		var ht = $(window).height();
		var scroll = $(window).scrollTop();
		console.log("scroll :"+scroll);
		for(var i=0; i<5;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$("#title li").removeClass("on");
				$("#title li").eq(i).addClass("on");
			};
		}
		
		$("section").on("mousewheel",function(event,delta){    
		//마우스 휠을 올렸을때	
          if (delta > 0) {  
			//변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
             var prev = $(this).prev().offset().top;
			 console.log("prev :"+prev); 
			 //문서 전체를 prev에 저장된 위치로 이동
			 $("html,body").stop().animate({"scrollTop":prev},1400);
			 
		//마우스 휠을 내렸을때	 
          }else if (delta < 0) {  
			//변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
			 var next = $(this).next().offset().top;
			 //문서 전체를 next에 저장된 위치로 이동
			 $("html,body").stop().animate({"scrollTop":next},1400);                                         
          }
    });
			
		
		
	
	});
	
});















