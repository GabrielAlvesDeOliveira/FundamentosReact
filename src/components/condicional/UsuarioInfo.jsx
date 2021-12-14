import React from "react";
import If, {Else} from './if'
const UsuarioInfo = (props) =>{

    const usuario = props.usuario || {}

    return(
        <div>
            <If test={usuario && usuario.nome}>
            Seja bem vindo { usuario.nome } !
                <Else>
                Seja bem vindo Amigo !
                </Else>
            </If>

        </div>
    )

}

export default UsuarioInfo