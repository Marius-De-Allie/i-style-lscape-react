import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPages';
import './App.css';

function App() {
  return (
    <div className="App">
     <HomePage />
     {false && <ServicesPage />}
    </div>
  );
}

export default App;
