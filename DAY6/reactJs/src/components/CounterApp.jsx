import React, { useEffect, useState } from "react";

function CounterApp(){
    // state manage
    let [count,setCount] = useState(0);

    // useEffect
    useEffect (function(){
        console.log("i will run after every render")
        alert("hii  i am useEffect");

    },[count])
    function handleIncrease(){
        setCount(count+1)
    }
    return(
        <div>
            <h1>Counter App</h1>
            <h3>counter:{count}</h3>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

export default CounterApp