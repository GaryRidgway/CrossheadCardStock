function addCreature(selector) {
	selector.append(
		'<div class="creature">\
			<img class="creature-image" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9edf76c-c971-445d-bbc1-6be12d18dc60/d37e05d-931ea46a-eff9-4505-a5f5-cea016341a72.png/v1/fill/w_400,h_371,strp/pikachu_by_moni158_d37e05d-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzcxIiwicGF0aCI6IlwvZlwvYzllZGY3NmMtYzk3MS00NDVkLWJiYzEtNmJlMTJkMThkYzYwXC9kMzdlMDVkLTkzMWVhNDZhLWVmZjktNDUwNS1hNWY1LWNlYTAxNjM0MWE3Mi5wbmciLCJ3aWR0aCI6Ijw9NDAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.9aNKhv7iPG6vHawnpW9OkKCKGyDwAjfhhpm-1b403AA" alt="creature-image">\
		</div>\
		'
	);

	$('#image-url').on('input', function() {
		selector.find('.creature-image').attr('src', stripHTML($(this).val()));
	});
}