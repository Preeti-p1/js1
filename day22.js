console.log("working")
//// TDZ - Its a place where the let and const variables reside as long as they are not declared. It also has a default value of undefined only but if we try to access them, then will get ReferenceError.
function handleSubmit(){
    let username = document.getElementById("name").value 
    console.log(username);
    let age = document.getElementById("age").value
    console.log(age);
    let email = document.getElementById("email").value
    console.log(email);
    let phno = document.getElementById("phonenumber").value
    console.log(phno);
 
    localStorage.setItem("username",username );
    localStorage.setItem("age",age );
    localStorage.setItem("email", email);
    localStorage.setItem("phno",phno );
 
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("age",age );
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("phno",phno);
 }
 
 function showDetails(){
    let e1 = localStorage.getItem("username");
    console.log(e1);
     let e2 = localStorage.getItem("age" );
     console.log(e2);
     let e3 = localStorage.getItem("email");
     console.log(e3);
     let e4 = localStorage.getItem("phno");
     console.log(e4);
 
 }
 
 //reference error
 
 //console.log(water);
 //console.log(a());
 
 //typerror
 //const b=20;
 //console.log(b());
 
 //syntax error
 //const a () ={
 //}
 
 //var w 2;
 
 
 //symbols are always guaranteed to be unique. they are never be similar
 let sym1 = Symbol("game");
 let sym2 = Symbol("game");
 console.log(sym1 === sym2);
 
 // TDZ - Its a place where the let and const variables reside as long as they are not declared. It also has a default value of undefined only but if we try to access them, then will get ReferenceError.
 
 
 //IIFE - Immediately Invoked Function Expressions - 
 (()=>{
     const david = "David";
 
 })();
 
 const david = "David";