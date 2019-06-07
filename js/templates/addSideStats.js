function addSideStats(selector) {
	selector.append(
		'<div class="left-stat-wrapper stat-wrapper"></div>\
		<div class="right-stat-wrapper stat-wrapper"></div>\
		'
	);

	statSelector(selector.find('.left-stat-wrapper'), {
		'Hit Points': {
			'icon': 'CREATURES - CORE - HP.png',
			'text': 'xdx+x'
		},
		'Armor': {'icon': 'CREATURES - CORE - AC.png'}
	});
	// statSelector(selector.find('.right-stat-wrapper', {}));
}

// Pass this either the right or the left stat wrapper.
function statSelector(selector, iconDict) {

	// Create the stat selector button.
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
			<div class="icon-select-' + iconKey + ' icon-select-icon-block">\
				<p class="icon-select-title">' + iconKey + '</p>\
			</div>\
		';
	});

	iconlist = iconlist + '\
		</div>\
	';

	// Place the iconlist and hide it at the start.
	selector.find('.stat-selector').append(
		iconlist
	);
	selector.find('.stat-selector .iconlist').hide();

	// This code checkst to make sure that the dialogue for the icons only appears if you clicked the stat selector icon.
	selector.find('.add-stat').click(function() {

		// Make sure there isnt an iconlist yet, break out if there is.
		if (selector.find('.iconlist').is(":visible")) {
			// Do nothing.
		}

		// If there isn't, make one.
		else {
			selector.find('.stat-selector .iconlist').show();
		}

		// If the user clicks anywhere outside the iconlist, destroy the iconlist.
		$(document).click(function(e){

		    // Check if click was triggered on or within .iconlist or .add-stat, and if it wasn't, hide the iconlist.
		    if( $(e.target).closest(selector.find('.iconlist')).length > 0 ||
		    	$(e.target).closest(selector.find('.add-stat')).length > 0
	    	) {
		        return false;
		    }
		    else {
		    	selector.find('.stat-selector .iconlist').hide();
		    }
		});
	});

	// Add clickable functionality to the icons available.
	selector.find('.stat-selector .iconlist .icon-select-icon-block').click(function() {
		let iconKey = $(this).find('p').text();

		// Construct the icon areas.
		let iconhtml = '\
				<p class="icon-select-title">' + iconKey + '</p>\
				<img class="icon-select-icon" src="assets/' + iconDict[iconKey]['icon'] + '" alt="' + iconKey + '">\
				<p contenteditable="true" class="icon-select-val">00</p>\
				';
		if('text' in iconDict[iconKey]) {
			iconhtml = iconhtml + '<p contenteditable="true" class="icon-select-detail-text">' + iconDict[iconKey]['text'] + '</p>'
		}

		selector.find('.stat-selector').before(
			'<div class="icon-select-icon-block-active">\
				<div class="remove-icon">\
					<i class="fas fa-minus"></i>\
				</div>'
				+ iconhtml +
			'</div>'
		);
		selector.find('.icon-select-icon-block-active .remove-icon').click(function() {
			$(this).parent().remove();
		});
	});
}
