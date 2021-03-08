import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPages';
import GalleryPage from './pages/GalleryPage';
import Nav from './components/Nav';
import './App.css';

function App() {
  
  return (
    <div className="App">
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
      </Switch>
    </div>
  );
}

export default App;
