//  Arrays
const Arrays = [0,1,2,3,true,0,2]
// collection of multiple obect or elemntens. in a single variable 
// we are declear arrays in squar brakects [] like that
// java script resizeable  and mix differnt type of data type .
// indexig strating from zero ,\. 
// arrays copy opretions creat showllow copies .shawollo copies refencere depended copies . store in heap memory .
// deep copies are object dose not share the refefences copies . example of stcak memory 
// mamny method to decalers arryas in java script 
const myhero =['shaktimaan', 'nagaaraj',12,4,5]
//  when you want to axise any value of arrya use 
console.log(myhero[2]);

const arrays2 = new Array (2,244,4,5,);
console.log(arrays2)
//  arryas methods

arrays2.push(8)
// adding the elemnt in the last of arrays
arrays2.pop()
// removing the last elemnt of arryas
// without any parameter
console.log(arrays2);
 arrays2.unshift(2)
 console.log(arrays2)
//  this not a good method 
// console.log(arrays2.includes(9));
// this is question based array we can ask to this there is a element in this arrays or not 
// console.log(arrays2.indexOf(2))
//  that is chaeking second postion element of arryas
/* arrays convert into string */

const hello = arrays2.join()
// maiking the arryas into string and winder the elemnt with comma
// console.log(hello)
// console.log(typeof hello)
const myn1 = arrays2.slice(1,3);
// the elemnt in arryas two only print 012indexing only not three 
const myn3 = arrays2.splice(1,3);
// console.log(myn1)
// there is a last range value does not include 

const myn2 = arrays2.splice(1,3)
// console.log(myn2);
// middel 1 to 3 element of arryas not included

/* ****************************** arrays2 ****************************/

const marvel_heros=['thor','spidermen','ironmen']
const dc = ['supermen', 'flash','batmen']
// marvel_heros.push(dc)
console.log(marvel_heros)
//  this method give as aanthor arryas like a elemnt 
const allheros = marvel_heros.concat(dc)
console.log(allheros)
const anthor_arrays = [1,2,3[1,2,3,4,54],['s','d'],[13,4,5]]
//  sperad the all element arrays in arrays
//  taking a glsss of cup an the fall dowan then you are see glass will be sprear
const allheros2 = [...marvel_heros,...dc]
const real_arrays = anthor_arrays.flat(Infinity)
console.log(real_arrays)
console.log(Array.isArray('sameer'))
// this is boolean type data type 
//  convetr into array
console.log(Array.from('sameer'))
console.log(Array.from({name: 'sameer'}))/// intersting case for interview
//  multiple variable in convert into arrays
let score1 =200
let score2 =300
let score3 =400
let score4 =500
console.log(Array.of(score1,score2,score3,score4));
