import React from 'react';
import project1 from '../../assets/project1.png'; // Make sure this file exists
import project2 from '../../assets/project2.png'; // Add this
import project3 from '../../assets/project3.png'; // Add this

export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row g-4">
          {/* Project 1 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={project1} className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">E-commerce Store</h5>
                <p className="card-text">Developed a full-stack e-commerce application with secure payments.</p>
                <a href="https://your-ecommerce-link.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">View</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={project2} className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Portfolio Website</h5>
                <p className="card-text">A responsive portfolio site showcasing my design and development skills.</p>
                <a href="https://your-portfolio-link.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">View</a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img src={project3} className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">Task Management App</h5>
                <p className="card-text">A simple task management application built with React and a local storage API.</p>
                <a href="https://your-taskapp-link.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">View</a>
              </div>
            </div>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  );
}