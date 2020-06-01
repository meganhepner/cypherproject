let response = prompt("Enter a sentence");

let capital = function(response) {
	firstLetter = response.charAt(0);
  lastLetterNum = response.length-1;
  lastLetter = response.charAt(lastLetterNum);
  
  upperFirst = firstLetter.toUpperCase();
  upperLast = lastLetter.toUpperCase();
  
  alert(upperFirst + upperLast);
};


let reverse = function(upperFirst, upperLast) {
	backwards = alert(upperLast + upperFirst);
};


let both = function() {
capital(response);
reverse(upperFirst, upperLast);
alert
};

both();

//We tried to change it completely on fiddle but it didn't work out so we're back to this