import React from "react";
import './TodoItem.css'

function TodoItem(props) {

    return (
        <li className="TodoItem">
            <span className="TodoItem-Check" onClick={props.onComplete}></span>
            <p>{props.text}</p>
            <span className="TodoItem-Close" onClick={props.onDelete}></span>
        </li>)
}

export { TodoItem };