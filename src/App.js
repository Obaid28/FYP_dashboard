import {useState} from 'react';
import React from "react";
import "./styles.css";

const App = () => {

  const[sidebarOpen , setSidebarOpen] = useState(false);

      const openSidebar = () =>{
        setSidebarOpen(true);
      }

      const closeSidebar = () =>{
        setSidebarOpen(true);
      }

      return(
        <div className = "container">
          <h1>React</h1>
          </div>
      );

}

export default App;
