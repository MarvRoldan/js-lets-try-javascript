/**
 * Day 6!
 */

/**
 * Let's See How Scope Works.
 */

var myVariable = 3; // Declared in GLOBAL scope.

function myFunction () {
    console.log( myVariable ); // Can we see myVariable in the function?! YES! We can see GLOBALLY scoped variables inside of a function!

    var myFunctionScopeVariable = 64; // Declared in a local (function) scope.

    console.log (  myFunctionScopeVariable ); // We cam see it in the function =D

    function myNestedFunction () { // (Yes.)
        var myNestedFunctionVariable = "I\'m very nested!";
        console.log ( myNestedFunctionVariable ); // Local access works!

        console.log( "Accessing function scope variable in nested function: " + myFunctionScopeVariable ); // We can access variables from a PARENT function. But not the reverse.

        console.log( myVariable ); // Gloval variables / function are accessible even all the way in here! NICE!

        // Even more nesting!?
        function myDoubleNestedFunction() {
            var doubleNestedVar = "Double nested var, here!";

            console.log( doubleNestedVar ); // We can access locally, right?

            // myNestedFunction(); // Can I tun this here!? YUP! It was decaled in/by a parent so we are good to go! Calling a function inside of itself cause recursion --> Unless you have a termination condition this causes endless looping. (My browser is crashing.)
        }

        myDoubleNestedFunction(); // This works, same scope that the function was defined!
    }

    myNestedFunction(); // Let's run and try it.

    // console.log ( myNestedFunctionVariable ); // Can we see it out here? NO! The variable is scoped to its origin function, not here....
}

myFunction(); // Let's run it and see.

// console.log ( myFunctionScopeVariable ); // Can we access it outside of the function!? NO! Locally scoped variables will live and die in their function =(

// myNestedFunction (); // Can we run the nested function!? Nope! It is not available globbaly if it was defined in a localized scope!