/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS. */

function frames(num1, num2) {
	///Your code Starts here 
	
	const seconds = num1 * 60;
	const totalFrames = seconds * num2;
	
	return totalFrames;
	
	///Your code Ends here
}
const totalFrames = frames(6, 30);
console.log(totalFrames);
/*
Lines For TestCase

frames(1, 1);
frames(10, 1);
frames(10, 25); 
*/