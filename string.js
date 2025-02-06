const name = "sameer"
const repocount = 50
// console.log(name+ repocount)
// thois is very out dated method of concitnaiton
//  in this time to concitnaiton of string we will be use backticks ` `
console.log(` hello my name is  ${name} and my  repo count ${repocount} `)
//  there is a stringpulation 
// how to decalerse a string in a new method 
const game= new String("sameerjaga")
console.log(game[9])
console.log(game.__proto__)
//we can axise many prototype using like 
console.log(game.toLocaleUpperCase())
/* String {'sameerjaga'}0: "s"1: "a"2: "m"3: 
*/
// we an  using .dot
console.log(game.charAt('3'))
console.log(game.indexOf('j'))
// strings method of example
const newgame= game.substring(0,6);
// the last value is not included
console.log(newgame)
const anthorstring = game.slice(-3,4)
console.log(anthorstring)
const newstring = "  sameer  "
console.log(newstring)
console.log(newstring.trim());
// that  when a user fil a detile but he filled space and that it occupied space in memory . but we can trim it use of .trim()
const url = "https://SVGMarkerElement.com/sameer%20jaga"

console.log(url.replace('%20', '-'))
//  we can ask the queadtion by string using method 
console.log(url.includes('sameer'))
// that is boolean tyoe data type 

console.log(game.split('-'))
