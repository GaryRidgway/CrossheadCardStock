function addStats(selector) {
	for(var i = 0; i < 6; i++) {
		
		defaultStatName = 'skl';
		if(i==0){defaultStatName='str'}
		else if(i==1){defaultStatName='dex'}
		else if(i==2){defaultStatName='con'}
		else if(i==3){defaultStatName='int'}
		else if(i==4){defaultStatName='wis'}
		else if(i==5){defaultStatName='cha'}

		selector.append(
			'<div class="outer-stat-box" statno="' + i + '">\
		  		<div class="stat-box-title">\
			    	<p contenteditable="true">' + defaultStatName + '</p>\
			    </div>\
			  	<div class="inner-stat-box">\
			    	<p contenteditable="true">#</p>\
			  	</div>\
			</div>'
		);
	}
}