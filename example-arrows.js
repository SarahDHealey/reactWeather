
var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function(name){
//   console.log('for Each', name);
// });
//
// names.forEach((name) => {
//   console.log('arrow func', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Andrew'));

//One big difference btw anon functions and arrow functions:
//anon functions have a this binding
//whereas arrow functions take on their parent's this binding

// var person = {
//   name: 'Andrew',
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

function add(a, b) {
  return a + b;
}
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(4, 7));

var addExpression = (a, b) => a + b;
console.log(addExpression(3, -2));
