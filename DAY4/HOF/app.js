// // // hof

// // // case 1

// // function A(){
// //     console.log("i am inside A");
// //     B();
// // }

// // // function B(){
// // //     console.log("i am inside B");
    
// // // }

// // // A(B);
// // // way2

// // A (function B() {
// //     console.log("i am inside B");
// // }
// // )

// // case2 

// function A(){
//     console.log("i am inside A");

//     function B(){
//         console.log("i am inside B");

//     }
//     return B;

// }
// let ans = A();
// console.log(ans());

//array method

let arr = [2,3,4,5,6,7];


    arr.forEach(function(item, index){
        console.log(item*2)

    })

    //MAP method

    let newArr = arr.map(function(item,index){
        return(item*2);
    })

    console.log(arr);
    console.log(newArr);

    let newfilter = arr.filter(function(item,index){
        if(item < 5) {
            console.log(item);
            return true;
        }
        else{
            return false
        }

    })
    console.log(newfilter);


