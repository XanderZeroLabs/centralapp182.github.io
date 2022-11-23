import React from 'react';
import constants from '../../core/js/constants';

function Pasos() {
  return (
    <section className="feature-section-2 pt-65">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-5 col-lg-6 order-last order-lg-first">
            <div className="feature-content-wrapper">
              <div className="section-title mb-50">
                <h1>Inicia todo con 4 simples pasos</h1>
              </div>
              <div className="single-feature">
                <div className="icon-style feature-icon -rotate-90">
                  <i className="lni lni-users"></i>
                </div>
                <div className="content">
                  <h4>Crea tu Cuenta</h4>
                  <p>
                    Crea tu cuenta, completa tu información personal como nombres, apellidos, email y numero celular.
                  </p>
                </div>
              </div>
              <div className="single-feature">
                <div className="icon-style feature-icon">
                  <i className="lni lni-bolt"></i>
                </div>
                <div className="content">
                  <h4>Elige uno de nuestros planes</h4>
                  <p>
                    Elige y paga por tu plan con USDT o deposito bancario.
                  </p>
                </div>
              </div>
              <div className="single-feature">
                <div className="icon-style feature-icon">
                  <i className="lni lni-money-protection"></i>
                </div>
                <div className="content">
                  <h4>Elige un Broker</h4>
                  <p>
                    Nuestra seleccion galardonada es para ti, tienes otro pues claro que puedes elegirlo.
                  </p>
                </div>
              </div>
              <div className="single-feature">
                <div className="icon-style feature-icon -rotate-90">
                  <i className="lni lni-crown"></i>
                </div>
                <div className="content">
                  <h4>Configuración simple</h4>
                  <p>
                    Vinculamos tu cuenta con la operativa de nuestra cuenta maestra y listo a ganar.  
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6 offset-xxl-1">
            <div className="feature-image-2">
              <img src="assets/img/features/feature-2.svg" alt="feature" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pasos;