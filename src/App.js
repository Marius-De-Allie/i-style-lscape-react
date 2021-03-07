import { useState } from 'react';
import { Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPages';
import GalleryPage from './pages/GalleryPage';
import Nav from './components/Nav';
import './App.css';

function App() {
  // component state.
  const [showDetails, setShowDetails] = useState(undefined);

  // Declare function to handle service click on homepage.
  const handleServiceClick = (serviceName) => {
    // set showDetails state to service clicked on.
    setShowDetails(serviceName);
  };

  return console.log(showDetails) || (
    <div className="App">
      <Nav />
      <Switch>
        <Route 
          path="/" 
          exact 
          render={() => <HomePage handleServiceClick={handleServiceClick}/>} 
        />
        <Route 
          path="/services" 
          render={() => <ServicesPage showDetails={showDetails} />} 
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
