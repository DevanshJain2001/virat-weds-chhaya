// Sakura falling 

(function ($) {
	"use strict";
	  $('.sakura-falling').sakura();
  })(jQuery);

console.log("working")  


// Gallery effect

// $(document).ready(function() {
// 	$(".gallery").magnificPopup({
// 		delegate: "a",
// 		type: "image",
// 		tLoading: "Loading image #%curr%...",
// 		mainClass: "mfp-img-mobile",
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
// 		},
// 		image: {
// 			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
// 		}
// 	});
// });


// Background Music 

let isPlaying = false; // Flag to track audio status

// Play music on any click anywhere on the page
$(document).on('click', function() {
    const audio = document.getElementById("my_audio");

    // Only play if audio is not already playing
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
        console.log('Shaadi me zaroor aana');
        $('#stopButton').show();
    }
});

// Stop music and hide the button
function stopMusic(event) {
    event.stopPropagation(); // Prevent triggering play on button click
    const audio = document.getElementById("my_audio");
    audio.pause();
    isPlaying = false; // Update flag
    $('#stopButton').hide();
}
//Countdown 

(function () {
	const second = 1000,
		  minute = second * 60,
		  hour = minute * 60,
		  day = hour * 24;
 
	const countDown = new Date(2024, 12, 7, 18, 0, 0);
		x = setInterval(function() {    
  
		  const now = new Date().getTime(),
				distance = countDown - now;
  
		  document.getElementById("days").innerText = Math.floor(distance / (day)),
			document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
			document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
			document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
		  //do something later when date is reached
		  if (distance < 0) {
			document.getElementById("countdown").style.display = "none";
			clearInterval(x);
		  }
		  //seconds
		}, 0)
	}());


// Contact Card 

document.getElementById("contactTrigger").addEventListener("click", function() {
	var contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
	contactModal.show();
  });






