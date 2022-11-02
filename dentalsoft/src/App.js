import './App.css';
//import PacienteForm from './Componentes/PacientesForm';
import PacienteList from './Componentes/PacientesList';

function App() {
  return (
    <h1>
      <div className='container p-4'>
        <div className='row'>
          <PacienteList/>
        </div>    
      </div>
      
    </h1>
  );
}

export default App;
