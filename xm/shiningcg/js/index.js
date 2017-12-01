$(function(){
	
	var $a=$('.con a');
	var H=$(".con .con1 .img").height();
	$('.con .con1 div:nth-child(3), .con .con2 div:nth-child(3), .con .con3 div:nth-child(3)').css("height",H)
	$(window).resize(function(){
	  H=$(".con .con1 .img").innerHeight();
	  $('.con .con1 div:nth-child(3), .con .con2 div:nth-child(3), .con .con3 div:nth-child(3)').css("height",H)
	});
	
	$a.hover(function(){
		$(this).find('.img img:nth-child(2)').show()
		$(this).find('div:nth-child(3)').css("background","#cfdb00")
		$(this).find('h6,p').css("color","black")
	},function(){
		$(this).find('.img img:nth-child(2)').hide()
		$(this).find('div:nth-child(3)').css("background","#e1e1e1")
		$(this).find('h6,p').css("color","")
	})



})
