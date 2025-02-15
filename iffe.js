//  immediately invoked function Expression (IIFE)
//  function chai()
//  {
//     console.log(`DB CONNECTED`)
//  }
//  chai()
//  why we need to iffe function beasuce global scope and block scope never polluted each other 
// ()()than we are using pernthies and second is calling for exicution and frist define work

(function chai (){
    console.log(`db CONNECCTED`)

})
();
//  in this iife function must we need of semi collum
 (function aurcode()  {
    
    console.log(`db connected` ${name})

 } ) ("sameer")