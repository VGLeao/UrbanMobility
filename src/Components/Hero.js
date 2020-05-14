import React from 'react';
import { Link } from 'react-router-dom';
import '../css/hero.css'

function Hero() {
    return (
        <div className="jumbotron text-left" id="hero">
            <div className="container hero-container">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4"></hr>
                <p className="mb-4">It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <Link to="/Mappage" className="btn btn-success btn-lg mr-4">Ir para o mapa</Link>
                <Link to="/About" className="btn btn-outline-success btn-lg">Saiba Mais</Link>
            </div>
        </div>
)};

export default Hero;