import React from "react";

export default props =>{

    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() *( max - min) + min )
    const gerarNerd = () => Math.random() > 0.5

    return (
        <div>
            <div>Filho</div>
            <button onClick={
                function (e){
                    props.quandoClicar('Joao', gerarIdade(), gerarNerd())
                }
               // e=>  props.quandoClicar('Joao', 53, true)
            }>
                Fornecer Informacoes
                </button>
            
        </div>
    )
}