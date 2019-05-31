function loadSaveState(data = 'CrossheadCardStockData') {
	if (data == 'CrossheadCardStockData') {
		try {
			data = JSON.parse(localStorage.getItem('CrossheadCardStockData'));
		}

		// If anything goes wrong, there is no data to load.
		catch(err) {
		  alert('Sorry, there is no data to load.');
		  return;
		}
	}

	// Check if there is no data to load.
	if (data == null) {
		alert('Sorry, there is no data to load.');
	  	return;
	}

	else {
		let cardKeys = Object.keys(data);
		cardKeys.forEach(function(cardid) {
			placeData(data, cardid);
		});
	}
}

// Is called on page load to auto load a card if an argument is given.
function autoLoad() {
	if (Object.keys(getURLVars()).includes('autoLoad')) {
		let data = JSON.parse(localStorage.getItem('CrossheadCardStockData'));
		placeData(data, getURLVars()['autoLoad'])
	}
}

// Place the data where it needs to be.
function placeData(data, cardid) {
	let cardselector = $(".card[cardid='" + cardid +"']");
	cardselector.find('.name-text').html(data[cardid].name);
	cardselector.find('.creature-specs').html(data[cardid].specs);
	cardselector.find('.outer-stat-box').each(function( index ) {
		$(this).find('.stat-box-title p').html(data[cardid].stats[index][0]);
		$(this).find('.inner-stat-box p').html(data[cardid].stats[index][1]);
	});
	cardselector.find('.cr-left .cr-card-text').html(data[cardid].leftCR);
	cardselector.find('.cr-right .cr-card-text').html(data[cardid].rightCR);
	cardselector.find('.creature-proficiencies-text').html(data[cardid].profs);
	quill.setContents(data[cardid].wysiwyg);
	cardselector.find('.rotate-creature').roundSlider("option", "value", data[cardid].creRot);
	rotateCreatureImage(cardselector, data[cardid].creRot);
	cardselector.find('.horizontal-position').val(data[cardid].horiz);
	horzontalCreatureImagePosition(cardselector, data[cardid].horiz)
	cardselector.find('.size-position').val(data[cardid].size);
	sizeCreatureImage(cardselector, data[cardid].size)
}
