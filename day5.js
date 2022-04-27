console.log("working");
 
for(let a = 10 ; a < 20 ; a++){
    console.log(a);
}

let i=0;
 while (i<=10) {
  console.log(i);
  i++;   
 }

 for( let h=1;h<=10;h++){
      console.log(h*2);
  }
let c=2;
do {
    console.log(c)
    c=c+2;
} while (c<=20);

// for - in loop - used  to fetch the arrray.
let name="preeti";
let students = [ "rani", "heena" ," jyoti"];
for ( let a in students){
    console.log(a);
}

// for - of loop -used to fetch the values of the array.

for( let values of students){
    console.log(values);
}

// //for each loop :-its very important.
 
students.forEach((values,index)=>{
//     //firstb parameter accept the value of the array and the second parameter accept the indexs of the array.
  console.log(index,values)  
})