console.log("working.....")
let employee1 = {

    name : "Rahul",
    designation : "CSE",
    id : 111,
   // showDetails: function(age,gender) {
   //     console.log(this.name, this.id, this.designation);
    //}
}


 function showDetails(age,gender){
    console.log(this.name, this.id, this.designation,age, gender);
     }

//employee1.showDetails();

let employee2 = {

    name : "Karan",
    designation : "IT",
    id : 112,

}

let employee3 = {

    name : "Raju",
    designation : "ECE",
    id : 113,
    
}

showDetails.call(employee1,23,"M");//passing the arguments(23,M)
showDetails.call(employee2,23,"M");

showDetails.apply(employee2,[23,"M"]);//[23,"M"]
showDetails.apply(employee3,[23,"M"]);



let res1 = showDetails.bind(employee2);res1(23,"M");
let res2 = showDetails.bind(employee3);
res2(23,"M")

conts studentPrototye ={
calcAge{
    console.log
}
}



//Classes - 

// Classes in JS doesnot work exactly the same way as that of Classes in Java/C++
//They are just a syntactic sugar to Object prototype, instances that we have read.
//They are special kind of functions with some variations .

//1. Classes are also First Class FUnctions
//2. Classes are not hoisted/ donot support hoisting.
//
const StudentPrototype = {
    calcAge(){
        console.log(2022 - this.bYear);
    },
    initialise(fname, lname, bYear){
        this.fname = fname;
        this.lname = lname;
        this.bYear = bYear;
    }
}

const ramesh = Object.create(StudentPrototype);

ramesh.fname = "Ramesh";
ramesh.lname = "Thakur";
ramesh.bYear = 1990;

ramesh.calcAge();

console.log(ramesh.__proto__);
console.log(ramesh.__proto__.__proto__);
console.log(ramesh.__proto__.__proto__.__proto__);

const kirsten = Object.create(StudentPrototype);
console.log(kirsten);//

kirsten.initialise("Kirsten","Stewart",1986);
kirsten.calcAge();

console.log(kirsten);

console.log("22" + 22);
console.log("Hi" + 22);

console.log(2022 - "1980");
console.log(2022 / "2");
console.log(2022 * "2");
console.log(2022 % "2");

console.log(2 ^ "2");//power is nottypecasting a string to a number like that of a subtraction, division, multiplication, modulus

