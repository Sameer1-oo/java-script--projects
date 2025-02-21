// const useremail = "sameer@gmail.com"
const useremail =""
//  they are diffrent case this empty string
// console.log(typeof useremail)
if (useremail) {
    console.log("got user email");
} else {
    console.log("don't have user email");
    
}
//  there is many type of flasy and truthy value konsi value ko 
//  falsy mana jata hai 



// false , 0, -0, BigInt on , "", null , undefined, NaN
//  falsy value hai jise hum false ki categry me mante hai 


//  truthy value
// "0",'flase', " " , [],{},function(){},
//  if we wnat to check empty array



// if(useremail.length===0){
//     console.log("arrays is empty ");
// }



// const empytobj = {}
// if (Object.keys(empytobj).lenght === 0 ){
//     .console.log("Object is empty");
    
// } 
//  this method to discribe the object and check the obcjdt is falsy o rnot 
let val1;
val = 5 ?? 10
console.log(val1)
// ternery oprter
// condition ? true : false
const iceteaprice = 100
iceteaprice >= 80 ? console.log("less than 80") :  console.log('more than 80')
