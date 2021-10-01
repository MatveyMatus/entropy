function entrop(inputData){
	let fs = require('fs');
	let alph = new Array();
	let arg = process.argv;
	let i = 0, n = 0;
	let entropy = 0;

	for (i = 0; i < inputData.length; i++){
		alph[inputData.charAt(i)] = 0;
	}

	for (i= 0; i < inputData.length; i++){
		alph[inputData.charAt(i)]++;
	}

	console.log(alph);
	for (i in alph){
		alph[i] /= inputData.length;
		n++;
	}

	if (n > 1){
		for (i in alph) 
			entropy -= alph[i] * (Math.log(alph[i]) / Math.log(n));
	}
	console.log(alph);
	console.log(entropy);
}
st1 = new entrop("ZZZ");
console.log(st1);
st2 = new entrop("abc");
console.log(st2);
st3 = new entrop("abrakadabra");
console.log(st3);