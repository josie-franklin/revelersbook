import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import NavBar from "./components/NavBar";
import Search from "./components/Search/Search";
import Edit from "./components/Edit/Edit";
import ChartContextProvider from "./context/ChartContext";

function App() {
  return (
    <div className="app-container">
      <Router>
        <NavBar />
        <ChartContextProvider>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </ChartContextProvider>
      </Router>
    </div>
  );
}

export default App;
