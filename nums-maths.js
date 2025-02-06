const accno = 232323122.1
const accno2= new Number(accno)
// no doubt it is number but it is the best method to difnie 100% it is number 
// that is right method to delcere number 
console.log(accno2)
console.log(accno2.toString().length)
// this is method to help convert number into a string 

console.log(accno2.toFixed(3))
//  this help to accurat value of number it is used in comorcial app etc for decimal number calculation toFixed(3))
// pricisous value
const otheracc= 2323.23
console.log(otheracc.toPrecision(3));
// the mean of precision value reound of value  1.9 ~ 2 like that sum long number it come with exponetial 
const hunders =1000000
console.log(hunders.toLocaleString('en-IN'));


// ******************************************Maths*****************************
//  console.log(Maths);
 console.log(Math.abs(-5))
 console.log(Math.round(22.6))
//  this your value convert into reound off

 console.log(Math.ceil(2.5))
//   like a max  mum value 

 console.log(Math.floor(4.3))

console.log(Math.random());
//  this is provied the value 0-1 between  evry time diffrent value 0 to one beetween 

console.log(Math.min(2,3,34,4))
console.log(Math.max(23,4,4,2,2,12,3))
// usiing for maximum and minimum value 

console.log(Math.floor(Math.random()*10+1))
const min = 20 
console.log(Math.floor(Math.random()*(max - min + 1) + min ))
// that is right  1> value hogi 
