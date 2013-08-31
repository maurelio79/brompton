
$( document ).on( "pageinit", function() {
	$( "#popupPanel" ).on({
		popupbeforeposition: function() {	
		    var h = $( window ).height();
		    $( "#popupPanel" ).css( "height", h-2 );
		}
	});
});

