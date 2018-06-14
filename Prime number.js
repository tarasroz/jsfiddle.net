/* Prime number */
var n = 13;
var isSimple = true;

for (var i = 2; i < n; i++) {
	if ( n % i == 0 ){
  	isSimple = false;
    break;
  }
}

/* alert( isSimple ? "Simple" : "NotSimple" ); */

var result;

if (isSimple) {
	result = 'Simple';
} else {
	result = 'notSimple';
}

alert(result);