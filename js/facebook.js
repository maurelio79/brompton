(function($){  
	$.fn.fbphotogallery = function (gallery){
		var title = $('.brompton-title'),
			thumbs = $('#thumbs')
			output = '';
			gallery_id=gallery;

				// album info
				$.getJSON('http://graph.facebook.com/' + gallery_id + '?callback=?', function(json, status, xhr) {
				  title.html("<br /><a href='" + json.link + "' class=\"ui-link\">" + json.name + "</a><p>from '" + json.from.name + "'</p>");
				});

				// images
				$.getJSON('http://graph.facebook.com/' + gallery_id + '/photos/?limit=50&callback=?', function(json, status, xhr) {
				  var imgs = json.data;

						  for (var i = 0, l = imgs.length - 1; i < l; i++) {
							output += "<a href='" + imgs[i].source  + "' style='background-image:url(" + imgs[i].picture +  ")' title='" + imgs[i].name + "'></a>";
						  }
							thumbs.html(output).trigger("create");
				});
	};
})(jQuery);
