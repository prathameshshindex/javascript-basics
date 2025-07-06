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
    //console.log(`${key} : ${newobject[key]}`);
   
}

//**************************FOR EACH LOOP **************** */

const myarray2 = [1, 2, 3, 4, 5];
myarray2.forEach(function (items) {
    //console.log(items);
})

function printme(item){
    //console.log(item);
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
    //console.log(`${item.age}`);
    
})

//**************************FILTER **************** */
// The filter() method creates a new array with all elements that pass the test implemented by the

myarray3 = [1, 2, 3, 4, 5];
const value = myarray3.filter((item) => {
    return item > 2;
})
//console.log(value);

myarray3.forEach((num)=>{
    if(num>2){
        //console.log(num);
    }
})


///**************************MAP **************** */

let mynumber = [1, 2, 3, 4, 5];

//const newnum = mynumber.map((num)=> num+10)
//console.log(newnum);
let n = mynumber.forEach((num)=>{
   if (num >0) {
    //console.log(num + 10);
   }
} )
//console.log(n);

//******chaning**** */

const newnum = [1 , 2, 3, 4, 5]

const newnum2 = newnum
                      .map((num)=> num *10)
                      .map((num)=> num +1)
                      .filter((num)=> num > 20);
//console.log(newnum2);




