import React, {useState} from 'react';
import '../stylesheets/TaskForm.css';
import {v4 as uuidv4} from 'uuid';

function TaskForm(props) {
  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);    
  }

  const manejarEnvio = e => {
    e.preventDefault();
    e.target.reset();

  const tareaNueva = {
    id: uuidv4(),
    texto: input,
    completada: false
  }
    props.onSubmit(tareaNueva);
  }

  return (
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Escriba su tarea'
        name='texto'
        onChange={manejarCambio}        
      />
      <button className='tarea-boton'>Agregar tarea</button>
    </form>
  )
}

export default TaskForm;