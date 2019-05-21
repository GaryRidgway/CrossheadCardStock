function addSideStats(selector) {
	selector.append(
		'<div class="left-stat-wrapper stat-wrapper"></div>\
		<div class="right-stat-wrapper stat-wrapper"></div>\
		'
	);

	statSelector(selector.find('.left-stat-wrapper'), {
		hp: 'CREATURES - CORE - HP.png',
		ac: 'CREATURES - CORE - AC.png'
	});
	// statSelector(selector.find('.right-stat-wrapper', {}));
}

// Pass this either the right or the left stat wrapper.
function statSelector(selector, iconDict) {
	selector.append(
		'<div class="stat-selector">\
			<div class="add-stat">\
				<i class="fas fa-plus"></i>\
			</div>\
		</div>\
		'
	);

	// Craft the iconlist based off of the dictionary given.
	var iconlist = '\
		<div class="iconlist">\
	';

	Object.keys(iconDict).forEach(function(iconKey) {
		iconlist = iconlist + '\
			<div class="icon-select-' + iconKey + '">\
				<p class="icon-select-title">' + iconKey + '</p>\
				<img class="icon-select-icon" src="assets/' + iconDict[iconKey] + '" alt="' + iconKey + '">\
			</div>\
		';
	});

	iconlist = iconlist + '\
		</div>\
	';

	selector.find('.add-stat').click(function() {

		// Make sure there isnt an iconlist yet, break out if there is.
		if (selector.find('.iconlist').length) {
			return;
		}

		// If there isn't, make one.
		else {
			selector.find('.stat-selector').append(
				iconlist
			);
		}

		// If the user clicks anywhere outside the iconlist, destroy the iconlist.
		$(document).click(function(e){

		    // Check if click was triggered on or within #menu_content
		    if( $(e.target).closest(selector.find('.iconlist')).length > 0 ||
		    	$(e.target).closest(selector.find('.add-stat')).length > 0
	    	) {
		        return false;
		    }

		    selector.find('.iconlist').remove();
		});
		
	});
}