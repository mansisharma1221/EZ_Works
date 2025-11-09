import React from "react";

function ServicesSection() {
  return (
    <section id="services" className="bg-light py-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-4">Our Services</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">Web Development</h5>
                <p className="card-text">
                  Create fast, secure, and mobile-friendly websites using modern frameworks.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">UI/UX Design</h5>
                <p className="card-text">
                  Design intuitive, beautiful, and engaging interfaces for a seamless experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">API Integration</h5>
                <p className="card-text">
                  Connect your app with third-party APIs and automate data-driven processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
