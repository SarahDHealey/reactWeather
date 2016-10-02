// function getTempPromise(location){
//   return new Promise(function(resolve, reject){
//     resolve(79);
//     reject('City not found')
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('Promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// });

//Challenge Area
function addPromise (a, b) {
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
    } else {
      reject('A and b need to be numbers');
    }
  });
}

addPromise(2, 4).then(function(sum){
  console.log('success', sum);
}, function(err) {
  console.log('error', err);
});

addPromise('sarah', 4).then(function(sum){
  console.log('this should not show up');
}, function(err) {
  console.log('this should appear', err);
});



//if they are both numbers it should resolve the sum
//if one or more is not a number or is not given

//call with 2 numbers

//call with 1 number and a string

//if (typeof 7 === number)
