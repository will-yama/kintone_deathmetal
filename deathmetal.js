$(document).ready(function() {
	setTimeout(function(){
	
	　　　//無条件ヘッドバング関数
		function shakeElement(element, x, y, rotation){
			$(element).jrumble({
				x: x,
				y: y,
				rotation: rotation
			});
			$(element).trigger('startRumble');
		}

		//ホバーするとヘッドバング関数
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

		//各要素をヘッドバンギング
		shakeElement(".ocean-ntf-ntfitem-img",15,15,4); //ユーザ画像
		shakeElement(".ocean-ntf-menuitem-img",15,15,4); //ユーザ画像
		shakeElement(".ocean-ui-comments-commentbase-usericon",20,20,4); //ユーザ画像
		shakeElement(".input-text-cybozu",20,20,4); //検索バー
		shakeElement(".ocean-ui-comments-commentbase-like-count",2,2,2); //いいね
		shakeElement(".gaia-argoui-panelscrollinglist-icon",10,10,2);//ユーザ画像
		shakeElOnHover(".ocean-portal-body-left",4,4,2); //ポータルの左側
		shakeElOnHover(".ocean-portal-body-right",4,4,2); //ポータルの右側

		//炎
		$('.ocean-portal-index-header').fire({
			speed:20,
			maxPow:5,
			gravity:0,
			flameWidth:3,
			flameHeight:0,
			fadingFlameSpeed:8	
		});

		//アプリを頭蓋骨に変換
		$(".gaia-argoui-appscrollinglist-icon").replaceWith('<span class="gaia-argoui-appscrollinglist-icon" style="background-image:url(https://pixabay.com/static/uploads/photo/2015/08/27/14/38/skull-910593_960_720.png)"></span>');
		
	},2000);
 });
