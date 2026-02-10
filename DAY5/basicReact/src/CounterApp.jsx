import React, { useState } from "react";

function CounterApp(){

    // useState hook

    let [count,setCount] = useState(0);
    

    // let count = 0;
 // logic to increase the count value;
    function handleIncrement(){
        count++;
        console.log(count);
    }
    return(
        <div>
            <h1>counter App</h1>
            <h3>counter: {count}</h3>
            <button onClick={handleIncrement}> Increment</button>
        </div>
    )
}

export default CounterApp;