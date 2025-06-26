import React from 'react';
import styles from './Contact.module.css'; // Don't forget to create this file

export default function Contact() {
  return (
    <section id="contact" className={`py-5 ${styles.contactSection}`}>
      <div className="container">
        <h2 className="text-center mb-4">Get in Touch</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="lead text-center mb-5">
              Have a project in mind or just want to say hi? Feel free to reach out!
            </p>
            {/* Option 1: Basic Contact Form */}
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg d-block mx-auto mt-4">Send Message</button>
            </form>

            {/* Option 2: Just Links/Email (if not a form) */}
            {/*
            <div className="text-center">
              <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
              <p>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">yourprofile</a></p>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
}