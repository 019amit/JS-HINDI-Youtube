//data types 
//primitive 7types call by value
//String,number,boolean, null,undefined,symbol,BigInt


//non primitive or reference    call by reference
//array,objects,Functions

const heroes=["amit","nikhil","doga"]
let myobj={
    name:"vikas",
    age:22
}
//function can be treated as variable
const myfunction=function()
{
    console.log("Hello World")
}
//javascript dynamically typed language
const score=100
const scorevalue=100.3
const isloggedin=false;
const outsidetemp=null;
let useremail;
//symbol
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid)

const bignumber=3644242364346876876n