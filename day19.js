console.log("working")
// api 
// It connects two application fast data to  pass from one to another 
//Ajax- it helps us to query the apls's . its allows us to communicate with remote web servers in an asynchronous way with help  of AJAX calls .we can request data from web servers dynamically it helps us to create crud application.
/*
$("button").click(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        type: "GET",
        success: function (response) {
            console.log(response);
            document.getElementById("again").innerHTML = response.title;
        }
    }
 )
}

)*/
 // Callback Hell -  They are just a name or convention for using JavaScript functions. It instead of returning results immediately like other functions, takes time to produce the result. These are more of like an I/O operations.


// CallbackHells are in a form of arrow shaped, pyramid shaped


 const getEmployeeID = () => {
    
    setTimeout(() => {
        console.log("Fetching the Employee details");
        let id = [1,2,3,4,5];
        console.log(id);
        
        setTimeout(() => {
            let employeeDetails = {
                name: "Arjun Kanungo",
                age: 34,
            }
            console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);
            
            setTimeout(() => {
                employeeDetails.gender = "Male",
                console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender}`);
                 
                setTimeout(() => {
                    employeeDetails.salary = 21000;
                    console.log(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age} and the gender is ${employeeDetails.gender} and the salary is ${employeeDetails.salary}`);
                },2000);
            }, 2000);
        }, 2000)
    },2000);
}
getEmployeeID();

