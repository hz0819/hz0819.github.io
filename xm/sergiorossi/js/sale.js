$(function () {
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
		// home-row-4 产品hover的动态效果
	$(".item").on("mouseover",function () {	
		// console.log($(this).find(".product-background"))
		$(this).find(".item-inner").children().children().eq(0).css("opacity","0")
		$(this).find(".item-inner").children().children().eq(1).css("opacity","1")
		$(this).find(".product-price").stop().animate({marginBottom:"5px",marginTop:0})
		$(this).find(".product-short-description").delay(500).animate({opacity:1})
		$(this).find(".product-background").css("opacity","0.025")
	})
	$(".item").on("mouseout",function () {
		$(this).find(".product-background").css("opacity","0");
		$(this).find(".item-inner").children().children().eq(0).css("opacity","1")
		$(this).find(".item-inner").children().children().eq(1).css("opacity","0")
		$(this).find(".product-price").stop().animate({marginTop:"-14px",marginBottom:"30px"})
		$(this).find(".product-short-description").delay(500).animate({opacity:0})
	
	})

	console.log($("img"))
  // 图片预加载动画
	$("img").load(function () {
		// console.log(111111111111)
		$(".item-inner").addClass("change")
	})

})

