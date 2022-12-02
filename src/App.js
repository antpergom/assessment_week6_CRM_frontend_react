import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const baseUrlContacts = "http://localhost:8080/api/v1/contacts"

/*
  useState devuelve un objeto con dos parámetros: un atributo y una función para setearlo
  const [opportunities, setOpportunities] = useState();
  // useEfect es para sejecutar algo según la condición del segundo param: func. lambda y condición
  useEffect(() => {

    //Todo esto es asíncrono, hay que ejecutarlo y esperar la repsuesta, comprobando que se ha devuelto algo
    fetch("http://localhost:8080/api/v1/opportunities")

      .then(res => res.json())

      .then(

        (data) => {

          setOpportunities(data);

        }
      );
  }, [])
  
  */


function ContactRow({ cont }){

  const IdMod = cont.cliente ? cont.Id : <span style={{color:'red'}}> {cont.Id} </span>

  return(
    <tr>
      <td>IdMod</td>
      <td>cont.lastName + ',' + cont.firstName</td>
    </tr>
  );
}

// contacts sería el nombre del props, {contacts} es la propiedad contacts del prop
function ContactTable({contactsIn}){
  const rows = [];

  //const [contacts, setContacts] = useState();

  /*
  useEffect(() => {
    fetch(baseUrlContacts)
    .then(res => res.json())
    .then((data) => {
      setContacts(data);
    });
  }, []);
  */

  /*
  contactsIn.foreach(c => {
      <ContactRow 
      contact={c}
      key={c.Id}
    />
  });
  */

  /*
  contactsIn.(c => {
    
      <ContactRow 
        contact={c}
        key={c.Id}
      />
  
  });
  */

  return(
    <table>
      <thead>
        <th>Identificador</th>
        <th>Nombre</th>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

function App() {
  const filterContacts = [];

  return (

    <div className="App">
      <header className="App-header">
        <ContactTable contacts={filterContacts}/>
      </header>
    </div>
  );

}

export default App;

/*
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <as
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
*/