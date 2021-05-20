
 /*
The formula
C = (F - 32) * 5/9;
*/
function convertFahrToCelsius(value){
	if( (typeof value == "number") ||
		( (typeof value == "string") && (parseFloat(value).toString() != "NaN") ) ){
		let F = parseFloat(value);
		let C = (F - 32) * (5/9);
		return C.toFixed(4);
	}else{
		return `${value} is not a valid number but a/an ${typeof value}`;
	}
}


/* Second Function */
/*2 = yu
3 = gi
5 = oh
*/
function CheckYuGiOh(value){
	if( !((typeof value == "number") ||
		((typeof value == "string") && (parseInt(value).toString() != "NaN"))) ){
		return `invalid parameter: ${value}`;
	}else{
		var num = parseInt(value);
		if(num < 1){
			return `invalid parameter: ${value}`;
		}
	}
	
	let arr = [];
	for(let i=1; i<num+1; i++){
		
		if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0 ){
			arr.push("yu-gi-oh");  
		}	
		else if(i % 2 === 0 && i % 3 === 0){
			arr.push("yu-gi");
		}
		else if(i % 2 === 0 && i % 5 === 0){
			arr.push("yu-oh");
		}
		else if(i % 3 === 0 && i % 5 === 0){
			arr.push("gi-oh");
		}
		else if(i % 2 == 0){
			arr.push("yu");
		}
		else if(i % 3 == 0){
			arr.push("gi");
		}
		else if(i % 5 == 0){
			arr.push("oh");
		}
		else{
			arr.push(i)
			};
	}
	return arr;
}

//end of function CheckYuGiOh
//testing checkyugioh
console.log(CheckYuGiOh(29));
console.log(CheckYuGiOh("29"));
console.log(CheckYuGiOh("tobby"));
console.log(CheckYuGiOh([1,2,3,4]));
console.log(CheckYuGiOh({name: "tobby" , age: 26}));