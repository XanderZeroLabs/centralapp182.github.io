import React from 'react';
import constants from '../../core/js/constants';

function Header() {
  return (
    <header className="header">
      <div className="navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="index.html">
                  <img src="assets/img/logo/logo.svg" alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </button>
                                  
                <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                  <ul id="nav" className="navbar-nav me-auto">
                    <li className="nav-item">
                      <a className="page-scroll active" href="#home">Inicio</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#features">Features</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#about">Nosotros</a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#how">Nuestro Trabajo</a>
                    </li>										
                    {/* <li className="nav-item">
                      <a className="page-scroll" href="#testimonials">Testimonials</a>
                    </li> */}
                  </ul>
                </div>
                <div className="header-btn">
                  <ul className="d-flex align-items-center justify-content-end">
                    <li>
                      <a href="ingresa" >INGRESA</a>
                    </li>
                    <li>
                      {/* <a href="ingresa" className="page-scroll main-btn btn-hover">Ingresa</a> */}
                      <a href={constants.registerLink} className="page-scroll main-btn btn-hover">Registrate</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
    );
  }
  
  export default Header;