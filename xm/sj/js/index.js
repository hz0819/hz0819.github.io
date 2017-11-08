// 大图滚动
var $wrap = $(".BIMG-wrap");
var $inner = $(".inner");
var $img = $inner.find("img");
var $left = $(".left");
var $right = $(".right");
var $span = $(".dd span");
var move_bol = false;
var index = 0;//记录第几张
//下一张

$right.on("click",function () {
	if (move_bol) {return}
	index++;
	if (index>4) {
		index=0;
	}	
	change()
})
//上一张
$left.on("click",function () {
	if (move_bol) {return}
	index--;
	if (index<0) {		
		index=4;
	}
	change()
})
//给3个小点按钮加点击事件
$span.on("click",function () {
	if (move_bol) {return}
	index = $(this).index();//记录点击第几张
	change()//执行切换函数	
})

// 切换函数	
function change() {
	$span.removeClass("select");
	// 0 1 2 3
	// if (index==3) {var n = 0}else{var n = index;}
	var n = index==5?0:index;
	$span.eq(index).addClass("select");
	$img.css("zIndex",0);

	$img.eq(index).css("zIndex",1);

	move_bol = true;
	$img.eq(index).stop().animate({opacity:1},500,function () {
		$img.css("opacity",0)
		$img.eq(index).css("opacity",1)
		move_bol = false;
	})	
}
var timer = null;
//自动播放函数
function autoPlay() {
	clearInterval(timer);
	timer = setInterval(function () {
		$right.click()
	},3000)
}
autoPlay()
$wrap.on("mouseenter" , function () {
	clearInterval(timer);
})
$wrap.on("mouseleave" , function () {
	autoPlay()
})

// 功能介绍轮播
var $arr=$(".gn>div")


for (var i = 0; i < $arr.length-1; i++) {
	console.log( $arr[i])
	// $arr[i].position().left=$arr[i-1].position().left


	$arr[i].animate({left:$(this).position().left+"px"})
}
// var $time=setInterval(function () {
// 	for (var i = 0; i < $arr.length-1; i++) {
// 	// $arr[i].zIndex()=$arr[i-1].zIndex()
// 	$arr[i].position().left=$arr[i-1].position().left

// 	}
// })

	
var $btn = $(".show_nav>ul>li");
var $div = $(".show_content>div");
//给四个按钮加上点击事件
$btn.on("click",function () {
	//给四个按钮移除类名select
	$btn.removeClass("select");
	//给当前点击的按钮加上类名select
	$(this).addClass("select");
	//隐藏4个div
	$div.hide();
	//显示当前点击的按钮对应的DIV
	$div.eq($(this).index()).show();
})
// 滚轮事件


var $Sleft  = $(".s_left>div");
var $Scenter = $(".s_center>div");
var $Sright = $(".s_right>div");
var $Sales_wrap = $(".Sales_wrap");
var $Sales = $(".Sales>div");

	$(window).scroll(function(){
		var $sTop = document.body.scrollTop || document.documentElement.scrollTop;
		for (var i = 0; i < $Sleft.length; i++) {
			if ($sTop>=$Sales_wrap.offset().top+i*208-$(window).height()/2) {//判断到了底下
				$Sleft.eq(i).css("opacity",1)
			}
		}
		
		for (var i = 0; i < $Scenter.length; i++) {
			if ($sTop>=$Sales_wrap.offset().top+i*118-$(window).height()/2) {//判断到了底下
				$Scenter.eq(i).css("opacity",1)
			}
		}
		for (var i = 0; i < $Sright.length; i++) {
			if ($sTop>=$Sales_wrap.offset().top-i*208-$(window).height()/2) {//判断到了底下
				$Sright.eq(i).css("opacity",1)
			}
		}
	})
