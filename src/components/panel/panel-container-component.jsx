import React from 'react';
import AddUser from '../Agregar usuario/add-user-component';
import SearchUser from '../Busqueda de usuario/search-user-component';
import './panel-container-style.css';

export default function panel(props){
    return(
       <div className="panel-container">
            <AddUser 
                funcionAgregar={props.funcionAgregar}
                funcionObtenerNombre={props.funcionObtenerNombre}
                funcionObtenerEmail={props.funcionObtenerEmail}
                nombre={props.nombre}
                email={props.email}
                validacion={props.validacion}
                mensajeError={props.mensajeError}
            />
            <SearchUser 
                funcionBuscar={props.funcionBuscar}
            />
        </div>  
    );
}