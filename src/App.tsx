import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import { Login } from './pages/login';
import { Home } from './pages/home';
import { Provider } from 'react-redux';
import { store } from './pages/store';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>

      <Router>
        <Routes>
          <Route path= "/login" element= {<Login />} />
          <Route path= "/contact" element= {<Home />} />
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
