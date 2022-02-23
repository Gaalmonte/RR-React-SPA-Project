import React from 'react';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const Contact = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact me</h1>
      </header>
      <main>
        <div className="container py-4">
          <form id="contactForm">
            <div className="mb-3">
              <label className="form-label" htmlFor="name">Name</label>
              <input className="form-control" id="name" type="text" placeholder="Name" />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="emailAddress">Email Address</label>
              <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea className="form-control" id="message" type="text" placeholder="Message"></textarea>
            </div>

            <div className="d-grid">
              <button className="btn btn-primary btn-lg" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;