// dates
let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleTimeString())
console.log(mydate.toLocaleString());
console.log(typeof mydate);
//  we can decler the dates varours method like the ⬆️⬆️
//  but how we can decler a sfcipic date
let mycreate = new Date(2025,0 ,2 , 2 , 3);
console.log(mycreate);
console.log(mycreate.toDateString());
console.log(mycreate.toLocaleDateString());
//  in this java script the month will be start with zero .
//  how you difne the timme
// many formate to delcere time and date more pericise
let myTimestamp =  Date.now()
console.log(myTimestamp)
//  calucute the time stamp
//  comapring the time stamp beetween to date likke "console.log(myTimestamp.getTime())"
console.log(mycreate.getTime());
console.log(mycreate.getMilliseconds());
console.log(Date.now()/1000);
//  that input give mili second output but in decimle  how to reduce thet thing 
// we are using Math.floor funaction to reduce decimal value exact 
console.log(Math.floor(Date.now()/1000))
let newdate =  new Date()
console.log(newdate)
console.log(newdate.getDay()+1)
//  there we are use + 1 beascues in java ascript months start with 0  
console.log(newdate.getMonth());
newdate.toLocaleString('defalut',{
    weekday: "long"
}) 
//  this method ⬆️⬆️ is very good use when you want use it
