import {useState} from 'react';

import reactUuid from 'react-uuid';

import Lis from './Lis';
import LisDelete from './LisDelete';

function id(){
    return reactUuid();
}

function TodoList(){

    const [ notes, setNotes ] = useState( [] );
    const [ deleteElement, setDeleteElement ] = useState( [] );
    const [ value, setValue ] = useState( '1' );
    const [ inputValue, setInputValue ] = useState('');

    function addNote(){
        if( inputValue.length > 0 ){
            let note = { id: id(), value: 'case', isDone: false, isEdit: false };
            note.value = inputValue;
            setNotes( [ ...notes, note ] );
            setInputValue('');
        } else {
            alert('заполните поле!');
        }
    }

    function deleteNote(id){
        let copy = Object.assign( [],notes );
        for( let obj of copy ){
            if( obj.id === id ){
                setDeleteElement( [obj, ...deleteElement] );
            }
        }
        setNotes(notes.filter(note => note.id !== id));
    }

    function toggleDone(id){
        setNotes( notes.map( note => {
            if( note.id === id ){
                return {...note, isDone: !note.isDone};
            } else {
                return note;
            }
        } ) )
    }

    function returnActive(id){
        let copyObj = deleteElement.find( note => note.id === id );
        setNotes( [...notes, copyObj] );
        setDeleteElement(deleteElement.filter(note => note.id !== id));
    }

    let element;
    if( value === '1' ){
        element = <Lis notes={notes} deleteNote={deleteNote} toggleDone={toggleDone}/>
    } else if( value === '2' ){
        element = <LisDelete notes={deleteElement} deleteElem={setDeleteElement} returnActive={returnActive} />
    } 

    return <div className='parent'>
        <h3>Todo List</h3>
        <div className='blockInp'>
          <div className='input'>
              { 
              value === '1' 
              ? <input placeholder='Запишите дело' value={inputValue} onChange={ event => setInputValue( event.target.value ) } /> 
              : <input disabled/>
              }
              <br/>
              { 
              value === '1' 
              ? <button className='add' onClick={ addNote }>Дабавить</button> 
              : <button className='addDisabled' disabled>Дабавить</button> 
              }
          </div>
          <select value={value} onChange={ (event) => {setValue(event.target.value)} } >
            <option value='1'>активные</option>
            <option value='2'>удалённые</option>
          </select>        
        </div>

        {element}
    </div>
}

export default TodoList;