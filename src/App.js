import React from 'react';
import { useState } from "react";
import "./app.css";
//import Main from "./components/main/Main";
import Navbar from "./components/navbar/navbar";
//import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
    </div>
  );
};

export default App;