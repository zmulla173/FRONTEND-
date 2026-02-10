// let h1 = document.getElementById("heading");

// console.log(h1);
// h1.style.color = "blue";
// h1.style.fontSize = "50px"

// // let p = document.getElementsByClassName("para");
// // console.log(p);
// // p[0].style.color = "blue";
// // p[1].style.color = "orange";
// // // p.style.backgroundColor = "black";

// let p = document.getElementsByTagName("p");

// console.log(p);

// // querySelector()
// let h1 = document.querySelector("#heading");
// console.log(h1);
// h1.style.color = "red";

// let p = document.querySelector(".para");
// console.log(p);
// console.log(h1.innerHTML);
// h1.innerHTML = "DOH";

// let div = document.querySelector("div");
// console.log(div.innerHTML)
// div.classlist.add("box");
// div.classList.remove("box");
// div.classList.toggle("box");

// events

let btn = document.querySelector(".btn");
btn.addEventListener("click",()=>{
    document.body.style.backgroundColor = "blue";

})

let input = document.querySelector(".inp");

input.addEventListener("input",function(event){
    let currentValue = event.target.value;
    console.log(currentValue);

})

