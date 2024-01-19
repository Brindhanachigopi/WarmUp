/* MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:turkey = 2 legshorse = 4 legspigs = 4 legsThe farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals. */

function CountLegs(turkey, horse, pigs) {
	///Your code Starts here 
	
	const legsOfTurkey = 2;
	const legsOfHorse = 4;
	const legsOfPigs = 4;
	
	const totalLegs = (turkey * legsOfTurkey) + (horse * legsOfHorse) + (pigs * legsOfPigs);
	
	return totalLegs;
	
	///Your code Ends here
}
const totalNumberLegs = CountLegs(5, 4, 3);
console.log(totalNumberLegs);
/*
Lines For TestCase

CountLegs(2, 3, 5);
CountLegs(1, 2, 3);
CountLegs(5, 2, 8);
*/