/* Given an object and a key, "addProperty" adds a new property on the given object with a value of true. */

var obj = {}

function addProperty(obj, key) {
	///Your code Starts here 
	
	if (!(key in obj)) {
		
		obj[key] = true;
	}
	
	
	
	///Your code Ends here
}
addProperty(obj, "mykey");

console.log(addProperty(obj, "mykey"));
/*
Lines For TestCase

obj.mykey
*/