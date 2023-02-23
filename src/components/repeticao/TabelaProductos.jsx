import React from "react";
import productos from "../Data/productos";
import './TabelaProductos.css';


export default (props) => {

    // const listaP = productos.map((prod)=>{
    //     return <li key={prod.id}>
    //         {prod.id} {prod.nomeProducto} - {prod.preco}
    //     </li>
    // })


    // return (
    // <div>
    //     <ul>
    //     {listaP}
    //     </ul>
    // </div>
    // )
    function getLineas() {
        return productos.map((producto, i)=> {
            return  (
                <tr key={i} className={i%2 ===0 ? 'Par': 'Impar'}>
                        <td>{producto.id}</td>
                        <td>{producto.nomeProducto}</td>
                        <td>{producto.preco.toFixed(2).replace(".",",")} B$</td>
                    </tr>
            )
        })
    }

    return (
        <div className="TabelaProductos">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nomeProducto</th>
                        <th>preco</th>
                    </tr>
                </thead>

                <tbody>
                    {getLineas()}
                </tbody>
            </table>
        </div>
    )
}



