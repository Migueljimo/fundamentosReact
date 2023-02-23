import React from "react"

export default function Js() {
    const msg = 'Como vai'
    const regresaTrue = ()=>{
        console.log("true");
        return true;
    }

    console.warn("not o la negacion");
    console.log(!true);
    console.log(!false);
    console.log(!regresaTrue());
    return (
        <div>
            <h2>Ola</h2>
            <p>Como vai?</p>
        </div>

    )
}