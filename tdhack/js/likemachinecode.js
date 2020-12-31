//2 divs
//1ste div: met id="like" => aantal likes
//2de div: met id="last_run" => laatste keer dat de machine aanging

var fb_api = {
		fb_appID : '774690635877796', 				//app-id provided by Facebook
		url_api : "http://graph.facebook.com/", 	//api url of Facebook
		fb_page_id : '1378883359070701',			//id of the page we're posting to
		fb_likes : '0',
		run_once_excep: false, 

		callFB : function(){
			window.fbAsyncInit = function() {
				FB.init({
				    appId      : fb_api.fb_appID,	//our unique Facebook app ID
				    status     : true, 				// check login status
				    cookie     : true, 				// enable cookies to allow the server to access the session
				    oauth      : true, 				// enable OAuth 2.0
				    xfbml      : true  				// parse XFBML
			  	});
			  	fb_api.getLikes();
			}
		},

		getLikes : function(){
			//console.log('Like-functie opens');

			$.ajax({
				url: fb_api.url_api + fb_api.fb_page_id,
				dataType: "jsonp",
				success: function(page){

					//console.log(page.likes +'>' + fb_api.fb_likes);

					if(page.likes != 0){ 

						if(page.likes > fb_api.fb_likes){
							fb_api.fb_likes = page.likes;
							var d = new Date();
							var curr_date = d.getDate();
							var curr_month = d.getMonth();
							var curr_year = d.getFullYear();
							var curr_
							$last_run = (d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear()+" at "+ d.getHours() +":"+d.getMinutes());
							console.log('Yeey, nieuwe likes');
						}
						
						else{
							fb_api.fb_likes = page.likes;
							console.log('Geen nieuwe likes');
						}

						$('#like').html(fb_api.fb_likes);
						$('#last_run').html($last_run);


					}
				}
			});
		}
}

	jQuery( document ).ready(function(){
		console.log('App activated');
		fb_api.callFB();

		window.setInterval(fb_api.getLikes, 1000);
		
	});