import React from "react";

export default function HeroSection() {
  return (
    <section className="hero d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-5 fw-bold">Build. Test. Launch.</h1>
            <p className="lead mb-4">
              EZ Labs assignment — responsive home page with contact
              integration. Clean, modern, and accessible.
            </p>
            <div>
              <a href="#contact" className="btn btn-primary btn-lg me-2">
                Contact Us
              </a>
              <a href="#about" className="btn btn-outline-light btn-lg">
                Learn More
              </a>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0 text-center">
            {/* Decorative illustration placeholder. Use an image or svg as needed. */}
            <div className="hero-illustration">
              <svg
                width="320"
                height="220"
                viewBox="0 0 320 220"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Illustration"
              >
                <rect
                  x="0"
                  y="0"
                  width="320"
                  height="220"
                  rx="16"
                  fill="rgba(255,255,255,0.08)"
                />
                <circle cx="60" cy="80" r="36" fill="rgba(255,255,255,0.12)" />
                <rect
                  x="130"
                  y="30"
                  width="150"
                  height="140"
                  rx="12"
                  fill="rgba(255,255,255,0.09)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
