// console.log("working")
//  // Functions - In order to execute a particular lines of code repetitively, we can allocate them into a function, which can then be called again and again as required. This prevents us writing a piece of code mulitple times. 

// //function definition from lines 6-8
// //we need to have n no of parameters for n number of arguments passed while calling the functions, so parameters catch the arguments in the sequence they are passed

// function multiply(parameter1, parameter2){
//     console.log("Inside multiply function");
//     //the function body can have more than one line of code.
// }

// //function calling on line 11
// multiply(arg1,arg2);//name of a function followed by open and close parenthesis.
// //while we call a function we pass arguments inside the parenthesis, if we have to pass any values otherwise not necessary to pass arguments. The arguments passed can be one or many separated by commas.

// function sayhy(){
// console.log("hy!!");
// let a = 3;
// let b = 4;
// let result = a + b;
// console.log (result)
// }
// sayhy();

//  function addition ( num1,num2)
//  {
//   let result = num1 + num 2;
//   console.log(result);
//  }

//   addition(3,4);


function one (){
    two();
    function two (){
        let i = 5;

        console.log(i);
     
    }
}