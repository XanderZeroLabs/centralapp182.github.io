import React from 'react';
import constants from '../../core/js/constants';

function Transaction() {
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
                <h1 className="mb-50">Your money is well protected and secured</h1>
              </div>
              <div className="single-feature">
                <div className="icon-style feature-icon -rotate-90">
                  <i className="lni lni-layers"></i>
                </div>
                <div className="content">
                  <h4>Bank-grade Security</h4>
                  <p>
                    Our payment processors are PCIDSS compliant to ensure
                    optimum security of your data.
                  </p>
                </div>
              </div>
              <div className="single-feature">
                <div className="icon-style feature-icon">
                  <i className="lni lni-compass"></i>
                </div>
                <div className="content">
                  <h4>Best Investments</h4>
                  <p>
                    We invest in low risk fixed income securities which include
                    treasury bills and mutual funds.
                  </p>
                </div>
              </div>
              <div className="single-feature">
                <div className="icon-style feature-icon -rotate-90">
                  <i className="lni lni-rocket"></i>
                </div>
                <div className="content">
                  <h4>Under Secure Watch</h4>
                  <p>
                    Invest your savings in low risk financial instruments,
                    registered with the Securities.
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

export default Transaction;