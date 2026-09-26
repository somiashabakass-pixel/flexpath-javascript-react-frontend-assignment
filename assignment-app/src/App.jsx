import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    //BroserRouter enable routing in the app
    <BrowserRouter>
      {/* Navbar is on every page */}
      <Navbar />
      {/*Bootstrap container for spacing*/}

      <div className="container mt-4">
        {/*Where I define all my routes*/}
        <Routes>
          {/*Home page*/}
          <Route path="/" element={<Home />} />
          {/*Search page*/}
          <Route path="/search" element={<Search />} />
          {/*Catch all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
