import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={`py-5 text-center ${styles.hero}`}>
      <div className="container">
        <h1 className="display-4 fw-bold">Hi, I'm Vishwanath</h1>
        <p className="lead">Frontend Developer & Designer</p>
        <a href="#projects" className="btn btn-primary btn-lg mt-3">View My Work</a>
      </div>
    </section>
  );
}