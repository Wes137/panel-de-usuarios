import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function SearchUser(props) {
  return (
    <div>      
        <TextField
            id="outlined-search" 
            type="search"  
            variant="outlined" 
            label="Buscar" 
            onChange={ props.funcionBuscar } 
            />
    </div>
  );
}