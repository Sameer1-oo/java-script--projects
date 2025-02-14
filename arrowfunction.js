const user = {
    username :'sameerjaga' ,
    price : 99,
    welcomemessage : function()
    {
        console.log(`${this.username},welcome to website `)
        // current constant this is working for currnet constant
    }
}
user.welcomemessage()
user.username = 'sam'
user.welcomemessage()
//  ab isme name chage hogya kyuki object referbce hot ahai is bjah se heap meory me data chala gya 
// console.log(this);






// +++++++++++++++++++++++arrow function +++++++++++++++++++++++++
// //  
// function chai(){
//     let username ='sameer'
//     console.log(this.username);
//     // this is currrent context value 

// }
// chai()
// in the node enviroment this function don't work
// node enviroment

const chai = () => {
    let username = "hitesh "
    console.log(this.username )
}
// chai()
// //  in the arrow function we are remove function keyword and replece by  => and this your arrow function 
//  const addtwo =(num1,num2) =>{
//     return num1+num2
//  }
//  console.log(addtwo(3,4))
/* we can runt the code with out curly breckets by using implicent function only 
*/
zco
// when we wnat to deacler object in {}

