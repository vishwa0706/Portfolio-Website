import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className="mb-0">&copy; 2025 Vishwanath. All rights reserved.</p>
      </div>
    </footer>
  );
}