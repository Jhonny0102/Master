import React, { Component } from 'react'
//Importamos en Router todos los componentes con los que vayamos a interactuar, en
//este caso Home que lo usaremos para mostrar al inicio, Menu que interactuaremos 
//para llamar a otros componentes y Doctores para enviarle el parametro.
import { BrowserRouter, Routes , Route, useParams } from 'react-router-dom'
import Home from './P-1-HospitalesDoctores/Home'
import Menu from './P-1-HospitalesDoctores/Menu'
import Doctores from './P-1-HospitalesDoctores/Doctores'

export default class Router extends Component {
  render() {
    //Funcion para capturar el parametro y enviarlo al componente Doctores.
    function CapturarIdHospital (){

        var {idhospital} = useParams();

        return <Doctores id={idhospital} />
    }

    return (
      <BrowserRouter>
      <Menu/>
        <Routes>
            <Route path='/' element={<Home/>} />
            {/* En el path indicamos la ruta, en esto podemos medio poner lo que queramos pero algo coherente.
             Ademas como en esta ruta queremos mandarle un parametro le indicamos la funcion que utilizara, 
             en este caso lo tenemos arriba.*/}
            <Route path='/hospital/:idhospital' element={<CapturarIdHospital/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}
