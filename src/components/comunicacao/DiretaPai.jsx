import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props =>{
    return (
        <div>
            <DiretaFilho nome='Junior' edad={20} nerd = {true}/>
            <DiretaFilho nome='Lucas' edad={17} nerd = {false}/>
        </div>
    )
}