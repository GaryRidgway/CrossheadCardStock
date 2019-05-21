function saveState() {
	$('.card').each(function( index ) {
		let cardid = $(this).attr( "cardid" );
		let name   = $(this).find('.name-text').text();
		let specs  = $(this).find('.creature-specs').text();
		let stats  = [];
		$(this).find('.outer-stat-box').each(function( index ) {
			stats.push([$(this).find('.stat-box-title p').text(), $(this).find('.inner-stat-box p').text()]);
		});
		let leftCR  = $(this).find('.cr-left .cr-card-text').html();
		let rightCR = $(this).find('.cr-right .cr-card-text').html();

		var dict = {
			name: name,
			specs: specs,
			stats: stats,
			leftCR: leftCR,
			rightCR: rightCR
		};

		savedContent[cardid] = dict;

		localStorage.setItem('CrossheadCardStockData', JSON.stringify(savedContent));
	});
		
}

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
			let cardselector = $(".card[cardid='" + cardid +"']");
			cardselector.find('.name-text').html(data[cardid].name);
			cardselector.find('.creature-specs').html(data[cardid].specs);
			cardselector.find('.outer-stat-box').each(function( index ) {
				$(this).find('.stat-box-title p').html(data[cardid].stats[index][0]);
				$(this).find('.inner-stat-box p').html(data[cardid].stats[index][1]);
			});
			cardselector.find('.cr-left .cr-card-text').html(data[cardid].leftCR);
			cardselector.find('.cr-right .cr-card-text').html(data[cardid].rightCR);
		});
	}
}

$( document ).ready(function() {
	// Attach the ability to save by clicking the save button.
    $('#saveState').click(function() {
    	if (confirm('Would you like to save your cards? This will override any old data.')) {
    		saveState();
		} else {
		    // Do nothing!
		}
    });

    //  Attach the ability to load a save by clicking the load button.
    $('#loadSaveState').click(function() {
    	if (confirm('Would you like to load your saved cards? This will erase any unsaved data.')) {
    		loadSaveState();
		} else {
		    // Do nothing!
		}
    });
});