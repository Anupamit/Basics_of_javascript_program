let fn = ()=>{
  console.log('anopp');
}

let arr = [()=>{
  console.log('anopp');
  return 'shahil'
}, ()=>{
  console.log('the president');
}]

let res= arr[1]()

console.log(res);
