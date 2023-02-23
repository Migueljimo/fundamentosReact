import React from 'react';

export default function ComParametro(params) {
    const op2 = params.Titulo
    const status = params.nota >= 7 ? 'Aprovado' : 'Recuperacao'
    const notaInt = Math.ceil(params.nota)
    return (
        <div>
            <h2>{op2}</h2>
            <p>
                <strong> {params.nome} </strong> tem nota de:
                <strong> {params.nota} </strong>(se redondea a {notaInt}) e esta
                <strong> {status} </strong>
            </p>
        </div>
    )
}