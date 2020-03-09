import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    button: {
        margin: theme.spacing(1),
        height: 56
    },
}));

  export default function AddUser(props) {
    const classes = useStyles();
  
    return (
        <form className={`form-container ${classes.root}`} noValidate autoComplete="off">
                <TextField 
                  variant="outlined" 
                  label="Agregar" 
                  onChange={ props.funcionObtenerPersona } 
                  />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<AddIcon />}
                    onClick= {props.funcionAgregar}
                    >
                    Agregar
                </Button>
                
        </form>
    );
};