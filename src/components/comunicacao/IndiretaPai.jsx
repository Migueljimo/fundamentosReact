import React, { useState } from "react";
import IndiretaFilhio from "./IndiretaFilhio";

export default props => {
    // nome idade nerd
    // let nome = '?'
    // let idade = 0
    // let nerd = false

    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false) 

    function fornecerInfomacoes(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)

    }
    return (
        <div>
            <div>
                <spam>{nome} </spam>
                <spam><strong>{idade} </strong></spam>
                <spam>{nerd ? 'Verdadeiro' : 'Falso'}</spam>
            </div>
            <IndiretaFilhio quandoClicar={fornecerInfomacoes}/>
        </div>
    )
}

