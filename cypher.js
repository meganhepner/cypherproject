let response = prompt("Enter a sentence");

let reverse = function(response) {
	firstLetter = response.charAt(0);
  lastLetterNum = response.length-1;
  lastLetter = response.charAt(lastLetterNum);
  return firstLetter
  return lastLetter
};

reverse(response);

alert(firstLetter + " " + lastLetter);