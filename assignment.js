                         // Assignment-01- feetToMile

function feetToMile(feet) {
	if (feet < 0) {
		return 'input cannot be less than zero'; 
	} else {
		return (feet * 0.000189394);
	}
}

var result = feetToMile(5280);
console.log("Mile is: ", result);


                                    // Assignment-02-woodCalculator

function woodCalculator(chair, table, bed){
	return chair + table*3 + bed*5;
}

var result = woodCalculator(10, 4, 2);
console.log(result, "cubic feet wood will be Needed.");


                                // Assignment-03-brickCalculator

function brickCalculator(floor){
    if(floor <= 10){
        return lowerFloor = floor * 1000 * 15;
    }
    else if(floor <= 20){
        return middleFloor = (floor-10) * 1000 * 12 + (10*15*1000);
    }
    else{
        return upperFlooor = (floor-20) * 1000 * 10 + (10*15*1000) + (10*12*1000);
    }
}

var result = brickCalculator(10);
console.log("Total number of bricks are: ", result);

                        //  Assignment-04-tinyFriend

function tinyFriend(array){
    var shortestLength = array[0].length;
    var shortestFriend;

    for(var i = 0; i < array.length; i++){
        var wordlength = array[i].length;
        if(wordlength < shortestLength){
            shortestLength = wordlength;
            shortestFriend = array[i];
        }
    }
    return shortestFriend;
}

var name = [ "akib", "nihal", "monir", "mashrafee", "kim", "jong", "un", "a"];
var shortestName = tinyFriend(name);
console.log("Shortest Name is : ", shortestName);

