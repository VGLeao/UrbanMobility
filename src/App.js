import React from 'react';
import './App.css';
import './css/hero.css'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Mappage';

function App() {
  return (
    <div className="App">
      <div className="jumbotron text-left" id="hero">
        <div className="container">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-4"></hr>
          <p className="mb-4">It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <Link to="/Mappage" className="btn btn-success btn-lg mr-4">Ir para o mapa</Link>
          <Link to="/About" className="btn btn-outline-success btn-lg">Saiba Mais</Link>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3 mx-auto text-justify">
            <h3 className="text-center mb-3">Lorem Ipsum</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </div>
          <div className="col-3 mx-auto text-justify">
            <h3 className="text-center mb-3">Lorem Ipsum</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </div>
          <div className="col-3 mx-auto text-justify">
            <h3 className="text-center mb-3">Lorem Ipsum</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>

      <Link to="/About">Ir para a página sobre</Link>
    </div>
  );
}

export default App;
