function pow(x, n) {
	
	var p = x;
	for (var i = 1; i < n; i++) {
		x = x * p;
	}
	console.log(x);
  return x;
}
pow(3, 5);
