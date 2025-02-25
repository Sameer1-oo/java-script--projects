// for of loop 
// ["", "", ""] arrays having inside string
// [{},{},{}] arrays having inide obejct like that main y case
const arrays = [1,2,3,4,5]
for (const num of arrays) {
    // console.log(num);
}
 const greetings = 'good morning'
 for (const i of greetings){
    // console.log( `this is greetings from my side ${i}`)
 }
//   A new data type in java script  == Maps
//  Maps are looking like arrays it use for ittration 
//  map is object 


const map =   new Map()
map.set(" in" , "india")
map.set("usa" , "united state of america")
map.set(" fr" , "frnace")
// The Map object holds key-value pairs and
//  remembers the original insertion order of the keys.
//  Any value (both objects and primitive values) 
// may be used as either a key or a value.
//  alwys containing unique value 



// for(const key of map){
//     console.log(key)
// }

for (const [key , value]  of map) {
   console.log(key, ':-', value)
    
}
// this work for objects in js let check
const myobject = new Map()
map.set('sameer','sammerbhai')

for (const k of myobject) {
    console.log(k)
    
}
//  object can't run not  having error issue

//  object ko itrrate karne ke or bhi trike hai for of ke loop ke alawa bhi 
const myobjec = {
    js:'javascript',
    cpp:'c++'
}