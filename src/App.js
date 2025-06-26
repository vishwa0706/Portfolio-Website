// App.js
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact'; // <-- Add this
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact /> {/* <-- Add this */}
      <Footer />
    </>
  );
}

export default App;