// Melissa Mangos
"use strict";
// Uses seconds in epoch/unix time to change the background colour.
// Since only seconds are used, rather than the hour/min/seconds 
//		(like the colour being #164239 at 16:42:39) then 
// 		all colours would eventually be shown.
// The colours would repeat themselves every 16^6 seconds = 16,777,216 seconds
// 		or approximately 1351 days (or 3.7 years)!
var now;
var colourID;
var clockID;

// Changes colour and clock every second
var changeColour = setInterval(function(){colourStart()}, 1000);
var changeClock = setInterval(function(){clockStart()}, 1000);

// Ensures ID's can be found & starts the colour off
window.onload = function() {
	colourID = document.getElementById("colour");
	clockID = document.getElementById("clock");
	colourStart()
	clockStart()
}

// Main function for changing colour
function colourStart() {
	var colour = "";

	colourID = document.getElementById("colour");

	getNow();

	colour = getColour();
	
	setColour(colour);

	setColourCode(colour);
}

// Main function for changing clock
function clockStart() {
	var time = getTime()

	clockID = document.getElementById("clock");

	setTime(time)
}

// Gets the epoch time currently
// Accurate to the second, 7 digits long
function getNow() {
	var t = Date.now();
	t = Math.floor(t/1000);
	now = t % 10000000
}

// Gets the current time for the clock
function getTime() {
	var t = new Date(Date.now());
	var hour = t.getHours();

	var min = t.getMinutes();
	var second = t.getSeconds();
	
	// Used to show 02 as opposed to 2 (for example)
	if (hour < 10) {
		hour = "0" + hour
	}
	if (min < 10) {
		min = "0" + min
	}
	if (second < 10) {
		second = "0" + second
	}

	return hour + " : " + min + " : " + second
}

// Calcuates the colour based on the current epoch time
function getColour() {
	var digit;
	var colour = "";
	var tempNow = now;

	// Finds the modulus of the last 2 digits and 16 to get a hex value
	// then adds the hex digit to the colour string,
	// and divides by 10 to get the next digit
	for (var i = 0; i < 6; i++) {
		digit = getHex(tempNow % 16)
		colour = digit + colour;
		tempNow = Math.floor(tempNow/10);

	}

	return "#" + colour
}

// Sets the background to the current colour
function setColour(colour) {
	document.body.style.backgroundColor = colour;
}

// Sets the webpage to display the current colour code
function setColourCode(colour) {
	colourID.innerHTML = colour;
}

// Sets the webpage to display the current time
function setTime(time) {
	clockID.innerHTML = time;
}

// Translates a given number into it's hexidecimal component
function getHex(digit) {
	switch (digit){
		case 10:
			return "A"
		case 11:
			return "B"
		case 12:
			return "C"
		case 13:
			return "D"
		case 14:
			return "E"
		case 15:
			return "F"
		default:
			return String(digit)
	}
}

// Debug function - used to clear the timers
function clear() {
	clearInterval(changeColour);
	clearInterval(changeClock);
}

