import React from 'react';
import constants from '../../core/js/constants';

function Informacion() {
  return (
    <section id="how" className="feature-section-1 pt-65 gray-bg-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="feature-image-1">
              <img src="assets/img/features/feature-3.svg" alt="feature" />
            </div>
          </div>
          <div className="col-xxl-5 col-lg-6 offset-xxl-1">
            <div className="feature-content-wrapper">
              <div className="section-title">
                <h1 className="mb-50">Su dinero siempre en sus propias manos</h1>
              </div>
              <div className="single-feature">
                <div className="icon-style feature-icon -rotate-90">
                  <i className="lni lni-layers"></i>
                </div>
                <div className="content">
                  <h4>Seguridad de Grado Bancario</h4>
                  <p>
                    Transacciones seguras respaldadas por los mejores brokers de la industria.
                  </p>
                </div>
              </div>
              <div className="single-feature">
                <div className="icon-style feature-icon">
                  <i className="lni lni-compass"></i>
                </div>
                <div className="content">
                  <h4>Control Operativo Milimetrico</h4>
                  <p>
                    El mas alto ESTANDAR operativo, con profesionales de talla mundial.
                  </p>
                </div>
              </div>
              <div className="single-feature">
                <div className="icon-style feature-icon -rotate-90">
                  <i className="lni lni-rocket"></i>
                </div>
                <div className="content">
                  <h4>Siempre rentables y seguros</h4>
                  <p>
                    Los mejores instrumentos financieros con el menor riesgo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Informacion;