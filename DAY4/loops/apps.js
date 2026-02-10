// loops

// for loops
// for(let i = 0; i<10; i++){
//     console.log(i*i);
// }

// for-of

// let arr = [2,4,6,8,10];

// for(let item of arr){
//     console.log(item*4)
// }

// for-in

let obj = {
    name : "rahul",
    age : 25,
    favcolor : "black",
    location : "delhi"
}

for(let item in  obj){
    // console.log(obj.item); error
    console.log(obj[item]);
    
}