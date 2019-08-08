
let name = 'shahil'
let age = 20
let person = {
  name:name,
  age:age,
  marks:[4,6,2,9,4,7,9, 8,7],
  fn:function(){
    console.log('hello world');
  }
}

let length = person.marks.length
console.log('length', length);
let index = parseInt(length/2)
console.log('index', index);
console.log(person.marks[index])
