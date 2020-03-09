import React from 'react';
import AddUser from '../Agregar usuario/add-user-component';
import SearchUser from '../Busqueda de usuario/search-user-component';
import './panel-container-style.css';

export default function panel(props){
    return(
       <div className="panel-container">
            <AddUser 
                funcionAgregar={props.funcionAgregar}
                funcionObtenerPersona={props.funcionObtenerPersona}
            />
            <SearchUser 
                funcionBuscar={props.funcionBuscar}
            />
        </div>  
    );
}