
$( document ).on( "pageinit", function() {
	$( "#popupPanel" ).on({
		popupbeforeposition: function() {	
		    var h = $( window ).height();
		    $( "#popupPanel" ).css( "height", h-2 );
		}
	});
});

$( document ).on( "pageinit", function() {
	$( "#photo-thumbs" ).on({
		popupbeforeposition: function() {	
		    var h = $( window ).height();
		    $( "#photo-thumbs" ).css( "height", h-2 );
		}
	});
});
