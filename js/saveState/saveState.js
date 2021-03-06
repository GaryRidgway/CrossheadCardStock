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
		let profs  = $(this).find('.creature-proficiencies-text').text();
		let wysiwyg = quill.getContents();
		let creRot = $(this).find('.rotate-creature').roundSlider("option", "value");
		let horiz = $(this).find('.horizontal-position').val();
		let size = $(this).find('.size-position').val();
		let vert = $(this).find('.vertical-position').val();
		let sideStats = loadSideStats($(this));

		var dict = {
			name: name,
			specs: specs,
			stats: stats,
			leftCR: leftCR,
			rightCR: rightCR,
			profs: profs,
			wysiwyg: wysiwyg,
			creRot: creRot,
			horiz: horiz,
			size: size,
			vert: vert,
			sideStats: sideStats,
		};

//TODO: this is in the wrong bracket.
		savedContent[cardid] = dict;

		localStorage.setItem('CrossheadCardStockData', JSON.stringify(savedContent));
	});
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
