	var h=$(".con .div").height();
	var th=$(".mav").height();
	var bol=false;
	var Wh=$(window).innerHeight()
	var body=document.querySelector("body")
	$(window).resize(function(){
		h=$(".con .div").height();
		Wh=$(window).innerHeight();
	})
	wheelFn(body,function(down){
		if(down){
			for (var i = 0; i < $(".con .div").length; i++) {
				if(body.scrollTop>=h*i && body.scrollTop<h*(i+1)){
					if(bol){return}
					dong(body.scrollTop,h*(i+1))
					break;
				}
			}
		}else{
			for (var i = 0; i < $(".con .div").length; i++) {
				if(body.scrollTop>h*i && body.scrollTop<h*(i+1)){
					if(bol){return}
					dongFn(body.scrollTop,h*i)
					break;
				}else if(body.scrollTop>=h*i && body.scrollTop<h*(i+1)){
					if(bol){return}
					dongFn(body.scrollTop,h*(i-1))
					break;
				}
			}
		}
	})
	
		
	function wheelFn(obj,cb) {
		if (navigator.userAgent.indexOf("Firefox")>-1) {
			obj.addEventListener("DOMMouseScroll",fn);
		}else{
			obj.onmousewheel = fn;
		}

		function fn(e) {
			var e = e || window.event;
			var down = true;
			if (e.detail) {				
				down=e.detail>0;
			}else {
				down=e.wheelDelta<0;
			}			
			cb.apply(obj,[down])
			if (e.preventDefault) {
				e.preventDefault();
			}
			return false;
		}
	}

	function dong(start,end){
		var time=setInterval(function(){
			bol=true;
			start+=2;
			if(start=$('body').height()-$(window).innerHeight()){bol=false;clearInterval(time);start=0}
			if(start>=end){
				clearInterval(time)
				start=end
				bol=false;
			}
			body.scrollTop=start;
			
		})
	}
	function dongFn(start,end){
		
			var time=setInterval(function(){
				bol=true;
				start-=2;
				if(start<0){bol=false;clearInterval(time);start=0}
				if(start<=end){
					clearInterval(time)
					start=end
					bol=false;
				}
				body.scrollTop=start;
			})
ß,