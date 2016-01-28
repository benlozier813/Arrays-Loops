var integers = [3, 5, 7, 7, 9];
var evenIntegers = []
var oddIntegers = []

for (var i = 0; i < integers.length; i++) {
  if(integers[i] % 2 === 0) {evenIntegers.push(integers[i])
  }
  else {console.log("There are no even number.")}
}
console.log(evenIntegers);

for (var i = 0; i < integers.length; i++) {
  if(integers[i] % 2 != 0) {oddIntegers.push(integers[i])
  }
}
console.log(oddIntegers);
