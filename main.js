var words = ["sister", "teen", "miss", "PM", "AM", "got", "love", "real", "cute", "rock", "magic", "muse"];
var writtenNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
var connectors = ["", " ", "-", "."];

//TODO:
//-Randomly select number of parts (from 2 to 4 parts, weighted to 2)
//-Add connectors inbetween parts
//-Avoid repeating part type
//-Randomly choose if part is ALL CAPS, lowercase, Start With Uppercase, or has ranDoM caSIng

function generateList(num)
{
	for (var i = 0; i < num; i++)
	{
		generateName(getRandomIntInclusive(2,3));
	}
}

function generateName(numParts)
{
	var result = [];
	for (var i = 0; i < numParts; i++)
	{
		result = addRandomItemType(result);
		if (i < numParts -1 && i % 2 === 0)
		{
			result.push(connectors[getRandomInt(0, connectors.length)]);
		}
		// console.log(result);
	}

	var stringResult = "";
	for (var i = 0; i < result.length; i++ )
	{
		result[i] = chooseCasing(result[i]);
		stringResult += result[i];
	}
	console.log(stringResult);
}


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

function addRandomItemType(target)
{
	// console.log("target.length = " + target.length)
	var backstep = -1;
	if(connectors.indexOf(target[target.length-1]) != -1)
	{
		backstep = -2;
	}
	if (target.length == 0)
	{
		// console.log("condition 1");
		if(getRandomBool())
		{
			target.push(words[getRandomInt(0, words.length)]);
		}
		else
		{
			target.push(randomWrittenDigit());
		}
	}
	else if (writtenNumbers.indexOf(target[target.length+backstep]) != -1 || parseInt(target[target.length+backstep]) >= 0 || parseInt(target[target.length+backstep]) <= 20)
	{

		// console.log("condition 2");
		target.push(words[getRandomInt(0, words.length)]);
	}
	else
	{
		// console.log("condition 3");
		if(getRandomBool())
		{
			target.push(words[getRandomInt(0, words.length)]);
		}
		else
		{
			target.push(randomWrittenDigit());
		}
	}
	return target;

}

function chooseCasing(string)
{
	/*console.log('chooseCasing('+string+')');
	var functions = [string.toUpperCase, string.toLowerCase, string.randomizeCasing, string.initialUpperCase];
	var val = getRandomInt(0, functions.length-1);
	console.log(val);
	string = (functions[val]).call();*/
	return string;
}

String.prototype.randomizeCasing = function()
{
	//CasInG
	return this;
}

String.prototype.initialUpperCase = function()
{
	//Casing
	return this;
}

function randomWrittenDigit()
{
	return getRandomBool() ? getRandomIntInclusive(1, 20) : writtenNumbers[getRandomInt(0, writtenNumbers.length)];
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