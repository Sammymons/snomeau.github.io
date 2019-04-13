// I found how to do comments
/*
This is the other way to do comments


$(document).ready(() => {
  $('#music-content').hide();
  $('#musicHideButton').hide();
  $('#sammymons-links').hide()
  $('#birkett-links').hide()
  $('#condominators-links').hide()
  $('#sammymons-sounds').hide()
  $('#birkett').hide()
  $('#the-condominators').hide()

  $('#musicShowButton').on('click', () => {
    $('#music-content').slideDown();
    $('#musicShowButton').slideUp();
    $('#musicHideButton').slideDown();
  });
  $('#musicHideButton').on('click', () => {
    $('#music-content').slideUp();
    $('#musicShowButton').slideDown();
    $('#musicHideButton').slideUp();
  });
  $('#sammymons-logo').on('click', () => {
    $('#sammymons-links').slideToggle();
    $('#birkett-links').slideUp();
    $('#condominators-links').slideUp();
  });
  $('#birkett-logo').on('click', () => {
    $('#birkett-links').slideToggle();
    $('#sammymons-links').slideUp();
    $('#condominators-links').slideUp();
  });
  $('#condominators-logo').on('click', () => {
    $('#condominators-links').slideToggle();
    $('#sammymons-links').slideUp();
    $('#birkett-links').slideUp();
  });

  $('#musicShowButton').on('mouseenter', () => {
    $('#musicShowButton').addClass('musicShowButtonActive');
  });
  $('#musicShowButton').on('mouseleave', () => {
    $('#musicShowButton').removeClass('musicShowButtonActive');
  });

  $('#musicHideButton').on('mouseenter', () => {
    $('#musicHideButton').addClass('musicHideButtonActive');
  });
  $('#musicHideButton').on('mouseleave', () => {
    $('#musicHideButton').removeClass('musicHideButtonActive');
  });

  $('#sammymons-logo').on('mouseenter', () => {
    $('#sammymons-sounds').slideDown();
  });
  $('#sammymons-logo').on('mouseleave', () => {
    $('#sammymons-sounds').slideUp();
  });

  $('#birkett-logo').on('mouseenter', () => {
    $('#birkett').slideDown();
  });
  $('#birkett-logo').on('mouseleave', () => {
    $('#birkett').slideUp();
  });

  $('#condominators-logo').on('mouseenter', () => {
    $('#the-condominators').slideDown();
  });
  $('#condominators-logo').on('mouseleave', () => {
    $('#the-condominators').slideUp();
  });
})

*/

var i = 0;
var txt = 'Matthew McConaughey!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('#parallax').css('top',(0-(scrolled*.25))+'px');
}



// List of sentences
var _CONTENT = [
	"Twinkle, twinkle, little star",
	"How I wonder what you are",
	"Up above the world so high",
	"Like a diamond in the sky"
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
	// Get substring with 1 characater added
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		// Hide the cursor
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	// Get substring with 1 characater deleted
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;

		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("alert").style.top = "0";
  } else {
    document.getElementById("alert").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
