import React from "react";
import '../stylesheets/TaskItem.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiSolidBadgeCheck } from "react-icons/bi";

function TaskItem({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className="tarea-texto">
        {texto}
      </div>
      <div 
        className="tarea-contenedor-iconos" >       
        <BiSolidBadgeCheck className="tarea-icono" onClick={() => completarTarea(id)} />
        <AiOutlineCloseCircle className="tarea-icono" onClick={() => eliminarTarea(id)} />
      </div>
    </div>
  )
}

export default TaskItem;