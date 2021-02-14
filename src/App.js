import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPages';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
     <HomePage />
     {false && <ServicesPage />}
    </div>
  );
}

export default App;
