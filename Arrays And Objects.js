var singledimensionArray = [ "lion" ,"giraffe" , "hippo" ];

var bidimensionArray = [ singledimensionArray ,"moon" , "sun" ];

var multidimensionalArray = [ singledimensionArray , "red" , bidimensionArray , "green" ];


console.log( singledimensionArray[0] ); // lion

console.log( bidimensionArray[1][1] ); // moon

// Objective create a loop that iterates through the multidimensionalArray
// values recursively and stuff them into
// an array in order such that the final array is

// resultArray = [ "lion" ,"giraffe" , "hippo" , "red" , "lion" ,"giraffe" , "hippo" ,"moon" , "sun" , "green" ];


var objectA = { "firstName": "walter", "last name": "white"};

var objectB = { "firstName": "jesse", "last name": "pinkman"};

var objectC = { "firstName": "gustavo", "middleName" : "gus", "last name": "fring"};

var objectArray = [ objectA , objectB , objectC ];

// Objective create a loop that iterates through the array object
// and constructs an output Object that contains array lists for all values
// the result output object should be like so

// outputObject = {"firstName": [walter,jesse,gustavo], "middleName" : [gus], "last name": [white,pinkman,fring]  };