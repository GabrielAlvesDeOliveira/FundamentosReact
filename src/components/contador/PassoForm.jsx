import React from "react";

export default function PassoForm(props){
    return(
        <div>
            <div>
                <label htmlFor="passoInput">Passo:</label>
                <input id="passoInput" type="Number" value={props.passo} onChange={e=>props.setPasso(+e.target.value)}/>
            </div>
        </div>
    )
}