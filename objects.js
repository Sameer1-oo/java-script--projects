//  two type method decleartion of objects
// 1. litrel
// 2.construct
// singleton this a method of construrt when we want makeing same type object 
//  when we are decelar object with litral method  but it not singleton 
// obejct declear in { } breacket .
// // symbol how to declear symbol

//  how to use a symbole as a key in object 

const mysymbol = Symbol('key1')
const user ={
    //  mthod object 
    name: 'sameer' ,
    // always rember comma and right santax
    age :28,
    location:"jaipur",
    email:'sameerjaga@gamil.com',
    [mysymbol] : 'sameer'

     //in this the name are actule working like string
    }
//  this is litral method to delacre obejt 
 Object.create
 // singleton method constructive 
 
//   when you to change
 console.log(user)
console.log(user["email"])
//  right way to exis the object 
console.log(user[mysymbol])
console.log(typeof user[mysymbol])

//  we can freez the value of object and nobody can't change the value 

//Object.freeze(user)
user.email='sameerjaga';
console.log(user);
user.greetings = function(){
    console.log(`hello sameer jaga ${this.name}` );
}
console.log(user.greetings())
//  out put of this undifinf

