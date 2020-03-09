import React from 'react';
import Button from '@material-ui/core/Button';
import './header-style.css';

function Header(props){
    return(
        <header>
            <p>{props.empresa}</p>
            <h1>{props.titulo}</h1>
            <Button variant="outlined">{props.sesion}</Button>
        </header>
    );
};

export default Header;