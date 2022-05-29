function LisDelete({notes, deleteElem, returnActive}){
    const result = notes.map( note => {
        return <li id={note.id} key={note.id}>
            <span className="textLi">{note.value}</span>
            <span>
                <button className="blockButton" onClick={ () => { returnActive(note.id) } }>вернуть</button>
                <button className="blockButtonRed"
                 onClick={ () => deleteElem( notes.filter( item => item.id !== note.id ) ) }>удалить на всегда</button>
            </span>
            </li>
    } )
    return <ul>    
        {result}
    </ul>
}

export default LisDelete;