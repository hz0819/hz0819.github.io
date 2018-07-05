$(function () {
		var arr=[];
		var $con=$(".img");
	   
		for (var i = 0; i < $con.length; i++) {
			// 将每个$con距离顶部的高度放到数组里面去
			arr.push($con.eq(i).offset().top+60)
			console.log($con.eq(8).offset().top+60)
		}

		// 将获取DOM文档的根节点html元素对象的高放到数组里面
		arr.push($(".content-bottom").offset().top+$(".content-bottom").outerHeight());
		    console.log($con)
			console.log(arr)
		var index=0;
		var move_bol=false;

		$(window).scroll(function () {
			if (move_bol) {return}
			for (var i = 0; i < arr.length; i++) {
				if ($(window).scrollTop()>=arr[i]) {
					index=i;
				}

			}
			
		})
		$.mousewheel(function (e,bol) {
			if (move_bol) {return}
				move_bol=true;
			if (bol) {
				index--;
				console.log("往上index:"+index)
				if (index<0) {index=0;}
				for (var i = 0; i < arr.length-1; i++) {
					if (index==i) {
						console.log(index)
						$con.eq(index+1).stop().animate({top:-60+"px"})
						$con.eq(index+1).siblings().children(".img-text-move").removeClass("move")
					}
				}
			}else {
				index++;
				console.log("往下index:"+index)
				if (index>arr.length-1) {index=arr.length-1}
					console.log(index)
				for (var i = 0; i < arr.length-1; i++) {
					if (index==i) {	
						$con.eq(index).stop().animate({top:0})
						$con.eq(index).siblings().children(".img-text-move").addClass("move")
					}
				}



			}
			$.scrollTo(arr[index],800,function () {
				move_bol=false
			})
		})

		// content-bottom input点击动态效果
		// console.log($("input[type='text']"))
		$("input[type='text']").on("click",function () {
			$(this).focus();
			$(this).prev(".fs-fashionInput-placeholder").addClass("fs-fashionInput-placeholder-fixed")
		})
		var input=$("input[type='text']")
		$(document).not("input[type='text']").on("click",function () {
			console.log(11111)
			if (input.hasClass("fs-fashionInput-placeholder-fixed")) {

				
				$(input).blur();
			    $(input).removeClass("fs-fashionInput-placeholder-fixed")
			}
			
		})

})