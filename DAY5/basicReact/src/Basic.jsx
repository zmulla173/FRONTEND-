import React from "react";

function Basic(){
    let num = 234567899;
    let name = "rahul";
    let arr = [2,4,5,6,7,8,10];
    let fruits = ["apple","mango","banana","orange"];

    return(
        <div>

            <h1>my number: {num} </h1>
            <h2>my name is : {name} </h2>
            <h3>my array is : {arr} </h3>
            
                <ul>
                    {
                        fruits.map(function(fruits,index){
                        return <li key={index}>{fruits}</li>
                    })

                    }

                </ul>
            
        </div>
    )
}

export default Basic