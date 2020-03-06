/**
 * Let's try JavaScript, again!
 * Multi-line comment.
 */

 // Single line, comment!

 // Basic assignment:
 var myVariable = "38.9587";

 myVariable = myVariable + 5;
 console.log( myVariable + 5 ); //Opps, one of these is a string so plus is concatenating!

 // Type-handling:
 myVariable = parseFloat( myVariable );  // Floating point number, decimal maintained.
 console.log( myVariable ); // Is now a numeric.

 myVariable = parseInt ( myVariable ); // Converted to integar, decimal removed. 
 console.log( myVariable ); // 38.

 myVariable = Number ( myVariable ); // Coverted to any number type it can.
 console.log( myVariable ); // No change here.

 myVariable = myVariable + 5; // Addition. Beware "+" as it can add, or concatenate, depending on if any of the operands are strings!
 console.log( myVariable );

 myVariable = myVariable.toString(); // Convert back to a string.
 console.log( myVariable );

 /**
  * Other types?
  */