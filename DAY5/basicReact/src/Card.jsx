import React from "react";

function Card (props){
    return(
        <div>
            <img src={props.image} alt="" />
            <h4>{props.name}</h4>
            <h5>{props.price}</h5>
            <p>{props.description}</p>
        </div>
    )
}

export default Card;