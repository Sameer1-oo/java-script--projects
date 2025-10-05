//  let , var  and const

//  they are work good but where it is use scope in problem in {}
if (true) {
     let a =20
    const b = 10
    var c= 30
}  /* in this { } brakects block scop
and out side globle scop
block scop ki value bhar nhi jani chiye simple si baat 
*/

//  var does not work with var ***
// {} in this we are use many varible but var is not good for  scope



// console.log(a)
// console.log(b)
// console.log(c)
/* nestesd scop */

function one (){
    const username = 'sameer'
    function two (){
        const website = 'youtube'
        // console.log(username);
    }
    // console.log(website);
    // this is not run beacuse this two function is a block scop for global scop 
    two()
}
one()
 if(/*condition*/ true) {
    const username = 'sameerjaga'
    if (username ==='sameerjaga') {
        const website ="youtube"
        console.log(username + website);       
    }
    // console.log(website)
 }
//  console.log(username)


// +++++++++++++++++++++++++ intersting ++++++++++++++++



function addone(num){
    return num +1

}
addone(6)


const addtwo =function(num)
{
    return num + 2
}
addtwo(7)
console.log(addtwo(7))  