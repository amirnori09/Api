import React from "react";
import "./App.css";
import Main from "./main/Main";
import Login from './sign/Login.jsx';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Cookies from "js-cookie";


function App() {
  const isAuthenticated = Cookies.get('login2'); 

  return (
    <Router>
        <Routes>
        <Route
          exact
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login />}
        />
          <Route exact path="/" element={<Main/>}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
    </Router>
  );
}

export default App;
