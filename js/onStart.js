$( document ).ready(function() {
	// Add cards.
    addCard($('#cardzone'));

    // Remove the ability to drag images.
    $('img').on('dragstart', function(event) { event.preventDefault(); });

    // Shrink em a bit.
    cardScale(1);

    // Auto load if given argument.
    autoLoad();
});