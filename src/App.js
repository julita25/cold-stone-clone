import React from 'react';
import Header from './components/Header/Header';
import Home from './pages/Home'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact component=/*everytime u go to / it opens the home component*/ 
        {Home }/>
      </Switch>
      
      <Footer/>
     
    </Router>
  );
}

export default App;
