var Gematria = require('gematria');


// Main package function
function smallGematria(input) {
	input = input
	.replace("י", "א")
	.replace("כ", "ב")
	.replace("ך", "ב") // sofit
	.replace("ל", "ג")
	.replace("מ", "ד")
	.replace("ם", "ד") // sofit
	.replace("נ", "ה")
	.replace("ן", "ה") // sofit
	.replace("ס", "ו")
	.replace("ע", "ז")
	.replace("פ", "ח")
	.replace("ף", "ח") // sofit
	.replace("צ", "ט")
	.replace("ץ", "ט") // sofit
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