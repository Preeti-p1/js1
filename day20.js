//promises:
//promises are used to handle asynchronous operations in javascript. they are easy  to manage when dealing with multiple asynchronous operations where multiple callbacks can create callback hells leading to unmanageable Code .

//this doesn't  means that promises  are only used for a voiding callback hells,instead are often used for handling asynchronous operations.

//promises takes two executor function as parameters,namely resolve and reject,if the data is fetched correctly then the control is passed to resolve method which is turn calls the . then () method ,but if the data isnot fetched for some reasons i.e. there is an error ,then the reject method is called which further call the .catch() method

// three stages
//1. pending: when the promise is still executing i.e not yet resolved or then they are called to be in pending stage.
//2.Resolved /Fulfilled: when the promises is resolved or have fetched the data correctly,it ends up being into resolved stage.
//3.rejected : when the promises falls in fetching the result,it ends up being into rejected state.

const getEmployeeID = new Pomises((resolve,reject)=>{
    setTimeout(() =>{
       let id = [1,2,3,4,5];
       //resolve(id) ;
    },2000);
})

//promise consuming -using for consumption of promise
getEmployeeID
.then((id)=>{
    console.log(id);
})
.catch((err)=>{
    console.log("Error Message",err);
})
.finally(()=>{
    console.log("End of Program");
})


 ////////////////////////
 const getEmployeeID = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let id = [1,2,3,4,5];
        resolve(id);
        reject("The data isn't found");
    }, 2000 );
})

const getEmployeeDetails = (data) => {
    return new Promise((resolve, reject)=>{
        setTimeout((data) => {
            let employeeDetails = {
                    name: "Arjun Kanungo",
                    age: 34,
            }
            console.log("Iam prinitng inside the promise",data);
            resolve(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);
        },3000, data)
    })
}

// promise consuming - used for consumption of promise
getEmployeeID
    .then((id)=>{
        console.log(id);
        getEmployeeDetails("Hi").then((data)=>{
        console.log("I am inside the then method",data);
    })
})
    .catch((err)=>{
        console.log("Error Message: ", err);
})
    .finally(()=>{
        console.log("End of Program");
    })
