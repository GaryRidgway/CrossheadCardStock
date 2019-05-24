// Can get the variables from the URL.
function getURLVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

// Can scale the card to what you want without leaving space around it.
function cardScale(percentSize) {
	$('.card').each(function() {
		// Add the scaling to the card container.
		let newWidth        = parseFloat($(this).css('width')) * percentSize;
		let newMinHeight = parseFloat($(this).css('min-height')) * percentSize;
		let newHeight    = parseFloat($(this).css('height')) * percentSize;
		$(this).css({
	      	"width": newWidth + "px",
		    "min-height": newMinHeight + "px",
		    "height": newHeight + "px"
	    });



		// Add the transform on inner container.
		$(this).find('.card-inner').css({
	      	"-webkit-transform": "scale(" + percentSize + ")",
		    "-moz-transform": "scale(" + percentSize + ")",
		    "-o-transform": "scale(" + percentSize + ")",
		    "transform": "scale(" + percentSize + ")",
		    "-webkit-transform-origin": "left top",
		    "-moz-transform-origin": "left top"
	    });
	});
}