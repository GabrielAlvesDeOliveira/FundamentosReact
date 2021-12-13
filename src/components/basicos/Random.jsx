import React from "react";

const random = (props) =>{
    const {min, max} = props
    const randomic = Math.floor(Math.random() * (max - min)) + min
    return(
        <div>
            <p>Valor Min: {min}</p>
            <p>Valor Max: {max}</p>
            <p>Valor Escolhido: {randomic}</p>
        </div>
    )
}

export default random