function addCard(selector) {
	selector.append(
		'<div class="card" cardID="card-' + cardIDS + '">\
			<div class="card-inner">\
				<div class="card-top">\
					<img class="decorative-forest-background" src="assets/CREATURES - BACKGROUND ART BEASTS.png" alt="Decorative Forest Background">\
					<div class="name-plate">\
						<p class="creature-specs" contenteditable="true">specifications</p>\
						<img src="assets/CREATURES - NAMECARD.png" alt="Name Ribbon">\
						<h2 class="name-text" contenteditable="true">name</h2>\
					</div>\
					\
					<div class="stat-bar">\
					</div>\
				</div>\
				<div class="card-bottom"></div>\
			</div>\
		</div>'
	);
	addStats(selector.find('.stat-bar'));

	cardIDS++;
}