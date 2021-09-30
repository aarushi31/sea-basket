import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import Category from './components/Category/Category';
import Product from './components/Products/Product';
import Cart from './components/Cart/Cart';
import Register from './components/Login/Register';
import Login from './components/Login/Login';
import React, { useEffect } from 'react'
import Profile from './components/Profile/Profile'
import { useDispatch } from 'react-redux';
import {login} from './features/userSlice'
import About from './components/About/About';


//export const UserContext=createContext();

function App() {
  const dispatch=useDispatch();
  

  useEffect(()=>{
    dispatch(login({
      email:localStorage.getItem('email'),
      customer_id:localStorage.getItem('customer_id'),
      loggedIn:localStorage.getItem('loggedIn')
    }))
  },[])


  return (
    
    <Router>
      
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/category" component={Category}/>
        <Route path="/product/:product_id" component={Product}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/aboutus" component={About}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        <Route path="/editprofile" component={Profile}/>
        
      </Switch>
      
    </Router>
  );
}

export default App;
