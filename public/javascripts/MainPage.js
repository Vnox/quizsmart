'use strict';



// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
	$(".cardwrapper").click(cardClick);
}

function dummyAnswer() {  alert("Answer Showed");}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



function cardClick(e) {
	e.preventDefault();
	console.log("Clicked.");
	console.log($(this).text());
	
}

