import React from "react";
import './Card.css';

export default (props) => {

        const cardStyle = {
            backgroundColor: props.color || '#F00',
            borderColor: props.color || '#f00'
        }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Titulo">{props.Titulo}</div>
            <div className="Content">
            {props.children}

            </div>
        </div>
    )
}