//map
const arr=[3,4,6,5,7];
const output=arr.map(x=>x*2);
console.log(output);

//or
function double(x){
    return x*2;
}
const output1=arr.map(double);
console.log(output);

//filter
const fil=[4,2,5,1,6];
const output3=fil.filter(function(x){
   return x>2
})
console.log(output3);

//reduce

const arr3=[3,6,2,1,6];
const output4=arr3.reduce(function (sum,cur){
return sum=sum+cur;
},0)


const name=
[
    {firstname:"srini",lastname:"vasan", age:10},
    {firstname:"lavanya",lastname:"sundar",age:40},
    {firstname:"prabhu",lastname:"devan", age:10}
]


const fullname=name.map((x)=>{
    return `${x.firstname} ${x.lastname}`
})
console.log(fullname);

const lessthanthirtyfirstname=name.filter(function(x){
    if(x.age<30){
        return x;
    }
}).map((y)=>y.firstname);
console.log(lessthanthirtyfirstname);

