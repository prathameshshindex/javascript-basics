//**************************FOR OF LOOP **************** */
const myarray = [1, 2, 3, 4, 5];

for (const num of myarray) {
    //console.log(num);
    
}

const greetings = "hello world";

for (const greets of greetings) {
    //console.log(greets);
    
}

//Map

const map = new Map()
map.set("name", "prathamesh");
map.set("age", 22);

//console.log(map);

for (const [key,value] of map) {
   // console.log(`${key} : ${value}`);
    
    
}

const newobject = {
    name: "prathamesh",
    age: 22,
    city: "pune"
};

for (const [key, value] of Object.entries(newobject)) {
    // console.log(`${key} : ${value}`);
    
}

//****FOR IN ****** */

for (const key in newobject) {
    console.log(`${key} : ${newobject[key]}`);
   
}

//**************************FOR EACH LOOP **************** */

const myarray2 = [1, 2, 3, 4, 5];
myarray2.forEach(function (items) {
    console.log(items);
})

function printme(item){
    console.log(item);
}

myarray2.forEach(printme);


mycoding = [
    {   
         name: "prathamesh",
    age: 22,
},
    {    name: "sachin",
    age: 23,
}       

]


mycoding.forEach((item) =>{
    console.log(`${item.age}`);
    
})

