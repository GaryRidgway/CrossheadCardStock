function addCreature(selector) {
	selector.append(
		'<div class="creature">\
			<div class="creature-size-container">\
				<img class="creature-image" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9edf76c-c971-445d-bbc1-6be12d18dc60/d37e05d-931ea46a-eff9-4505-a5f5-cea016341a72.png/v1/fill/w_400,h_371,strp/pikachu_by_moni158_d37e05d-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzcxIiwicGF0aCI6IlwvZlwvYzllZGY3NmMtYzk3MS00NDVkLWJiYzEtNmJlMTJkMThkYzYwXC9kMzdlMDVkLTkzMWVhNDZhLWVmZjktNDUwNS1hNWY1LWNlYTAxNjM0MWE3Mi5wbmciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.9aNKhv7iPG6vHawnpW9OkKCKGyDwAjfhhpm-1b403AA" alt="creature-image">\
			</div>\
		</div>\
		<div class="creature-controls-container">\
			<div class="creature-controls">\
				<div class="rotate-creature"></div>\
				<div class="slidecontainer">\
					<div class="bottom-slider horizontal">\
						<div class="slider-header horizontal-position-header">\
							<div class="slider-title horizontal-position-title">Horizontal</div>\
							<input type="number" class="slider-tooltip slider-horizontal-tooltip" min="-100" max="100" value="0">\
						</div>\
					  	<input type="range" min="-100" max="100" value="0" class="slider horizontal-position">\
					</div>\
					<div class="bottom-slider size">\
						<div class="slider-header size-position-header">\
							<div class="slider-title size-position-title">Size</div>\
							<input type="number" class="slider-tooltip slider-size-tooltip" min="0" max="200" value="100">\
						</div>\
					  	<input type="range" min="0" max="200" value="100" class="slider size-position">\
					</div>\
				</div>\
			</div>\
		</div>\
		'
	);

	$('#image-url').on('input', function() {
		selector.find('.creature-image').attr('src', stripHTML($(this).val()));
	});

	// Creates the circle slider and it's behavior for the rotation of the creature image.
	let circleSlider = selector.find('.rotate-creature');
	circleSlider.roundSlider({
	    min: 0,
	    max: 360,
	    step: 1,
	    radius: 90,
	    width: 4,
	    value: 0,
	    handleSize: "+14",
	    drag: function (e) {
	        rotateCreatureImage(selector, e.value)
	    },
	    change: function (e) {
	        rotateCreatureImage(selector, e.value)
	    }
	});

	// Creates the horizontal position slider behavior for the creature image.
	selector.find('.horizontal-position').on('input', function() {
		horzontalCreatureImagePosition(selector, $(this).val());
	});
	selector.find('.slider-horizontal-tooltip').on('input', function() {
		horzontalCreatureImagePosition(selector, $(this).val());
	});

	// Creates the size slider behavior for the creature image.
	selector.find('.size-position').on('input', function() {
		sizeCreatureImage(selector, $(this).val());
	});
	selector.find('.slider-size-tooltip').on('input', function() {
		sizeCreatureImage(selector, $(this).val());
	});
}
