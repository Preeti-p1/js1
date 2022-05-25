console.log("working..");
//Async/Await:they are easy to handle promises more efficiently.The word async is used before a function  to make sure that it return a promise.so, we therefore use async before the function  to return a promise instead of some values/function.

//Awiat is used to wait for the result that is supposed to be returned from the promise.SO,we can used the keyword  await when calling the function which return a promise.
// await is always used async keywork
// Asyn/Await is also used for making the API Calls.

const fn1 = () => {
    return "im first"
}
const fn2 = () => {
    return "im second"
}
const fn3 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
        resolve("im third");
    }, 3000);
    })
}
const callFns = async () => {
    let res1 = fn1();
    console.log(res1);

let res2 = await  fn2();
console.log(res2);

let res3 = await  fn3();
console.log(res3);
}
callFns();

/////////////////
async function tryingPromises() {
    console.log("I am inside the function");
    const response = await fetch('https://api.github.com/users');
    
    console.log("Before the response was received");

    const users = await response.json();
    console.log("Users are resolved");

    return users;
}

console.log("Before calling the function");
let data = tryingPromises();
console.log("after calling the function");
console.log(data);
data.then((res)=>{
    console.log("the response received is",res);
    res.map((item)=>{
        console.log(item.id);
    })
})
console.log("End of Program");

setTimeout(() => {
    console.log(data);
}, 2000);
