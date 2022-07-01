import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Container} from "reactstrap";

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import Error from './components/pages/Error';
import AddUsers from "./components/users/addUsers";


function App() {
  return (
    <Router>
      <Container className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/add-employee" element={<AddUsers/>} />
          <Route element={<Error/>} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
