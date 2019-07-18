import React from 'react';
import './App.css';
import Btn from './Btn'
import Menu from './data/menu.json'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {Menu.Desayunos.map(nombre=><Btn name={nombre.name} value={nombre.value}/>)}
      </header>

    </div>
  );
}

export default App;
