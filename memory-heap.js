//  **********memory********/
// there two type memorys 
// stack memory, heap memory 
// stack memory use for primitive data type 
// heap memory use for non - primitive data type 
let mylinkdin= "sameerjaga"
let anthorid= mylinkdin
anthorid = "sameer bhatt"
console.log(anthorid)
console.log(mylinkdin)
// this is stack memory example

let user1 = {
    email: "sameerjshda@gamail.com",
    upi :"dshd"
    // always rember the comama after a element 
}
// that is object non primitive data type it store in heap memory
let user2= user1
user2.email = "google@.com"
console.log(user1)
console.log(user2)
// satck memory provide copy data not a actual origanal 
// heap provided refernence value origanal when you change in anthor 
// variable value it may be changed and origanal value 