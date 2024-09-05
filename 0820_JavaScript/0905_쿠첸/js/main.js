let head_bg = document.querySelector(".head");
let gnb = document.querySelectorAll(".menu > li");
let sub = document.querySelectorAll(".sub");
let subUl = document.querySelectorAll(".sub>ul");

function myfnc(){
	sub.forEach(function(v,k){
		v.classList.remove("on");
		v.style.height = 0 + "px";
		v.querySelector("a").classList.remove("on");
	})
	head_bg.style.height = 80 + "px";
	head_bg.style.background = "none"; // backgroundColor는 transparent
	document.querySelector(".logo img").src = "images/logo.svg";
}
myfnc();
gnb.forEach(function(v,k){ // k = .menu li의 인덱스 번호 0,1,2...
	v.onmouseenter = function(){
		console.log(head_bg.offsetHeight); // 80
		head_bg.style.background = "#fff";
		document.querySelector(".logo img").src = "images/logo-d.svg";
		try{ // 에러가 안날 경우
			subUl.forEach(function(){
			let ht = subUl[k].offsetHeight+120; //높이 잘리는 부분이 있어서 높이 +120 추가
			//console.log(ht);
			gnb[k].querySelector(".sub").style.height = ht + "px";
			gnb[k].querySelector(".sub").classList.add("on");
			head_bg.style.height = ht + "px"; // 80이였던 높이가 서브크기에 맞게 늘어남
		})
		}catch(error){ //sub가 없는건 에러가 뜨기 때문에(고객센터 등)
			head_bg.style.height = 80 + "px"; //기본 헤드 높이값만 적용
		}
	}
	v.onmouseleave = function(){
		myfnc();
	}
})
head_bg.onmouseenter = function(){
	gnb.forEach(function(v,k){
		v.querySelector("a").classList.add("on");
	})
	head_bg.style.height = 80+"px";
	head_bg.style.background = "#fff";
	document.querySelector(".logo img").src = "images/logo-d.svg";
}
head_bg.onmouseleave =function(){
	myfnc();
	gnb.forEach(function(v,k){
		v.querySelector("a").classList.remove("on");
	})
}