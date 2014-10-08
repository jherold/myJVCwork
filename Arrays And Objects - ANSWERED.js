
var singledimensionArray = ["lion", "giraffe", "hippo"];

var bidimensionArray = [singledimensionArray, "moon", "sun"];

var multidimensionalArray = [singledimensionArray, "red", bidimensionArray, "green"];


function combineArray(multiArray) {

    var len = multiArray.length;
    var outputArr = [];

    for (i = 0; i < len; i++) {

        if (Array.isArray(multiArray[i])) {

            for (var j in multiArray[i]) {

                if (Array.isArray(multiArray[i][j])) {

                    for (var k in multiArray[i][j]) {
                        outputArr.push(multiArray[i][j][k]);
                    }
                } else {
                    outputArr.push(multiArray[i][j]);
                }
            }


        } else {

            outputArr.push(multiArray[i])
        }

    }

    return outputArr

}

var superArray = combineArray(multidimensionalArray);

console.log(">", superArray);


var objectA = {
    "firstName": "walter",
    "last name": "white"
};

var objectB = {
    "firstName": "jesse",
    "last name": "pinkman"
};

var objectC = {
    "firstName": "gustavo",
    "middleName": "gus",
    "last name": "fring"
};

var objectArray = [objectA, objectB, objectC];

// Objective create a loop that iterates through the array object
// and constructs an output Object that contains array lists for all values
// the result output object should be like so

// outputObject = {"firstName": [walter,jesse,gustavo], "middleName" : [gus], "last name": [white,pinkman,fring]  };