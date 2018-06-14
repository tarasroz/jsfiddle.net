function max(array) {

 	let arr = Math.max.apply(null, array);
  console.log (arr);
  return arr;
}
max([1, 6, 3, 7]);