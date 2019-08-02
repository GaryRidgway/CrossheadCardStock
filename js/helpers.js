var debug = true;

// Can get the variables from the URL.
function getURLVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

// Can scale the card to what you want without leaving space around it.
function cardScale(percentSize) {
	$('.card').each(function() {
		// Add the scaling to the card container.
		let newWidth        = parseFloat($(this).css('width')) * percentSize;
		let newMinHeight = parseFloat($(this).css('min-height')) * percentSize;
		let newHeight    = parseFloat($(this).css('height')) * percentSize;
		$(this).css({
	      "width": newWidth + "px",
		    "min-height": newMinHeight + "px",
		    "height": newHeight + "px"
	    });



		// Add the transform on inner container.
		$(this).find('.card-inner').css({
	      "-webkit-transform": "scale(" + percentSize + ")",
		    "-moz-transform": "scale(" + percentSize + ")",
		    "-o-transform": "scale(" + percentSize + ")",
		    "transform": "scale(" + percentSize + ")",
		    "-webkit-transform-origin": "left top",
		    "-moz-transform-origin": "left top"
	    });
	});
}

// HTML stripper.
function stripHTML(html){
   var doc = new DOMParser().parseFromString(html, 'text/html');
   return doc.body.textContent || "";
}

// Rotate creature.
function rotateCreatureImage(selector, deg) {
	selector.find('.creature-image').css( "transform", 'rotate(' + deg + 'deg)');
}

// Horizontally position creature.
function horzontalCreatureImagePosition(selector, modifier) {
  selector.find('.horizontal-position').val(modifier);
  selector.find('.slider-horizontal-tooltip').val(modifier);
	selector.find('.creature').css( "transform", 'translate(' + modifier * 3 + 'px)');
}

// Horizontally position creature.
function sizeCreatureImage(selector, modifier) {
  selector.find('.size-position').val(modifier);
  selector.find('.slider-size-tooltip').val(modifier);
  selector.find('.creature-size-container').css( "transform", 'scale(' + modifier / 100 + ')');
}

//
function verticalCreatureImagePosition(selector, modifier) {
  selector.find('.vertical-position').val(modifier);
  selector.find('.slider-vertical-tooltip').val(modifier);
  selector.find('.creature-vertical-container').css( "transform", 'translateY(' + modifier * -3 + 'px)');
}

// Add lines to measure items against in side stats.
function measures() {
	if (debug) {
		let html = '<div class="measure-line"></div>';
		$('.left-stat-wrapper').prepend(html);
		$('.left-stat-wrapper .stat-selector').before(html);
	}
}

// Craft Icon HTML
function craftIconHTML(iconDict, iconKey, Load = false) {
  let iconhtml;
  let icon = '<img class="icon-select-icon" src="assets/' + iconDict[iconKey]['icon'] + '" alt="' + iconKey + '">';

  switch (iconDict[iconKey]['type']) {
    // If it is a stat.
    case 'stat':
      iconhtml = '\
        <p class="icon-select-title">' + iconKey + '</p>\
        ' + icon + '\
        <p contenteditable="true" class="icon-select-val">' + ((Load) ? iconDict[iconKey]['val'] : '00') + '</p>\
        ';
      break;

    // If it is an action.
    case 'action':
      iconhtml = '\
        ' + icon + '\
        <p class="icon-select-val">action</p>\
        ';
      break;

    // If it is damage.
    case 'damage':
      iconhtml = '\
        ' + icon + '\
        <p contenteditable="true" class="icon-select-val">+0</p>\
        <p contenteditable="true" class="icon-select-title">atk</p>\
        <div class="avg-rolled-container">\
          <p contenteditable="true" class="icon-select-dmg avg">X</p>\
          <p contenteditable="true" class="icon-select-dmg rolled">xdx+x</p>\
        </div>\
        ';
      break;
  }

  return iconhtml;
}

function loadLeftSideStats(selector) {
  let finalLeftSideStats = {};
  $('.left-stat-wrapper .icon-select-icon-block-active').each(function(index) {
    finalLeftSideStats[$(this).find('.icon-select-title').text()] = {
      'icon' : $('.icon-select-icon').attr('src').replace('assets/',''),
      'type' : $(this).attr('icon-type')
    };
  });
  console.log(finalLeftSideStats);
  return finalLeftSideStats;
}
