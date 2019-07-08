var array = [1,2,3,4,5,7,8,9];
console.log(array.filter(function(el, ind){
  return ind % 2 === 0;
}));
