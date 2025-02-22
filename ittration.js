//  for 
for (let index = 0; index <10; index++) {
    const element = index;
    if(element == 5){
        console.log("5 is the best number ");
    }
    console.log(element)
    
 } //and the elment variable exais don't  out side the block scop
//  when we are usring var then the variable having flow of globle scope
// for(let a = 0 ; a <=10; a++){
//     console.log(`this our outer loop ${a}`);
//     for(let j =0; j<=5;j++){
//         // console.log(`Inner loop value ${j}`);
//         console.log( a+ "*" + j +'=' +a*j)
//     }
// }
// //  first of all frsily the outer loop run and  after the inner loop 

let myarray = ['flash','batman','ironman']
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
}
//  key word  :: we can use in loop conditionwe can addd loop
// 

// break and continue concept
for (let s = 1; s <= 20; s++) {
    if (s==5) {
        console.log(`decteed 5`)
        break;
        
    }
    console.log(`value of s ${s}`)
    
}



