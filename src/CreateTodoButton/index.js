import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton() {
    const onClickButton = (msg) => {
        alert(msg)
    }
    return( <button 
    className="CreateButton"
    onClick={()=> onClickButton('Click')}>

    </button>)
}

export {CreateTodoButton};