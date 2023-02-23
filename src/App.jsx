import './App.css';
import React from "react";
import Gcharts from './components/basicos/Gcharts';
import Prueba2 from './components/basicos/Prueba2Ternarios';
import Prueba from './components/basicos/Prueba';
import Primeiro from './components/basicos/Primeiro';
import Comparametros from './components/basicos/ComParametros';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMiembro from './components/basicos/FamiliaMiembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProductos from './components/repeticao/TabelaProductos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';



export default _ =>

    <div className="Apps">
        <h1>Fundamentos React</h1>
        
        <div className="Cards">

        <Card Titulo="Componente Controlado (Input)" color="#851e3e">
        <Input></Input>
        </Card>

        <Card Titulo="#10 Comunicacao inDireta" color="#6497b1 ">
        <IndiretaPai/>
        </Card>

        <Card Titulo="#9 Comunicacao Direta" color="#f4b6c2 ">
        <DiretaPai/>
        </Card>

        <Card Titulo="#8.5 Usuario info" color="#3446FF">
                <UsuarioInfo usuario={{nome: 'Fernando'}}/>
                <UsuarioInfo usuario={{email: 'fer@gmail.com', nome: 'Pedro'}}/>
                <UsuarioInfo usuario={{}}/>

            </Card>

            <Card Titulo="#8. Renderizacao Condicional" color="#33C6FF">
                <ParOuImpar nx = {5}> </ParOuImpar>
            </Card>

            <Card Titulo="#7. Desafio Repeticao" color="#3399FF">
                <TabelaProductos />
            </Card>


            <Card Titulo="#6. Repeticao" color="#3355FF">
                <ListaAlunos />
            </Card>

            <Card Titulo="#5. Componente com filhos" color="#000080">
                <Familia sobrenome="Silva">

                    <FamiliaMiembro nome="Pedro" />
                    <FamiliaMiembro nome="Ana" />
                    <FamiliaMiembro nome="Gustavo" />

                </Familia>
            </Card>

            <Card Titulo="#4. Desafio Aleatorio" color="#008000">
                <Aleatorio min={1} max={100} />
            </Card>

            <Card Titulo="#3. Fragmento" color="#808000">
                <Fragmento />
            </Card>

            <Card Titulo="#2. Notas" color="#008080">
                <Comparametros
                    Titulo='Situasao do Aluno'
                    nome='Juan' nota={9.5}
                />
            </Card>

            <Card Titulo="#1. Primeiro" color="#00FFFF">
                <Primeiro />
            </Card>

            <Card Titulo="#0. Prueba" color="#00FFFF">
                <Prueba />
            </Card>

            <Card Titulo="#01. Prueba2" color="#00FFFF">
                <Prueba2 />
            </Card>

            <Card Titulo="#02. Google Charts" color="#008000">
                <Gcharts />
            </Card>

        </div>

    </div>

