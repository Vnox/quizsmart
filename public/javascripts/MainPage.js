'use strict';



// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
  //$('#answer').click(hideAnswers);
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
     var newHTML = '<a href= #answershowed" + onclick="dummyAnswer()"><b> Show Answer </b></a>'
        $('#sabuttont').html(newHTML);
  }else{
  	x[i].className = "showed";
    var newHTML = '<a href= #answershowed" + onclick="dummyAnswer()"><b> Hide Answer </b></a>'
        $('#sabuttont').html(newHTML);
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

function add(e){
  console.log(e)
  console.log("ADD CALLED")
  var newHTML = '<form role="form" method="get" action="' + e +'">' +'<div class="adding">' + '<div>' +'<label for="name">Question:</label>' +'<input type="text" class="inputbox gr" id="new_ques" placeholder="Enter quiz question here" name="new_ques">' +'</div>' +'<div>' +'<label for="description">Answer:</label>' +'<input type="text" class="inputbox gr" id="new_answer" placeholder="Enter answer here" name="new_answer">' +'</div>' +'<input type="submit" class="inputbox submitbox"  value="Add New Question : )"></input>' +'</div>' + '</form>' 
  $('#sabuttonrev').html(newHTML);
  $('#sabuttonrev').css('background-color', 'clear');
}

function toggleColor(){
	var x =  document.getElementsByName("answer");
	x.className += '';
}

function hideAnswers(){
  var newHTML = '<p><small>' + 'this is a test' + '</small></p>'
  //$("#answer").append(newHTML);
  $("#answer").removeClass()

}

function versionbpreview(){

  
}





