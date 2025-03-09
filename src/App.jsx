import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoVanilla from "./pages/TodoVanilla";
import TodoReact from "./pages/TodoReact";
import Community from "./pages/Community";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todovanilla" element={<TodoVanilla />} />
        <Route path="/todoreact" element={<TodoReact />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;
