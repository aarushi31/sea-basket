import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/Home/Home'


function App() {
  return (
    <Router>
      
      <Navbar/>
      <Home/>
      
    </Router>
  );
}

export default App;
