/* Write a function that takes a string "str" 
   and returns the uppercase versoin of the string.
*/

var mystring = ["hello","goodbye"]

capitalize(mystring);

console.log(mystring)

mystring = mystring.filter(checkCase);




function capitalize(anyArray) {
   anyArray.forEach(function(item){
      upercaseItem = item.toUpperCase()
      anyArray.push(upercaseItem)
   })
}

function checkCase(entry) {
   return (entry == entry.toUpperCase())
}

//capitalize(mystring);

//mystring.filter(function(item){
//   let string = mystring(item)
//});


//mystring = mystring.toUpperCase()

console.log(mystring);
//console.log(mystrings)
/* hypothesis:
   I can have multiple items and loop through with filter
   only changing some.
   False: I'm trying to do two things at once, change and delete
*/