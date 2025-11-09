import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6">
            <h2 className="fw-bold">Why EZ Labs</h2>
            <p className="text-muted">
              We focus on reliable, fast development and production-ready
              integrations. This sample recreates the Figma home page and
              includes a working contact form with front-end validation.
            </p>
            <ul>
              <li>Responsive layout (mobile-first)</li>
              <li>Bootstrap utilities for quick styling</li>
              <li>Accessible form controls</li>
            </ul>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6">
                <div className="card h-100 p-3">
                  <h5 className="mb-1">Fast</h5>
                  <p className="small text-muted mb-0">
                    Vite + React for speedy dev loop.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="card h-100 p-3">
                  <h5 className="mb-1">Reliable</h5>
                  <p className="small text-muted mb-0">
                    Form posted to real API endpoint.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="card h-100 p-3">
                  <h5 className="mb-1">Responsive</h5>
                  <p className="small text-muted mb-0">
                    Looks good on mobile and desktop.
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="card h-100 p-3">
                  <h5 className="mb-1">Accessible</h5>
                  <p className="small text-muted mb-0">
                    Keyboard friendly and semantic HTML.
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
