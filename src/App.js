import { Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPages';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/services" component={ServicesPage} />
      </Switch>
    </div>
  );
}

export default App;
