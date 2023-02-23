import React from "react";
import alunos from "../Data/alunos";

export default props =>{
    // const li1 = (
    //         <li>
    //             {alunos[0].id + 1 +'.'} {alunos[0].nome} -> {alunos[0].nota} 
    //         </li>
    // );

    const list = alunos.map((aluno) =>{
        return <li key={aluno.id}>
            {aluno.id + 1 +'.'} {aluno.nome} - {aluno.nota}
        </li>
    }
    
    );


    return (
        <div>
            <ul style={{listStyle: "none"}}>
                {list}
                 {/* {map((li))}
                <li>Ana - 9.7</li>
                <li>Paul - 8.3</li>
                <li>Juan - 7.8</li> */}
            </ul>
        </div>
    )
}