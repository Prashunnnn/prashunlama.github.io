// setTimeout(() => {
//     console.log("tt")
// }, 5000);
// setInterval(()=>{
//     console.log("hh")
// },1000)

// function sum(a){
//     if(a%2==0){
//         console.log("it is even")
//     }
//     else{
//         console.log("odd")
//     }

// }

// var a=eval(prompt("enter a number"))
// sum(a)
// setTimeout(()=>{
//     console.log("this if");
// },5000)
// setTimeout(()=>{
//     console.log("this i");
// },2000)
// setTimeout(()=>{
//     console.log("this ii");
// },1000)
// function sum(a,b){
//     sum=a+10
//     b();
// }
// var a=eval(prompt("enter a nyumber"))
// function bfun(b){
//     console.log(sum)}
// sum(a,bfun)
var a=eval(prompt("enter a nyumber"))
var b=eval(prompt("enter a nyumber"))
function sum(a,b,c){
    var add=a+b
    c(add);
}

function callback(add
    ){
    console.log(add)
}
sum(a,b,callback)