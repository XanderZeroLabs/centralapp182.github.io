import React from 'react';
import constants from '../../core/js/constants';

function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-10 align-self-center">
            <div className="hero-content">
              <span>Sumar, sumar y seguir sumando</span>
              {/* <span>Tu trabajo es </span> */}
              <h1>Copy trade <span>Recargado</span></h1>
              {/* <h1>Vernos <span>Trabajar</span></h1> */}
              <p>
              Una plataforma diseñada para darle una ventaja en el mundo del trading.
              </p>

              <div className="download-buttons">
                {/* <ul className="d-flex">
                  <li>
                    <a href="#0" className="me-1"
                      ><img src="assets/img/hero/download-1.svg" alt=""
                    /></a>
                  </li>
                  <li>
                    <a href="#0"
                      ><img src="assets/img/hero/download-2.svg" alt=""
                    /></a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 align-self-end">
            <div className="hero-image text-lg-end">
              <img src="assets/img/hero/hero-image.png" alt="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
