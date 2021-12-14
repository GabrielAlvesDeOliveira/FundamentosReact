import React from "react";
import '../src/App.css'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Familia from './components/basicos/Familia'
import Primeiro from './components/basicos/primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Random from './components/basicos/Random'
import Card from './components/layout/Card'
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";


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

                <Card titulo=" #6 - Lista Repeticao" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo=" #7 - Desafio Repeticao" color="#3A9AD9">
                    <TabelaProdutos></TabelaProdutos>
                </Card> 

                <Card titulo=" #8 - Renderizacao Condicional" color="#982395">
                    <ParOuImpar numero={20}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: ''}}/>
                </Card> 

                <Card titulo=" #9 - Comunicacao direta" color="#59323C">
                    <DiretaPai></DiretaPai>
                </Card> 

                <Card titulo=" #10 - Comunicacao indireta" color="#8BAD39">
                    <IndiretaPai></IndiretaPai>
                </Card> 

                <Card titulo=" #11 - Componente Controlado (Input)" color="#8BAD39">
                    <Input></Input>
                </Card> 

                <Card titulo=" #12 - Contador" color="#424242">
                    <Contador numeroInicial={10}></Contador>
                </Card> 

                <Card titulo=" #13 - Mega" color="#B9006E">
                    <Mega qtde={8}></Mega>
                </Card> 

            </div>
        </div>
    )
}
export default app