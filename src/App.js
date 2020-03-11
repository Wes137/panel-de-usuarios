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
      nombre: "",
      email: "",
      buscarPersona: "",
      respaldoPersonas: [],
      camposValidos: false,
      mensajeError: ""
    }
  }

  agregarTarjeta = () => {

    if(this.state.nombre.length > 0 && this.state.email.length > 0){
      let personasModificadas = this.state.personas;
      let arregloIndices = this.state.personas.map( persona => persona.id);
      let indice = arregloIndices[arregloIndices.length-1] + 1; 
      
      personasModificadas.push({
        "id": indice,
        "name": this.state.nombre,
        "username": "Bret",
        "email": this.state.email,    
      });
  
      //Agregar los nuevos estados
      this.setState({personas: personasModificadas});
      this.setState({respaldoPersonas: personasModificadas});   
      
      //Quitar el valor actual para los dos componentes de texto
      this.setState({nombre: ""});
      this.setState({email: ""});
    }else{
      alert("Hay campos vacios");
      this.setState({camposValidos: true});
      this.setState({mensajeError: "Completa este campo"});
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(arreglo => {
      this.setState({personas : arreglo});
      this.setState({respaldoPersonas : arreglo});
      })
  }

  obtenerNombre = (event) => {    
    this.setState({nombre: event.target.value});
    if(event.target.value.length > 0){
      this.setState({camposValidos: false});
      this.setState({mensajeError: ""});
    }else{
      this.setState({camposValidos: true});
    }
  }

  obtenerEmail = (event) => {    
    this.setState({email: event.target.value});
    if(event.target.value.length > 0){
      this.setState({camposValidos: false});
      this.setState({mensajeError: ""});
    }else{
      this.setState({camposValidos: true});
    }
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
    let getPersonaIndex = this.state.personas.map( persona => persona.id );
    getPersonaIndex = getPersonaIndex.indexOf(id);
    let arregloPersonas = this.state.personas;
    arregloPersonas.splice(getPersonaIndex, 1);
    this.setState({personas: arregloPersonas});
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
            funcionObtenerNombre={this.obtenerNombre}
            funcionObtenerEmail={this.obtenerEmail}
            funcionBuscar={this.listaPersonas}
            nombre={this.state.nombre}
            email={this.state.email}
            validacion={this.state.camposValidos}
            mensajeError={this.state.mensajeError}
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
