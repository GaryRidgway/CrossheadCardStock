function addCard(selector) {
	selector.append(
		'<div class="card" cardID="card-' + cardIDS + '">\
			<div class="card-inner">\
				<div class="card-top">\
					<img class="decorative-forest-background" src="assets/CREATURES - BACKGROUND ART BEASTS.png" alt="Decorative Forest Background">\
					<div class="name-plate">\
						<p class="creature-specs" contenteditable="true">specifications</p>\
						<img class="name-ribbon" src="assets/CREATURES - NAMECARD.png" alt="Name Ribbon">\
						<h2 class="name-text" contenteditable="true">name</h2>\
						<div class="cr-bar">\
							<div class="cr-container cr-left">\
								<div class="cr-content">\
									<img class="cr-card cr-card-left" src="assets/CREATURES - CR - CARD.png" alt="Dark Hexagon for challenge rating">\
									<div class="cr-card-text">\
										<p class="cr-card-cr" contenteditable="true">cr</p>\
										<p class="cr-card-xp" contenteditable="true">(xp)</p>\
									</div>\
								</div>\
							</div>\
							<div class="cr-container cr-right">\
								<div class="cr-content">\
									<img class="cr-card cr-card-right" src="assets/CREATURES - CR - CARD.png" alt="Dark Hexagon for challenge rating">\
									<div class="cr-card-text">\
										<p class="cr-card-cr" contenteditable="true">cr</p>\
										<p class="cr-card-xp" contenteditable="true">(xp)</p>\
									</div>\
								</div>\
							</div>\
						</div>\
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