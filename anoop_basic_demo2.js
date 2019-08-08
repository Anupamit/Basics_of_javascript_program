/*
function reflect(value) {
return value;
}
console.log(reflect("Hi!"));
console.log(reflect("Hi!", 25));
console.log(reflect.length);
// "Hi!"
// "Hi!"
// 1




reflect = function() {
return arguments[0];
};
console.log(reflect("Hi!"));
console.log(reflect("Hi!", 25));
console.log(reflect.length);
// "Hi!"
// "Hi!"
// 0



function sum() {
var result = 0,
i = 0,
len = arguments.length;
while (i < len) {
result += arguments[i];
i++;
}
return result;
}
console.log(sum(1, 2));
console.log(sum(3, 4, 5, 6));
console.log(sum(50));
console.log(sum());
//
//
//
//





function sayMessage(message) {
console.log(message);
}
function sayMessage() {
console.log("Default message");
}
sayMessage("Hello!");
// outputs "Default message"





var sayMessage = new Function("message", "console.log(message);");
sayMessage = new Function("console.log(\"Default message\");");
sayMessage("Hello!");
// outputs "Default message"



function sayMessage(message) {
if (arguments.length === 0) {
message = "Default message";
}
console.log(message);
}
sayMessage("Hello!");
// outp*ts "Hello!



var person = {
name: "Nicholas",
sayName: function() {
console.log(person.name);
}
};
person.sayName();
// outputs "Nicholas"






var person1 = {
name: "Nicholas"
};
Object.defineProperty(person1, "name", {
enumerable: false
});
console.log("name" in person1);
console.log(person1.propertyIsEnumerable("name"));
var properties = Object.keys(person1);
console.log(properties.length);

// true
// false
// 0
Object.defineProperty(person1, "name", {
configurable: false
});
// try to delete the Property
delete person1.name;
console.log("name" in person1);
console.log(person1.name);
Object.defineProperty(person1, "name", {
configurable: true
});
// true
// "Nicholas"
// error!!!




var person1 = {};
Object.defineProperty(person1, "name", {
value: "Nicholas"
});
console.log("name" in person1);
console.log(person1.propertyIsEnumerable("name")); // true
// false
delete person1.name;
console.log("name" in person1); // true
person1.name = "Greg";
console.log(person1.name); // "Nicholas"




var person1 = {
_name: "Nicholas"
};
Object.defineProperty(person1, "name", {
get: function() {
console.log("Reading name");

return this._name;
}
});
console.log("name" in person1);
console.log(person1.propertyIsEnumerable("name"));
delete person1.name;
console.log("name" in person1);
person1.name = "Greg";
console.log(person1.name);
// true
// false
// true
// "Nicholas"
*/
