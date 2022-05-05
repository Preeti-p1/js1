let numbers = [2,3,4,5,6,7];
 console.log(numbers);
 numbers.map((item) =>{console.log(item)})
  
 let res =numbers.filter(item=.{
     return item > 3
 })

 let str = "Lakhwinder Singh";
console.log(str.length);
console.log(str.charAt(2));

//endsWith
console.log(str.endsWith("g"));

// includes

let sentence = "Hello World";
console.log(sentence.includes("world"));

// indexOf, lastIndexOf

console.log(sentence.indexOf("o"));
console.log(sentence.lastIndexOf("o"));

//length

console.log(str.length)

console.log(str.replace("lakhwinder,lucky"));

//search
console.log(str.search("lakhwinder"));

//subhtr
console.log( sentence.substr(1,4));
