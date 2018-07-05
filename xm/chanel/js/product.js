$(function () {
	
	$(window).scroll(function () {
		// var sTop = document.body.scrollTop || document.documentElement.scrollTop;
		// 顶部logo消失出现的动态效果
		var sTop=document.body.scrollTop||document.documentElement.scrollTop
		if ($(".header-content-h1").offset().top-158<=sTop) {
			$("#logo-chanel").slideUp()
			$(".page-content").css("margin-top","120.5px")
						
		}else if($(".header-content-h1").offset().top-158>=sTop){
			$("#logo-chanel").slideDown("slow",function () {
				$(".page-content").css("margin-top","158px")
			})	

		}
     // 手表大图从左往右出现
     var ImgLi=$(".images>li")
     for (var i = 0; i < ImgLi.length; i++) {
     	if (ImgLi.eq(i).offset().top<=sTop+$(window).height()) {
      	  		ImgLi.eq(i).addClass("pe-moveUp")
	      }else {
	      	  ImgLi.eq(i).removeClass("pe-moveUp")
	      }
     }

	})
	// 点击小图之后，相对应大图出现
	var Simg=$(".thumbnails>li")
	var ImgLi=$(".images>li")
	// console.log(Simg,ImgLi)
	Simg.each(function () {	
		$(this).on("click",function () {
			console.log($(this).index())
			Simg.siblings().removeClass("active")
			$(this).addClass("active")
			if ($(this).index()!==0) {
				ImgLi.eq(0).css("visibility" , "hidden")
				ImgLi.children().animate({opacity:0,zIndex:-1},150)
				$(".images>li:not(:first-child").css("display","")
				ImgLi.eq($(this).index()).css("display","list-item")     
				ImgLi.eq($(this).index()).children().animate({opacity:1,zIndex:0},150)
			}else {
				$(".images>li:not(:first-child").css("display","")
				ImgLi.children().animate({opacity:0,zIndex:-1},150)
				ImgLi.eq(0).children().animate({opacity:1,zIndex:1},150,function () {
					ImgLi.eq(0).css("visibility" , "visible")
				})
		
			}
			
		}),
        // 小图下面的线条跟随
	    $(this).hover(    	
	    	function () {
	    		var index=$(this).index();
	    		var num = index*160+index*2
	    		// console.log(index,Simg.eq(4),num)
	    		Simg.eq(4).css("left",num+"px")
	    	},
	    	function () {
	    		Simg.eq(4).css("left",0)
	    	}
	    )

	})
	
})