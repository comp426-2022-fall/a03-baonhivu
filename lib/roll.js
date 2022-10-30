function countResults(side, dice) {
        var sum = 0;
        for (let i = 0; i < dice; i++) {
                sum += Math.floor(Math.random() * side) + 1;
        }
         return sum;
}

function roll(sides = 6, dice = 2, roll = 1) {
        var results = [];
:w
        for (let i = 0; i < roll; i++) {
                results.push(countResults(sides, dice))
        }

        var object = {
                sides: sides,
                dice: dice,
                roll: roll,
                results : results
        };

        console.log(JSON.stringify(object));
}export function roll(Side, Dice, Rolls) {
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
