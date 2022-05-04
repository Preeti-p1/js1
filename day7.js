console.log("working")
// method:1-creating and assigning the values to an array
let names = ["kiran" , "riya" , "ribhu" , "sony" ];




// method:2-create an empty array ,and then start assigning values to them as per the index positions


let name2 = [];

name2[0] = "priya";

name2[1] = "marry";

name2[2] = "fasna";

name2[5] = "supriya";


console.log(name2);

// method 3:- create an array using array constructor

let name3 = new Array("raju","shyam","baburao");

console.log(name3);

let name4 = [];

name4[0] = "kiran";

name4[1] = "goswami";
 
name4[2] = "8295195504"

name4[3] = "19";

console.log(name4);

// push , pop, unshift, length , indexof , lastIndexof

// push:- adds value at the last position only

names.push("shyam");
names.push(7);
console.log(names);

// pop: pop helps us to remove the value from the last position

names.pop();
console.log(names);

// shift removed from the first position and unshift adds on the first position

name2.shift();
console.log(name2);

name2.unshift("abhi");
console.log(name2);


name3.unshift("jump");
console.log(name3);

// length is a property

 console.log(names.length);


//  indexOf , LastIndexOf , join , concat , reverse , sort , slice , splice,

let num1 = [1,2,3,4,5,5];

let num2 = [6,7,8,9,10];

console.log(num1.indexOf(4));
console.log(num1.lastIndexOf(5));



// num1.concat(num2);
console.log(num1.concat(num2));
// concat/join  donot changes the original array

console.log(num1.join("-"));


// reverse

console.log(num1.reverse());

let num3 = [5,2,66,88,9,1,4,3];
// console.log(num3.sort());

// console.log(names.sort());

// console.log(names.sort().reverse());

// using sort followed by reverse given u values arranged in descending order

// sort modifies the original array

// splice , slice

// first value gives the index second value gives the number to be removed in splice

// num3.splice(2,0,3,5,6,8);
// console.log(num3);


// for particular part of array we use slice

console.log(num3.slice(2,6));
// slice starting index is inclusive and end index is exclusive i.e. not included