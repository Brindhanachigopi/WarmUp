/* Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space. */

function getFullName(firstName, lastName) {
	///Your code Starts here 
	
	return firstName + " " + lastName;
	
	
	
	///Your code Ends here
}
const fullName = getFullName("Arul", "Prakasam");
console.log(fullName);
/*
Lines For TestCase

getFullName("GUVI", "GEEK");
getFullName("GUVI" );
getFullName( "GEEK");
getFullName("", ""); 
*/