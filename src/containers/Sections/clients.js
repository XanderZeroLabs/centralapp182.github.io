import React from 'react';
import constants from '../../core/js/constants';

function Clients() {
  return (  
    <section className="clients-section">
      <div className="container">
        <div className="clients-logo-active-wrapper">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="section-title text-center">
                <span> Trusted by </span>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-8 col-md-11">
              <div className="clients-logo-active">
                <div className="single-client text-center">
                  <img src="assets/img/clients/client-1.svg" alt="client" />
                </div>
                <div className="single-client text-center">
                  <img src="assets/img/clients/client-2.svg" alt="client" />
                </div>
                <div className="single-client text-center">
                  <img src="assets/img/clients/client-3.svg" alt="client" />
                </div>
                <div className="single-client text-center">
                  <img src="assets/img/clients/client-4.svg" alt="client" />
                </div>
                <div className="single-client text-center">
                  <img src="assets/img/clients/client-5.svg" alt="client" />
                </div>
                <div className="single-client text-center">
                  <img src="assets/img/clients/client-4.svg" alt="client" />
                </div>
                <div className="single-client text-center">
                  <img src="assets/img/clients/client-2.svg" alt="client" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
