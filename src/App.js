import React,{useState,useContext, useEffect} from 'react';
import './App.css';
import Home from "./Pages/Home"
import SignupPage from "./Pages/Signup";
import Login from "./Pages/Login";
import {BrowserRouter as Router, Route} from "react-router-dom"
import { AuthContext, FirebaseContext } from './store/FirebaseContext';

function App() {
  const {setUser}=useContext(AuthContext);
  const firebase=useContext(FirebaseContext);
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  });
  return (
    <div>
      <Router>
          <Route exact path="/" component={Home}></Route>
          <Route path="/signup" component={SignupPage}></Route>
          <Route path="/login" component={Login}></Route>
      </Router>
    </div>
  );
}

export default App;
