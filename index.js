var Gematria = require('gematria');


// Main package function
function smallGematria(input) {
	input = input
	.replace("י", "א")
	.replace("כ", "ב")
	.replace("ך", "ב")
	.replace("ל", "ג")
	.replace("מ", "ד")
	.replace("ם", "ד")
	.replace("נ", "ה")
	.replace("ן", "ה")
	.replace("ס", "ו")
	.replace("ע", "ז")
	.replace("פ", "ח")
	.replace("ף", "ח")
	.replace("צ", "ט")
	.replace("ץ", "ט")
	.replace("ק", "א")
	.replace("ר", "ב")
	.replace("ש", "ג")
	.replace("ת", "ד")
	;
	var g = Gematria(input);
	return g.toMisparGadol();
}

// Make the main function available to other packages that require us
module.exports = smallGematria;