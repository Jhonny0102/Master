import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ServicioCustomers from './components/ServiceCustomers';
import BuscadorCustomer from './components/BuscadorCustomer';
import ServiceCoches from './components/ServiceCoches';
import DepartamentoEmpleados from './components/DepartamentoEmpleados';
import EmpleadosOficios from './components/EmpleadosOficios';
import Departamentos from './components/MaestroDetalle/Departamentos';
import Router from './components/Router';
import MenuRutasCollatz from './components/RutaCollatz/MenuRutasCollatz';

// Importar estos 4 componentes siempre para bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
