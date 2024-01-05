import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Routes>
              <Route exact path='/' element={ <Homepage/> } />
              <Route exact path='/items' element={ <ItemList/> } />
              <Route exact path='*' element={ <NotFound/> } />
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;