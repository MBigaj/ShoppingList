import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Items from './components/Items';
import Navbar from './components/Navbar';
import ItemList from './components/ItemList';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar>
          <div className="content">
            <Routes>
              <Route exact path='/' element={ <Homepage/> } />
              <Route exact path='/items' element={ <Items/> } />
              <Route exact path='/list' element={ <ItemList/> } />
            </Routes>
          </div>
        </Navbar>
      </div>
    </Router>
  );
}

export default App;