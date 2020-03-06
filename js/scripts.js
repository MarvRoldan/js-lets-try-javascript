/**
 * Let's try JavaScript, again!
 * Multi-line comment.
 * @author TECHCareers
 * @date 2020.03.06
 * @summary Testing out some wicked JavaScript!
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

var myArrayOfDataTypes = [
    //Booleans:
    true, 
    false, 
    // Null:
    null, 
    // Number (float/integer):
    34,
    168.793,
    // String:
    "Hello, World!",
    // Value not defined:
    undefined,
    // Not a number:
    NaN,
    // An array in an array!?
    [1, 2, 3, 4, 5]  
];

/**
 * Creating elements for a webpage.(Adding to the DOM!)
 */

var myDataList = document.createElement( "DL" ); // Wont't show yet! We didn't tell it where to go. 

// Create datalist title.
var dt1 = document.createElement( "DT" );

// Let's loop through the array so we don;t have to type out each item!    
for ( var i = 0; i < myArrayOfDataTypes.length; i++ )
{ // (ASSIGNMENT; TERMINATION CONDITION; ITERATION)
    // Create datalist title.
    // Create datalist type.
    var dataListTitle = document.createElement( "DT" );
    dataListTitle.textContent = typeof myArrayOfDataTypes[i]; // Output the datatype.

    // Creat datalist data.
    var dataListData = document.createElement ( "DD" );
    dataListData.textContent = myArrayOfDataTypes[i];

    // Add our new elements to our datalist.
    myDataList.appendChild ( dataListTitle );
    myDataList.appendChild ( dataListData );
}

// Add ALL of that to the body! Yay! We should be able to see it 
document.body.appendChild ( myDataList );