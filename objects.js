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
//  console.log/(user)
// console.log(user["email"])
//  right way to exis the object 
// console.log(user[mysymbol])
// console.log(typeof user[mysymbol])

//  we can freez the value of object and nobody can't change the value 

//Object.freeze(user)
user.email='sameerjaga';
// console.log(user);
user.greetings = function(){
    console.log(`hello sameer jaga ${this.name}` );
}
// console.log(user.greetings())
//  out put of this undifinf

/* ************************** objects-2*******************************/


//  we study singleton construt

const tinderuser = new Object()
tinderuser.id ='sameer_jaga0'
tinderuser.name='samey'
tinderuser.isloggedin = false


// console.log(tinderuser)
// output = {}

//  same out put bconst tinderuser = {}ut this is non singloton 
const regulaeruser = {
    eamil:'sameerapple@.com',
    fullname:{
        userfullname : {
            fristname: "sameer",
            lastname : 'jaga '
        }
    }
}
console.log(regulaeruser.fullname.userfullname.fristname);

//  the nestet object we can define 
//  optional chaninig
const obj1 = {
    1:'a',2:'b'
}
const obj2 ={
    3:'c',4:'d'
}
//  two object can be mreger 
const merged1 = Object.assign({}, obj1, obj2);
console.log(merged1)
//  we can store our object in arryas like this 
const mer = [
    {
        id: '123abc',
        email:'samer@gmail.com'

    }, {
        id: '123abc',
        email:'samer@gmail.com'

    }, {
        id: '123abc',
        email:'samer@gmail.com'

    }

]
mer[1].id
console.log(mer)
console.log(tinderuser)
console.log(Object.keys(tinderuser))
// this snatxa this pur the all key in tinderuser  it conver into arrays
//  and also we can extract values 
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
 // we can checked the value has or not 
 console.log(tinderuser.hasOwnProperty("isloggedin"))
