console.log("working...");

const StudentPrototype = {
       calcAge() {
             console.log(2022 - this.bYear);
    },
    initialise(fname, lname, bYear){
        this.fname = fname;
        this.lname = lname;
        this.bYear = bYear;
    }
}
const honey = Object.create(StudentPrototype);
console.log(honey)
honey.initialise = ("honey","tambi",1999);
honey.lname =("honey");
honey.calcAge();

const PersonPrototype= Object.create(StudentPrototype);
console.log(PersonPrototype);

PersonPrototype.initialise = function(fname,lname,byear,course){
    StudentPrototype.initialise.call(this,fname,lname,byear);
    this.course = course;
}
PersonPrototype.initialise = function(){
    console.log(`my name ${this.fname}${this.lname} and my course is ${this.course}`);
}

const jay = Object.create(personPrototye);
console.log("jay");
jay.initialiseone("jay","dubey",1995,"CSE")
jay.calcAge();
jay.introduce();
console.log(jay.__proto__);
console.log(jay.__proto__.__proto__);
console.log(jay.__proto__.__proto__.__proto__);
console.log(jay.__proto__.__proto__.__proto__.__proto__);

//Closures - Closure is not something that we create manually or explicitly. It happens automatically in certain situations which we need to recognize. 
// Closure makes a function remember all the variables that existed at the functions birthplace initially.
// Any function always has access to the variable environment of the execution context in which the function was created.

const ticketbooking = function(){
    let passengerCount = 0

    return function (){
        passengerCount++;
        console.log(`the passanger count ${passengerCount}`)
    };
};
const bookie= ticketbooking();
bookie();
bookie();
bookie();