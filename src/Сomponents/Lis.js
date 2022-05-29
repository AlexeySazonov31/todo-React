import React from "react";

function Lis({notes, deleteNote, toggleDone}){
    const result = notes.map( note => {

        return <li id={note.id} key={note.id} className={ note.isDone ? 'done' : '' }>
            <span className="textLi">{note.value}</span>
            <span>
                <button className="blockButton" 
                onClick={ () => toggleDone(note.id) }>{ note.isDone ? 'не сделано' : 'сделано' }</button>
                <button className="blockButtonRed" onClick={ () => deleteNote(note.id) }>удалить</button>
            </span>
            </li>
    } )
    return <ul>    
        {result}
    </ul>
}

export default Lis;