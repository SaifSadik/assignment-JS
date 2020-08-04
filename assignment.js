function feetToMile(feet) {
	if (feet < (0)) {
		return 'input cannot be less than zero'; 
	} else {
		return (feet * 0.000189394);
	}
}

var result = feetToMile(5280);
console.log(result);