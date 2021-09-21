import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/Home/Home'


function App() {
  return (
    <Router>
      
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      
    </Router>
  );
}

export default App;
