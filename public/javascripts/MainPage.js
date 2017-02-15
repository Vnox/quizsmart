'use strict';



// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	console.log("Javascript connected!");
	//$(".cardwrapper").click(cardClick);
}

function dummyAnswer() { 
  var x = document.getElementsByName("answer");
  var y = document.getElementById("sabutton");
  for (var i = 0; i < x.length; i++) {
    if(x[i].className === "showed"){
  	x[i].className = "answer";
  }else{
  	x[i].className = "showed";

  }

}
  




 //alert("Answer Showed");
}

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

