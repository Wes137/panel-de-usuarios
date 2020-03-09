import React, {Component} from 'react';
import Header from './components/header/header-component';
import Panel from './components/panel/panel-container-component';
import CardContainer from './components/Contenedor de tarjetas de usuario/card-container-component'
import { Container } from '@material-ui/core';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      personas: [],
      respaldoPersonas: []
    }
  }

  agregarTarjeta = () => {
    let personasModificadas = this.state.personas;
    personasModificadas.push({
      "id": 1,
      "name": this.state.nombre,
      "username": "Bret",
      "email": "Sincere@april.biz",    
    });
    this.setState({personas: personasModificadas});
    this.setState({respaldoPersonas: personasModificadas});
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(arreglo => {
      this.setState({personas : arreglo});
      this.setState({respaldoPersonas : arreglo});
      })
  }

  obtenerPersona = (event) => {
    this.setState({nombre: event.target.value});
  }

  listaPersonas = (event) => {
   //Crear una variable para guardar todas las personas que actualmente están en la aplicación
    // Y para así poder trabajar sobre ese arreglo
    let respaldoPersonas = this.state.respaldoPersonas;    
    //Voy a filtrar el arreglo para que me regresen las personas que cumplan con la expresión 
    // persona.name.includes(event.target.value)
    let arregloPersonasModificadas = respaldoPersonas.filter( 
      persona => persona.name.includes(event.target.value)
    );
    //En este punto voy a actualizar el estado por el arreglo de personas filtradas
    this.setState({personas: arregloPersonasModificadas})
  }
  
  borrarPersona = (event, id) => {
    let personasActualiza = this.state.personas.filter(personas => personas.id !== id);
    this.setState({personas: personasActualiza});
    
  }

  render(){
    return (
      <Container maxWidth="lg">
          <Header
            empresa = "Academlo" 
            titulo = "Panel de Usuarios"
            sesion = "Iniciar Sesión"
          />
          <Panel
            funcionAgregar={this.agregarTarjeta}
            funcionObtenerPersona={this.obtenerPersona}
            funcionBuscar={this.listaPersonas}
          />
          <CardContainer
              personas={this.state.personas}
              funcionBorrarPersona={this.borrarPersona}
          />
      </Container>
    );
  }
}

export default App;
