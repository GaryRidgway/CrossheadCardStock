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
  let iconHTML;
  let icon = '<img class="icon-select-icon" src="assets/' + iconDict[iconKey]['icon'] + '" alt="' + iconKey + '">';

  switch (iconDict[iconKey]['type']) {
    // If it is a stat.
    case 'stat':
      iconHTML = '\
        <p class="icon-select-title">' + iconKey + '</p>\
        ' + icon + '\
        <p contenteditable="true" class="icon-select-val">' + ((Load) ? iconDict[iconKey]['val'] : '00') + '</p>\
        ';
      break;

    // If it is an action.
    case 'action':
      iconHTML = '\
        ' + icon + '\
        <p class="icon-select-val">action</p>\
        ';
      break;

    // If it is damage.
    case 'damage':
      iconHTML = '\
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

  return iconHTML;
}

function insertIconHTML(selector, iconHTML, iconKeyClass, iconDict, iconKey) {
  // Prepend the selected icon and it's fields.
  selector.find('.stat-selector').before(
    '<div class="icon-select-icon-block-active icon-display-' + iconKeyClass + ' ' + iconDict[iconKey]['type'] + '" icon-type="' + iconDict[iconKey]['type'] + '">\
      <div class="remove-icon">\
        <i class="fas fa-minus"></i>\
      </div>'
      + iconHTML +
    '</div>'
  );
  selector.find('.icon-select-icon-block-active .remove-icon').click(function() {
    $(this).parent().remove();

    // Check if we need to keep the add button.
    checkIfNeedAdd(selector);
  });

  // Check if we need to keep the add button.
  checkIfNeedAdd(selector);
}

// Returns a dictionary of the left side stats.
//TODO: expand this to work for both sides.
function loadLeftSideStats(selector) {
  let finalLeftSideStats = {};

  selector.find('.left-stat-wrapper .icon-select-icon-block-active').each(function(index) {

    
    finalLeftSideStats[index] = {
      [$(this).find('.icon-select-title').text()] : {
        'icon' : $(this).find('.icon-select-icon').attr('src').replace('assets/',''),
        'type' : $(this).attr('icon-type'),
        'val'  : $(this).find('.icon-select-val').text()
      }
    };
  });

  return finalLeftSideStats;
}
