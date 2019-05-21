function addCRBar(selector) {
	selector.append(
		'<div class="cr-container cr-left">\
			<div class="cr-content">\
				<img class="cr-card cr-card-left" src="assets/CREATURES - CR - CARD.png" alt="Dark Hexagon for challenge rating">\
				<div class="cr-card-text">\
					<p class="cr-card-cr" spellcheck="false" contenteditable="true">cr</p>\
					<p class="cr-card-xp" spellcheck="false" contenteditable="true">(xp)</p>\
				</div>\
			</div>\
		</div>\
		<div class="cr-container cr-right">\
			<div class="cr-content">\
				<img class="cr-card cr-card-right" src="assets/CREATURES - CR - CARD.png" alt="Dark Hexagon for challenge rating">\
				<div class="cr-card-text">\
					<p class="cr-card-cr" spellcheck="false" contenteditable="true">cr</p>\
					<p class="cr-card-xp" spellcheck="false" contenteditable="true">(xp)</p>\
				</div>\
			</div>\
		</div>'
	);
}