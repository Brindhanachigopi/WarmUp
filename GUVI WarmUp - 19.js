/* Given an array, "getLastElement" returns the last element of the given array. If the given array has a length of 0, it should return '-1'. */

function getLastElement(array) {
	///Your code Starts here 
	
	if (array.length == 0) {
		return -1;
	} else {
		return array[array.length - 1];
	}
	
	
	
	///Your code Ends here
}
console.log(getLastElement([10, 20, 30, 40, 50]))
/*
Lines For TestCase

getLastElement([1, 2, 3, 4]);
getLastElement([1, 2, 3, 4,5,6,7]);
getLastElement([]);
*/