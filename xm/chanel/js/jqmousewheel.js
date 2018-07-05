;(function ($) {
	$.fn.extend({
		mousewheel:function (callback) {
			//正则判断是否火狐浏览器
			if (/Firefox/.test(navigator.userAgent)) {
				this.each(function () {
					this.addEventListener("DOMMouseScroll",fn);//火狐滚轮事件
				})
			}else{		
				this.each(function () {
					this.addEventListener("mousewheel",fn)//非火狐滚轮事件
				})
			}
			function fn(e) {
				//火狐 detail 上-3 下3 	//非火狐 wheelDelta 上120 下-120		
				if (e.detail) {
					//e.detail<0判断往上还是往下滚动小于0是上
					callback.call(this,e,e.detail<0);// false:下 true:上
				}else{
					//e.wheelDelta>0判断往上还是往下滚动大于0是上
					callback.call(this,e,e.wheelDelta>0);// false:下 true:上
				}
				//阻止默认事件
				// e.preventDefault();
			}
		}
	})

})(jQuery);