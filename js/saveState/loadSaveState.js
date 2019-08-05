var testData;


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
	let cardDict = data[cardid];
	let cardselector = $(".card[cardid='" + cardid +"']");
	cardselector.find('.name-text').html(cardDict.name);
	cardselector.find('.creature-specs').html(cardDict.specs);
	cardselector.find('.outer-stat-box').each(function( index ) {
		$(this).find('.stat-box-title p').html(cardDict.stats[index][0]);
		$(this).find('.inner-stat-box p').html(cardDict.stats[index][1]);
	});
	cardselector.find('.cr-left .cr-card-text').html(cardDict.leftCR);
	cardselector.find('.cr-right .cr-card-text').html(cardDict.rightCR);
	cardselector.find('.creature-proficiencies-text').html(cardDict.profs);
	quill.setContents(cardDict.wysiwyg);
	cardselector.find('.rotate-creature').roundSlider("option", "value", cardDict.creRot);
	rotateCreatureImage(cardselector, cardDict.creRot);
	cardselector.find('.horizontal-position').val(cardDict.horiz);
	horzontalCreatureImagePosition(cardselector, cardDict.horiz);
	cardselector.find('.size-position').val(cardDict.size);
	sizeCreatureImage(cardselector, cardDict.size);
	cardselector.find('.vertical-position').val(cardDict.vert);
	verticalCreatureImagePosition(cardselector, cardDict.vert);

	testData = cardDict;

	// Left Side Stats.
	for (var index in Object.keys(cardDict['leftStats'])) {
		let iconDict = cardDict['leftStats'][index];
		let iconKey = Object.keys(iconDict)[0];
		// console.log(iconKey);
		let iconKeyClass = iconKey.replace(/\s+/g, '-').toLowerCase();
		let iconHTML = craftIconHTML(iconDict,iconKey,true);
		let selector = $('.left-stat-wrapper');
		insertIconHTML(selector, iconHTML, iconKeyClass, iconDict, iconKey);
	}
}
