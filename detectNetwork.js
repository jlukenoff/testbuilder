// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

	if (cardNumber.slice(0, 2) === '38' || cardNumber.slice(0, 2) === '39') {
		return "Diner's Club";
	} else if (cardNumber.slice(0, 2) === '34' || cardNumber.slice(0, 2) === '37') {
		return "American Express";
	} else if (cardNumber.startsWith('4903') || cardNumber.startsWith('4905') || cardNumber.startsWith('4911') || cardNumber.startsWith('4936') || cardNumber.startsWith('564182') || cardNumber.startsWith('633110') || cardNumber.startsWith('6333') || cardNumber.startsWith('6759')) {
		return 'Switch';
	} else if (cardNumber[0] === '4') {
		return 'Visa';
	} else if (cardNumber[0] === '5' && Number(cardNumber[1]) > 0 && Number(cardNumber[1]) < 6) {
		return 'MasterCard';
	} else if (cardNumber.slice(0, 4) === '6011' || Number(cardNumber.slice(0, 3)) >= 644 && Number(cardNumber.slice(0, 3)) <= 649 || cardNumber.slice(0, 2) === '65') {
		return 'Discover';
	} else if ((Number(cardNumber.slice(0, 6)) >= 622126 && Number(cardNumber.slice(0, 6)) <= 622925) || (Number(cardNumber.slice(0, 3)) >= 624 && Number(cardNumber.slice(0, 3)) <= 626) || (Number(cardNumber.slice(0, 4)) >= 6282 && Number(cardNumber.slice(0, 4)) <= 6288)) {
		return 'China UnionPay';
	} else {
		return 'Maestro';
	}
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


