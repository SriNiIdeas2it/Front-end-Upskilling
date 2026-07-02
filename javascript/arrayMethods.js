const user=["srini","karthik","saravanan","naveen"];

console.log(user.length);  
console.log(user.join("/")); //joins all array with given character
console.log(user.toString()); // convert to string with ','
console.log(user.at(2))   // get the value in the index
console.log(user[2]);  //same as at 

user.push("aravindan"); // add element at last index
console.log(user);

user.pop();  //remove last  index 
console.log(user);
user.shift(); //remove first element in array
console.log(user);
user.unshift("kalai"); // add value to first element in array
console.log(user);

const arg1=[5,8,9];
const arg2=[3,2,8];
const val=arg1.concat(arg2); //combines two array and form as new array 
console.log(val);
const myArr = [[1,2],[5,6],[3,4],[5,6]]; // new array with sub-array elements concatenated
const newArr = myArr.flat();
console.log(newArr);
console.log(myArr);
let user1=["arabind","kalai","gopi","vasan"];
const splaray=user1.splice(1); //taake tha value from specified index //firt arg defines where to start , second argument defines how many should be remove from starting from 1st arg index.
// const splaray1=user.splice(1,2); //taake tha value from specified index //firt arg defines where to start , second argument defines how many should be remove from starting from 1st arg index.
 console.log(user1);
    console.log(splaray);

let user2=["arabind","kalai","gopi","vasan"];
const spliceaaray=user2.slice(1,3);
console.log(user2);     
console.log(spliceaaray);