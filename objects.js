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
/* ******************************* OBJECTS3*************************************/
const course ={
 coursename : 'js hindi',
 price :999 ,
 courseInstructuror: 'sameer'

}
// course.courseInstructuror
//  anthor  method to axis the value of variable 
//  we can extract the value 
const {courseInstructuror:sam} = course
//  iss me apn key ka name change kar sakte hai 

console.log(sam)
//  this method of dstructuring 
//  where is dstructure use 
// const nav = () => {

// }
// // navbar(company=royalrange)
// {
//     "name" : 'sameer ',
//     "course" : 'java script '
//     //  the are string from 
// }
// //  this  is santak of json  ye jason ki trweatr karga 














// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Miss",
//           "first": "Jennie",
//           "last": "Nichols"
//         },
//         "location": {
//           "street": {
//             "number": 8929,
//             "name": "Valwood Pkwy",
//           },
//           "city": "Billings",
//           "state": "Michigan",
//           "country": "United States",
//           "postcode": "63104",
//           "coordinates": {
//             "latitude": "-69.8246",
//             "longitude": "134.8719"
//           },
//           "timezone": {
//             "offset": "+9:30",
//             "description": "Adelaide, Darwin"
//           }
//         },
//         "email": "jennie.nichols@example.com",
//         "login": {
//           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//           "username": "yellowpeacock117",
//           "password": "addison",
//           "salt": "sld1yGtd",
//           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//         },
//         "dob": {
//           "date": "1992-03-08T15:13:16.688Z",
//           "age": 30
//         },
//         "registered": {
//           "date": "2007-07-09T05:51:59.390Z",
//           "age": 14
//         },
//         "phone": "(272) 790-0888",
//         "cell": "(489) 330-2385",
//         "id": {
//           "name": "SSN",
//           "value": "405-88-3636"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/75.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//         },
//         "nat": "US"
//       }
//     ],
//     "info": {
//       "seed": "56d27f4a53bd5441",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }
// //   this sample code of api call
