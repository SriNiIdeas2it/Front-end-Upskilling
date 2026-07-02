var name="srinivasan Amirthalingam";
console.log(name.length); // gives length of string
console.log(name.concat(" hello !"));// add two or more string
console.log(name);
var lastname=name.substring(6);   // it will take the charter that start from 1st arg to end to the 2nd arg
console.log(lastname);
 lastname=name.substring(6,10);
console.log(lastname);

console.log(name.toUpperCase()); // convert all to upper 
console.log(name.toLowerCase()); // convert all to lower 
name=" srinivasan amirthalingam "
console.log(name.trim()); //remove white space
console.log(name.repeat(2)); // repeat based on count given inside argument
console.log(name.replace("srini","karthi")); //replace the string 
console.log(name.replaceAll(/srinivasan/g,"karthi"));//The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

//text split
const alpah="1,b,c,d,e,f,g";
console.log(alpah.split(',')); //it will split and give as array