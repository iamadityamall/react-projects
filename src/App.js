import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Concepts from "./pages/Concepts";
import ErrorPage from "./pages/ErrorPage";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#F5F5F5";
    document.title = "react-projects";
  }, [])
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="projects" element={<Projects />} />
          <Route path="concepts" element={<Concepts />} />
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
