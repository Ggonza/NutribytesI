import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfesorComponent from "./components/profesor/profesorComponent";
import Login from "./components/login";

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/ruta-profesor" element={<ProfesorComponent />} />
    </Routes>
  </Router>
);

export default App;
