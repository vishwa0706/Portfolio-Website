import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm ${styles.header}`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">Vishwanath</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}