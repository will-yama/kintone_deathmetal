(function () {
    "use strict";
	$(document).ready(function() {
		setTimeout(function(){
		
			//Headbang an element
			function shakeElement(element, x, y, rotation){
				$(element).jrumble({
					x: x,
					y: y,
					rotation: rotation
				});
				$(element).trigger('startRumble');
			}
	
			//Headbang an element when hovered
			function shakeElOnHover(element, x, y, rotation){
				$(element).jrumble({
					x: x,
					y: y,
					rotation: rotation
				});
				$(element).hover(function(){
					$(this).trigger('startRumble');
				}, function(){
					$(this).trigger('stopRumble');
				});
			}
	
			//Headbang the below elements
			shakeElement(".ocean-ntf-ntfitem-img",15,15,4); //User image
			shakeElement(".ocean-ntf-menuitem-img",15,15,4); //User image
			shakeElement(".ocean-ui-comments-commentbase-usericon",20,20,4); //User image
			shakeElement(".input-text-cybozu",20,20,4); //Search bar
			shakeElement(".ocean-ui-comments-commentbase-like-count",2,2,2); //Like
			shakeElement(".gaia-argoui-panelscrollinglist-icon",10,10,2);//User image
			shakeElOnHover(".ocean-portal-body-left",4,4,2); //Left side of portal
			shakeElOnHover(".ocean-portal-body-right",4,4,2); //Right side of portal
	
			//Fire
			$('.ocean-portal-index-header').fire({
				speed:20,
				maxPow:5,
				gravity:0,
				flameWidth:3,
				flameHeight:0,
				fadingFlameSpeed:8	
			});
	
			//Change apps into skulls
			$(".gaia-argoui-appscrollinglist-icon").replaceWith('<span class="gaia-argoui-appscrollinglist-icon" style="background-image:url(https://pixabay.com/static/uploads/photo/2015/08/27/14/38/skull-910593_960_720.png)"></span>');
			
		},2000);
	 });
})();
