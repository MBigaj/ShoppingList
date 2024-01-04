import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Items from './components/Items';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route exact path='/' element={ <Homepage/> } />
            <Route exact path='/items' element={ <Items/> } />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;