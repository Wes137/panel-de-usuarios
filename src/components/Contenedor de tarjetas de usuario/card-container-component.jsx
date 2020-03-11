import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../Componente de tarjetas de usuario/card-component'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const CardContainer = (props) => {
  const classes = useStyles();
  return(
      <div className={classes.root}>
          <Grid container spacing={3}>                
              {
                  props.personas.map( persona => { 
                      return(                            
                          <Card 
                          key={persona.id}
                          id={persona.id}
                          nombre={persona.name} 
                          email={persona.email}
                          funcionBorrarPersona={props.funcionBorrarPersona}
                          />                            
                      )
                  })
              }
          </Grid>
      </div>
  )
}

export default CardContainer;
