import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Mensaje from './components/mensaje';

function App() {

  const [nombre, setNombre] = useState('Alejandro');


  return (
    <div className='container'>
      <div className="form-group">
        <label for="name">Nombre</label>
        <input type="text"
          class="form-control" name="name" id="name" aria-describedby="helpId" placeholder="Introduce tu nombre" onChange={(e) => setNombre(e.target.value)} />
      </div>
      <Mensaje texto={nombre} />
    </div>
  );
}

export default App;
