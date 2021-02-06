//ideas : the first quote generator contains only simple sentences 
//and the second one only complex sentences (2 subjects + 2 verbs + 2 complements)

//FIRST SET OF SENTENCES

var subject = ["I","You","He","She", "It","We", "You", "They"];
var verb = ["want", "like", "eat", "hate", "enjoy", "love", "dislike", "prefer"];
var complement = ["cookies", "cereals", "bread", "ice cream", "chocolate cakes", "milk chocolate"];
var punctuation_marks = [".", "!", "..."];

//SECOND SET OF SENTENCES

var subject2 = ["I", "You","We", "You", "They"];
var verb1 = ["want to", "need to", "should", "could", "ought to", "have to", "must"];
var complement2 = ["go for a ride", "wash up", "unlock the door"];
var connectors = ["and", "but", "but also"];
var verb2 =  ["not hold a grudge","leave them be", "stop worrying", "forget about everything", "enjoy the day"];


function generate_quotes(quoteCount){

	//first step of the program. It picks 4 random nb, which then allows it
	//to generate a quotation accordingly 
	let quotes_container = "";

	while (quoteCount > 0) {
		var random_subject = Math.floor((Math.random()*subject.length));
		var random_verb = Math.floor((Math.random()*verb.length));
		var random_complement = Math.floor((Math.random()*complement.length));
		var random_mark = Math.floor((Math.random()*punctuation_marks.length));

		if (random_subject >= 2 && random_subject <= 4) {
			quotes_container += "<p id='quote'>" + subject[random_subject] +
				" " + verb[random_verb] + "s" + " " + 
				complement[random_complement] + punctuation_marks[random_mark] +
				"</p>";
		} else {
			quotes_container += "<p id='quote'>" + subject[random_subject] +
				" " + verb[random_verb] + " " + complement[random_complement] +
				punctuation_marks[random_mark] + "</p>";
		}

		quoteCount--;
		$("#quote").html(quotes_container);
	}
}

//second step of the program. It selects randomly 6 random nbs to generate a complex sentence.
function generate_quotes2(quoteCount){
	let quotes_container = " ";
	while (quoteCount > 0){
		var random_subject2 = Math.floor((Math.random()*subject2.length));
		var random_verb1 = Math.floor((Math.random()*verb1.length));
		var random_complement2 = Math.floor((Math.random()*complement2.length));
		var random_connectors = Math.floor((Math.random()*connectors.length));
		var random_verb2 = Math.floor((Math.random()*verb2.length));
		var random_mark = Math.floor((Math.random()*punctuation_marks.length));

		if (random_subject2 > 0){
			quotes_container += "<p id='quote'>" + subject2[random_subject2] + " " + verb1[random_verb1] + " " + complement2[random_complement2] + " " + 
			connectors[random_connectors] + " " + subject2[random_subject2].toLowerCase() + " " + verb2[random_verb2] + punctuation_marks[random_mark] +"</p>";  
			quoteCount--;
		} else {
			quotes_container += "<p id='quote'>" + subject2[random_subject2] + " " + verb1[random_verb1] + " " + complement2[random_complement2] + " " + 
			connectors[random_connectors] + " " + subject2[random_subject2] + " " + verb2[random_verb2] + punctuation_marks[random_mark] +"</p>";  
			quoteCount--;
		}
		
	}
	$("#quote").html(quotes_container); 
}; 


$(document).ready(function(){
	$("#btn1").click(function(){
	var quoteType, quoteCount;
	console.log($('#pulldown'));
	quoteType = $('#pulldown')[0].value;
	quoteCount = $('#pulldown2')[0].value;
	//alert(quoteType);
	//alert(quoteCount);
		if(quoteType=="FG"){
			generate_quotes(quoteCount);
		}else{
			generate_quotes2(quoteCount);
		}
	});
});


