// This function adds the left and right side stat wrappers and functionality.
function addSideStats(selector) {
	selector.append(
		'<div class="left-stat-wrapper stat-wrapper"></div>\
		<div class="right-stat-wrapper stat-wrapper"></div>\
		'
	);

	// The statSelector() function takes a selector (left or right stat-wrapper)
	// and an array of icons and their data.
	statSelector(selector.find('.left-stat-wrapper'), {
		'Hit Points': {
			'icon': 'CREATURES - CORE - HP.png',
			'type': 'stat'
		},
		'Armor': {
			'icon': 'CREATURES - CORE - AC.png',
			'type': 'stat'
		},
		'Speed': {
			'icon': 'CREATURES - CORE - SPEED.png',
			'type': 'stat'
		},
		'Burrow': {
			'icon': 'CREATURES - CORE - BURROWING SPEED.png',
			'type': 'stat'
		},
		'Climb': {
			'icon': 'CREATURES - CORE - CLIMBING SPEED.png',
			'type': 'stat'
		},
		'Swim': {
			'icon': 'CREATURES - CORE - SWIM SPEED.png',
			'type': 'stat'
		},
		'Fly': {
			'icon': 'CREATURES - CORE - FLYING SPEED.png',
			'type': 'stat'
		}
	});

	statSelector(selector.find('.right-stat-wrapper'), {
		'Attack Single': {
			'icon': 'CREATURES - ACTION - SINGLE ATTACK.png',
			'type': 'action'
		},
		'Attack Double': {
			'icon': 'CREATURES - ACTION - DOUBLE ATTACK.png',
			'type': 'action'
		},
		'Attack Triple': {
			'icon': 'CREATURES - ACTION - TRIPLE ATTACK.png',
			'type': 'action'
		},
		'DMG Any': {
			'icon': 'CREATURES - DAMAGE -.png',
			'type': 'damage'
		},
		'DMG Bludgeoning': {
			'icon': 'CREATURES - DAMAGE - BLUDGEONING.png',
			'type': 'damage'
		},
		'DMG Piercing': {
			'icon': 'CREATURES - DAMAGE - PIERCING.png',
			'type': 'damage'
		},
		'DMG Slashing': {
			'icon': 'CREATURES - DAMAGE - SLASHING.png',
			'type': 'damage'
		}
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
		let iconKeyClass = iconKey.replace(/\s+/g, '-').toLowerCase();

		// Construct the icon areas.
		let iconhtml = craftIconHTML(iconDict, iconKey);

		// Prepend the selected icon and it's fields.
		selector.find('.stat-selector').before(
			'<div class="icon-select-icon-block-active icon-display-' + iconKeyClass + ' ' + iconDict[iconKey]['type'] + '">\
				<div class="remove-icon">\
					<i class="fas fa-minus"></i>\
				</div>'
				+ iconhtml +
			'</div>'
		);
		selector.find('.icon-select-icon-block-active .remove-icon').click(function() {
			$(this).parent().remove();

			// Check if we need to keep the add button.
			checkIfNeedAdd(selector);
		});

		// Check if we need to keep the add button.
		checkIfNeedAdd(selector);
	});
}

// This function checks if there is a need for a add button on the side stats.
function checkIfNeedAdd(selector) {
	let newSel = selector.find('.stat-selector');

	if(selector.children().length > 4) {
		newSel.addClass('stat-selector-no-display');
	} else {
		newSel.removeClass('stat-selector-no-display');
	}
}
