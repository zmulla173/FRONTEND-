// // // // synchronous programming

// // // // console.log("line 1")
// // // // console.log("line 2")
// // // // console.log("line 3")

// // // // asynchronous programming

// // // console.log("line 1");
// // // setTimeout(function(){

// // //     console.log("line 3");

// // // },4000)

// // // setTimeout(function(){

// // //  console.log("line 2");

// // // },2000)

// // // console.log("line 4");


// // // set interval()

// // let timer = 0;
// // let id = setInterval(function(){
// //     timer++;
// //     console.log(timer);
// //     if(timer == 10){
// //         clearInterval(id);
// //     }


// // },1000)

// // async-awaitfunction()

// async function dataPrint(){
   
// //  let response = await fetch("https://api.tvmaze.com/search/shows?q=girls")
// //     let data =  await response.json();
// //     return data;

// try{
//      let response = await fetch("https://api.tvmaze.com/search/shows?q=girls")
//     let data =  await response.json();
//     return data;
// }catch(err){
//     console.log(err);
// }
// }

// let movieData =  dataPrint();
// console.log(movieData);


// Arrow function

let sum = (a,b)=>{
    return (a+b);
}
console.log(sum(4+2));