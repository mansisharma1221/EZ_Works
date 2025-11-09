import React from "react";

export default function Footer() {
  return (
    <footer className="py-4 bg-white border-top mt-5">
      <div className="container text-center small text-muted">
        © {new Date().getFullYear()} EZ Labs — Built with React + Vite
      </div>
    </footer>
  );
}
