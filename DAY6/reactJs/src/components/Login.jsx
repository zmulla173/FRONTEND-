import React from "react";
import { useNavigate } from "react-router";

function Login(){
    let navigate = useNavigate();

    function handleButton(){
        navigate('/home');
    }
    return(
        <div>
            <button onClick={handleButton}>Login</button>
        </div>
    )
}

export default Login;