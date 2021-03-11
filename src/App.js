import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AiOutlinePhone } from 'react-icons/ai';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPages';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App() {
  
  return (
    <div className="App"> 
      <div className="full-bar">
        <div className="contact-bar">
          <div className="num-container">
            <AiOutlinePhone />
            <p>905-555-5555</p>
          </div>
          <div className="icons">
            <a href="https://www.facebook.com">
              <FaFacebook style={{marginRight: '10px', cursor: 'pointer'}} />
            </a>
            <a href="https://www.facebook.com">
              <FaInstagram style={{cursor: 'pointer'}} />
            </a>
          </div>
        </div>
      </div>
      <Nav />
      <Switch>
        <Route 
          path="/" 
          exact 
          render={() => <HomePage />} 
        />
        <Route 
          path="/services" 
          render={() => <ServicesPage />} 
        />
        <Route 
          path="/gallery" 
          component={GalleryPage} 
        />
        <Route 
          path="/contact"
          component={ContactPage}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
