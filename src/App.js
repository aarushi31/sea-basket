import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import Category from './components/Category/Category';
import Product from './components/Products/Product';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/category" component={Category}/>
        <Route path="/product/:product_id" component={Product}/>
        <Route path="/cart" component={Cart}/>
      </Switch>
    </Router>
  );
}

export default App;
