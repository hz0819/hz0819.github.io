$(function(){
	var W,$div,imgsrc;//间距和图片div
	var arrH=[];//瀑布流函数
	var imgArr=[];
	for (var i = 1; i < 79; i++) {
		imgArr.push('B'+i+".jpg")
	}
	imgFn(imgArr,function(){
		$(".con .loading").hide()//隐藏
		$('.con .botoom').show()//显示
		$div=$('.con .botoom .fl');//获取
		
		//hover事件
		$div.mouseenter(function(e){
   			var l=$(this).offset().left-$('.con .botoom').offset().left;
   			var t=($(this).offset().top-$('.con .botoom').offset().top);
   			var w=$(this).width();
   			var h=$(this).height();
   			$('.con .seek').css({
   				height:h,
   				width:w,
   				left:l,
   				top:t,
   			})
   			$(".con .seek").stop().fadeIn(500)
   			imgsrc=$(this).find("img").attr("src")
   			console.log(imgsrc)
   		})
		$(".con .seek").mouseleave(function(){
			$(".con .seek").css("display","none")
   		})
		//点击大图消失 
		$(document).on("click",function(){
			$(".big").css({
				display:"none"})
		})
		//点击出现大图
		$(".con .seek").on("click",function(e){
			var w=$(window).innerWidth();
			var H=$(window).innerHeight();
			$(".big").css({
				display:"block"})
			$(".big img").attr("src",imgsrc)
			if($(".big img").height()>H*0.8){
				H=$(window).innerHeight()*0.8;
				$(".big img").css({
				height:"80%",
				width:"auto",
				display:"block"})
			}
			if($(".big img").width()>w*0.8){
				w=$(window).innerWidth()*0.8;
				$(".big img").css({
				height:"auto",
				width:"80%",
				display:"block"})
			}
			e.stopPropagation()
		})
		
		
		W=$(".con .botoom").width()*0.015;//间距
		//布局  响应式500一下显示一行两张图片
		chengFn()
		//查找瀑布流最高点给父级加高度
		findMax(arrH)
		 $(".con .botoom").css("height",arrH[findMax(arrH)])
	})
	//预加载
	function chengFn(){
		//布局  响应式500一下显示一行两张图片
		if($(window).innerWidth()<500){
		 	$div.css("width","47.75%")
		 	changeFn(2)
		 }else if($(window).innerWidth()<850){
		 	$div.css("width","31.333333%")
		 	changeFn(3)
		 }else{
		 	$div.css("width","23.125%")
		 	changeFn(4)
		 }
	}
	function imgFn(arr,end){
		var index=0;
		for (var i = 0; i < arr.length; i++) {
			var img= new Image();
			img.src='img/'+ arr[i];
			img.onload = function(){
				index++;
				if (index==arr.length) {
					end && end();
				}
			}
		}
	}
	//设置大图切换的父级高度
	var Th=$(".con .top img").height()
	$(".con .top").css("height",Th)
	//滚动时发生的事件
	$(window).scroll(function(){
		//响应式500一下显示一行两张图片
		 chengFn()
	})
	
	//窗口改变发生的事件
	$(window).resize(function(){
		//设置大图切换的父级高度
		Th=$(".con .top img").height()
		$(".con .top").css("height",Th)
		//从新设置间距 布局
		W=$(".con .botoom").width()*0.015;
		console.log(W)
		//查找瀑布流最高点给父级加高度
//		findMax(arrH)
		 $(".con .botoom").css("height", Math.max.apply(null,arrH))
		 //响应式500一下显示一行两张图片
		 chengFn()
		 
		 	var w=$(window).innerWidth();
			var H=$(window).innerHeight();
			if($(".big img").height()>H){
				$(".big img").css({
				height:"80%",
				width:"auto"})
			}
			if($(".big img").width()>w){
				$(".big img").css({
				height:"auto",
				width:"80%"})
			}
	})
	
	//找数组最小的位置
	function findMin(arr){
		var min=arr[0];
		var index=0;
		for (var i=1;i<arr.length;i++) {
			if(min>arr[i]){
				min=arr[i];
				index=i;
			}
		}
		return index;
	}
	//找数组最大的位置//没用到的函数
	function findMax(arr){
		var min=arr[0];
		var index=0;
		for (var i=1;i<arr.length;i++) {
			if(min<arr[i]){
				min=arr[i];
				index=i;
			}
		}
		return index;
	}
	// 布局 改变位置
	function changeFn(n){
		arrH=[];
		for (var i = 0; i <$div.length; i++) {
			if(i<n){
				var $divW=$div.eq(1).width()*i+W*(i+1);
				$div.eq(i).css("left",$divW)
				$div.eq(i).css("top",0)
				arrH[i]=$div.eq(i).height()+W;
			}else{
				var $divW=$div.eq(0).width()*findMin(arrH)+W*(findMin(arrH)+1);
				$div.eq(i).css("left",$divW)
				var $divH=arrH[findMin(arrH)];
				$div.eq(i).css("top",$divH)
				arrH[findMin(arrH)]+=$div[i].offsetHeight+W;
			}
		}
	}
	//大图滚动
	var $img=$(".con .top img")
	var $span=$(".con .top div span")
	var i = 0 ;
	var s=setInterval(function(){
			$img.not($img.eq(i).css('z-index',1).stop().fadeIn(1000)).stop().fadeOut(1000);
			$span.css('background','')
			$span.eq(i).css('background','red')
			i++;
			i==3?i=0:i;
		},2000)
		$span.on('click',function(){
			i = $(this).index();
			$img.not($img.eq($(this).index()).css('z-index',1).stop().fadeIn(1000)).stop().fadeOut(1000);
			$span.css('background','')
			$span.eq(i).css('background','red')
		})
		
		
	//滑动事件  //超麻烦做法//懒得改 
	var $top=$(".con .top img");
	var $l1,$l2;
	var index;
	var j=1;
	//pc端
	$top.on("mousedown",function(e){
		index=$(this).index()
		$l1=e.pageX;
		e.preventDefault();
	})
	$top.on("mouseup",function(e){
		$l2=e.pageX;
		if($l1-$l2>0){	
			index==2?index=0:index=index+1;
		}
		if($l1-$l2<0){	
			index==0?index=2:index=index-1;
		}
		$img.not($img.eq(index).css('z-index',1).stop().fadeIn(1000)).stop().fadeOut(1000);
		$span.css('background','')
		$span.eq(index).css('background','red')
		i=index;	
	})
	
	
	//手机端
	$top.on("touchstart",function(e){
		index=$(this).index()
		$l1=e.touches[0].pageX;
		e.preventDefault();
	})
	$top.on("touchmove",function(e){
		$l2=e.touches[0].pageX;
	})
	$top.on("touchend",function(e){
		if($l1-$l2>0){	
			index==2?index=0:index=index+1;
		}
		if($l1-$l2<0){	
			index==0?index=2:index=index-1;
		}
		$img.not($img.eq(index).css('z-index',1).stop().fadeIn(1000)).stop().fadeOut(1000);
		$span.css('background','')
		$span.eq(index).css('background','red')
		i=index;	
	})
	$(window).on("touchstart",function(e){
		
		e.preventDefault();
	})
})


	
