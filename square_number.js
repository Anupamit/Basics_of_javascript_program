//square of two numbers
let print1 = (value, v)=>{
  //console.log(value);
  console.log(arguments[0]);
}

function print(){
  //console.log(value);
  console.log(arguments);
}

function square(){
  //console.log(x*x);
  let x = arguments[0]
  console.log(x*x);
}

square(2)
