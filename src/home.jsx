import React, { Component } from 'react';
import api from '../service/api';
import Body from './body'
import { Card } from 'react-bootstrap';

class Home extends Component {
 
  state = {dados: []}




async componentDidMount() {
  const response = await api.get("?page=1")
  
  
  .then(response => {
    let resp = JSON.stringify(response)
    this.setState({dados: response.data.data})

});

}

render () {

  const { dados } = this.state;

  return (
  <div>
   <div class="jumbotron text-center">
   <h1>Usuarios cadastrados</h1>
   </div>
   
   <Body>
   
    {dados.map(dados => (
      
      <div key={dados.name}>
        
      <div class="card" style={{ width: '18rem'}}>
        <h2>
          <strong>Usuário: </strong>
          {dados.name}
        </h2>
        <p>
         Email:<br/>
          {dados.email}<br/>
          Genero:&ensp;
          {dados.gender}<br/>
          Status:&ensp;
          {dados.status}
        </p>
       </div><br/>
      </div>
    ))}</Body><div><p>footer</p></div>
  </div>);
  

}
}

export default Home;