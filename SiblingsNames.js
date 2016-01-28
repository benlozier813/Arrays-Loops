var siblings = ["Kate","Jason","Liz"]

var parents = ["Craig","Lea","Jim","Becky"]

console.log(siblings.sort());

console.log(parents.sort().reverse());

var families = siblings.concat(parents);

console.log (families.sort ());

console.log(families.sort().reverse());

var familiesString = families.toString();

familiesString.search("Liz");

//Search for name//
 function findName(name){
   if (familiesString.search(name) != -1)
    {console.log("Yes " + name + " is in the string." )
    }
    else {console.log("No " + name + " is not in the string." )
    }
 }
