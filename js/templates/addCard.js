function addCard(selector) {
	selector.append(
		'<div class="card" cardID="card-' + cardIDS + '">\
			<div class="card-inner">\
				<div class="card-top">\
					<img class="decorative-forest-background" src="assets/CREATURES - BACKGROUND ART BEASTS.png" alt="Decorative Forest Background">\
					<div class="name-plate">\
						<p class="creature-specs" spellcheck="false" contenteditable="true">specifications</p>\
						<img class="name-ribbon" src="assets/CREATURES - NAMECARD.png" alt="Name Ribbon">\
						<h2 class="name-text" spellcheck="false" contenteditable="true">name</h2>\
						<div class="cr-bar"></div>\
					</div>\
					<div class="stat-bar"></div>\
					<div class="side-stats"></div>\
				</div>\
				<div class="card-bottom"></div>\
			</div>\
		</div>'
	);
	
	addStats(selector.find('.stat-bar'));
	addCRBar(selector.find('.cr-bar'));
	addSideStats(selector.find('.side-stats'))

	cardIDS++;
}
