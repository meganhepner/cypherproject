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
	numReverse = alert(upperLast + upperFirst);
};

capital(response);

reverse(upperFirst, upperLast);