function addStats(selector) {
	for(var i = 0; i < 6; i++) {
		selector.append(
			'<div class="outer-stat-box" statno="' + i + '">\
		  		<div class="stat-box-title">\
			    	<p contenteditable="true">skl</p>\
			    </div>\
			  	<div class="inner-stat-box">\
			    	<p contenteditable="true">#</p>\
			  	</div>\
			</div>'
		);
	}
}