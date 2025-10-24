/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<HomePage/>}/>
        <Route path="/login" element={<HomePage/>}/>
        <Route path="/settings" element={<HomePage/>}/>
        <Route path="/profile" element={<HomePage/>}/>
      </Routes>
    </div>
  );
};

export default App;
