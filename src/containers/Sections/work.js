import React from 'react';
import constants from '../../core/js/constants';

function Work() {
  return (
    <section id="features" className="work-process-section pt-100 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-50">
              <h1>A fresh approach to customer with financial freedom</h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8">
            <div className="single-process">
              <div className="icon-style -rotate-180">
                <i className="lni lni-invention"></i>
              </div>
              <div className="content">
                <h3>Plan Money</h3>
                <p>
                  The future can be even brighter but a goal without a plan is
                  just a wish. Use our tools to plan ahead.
                </p>
                <a href="#0">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            <div className="single-process">
              <div className="icon-style -rotate-90">
                <i className="lni lni-money-protection"></i>
              </div>
              <div className="content">
                <h3>Save Money</h3>
                <p>
                  With a whooping 10-15% interest rate per annum, grow your
                  savings on your own terms with our process & plans.
                </p>
                <a href="#0">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            <div className="single-process">
              <div className="icon-style">
                <i className="lni lni-investment"></i>
              </div>
              <div className="content">
                <h3>Invest Money</h3>
                <p>
                  Invest in mutual funds tailored to you and your financial
                  position, and watch the returns keep rolling in.
                </p>
                <a href="#0">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;