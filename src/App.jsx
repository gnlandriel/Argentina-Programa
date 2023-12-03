import './App.css';
import argentinaLogo from './imagenes/Argentinap2.png';
import TaskList from './componentes/TaskList';

function App() {
  return (
    <div className="App">         
      <div className='tareas-logo-contenedor'>
        <img 
          src={argentinaLogo} 
          className='tareas-logo' 
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Lista de Tareas</h1>
        <TaskList />
      </div>
    </div>
   
  );
}

export default App;
