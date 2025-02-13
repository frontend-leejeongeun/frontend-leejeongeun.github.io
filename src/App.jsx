import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoVanilla from "./pages/TodoVanilla";
import TodoReact from "./pages/TodoReact";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todovanilla" element={<TodoVanilla />} />
        <Route path="/todoreact" element={<TodoReact />} />
      </Routes>
    </Router>
  );
}

export default App;
