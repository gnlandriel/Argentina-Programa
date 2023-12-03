import React, {useState} from 'react';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import '../stylesheets/TaskList.css';
import { useEffect } from 'react';

function TaskList () {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem('tarea')
    if(data) {
      setTareas(JSON.parse(data)) 
    }
  }, [])

 useEffect(() => {
  localStorage.setItem('tarea', JSON.stringify(tareas))
 }, [tareas])

  const agregarTarea = TaskItem => {
    if (TaskItem.texto.trim()) {
      TaskItem.texto = TaskItem.texto.trim();

      const tareasActualizadas = [TaskItem, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(TaskItem => TaskItem.id !== id);
    setTareas(tareasActualizadas)    
  }

  const completarTarea = id => {    
    const tareasActualizadas = tareas.map(TaskItem => {
      if(TaskItem.id === id) {
        TaskItem.completada = !TaskItem.completada;
        
      }
      return TaskItem;
    });
    setTareas(tareasActualizadas);
  }

  return (
    <>
      <TaskForm onSubmit={agregarTarea} />
      <div className='tarea-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <TaskItem 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>
    </>
  );
}

export default TaskList;