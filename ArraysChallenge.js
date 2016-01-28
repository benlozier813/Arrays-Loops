var a = [0.2, 0.5, 0.7, 0.8, 0.4];

var maxSoFar = 0

var minSoFar = 1

var sum = 0

//finding the maxium number//
a.forEach (function(e)
  {if (e > maxSoFar)
    {maxSoFar = e};
  });
console.log(maxSoFar);

//finding the minimum number//
a.forEach (function(e)
  {if (e < minSoFar)
    {minSoFar = e};
  });
console.log(minSoFar);

//calculating the sum//
for(var i = 0; i < a.length; i++){
    sum = a[i] + sum;
  }
console.log(sum);
  //finding the mean//
console.log(sum / a.length);

//highest number index//

for (var index = 0; index < a.length; index++)
  {if(a[index] === maxSoFar)
    {console.log(index + " is " + a[index]);};

}



//highest number index(we're origina!l)//
//a.sort()//
//console.log(a.length-1);//
