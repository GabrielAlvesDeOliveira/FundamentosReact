import React from "react"
export default function ComParametro(props){
    const status = (props.nota > 6) ? 'Aprovado' : 'Reprovado'
    const notaInt = Math.ceil(props.nota)
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.nome} Tem nota {notaInt}</h3>
            <p>{status}</p>
        </div>
    )
}