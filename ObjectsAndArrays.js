var objectA = { "firstName": "walter", "lastname": "white"};

var objectB = { "firstName": "jesse", "lastname": "pinkman"};

var objectC = { "firstName": "gustavo", "middleName" : "gus", "lastname": "fring"};

// outputObject = {"firstName": [walter,jesse,gustavo], "middleName" : [gus], "last name": [white,pinkman,fring] };

var objectArray = [ objectA , objectB , objectC ];
var len             = objectArray.length;
var outputObject    = {};

//for objectArray
for (i = 0; i < len; i++) {
    
    //iterate through the object and its props
    for(var prop in objectArray[i] ) {
        
        //check if prop "firstname" is inside the output objct
        if(!outputObject[prop]){
            
            //first name       set    [ "walter" ]
            //last name             [ "white" ]
            outputObject[prop] = [ objectArray[i][prop] ]
        }else{
            var temp = objectArray[i][prop];
            outputObject[prop].push(temp)
        }
        
        console.log(">>",outputObject);
        
    }
    
}