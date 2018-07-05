$(function () {
	// 底部定位后页脚的底部边距
	$(window).on("resize",function () {
		var DivHeight=$(".footer-bottom-fixed").height()
		console.log(DivHeight)
		$(".footer-container").css("marginBottom",DivHeight+"px")
	})
	// home-row-4 产品hover的动态效果
	$(".item").on("mouseenter",function () {	
		console.log($(this).find(".product-background"))
		$(this).find(".product-background").css("opacity","0.025");
		$(this).find(".item-inner").children().children().eq(0).css("opacity","0")
		$(this).find(".item-inner").children().children().eq(1).css("opacity","1")
		$(this).find(".product-info-extr").css("opacity","1")
	})
	$(".item").on("mouseleave",function () {
		$(this).find(".product-background").css("opacity","0");
		$(this).find(".item-inner").children().children().eq(0).css("opacity","1")
		$(this).find(".item-inner").children().children().eq(1).css("opacity","0")
		$(this).find(".product-info-extr").css("opacity","0")
	})
     // 顶部点击消失
	$(".countries-close").on("click",function () {
		$(".header-top").slideUp();
		$(".header-nav").stop().animate({top:"26px"})
		$(".wrap").stop().animate({paddingTop:"132px"})
	})

	// 头部导航hover效果
	$(".level0-nav ").on("mouseenter",function() {
		$(this).find(".level0-content").css("display","block")
	})
	$(".level0-nav ").on("mouseleave",function() {
		console.log(1111111)
		$(this).find(".level0-content").css("display","none")
	})
})















