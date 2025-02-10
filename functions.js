
//  right santax of function code in java script
function myname (){
    //  wriet the defination of work 
    console.log('s')
console.log('s')
console.log('s')

}

 myname()
//   this is refernce call  functions
//  this is right way to ecute the function 
// function addtwonumbers(number1 ,number2){
//     console.log(number1+number2)
// }
// addtwonumbers(3,4)
//  this are argute 3,4
//  number1 and number 2 is preameter

//  how to identify the two elements number or not a number 
//  anthor method to declear 
function addtwonumbers(number1 ,number2){
    // let result = number1+number2
    return number1+number2
    //  after the return  any function dosn't work 
}
const result= addtwonumbers(23,873636)
console.log('result:' ,result)
function loginusermessage(username){
    if(username === undefined){
console.log('please enter a username ');
return 
//  this the santax to write if and else function

    }
    return`${username} user just logedin`
}
 console.log(loginusermessage('sameer'))
//   decelaertion of variabel there store value
//  when we ar not give the value in the brackets  out come with undefined

function calculatecart(...num1 ){
    return num1

}
console.log(calculatecart(200,900,2993))
//  this is give only numb1 rest fo value doesnot print  there we are use restopreter ... this is rest opreter 
//  this is give a an array
const user= {
    username : "sameer jaga ",
    price : 199

}
function handleobject(anyobject){
    console.log(`user is ${anyobject.username} and price ${anyobject.price}`)

}
handleobject(user)