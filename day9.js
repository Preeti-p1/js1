console.log("working");
let map = new Map();

map.set("name","Ravi");
map.set("age",29);
map.set("phone", 8240113508);
map.set(1,"one");
map.set(true,"true");

console.log(map);
console.log(map.size);

console.log(map.get("1"));
console.log(map.get(1));
console.log(map.get("name"));

console.log(map.has("EMAIL"));

map.delete(1);

map.clear();
console.log(map)

map.set("name","Ravi");
map.set("age",29);
map.set("phone", 8240113508);
map.set(1,"one");
map.set(true,"true");

for(let key of map.keys())
{
    console.log(key);
}

for(let value of map.values())
{
    console.log(value);
}

map.forEach(function(value , key){
    console.log(key,value);
})

for(let entry of map.entries())
{
    console.log(entry);
}

//set

let set1= new Set();

set1.add("Apple");
set1.add("Banana");
set1.add("Oranges");
set1.add("Oranges");


set1.add("Mangoes");
set1.add("Litchi");

console.log(set1);
console.log(set1.values());
console.log(set1.keys());
console.log(set1.entries());

console.log(set1.has("Banana"));

set1.delete("Banana");

// set1.clear();
console.log(set1);


for(let key of set1.keys())
{
    console.log(key);
}

for(let value of set1.values())
{
    console.log(value);
}

set1.forEach(function(value , key){
    console.log(key,value);
})

for(let entry of set1.entries())
{
    let key= entry;
    console.log(key[0]);
}