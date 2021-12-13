import React from "react";
import '../src/App.css'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Familia from './components/basicos/Familia'
import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Random from './components/basicos/Random'
import Card from './components/layout/Card'

const app = () =>{
    return(
        <div className="app">
        <h1>Fragmentos React</h1>

            <div className="Cards">

                <Card titulo=" #1 - Desafio Aleatorio" color="#FA6900">
                    <Random min={1} max={100}/>
                </Card>

                <Card titulo=" #2 - Fragmento" color="#E94C6F">
                    <Fragmento/>
                </Card>

                <Card titulo=" #3 - Com Parametro" color="#E8B71A">
                    <ComParametro 
                        titulo="Segundo Componente" 
                        nome="Gabriel"
                        nota={9.8} />
                </Card>

                <Card titulo=" #4 - Primeiro componente" color="#588C73">
                    <Primeiro/> 
                </Card>

                <Card titulo=" #5 - Componente Familia" color="#00C8F8">
                    <Familia sobrenome="Santos">
                        <FamiliaMembro nome="Pedro"/>
                        <FamiliaMembro nome="Gabriel"/>
                        <FamiliaMembro nome="Victor"/>
                    </Familia>
                </Card>

            </div>
        </div>
    )
}
export default app