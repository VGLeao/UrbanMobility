import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Mappage';
import Hero from './Components/Hero';
import NavigationBar from './Components/NavigationBar'

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Hero></Hero>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-12 mx-auto text-left">
            <h3 className="text-center mb-3">Lorem Ipsum</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          <div className="col-lg-3 col-sm-12 mx-auto text-left">
            <h3 className="text-center mb-3">Lorem Ipsum</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          <div className="col-lg-3 col-sm-12 mx-auto text-left">
            <h3 className="text-center mb-3">Lorem Ipsum</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
