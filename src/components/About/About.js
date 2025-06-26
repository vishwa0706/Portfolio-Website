import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img src="https://placehold.co/300x300" alt="Profile" className="img-fluid rounded-3 shadow" />
          </div>
          <div className="col-md-6">
            <h2>About Me</h2>
            <p>
              Passionate about building beautiful and functional web experiences. Skilled in HTML, CSS, JavaScript, and React.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}