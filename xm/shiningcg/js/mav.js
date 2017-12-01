
$(function(){
	
	var $div=$(".foot div div");
	var winW=$(window).innerWidth();
	var H1=$(".mav").height();
	$(".con").css("marginTop",H1)
	juFn()
	$(window).resize(function(){
	  winW=$(window).innerWidth();
	  H1=$(".mav").height();
	  $(".con").css("marginTop",H1)
	  juFn()
	});
	
	var a=$('.mav a')
	//a标签的click事件
	a.on("click",function(e){
		a.css({border:"",color:""})
		$(this).css({border:"1px solid #7b7b7b",color:"white"})
		e.stopPropagation(); 
	})
	//a标签的hover事件
	a.hover(function(){
		$(this).addClass("bor")
	},function(){
		$(this).removeClass("bor")
	})
	
	
	var cla=["email","fb","youtube","ins","teitter"];
	//用数组给fb，ins等图标div标记
	for (var i = 0; i < cla.length; i++) {
		$div.eq(i).attr("abc",cla[i])
	}0  
	
	
	
	//fb，ins等图标加click
	$div.on("click",function(){
		var abc=$(this).attr("abc")
		if($(this).attr("style")){
			$(this).css({background:""})
		}else{
			if(abc=="email"){
				$(this).css({background:'url(img/'+abc+'.png)'})
			}else{
				$(this).css({background:'url(img/'+abc+'.jpg)'})
			}
			
		}
		
	})
	//手机导航菜单
	var btn=document.querySelector("#btn");
	
	$("#btn").on('touchstart',function(e){
//		if(e.touches.length==1){
			if($(".mav .menu").css("display")=="none"){
				$(".mav .menu").show()
				$(".mav .menu").css("top",H1)
			}else{
				$(".mav .menu").hide()
			}
//		}
//		return false;
		e.stopPropagation();
//		e.cancelBubble = true;
		 
	})
	$(".mav .menu a").on("touchstart",function(e){
		
		e.stopPropagation();
	})
	$(document).on('touchstart',function(e){
		$(".mav .menu").hide()	
	})
//	document.addEventListener("touchstart",function(e){
//		if(e.touches.length==1){
//				$(".mav .menu").hide()		
//		}
//	},true)
	

	
	
	
	function juFn(){
	if (winW<=850){
		$('.mav .menu').hide()
	  	$("#btn").show()
	 }else{
	 	$('.mav .menu').css("top",'')
	  	$('.mav .menu').show()
	  	$("#btn").hide()
	  	//结合标记给fb，ins等图标加hover  大屏幕PC端是才有hover
		$div.hover(function(){
			var abc=$(this).attr("abc")
			$(this).addClass(abc)
		},function(){
			var abc=$(this).attr("abc")
			$(this).removeClass(abc)
			$(this).addClass(abc+"1")
		})
	  }
	 
	}
	
})









