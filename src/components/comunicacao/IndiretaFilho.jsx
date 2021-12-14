import React from "react";

const inderetaFilho = (props) =>{

    const gerarIdade = ()=> parseInt(Math.random()*(20)) + 50
    const gerarNerd = ()=> Math.random() > 0.5

    return(
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                function (e){
                    props.clicar('Joao', gerarIdade(), gerarNerd())      
                }
            }>Fornecer Informacoes</button>
        </div>
    )
}

export default inderetaFilho