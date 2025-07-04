//for loop
for (let i = 0; i < 10; i++){
    const element = i
    if (element === 5) {
        //console.log("5 is found");
        
    }
    //console.log(element);

 
}

for (let i = 0; i <=10; i++) {
   // console.log(`outer loop: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
        //console.log(`inner loop: ${j}`);
        //console.log(i + "*" + j + "="+ (i*j));     
    }
    
}

let myarray = [1, 2, 3, 4, 5];
//console.log("Array Length: " , myarray.length);

for (let i = 0; i <myarray.length; i++) {
    const element = myarray[i];
    //console.log(element);
    
}

for (let index = 1; index < 20; index++) {
    if (index === 10){
        console.log("10 is detected ");
        break;
    }

   console.log(`value of index: ${index}`);
   
    
}


for (let index = 1; index < 20; index++) {
    if (index === 10){
        console.log("10 is detected ");
        continue;
    }

   console.log(`value of index: ${index}`);
}



