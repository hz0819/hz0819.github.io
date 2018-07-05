$(function () {
	
	// var vid = document.getElementById("myVideo");
	// var arr=["image/720_2.mp4","image/E 2_1.mp4"];
	// console.log(arr.length)
	// var ind=0;
	// onload=function(){
	//   vid.src=arr[ind];
	//   vid.onended=function(){
	//     ind++;
	//     console.log(ind)
	//     ind=ind>arr.length-1?0:ind;
	//     this.src=arr[ind];
	//   }
	// }
	var vid = document.getElementById("myVideo");
	var vid2=document.getElementById("myVideo2");
	vid.onended = function() {
       vid.style.opacity=0;
       vid2.parentNode.style.display="block"
       vid2.style.opacity=1;
       vid2.play()
       vid.parentNode.style.display="none"
   };

   vid2.onended = function() {
       vid2.style.opacity=0;
       vid.parentNode.style.display="block"
       vid.style.opacity=1;
       vid.play()
       vid2.parentNode.style.display="none"
   };

   $(window).scroll(function () {
   	   if($(window).scrollTop>=$(".cotent-wrap").offset().top+$(".cotent-wrap").height()+325){
   	   		$("#footer-followusmenu").slideDown()
   	   }
   })




})
