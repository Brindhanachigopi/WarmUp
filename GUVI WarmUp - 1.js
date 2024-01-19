/* Write a function called "getOpposite".
If the given value is an integer, return its opposite value, otherwise return -1 */

function getOpposite(num) {
	///Your code Starts here 
	if (Number(num)) {
		return -num;
	} else {
		return -1
	}
	///Your code Ends here
}
let result = getOpposite(2.5);
console.log(result);

//Lines For TestCase
getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite("5a");
getOpposite(5.5)
