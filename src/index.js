import React from 'react';
import ReactDOM from 'react-dom';
import App from './App' 
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//serviceWorker.unregister();

const root = document.getElementById("root")

//const element = React.createElement(componente, propiedades, hijos)

//const element = React.createElement("h1", {className:"saludo"}, "Hola Mundo")

ReactDOM.render(<App />, root);