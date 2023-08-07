import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Box } from "@chakra-ui/react";
import Topbar from "./components/Toppart/global/topbar2";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidepart/Sidebar/Sidebar"
import Dashboard from "./components/scenes/dashboard"
import Devices from "./components/scenes/devices"
import History from "./components/scenes/history"
import Labs from "./components/scenes/labs"
import Reports from "./components/scenes/report"
import Terminal from "./components/Terminal/terminal";
import { tokens } from "./theme";
import { useState } from "react";
import "./App.css"


// import PreLoader from "./components/scenes/Preloading/preloader";



function App() {

  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);


  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider  theme={theme}>
        <CssBaseline />
      

        <div className="app">

          <Box className="boxofsidebar"
              display ="grid"
              gridTemplateColumns= "repeat(10, 1fr)"
              gridTemplateRows= "100vh" 
              gap= "1%"
              
          >


              <Sidebar isSidebar={isSidebar} />

            <Box
              paddingTop="2%"
              paddingRight="2%"
              gridColumn="span 9"

            >

              <main className="content">
  
                <Topbar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/report" element={<Reports />} />
                  <Route path="/history" element={<History />} />
                  <Route path="/labs" element={<Labs />} />
                  <Route path="/devices" element={<Devices />} />
                  <Route path="/terminal" element={<Terminal />} />
                </Routes>
          
              </main>
            </Box>

          </Box>
        </div>


      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;

{/* <Route index element={<Login/>} /> try to add in between route
npm install react-pro-sidebar@0.7.1 */}