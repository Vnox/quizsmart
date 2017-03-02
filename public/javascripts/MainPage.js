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

var clicked1 = false;
var clicked2 = false;
var clicked3 = false;
var clicked4 = false;
var clicked5 = false;

function preview1(){

  console.log("prev 1 called")
  if(clicked1 == false){
    clicked1 = true;
     $.getJSON( "/getdata", function( data ) {
    //console.log(data);
    var newHTML =  '<b>{{num_question}}</b> Questions in set. <br><br> <b>Preview:<br></b> {{#each this.questions}}  {{q_text}} <br> {{/each}}{{#if this.questions.[3]}} <br>   {{/if}}'
    var template = Handlebars.compile(newHTML);
   $('#pre1').html('<a id="pre{{index}}" href="javascript:void(0);" onclick="preview{{index}}()"><b> Collapse </b></a>')
   $(".versionb1").html(template(data.quizset[0]));

});
  }else{
    clicked1 = false;
    console.log('falsed')
     $.getJSON( "/getdata", function( data ) {
    //console.log(data);
   var newHTML =    ' <b>{{num_question}}</b> Questions in set. <br><br> <b>Preview:</b> {{#if this.questions.[0]}} <br> {{this.questions.[0].q_text}} {{else}} No questions in set, <br> please click to add : ) {{/if}} {{#if this.questions.[1]}} <br> {{this.questions.[1].q_text}} {{/if}}  {{#if this.questions.[2]}} <br> {{this.questions.[2].q_text}} {{/if}}  {{#if this.questions.[3]}} <br>      {{/if}}'
   var template = Handlebars.compile(newHTML);
   $('#pre1').html('<a id="pre{{index}}" href="javascript:void(0);" onclick="preview{{index}}()"><b> View More </b></a>')
   $(".versionb1").html(template(data.quizset[0]));

});

  }

}

function preview2(){

  console.log("prev 2 called")
  if(clicked2 == false){
    clicked2 = true;
     $.getJSON( "/getdata", function( data ) {
    //console.log(data);
    var newHTML =  '<b>{{num_question}}</b> Questions in set. <br><br> <b>Preview:<br></b> {{#each this.questions}}  {{q_text}} <br> {{/each}}{{#if this.questions.[3]}} <br>   {{/if}}'
    var template = Handlebars.compile(newHTML);
   $('#pre2').html('<a id="pre{{index}}" href="javascript:void(0);" onclick="preview{{index}}()"><b> Collapse </b></a>')
   $(".versionb2").html(template(data.quizset[1]));

});
  }else{
    clicked2 = false;
    console.log('falsed')
     $.getJSON( "/getdata", function( data ) {
    //console.log(data);
   var newHTML =    ' <b>{{num_question}}</b> Questions in set. <br><br> <b>Preview:</b> {{#if this.questions.[0]}} <br> {{this.questions.[0].q_text}} {{else}} No questions in set, <br> please click to add : ) {{/if}} {{#if this.questions.[1]}} <br> {{this.questions.[1].q_text}} {{/if}}  {{#if this.questions.[2]}} <br> {{this.questions.[2].q_text}} {{/if}}  {{#if this.questions.[3]}} <br>      {{/if}}'
   var template = Handlebars.compile(newHTML);
   $('#pre2').html('<a id="pre{{index}}" href="javascript:void(0);" onclick="preview{{index}}()"><b> View More </b></a>')
   $(".versionb2").html(template(data.quizset[1]));

});

  }

}



