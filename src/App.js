import React,{useState,useContext, useEffect} from 'react';
import './App.css';
import Home from "./Pages/Home"
import SignupPage from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";
import {BrowserRouter as Router, Route} from "react-router-dom"
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
import "firebase/firestore";
import Post from './store/PostContext';

function App() {
  var {setUser}=useContext(AuthContext);
  const firebase=useContext(FirebaseContext);
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  });
  return (
    <div>
      <Post>
      <Router>
          <Route exact path="/" component={Home}></Route>
          <Route path="/signup" component={SignupPage}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/create" component={Create}></Route>
          <Route path='/view' component={View}></Route>
      </Router>
      </Post>
    </div>
  );
}

export default App;
