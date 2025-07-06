const myarray = [1, 2, 3, 4, 5];

// let totol = myarray.reduce(function (acc , currval){
//     console.log(`acc : ${acc} and currval : ${currval}`);
    
// return acc + currval;
// }, 0)

// const totol = myarray.reduce((acc, currval) => acc + currval, 0);
// console.log(`Total is ${totol}`);

const courses = [
    { name: "HTML", price: 100 },
    { name: "CSS", price: 200 },
    { name: "JavaScript", price: 300 },
    { name: "React", price: 400 },
    { name: "Node", price: 500 },
];

const totoalPrice = courses.reduce((acc,item)=>(acc+item.price),0); 
console.log(`Total price of all courses is ${totoalPrice}`);
