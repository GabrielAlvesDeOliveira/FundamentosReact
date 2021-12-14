import React from "react";

export default function botoes(props){
    return(
        <div>
            <button onClick={props.setInc}>+</button>
            <button onClick={props.setDec}>-</button>
        </div>
    )
}