var words = ["Sister", "Teen", "Miss", "PM", "AM", "Got", "Love", "Real", "Cute", "Rock", "Magic", "Muse"];
var writtenNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];

function mixMatch()
{
	var result = [];
	if(getRandomBool())
	{
		result.push(words[getRandomInt(0, words.length)]);
		result.push(randomWrittenDigit());
	}
	else
	{
		result.push(randomWrittenDigit());
		result.push(words[getRandomInt(0, words.length)]);
	}
	console.log(result[0]+result[1]);

}


function randomWrittenDigit()
{
	return getRandomBool() ? getRandomIntInclusive(1, 20) : writtenNumbers[getRandomInt(0, writtenNumbers.length)].toUpperCase();
}

//utils:
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomBool() {
    return Math.random()<0.5;
}