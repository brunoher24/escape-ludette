import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Level1 from './pages/Level1';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Level1}></Route>
      </Routes>
    </div>
  );
}

export default App;
