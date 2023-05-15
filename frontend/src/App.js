import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import List from "./Shop";
import { Register } from "./forms/register";
import { Login } from "./forms/login";
import LandingPage from "./LandingPage";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}>
            <Route index element={<NavBar/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="todo" element={<List/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
