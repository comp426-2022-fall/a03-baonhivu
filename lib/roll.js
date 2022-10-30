export function roll(Side, Dice, Rolls) {
	var results = [];
	for (var i = 0; i < Rolls; i++) {
		results[i] = Math.floor(Math.random() * Sides * Dice);
	} return {
		"sides" : sides,
		"dice" : dice,
		"rolls" : rolls,
		"results" : results
	}
}
