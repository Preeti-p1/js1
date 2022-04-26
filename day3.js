// not defined, undefined, null
//not defined - Any variable which we try to access but not declared will throw us a reference Error: variable not defined
// console.log(myAge);//not defined

// undefined - If a variable is declared but not assigned any value yet, but if we try to access that variable then we will get the errror as undefined.
let myHobbies;
console.log(myHobbies);
myHobbies = "Skating";
consol e.log(myHobbies);

// null - Its a default value assigned by a user to the variable as long as th variable  has not been assigned its original /updated value

let amIadult = null;
console.log(amIadult)//null
amIadult = true;
console.log(amIadult)//true



//logical operator
// || ,&&,!
 console.log(2||3);
 console.log(2&&3);
 console.log(2||3);

 console.log(!0);
 console.log(!1);
 console.log(!2);

 //incrementand decreament opreating

 let a = 1;
 a++;
 console.log(a);
 a++;
 console.log(a++);//1//i will first print the value of a, and then increment its value with 1 which will be reflected/shown in next line,not on the same line
 console.log(a);
 console.log(a++);

