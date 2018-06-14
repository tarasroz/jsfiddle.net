var array = [0.5, 6, -79, 0];

function max(array){
  var maxElement = [0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxElement){
      maxElement = array[i];
    }  
  }
  //console.log(maxElement);
  return maxElement;
}
max(array);