$(function () {
	/******************/ 
		 var  sTop=document.body.scrollTop||document.documentElement.scrollTop;
	        var animates=$(".pre-animate")
	       // console.log(animates)
	       for (var i = 0; i < animates.length; i++) {
	       		  // 文字、图片在底部消除动态效果
		        if (animates.eq(i).offset().top>sTop+$(window).height()) {
		        	animates.eq(i).removeClass("pre-move")
		        	 // 文字、图片在顶部出现动态效果
		        }else if (animates.eq(i).offset().top+animates.eq(i).height()>sTop+177) {
		         	if (sTop!==0){
		         		animates.eq(i).addClass("pre-move")
		         	}
		        }
	       }
	         // 文字、图片在底部出现时的动态效果
	        for (var i = 0; i < animates.length; i++) {
	        	if (animates.eq(i).offset().top-177<=sTop+$(window).height()) {
		        	animates.eq(i).addClass("pre-move")
		        }
		         if (animates.eq(i).offset().top+animates.eq(i).height()<=sTop+177) {
		        	animates.eq(i).removeClass("pre-move")
		        }
	        }
	/******************/ 
	// 滚轮事件判断往上还是往下滚动
	$(window).on("mousewheel DOMMouseScroll", function (event) {
    // chrome & ie || // firefox
	    var delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
	        (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1)); 
	    // 向上滚动     
	    if (delta > 0) {
	        console.log('mousewheel top');
	         // 头部动态效果
	         $(".header-logo").stop().animate({height:"81px"},150,function () {
	         	$(".header-logo").css("opacity",1)
	         })
	        $(".navbar").stop().animate({marginTop:"127px"},150)

	        // 页面中多处文字、图片滚动相对应位置动态效果
	        // 记录鼠标滚到的高度
	        var  sTop=document.body.scrollTop||document.documentElement.scrollTop;
	        var animates=$(".pre-animate")
	       // console.log(animates)
	       for (var i = 0; i < animates.length; i++) {
	       		  // 文字、图片在底部消除动态效果
		        if (animates.eq(i).offset().top>sTop+$(window).height()) {

		        	animates.eq(i).removeClass("pre-move")
		        	 // 文字、图片在顶部出现动态效果
		        }else if (animates.eq(i).offset().top+animates.eq(i).height()>sTop+177) {
		         	if (sTop!==0){
		         		animates.eq(i).addClass("pre-move")
		         	}
		        }
	       }
	    } else if (delta < 0) {
	    	// 向下滚动
	        console.log('mousewheel bottom');

	        // 头部动态效果
	         $(".header-logo").stop().animate({height:0},150,function () {
	         	$(".header-logo").css("opacity",0)
	         })
	        $(".navbar").stop().animate({marginTop:"46px"},150)

	        // 页面中多处文字、图片滚动相对应位置动态效果
	        // 记录鼠标滚到的高度
	        var  sTop=document.body.scrollTop||document.documentElement.scrollTop;
	        var animates=$(".pre-animate")
	        // 文字、图片在底部出现时的动态效果
	        for (var i = 0; i < animates.length; i++) {
	        	if (animates.eq(i).offset().top-177<=sTop+$(window).height()) {
		        	animates.eq(i).addClass("pre-move")
		        }
		         if (animates.eq(i).offset().top+animates.eq(i).height()<=sTop+177) {
		        	animates.eq(i).removeClass("pre-move")
		        }
	        }
	       
	    }

	})
	// 大小图切换效果
	imgTab($(".product-watch-Smg li"),$(".product-watch-Bimg li"));
	imgTab($(".product-watch-Smg2 li"),$(".product-watch-Bimg2 li"));
	// $(".product-watch-Smg li").on("click",function () {
		// 	var _this =$(this).index();	
		// 	$(".product-watch-Bimg li").removeClass("one");
		// 	$(".product-watch-Bimg li").eq(_this).addClass("one");
		// 	$(".product-watch-Bimg li").fadeOut("slow",function () {
		// 		$(".product-watch-Bimg li").children().removeClass("two");
		// 	});
		// 	$(".product-watch-Bimg li").eq(_this).fadeIn("slow",function () {
		// 		$(".product-watch-Bimg li").eq(_this).children().addClass("two");
		// 	});
	// })

	// 点击右边导航切换到相对应的位置
	var contentDIv=$(".content-product>div")
   $(".scroll-nav li").on("click",function () {
   		var _this=$(this).index();
   		var top=contentDIv.eq(_this).offset().top
   		$(this).siblings().removeClass("scroll-nav-active");
   		$(this).addClass("scroll-nav-active");
   		$("html,body").stop().animate({scrollTop:top+"px"},"slow",function () {
   		/*******************/ 
   			var  sTop=document.body.scrollTop||document.documentElement.scrollTop;
	        var animates=$(".pre-animate")
	       // console.log(animates)
	       for (var i = 0; i < animates.length; i++) {
	       		  // 文字、图片在底部消除动态效果
		        if (animates.eq(i).offset().top>sTop+$(window).height()) {

		        	animates.eq(i).removeClass("pre-move")
		        	 // 文字、图片在顶部出现动态效果
		        }else if (animates.eq(i).offset().top+animates.eq(i).height()>sTop+177) {
		         	if (sTop!==0){
		         		animates.eq(i).addClass("pre-move")
		         	}
		        }
	       }
	         // 文字、图片在底部出现时的动态效果
	        for (var i = 0; i < animates.length; i++) {
	        	if (animates.eq(i).offset().top-177<=sTop+$(window).height()) {
		        	animates.eq(i).addClass("pre-move")
		        }

		         if (animates.eq(i).offset().top+animates.eq(i).height()<=sTop+177) {
		        	animates.eq(i).removeClass("pre-move")
		        }
	        }
	    /*******************/ 
   		})
   })
   
   // 鼠标跟随
   $(".product-watch-Smg li").on({
   		mouseenter:function () {
   			var index=$(this).index();
   			var num = (3-index)*160+(3-index)*2
    		// console.log(index,Simg.eq(4),num)
    		$(".mouse-follow").css("right",num+"px")
   		},
   		mouseleave:function () {
   			$(".mouse-follow").css("right","486px")
   		}
   	})
    $(".product-watch-Smg2 li").on({
   		mouseenter:function () {
   			var index=$(this).index();
   			var num = (2-index)*160+(2-index)*2
    		// console.log(index,Simg.eq(4),num)
    		$(".mouse-follow").css("right",num+"px")
   		},
   		mouseleave:function () {
   			$(".mouse-follow").css("right","324px")
   		}
   	})

})
// 大小图切换函数
function imgTab(Obj,Mobj) {
	Obj.on("click",function () {
		var _this =$(this).index();	
		Mobj.removeClass("one");
		Mobj.eq(_this).addClass("one");
		Mobj.fadeOut("1500",function () {
			Mobj.children().removeClass("two");
		});
		Mobj.eq(_this).fadeIn("1500",function () {
			Mobj.eq(_this).children().addClass("two")
		});
	})
}

// 页面滚动，右侧相对应的导航跳转跟随函数
step()
function step() {
	var contentDIv=$(".content-product>div")
	$(window).on("scroll",function () {
		var  sTop=document.body.scrollTop||document.documentElement.scrollTop;
		for (var i = 0; i < contentDIv.length; i++) {
			var _this=contentDIv.eq(i).index();
			var Dstop=parseInt(contentDIv.eq(i).offset().top);
			// console.log(_this)
			// console.log(contentDIv.eq(i).offset().top,sTop+$(window).height(),parseInt(Dstop))
			if (Dstop<=sTop+96) {
				$(".scroll-nav li").siblings().removeClass("scroll-nav-active");
			   	$(".scroll-nav li").eq(_this).addClass("scroll-nav-active");
			}
		}
	})

}