function preview3(){

  console.log("prev 3 called")
  if(clicked3 == false){
    clicked3 = true;
     $.getJSON( "/getdata", function( data ) {
    //console.log(data);
    var newHTML =  '<b>{{num_question}}</b> Questions in set. <br><br> <b>Preview:<br></b> {{#each this.questions}}  {{q_text}} <br> {{/each}}{{#if this.questions.[3]}} <br>   {{/if}}'
    var template = Handlebars.compile(newHTML);
   $('#pre3').html('<a id="pre{{index}}" href="javascript:void(0);" onclick="preview{{index}}()"><b> Collapse </b></a>')
   $(".versionb3").html(template(data.quizset[2]));

});
  }else{
    clicked3 = false;
    console.log('falsed')
     $.getJSON( "/getdata", function( data ) {
    //console.log(data);
   var newHTML =    ' <b>{{num_question}}</b> Questions in set. <br><br> <b>Preview:</b> {{#if this.questions.[0]}} <br> {{this.questions.[0].q_text}} {{else}} No questions in set, <br> please click to add : ) {{/if}} {{#if this.questions.[1]}} <br> {{this.questions.[1].q_text}} {{/if}}  {{#if this.questions.[2]}} <br> {{this.questions.[2].q_text}} {{/if}}  {{#if this.questions.[3]}} <br>      {{/if}}'
   var template = Handlebars.compile(newHTML);
   $('#pre3').html('<a id="pre{{index}}" href="javascript:void(0);" onclick="preview{{index}}()"><b> View More </b></a>')
   $(".versionb3").html(template(data.quizset[2]));

});

  }

}

function preview4(){

  console.log("prev 4 called")
  if(clicked4 == false){
    clicked4 = true;
     $.getJSON( "/getdata", function( data ) {
    //console.log(data);
    var newHTML =  '<b>{{num_question}}</b> Questions in set. <br><br> <b>Preview:<br></b> {{#each this.questions}}  {{q_text}} <br> {{/each}}{{#if this.questions.[3]}} <br>   {{/if}}'
    var template = Handlebars.compile(newHTML);
   $('#pre4').html('<a id="pre{{index}}" href="javascript:void(0);" onclick="preview{{index}}()"><b> Collapse </b></a>')
   $(".versionb4").html(template(data.quizset[3]));

});
  }else{
    clicked4 = false;
    console.log('falsed')
     $.getJSON( "/getdata", function( data ) {
    //console.log(data);
   var newHTML =    ' <b>{{num_question}}</b> Questions in set. <br><br> <b>Preview:</b> {{#if this.questions.[0]}} <br> {{this.questions.[0].q_text}} {{else}} No questions in set, <br> please click to add : ) {{/if}} {{#if this.questions.[1]}} <br> {{this.questions.[1].q_text}} {{/if}}  {{#if this.questions.[2]}} <br> {{this.questions.[2].q_text}} {{/if}}  {{#if this.questions.[3]}} <br>      {{/if}}'
   var template = Handlebars.compile(newHTML);
   $('#pre4').html('<a id="pre{{index}}" href="javascript:void(0);" onclick="preview{{index}}()"><b> View More </b></a>')
   $(".versionb4").html(template(data.quizset[3]));

});

  }

}

function preview5(){

  console.log("prev 5 called")
  if(clicked5 == false){
    clicked5 = true;
     $.getJSON( "/getdata", function( data ) {
    //console.log(data);
    var newHTML =  '<b>{{num_question}}</b> Questions in set. <br><br> <b>Preview:<br></b> {{#each this.questions}}  {{q_text}} <br> {{/each}}{{#if this.questions.[3]}} <br>   {{/if}}'
    var template = Handlebars.compile(newHTML);
   $('#pre5').html('<a id="pre{{index}}" href="javascript:void(0);" onclick="preview{{index}}()"><b> Collapse </b></a>')
   $(".versionb5").html(template(data.quizset[4]));

});
  }else{
    clicked5 = false;
    console.log('falsed')
     $.getJSON( "/getdata", function( data ) {
    //console.log(data);
   var newHTML =    ' <b>{{num_question}}</b> Questions in set. <br><br> <b>Preview:</b> {{#if this.questions.[0]}} <br> {{this.questions.[0].q_text}} {{else}} No questions in set, <br> please click to add : ) {{/if}} {{#if this.questions.[1]}} <br> {{this.questions.[1].q_text}} {{/if}}  {{#if this.questions.[2]}} <br> {{this.questions.[2].q_text}} {{/if}}  {{#if this.questions.[3]}} <br>      {{/if}}'
   var template = Handlebars.compile(newHTML);
   $('#pre5').html('<a id="pre{{index}}" href="javascript:void(0);" onclick="preview{{index}}()"><b> View More </b></a>')
   $(".versionb5").html(template(data.quizset[4]));

});

  }

}





