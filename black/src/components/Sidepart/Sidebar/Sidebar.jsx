import { useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
//npm install react-pro-sidebar@0.7.1
import 'react-pro-sidebar/dist/css/styles.css';
import { IconButton, Typography, useTheme } from '@mui/material'
import { Box, grid } from "@chakra-ui/react";
import { tokens } from "../../../theme"
import React from "react";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import { TerminalOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import mainlogo from './mainlogo.png'

const Item = ({ title, path, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        margin: "0px 0px 20px 0px",
        color: colors.grey[100]
      }}
      onClick={() => setSelected(title)}
      icon={icon}

    >
      <Typography variant="h3">{title}</Typography>
      <Link to={path} />
    </MenuItem>
  );
};



const Sidebar = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard")

  const [width,setWidth] =useState("")


  function getSize (){
    setWidth(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener("resize",getSize);
    if(width < 950){
      setIsCollapsed(true)
    }
    else{
      setIsCollapsed(false)

    }
    
    return() =>
    {
      window.removeEventListener("resize",getSize)
    }

  },[window,width])




  return (
    <Box

      sx={{

        "& .pro-sidebar-inner": {
          background: `${colors.black[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },

      }}
    >


      <ProSidebar collapsed={isCollapsed} 
       >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <img alt="logo" src={mainlogo} height="50px" width="50px" /> : undefined}
            style={{
              margin: "0px 0 30px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="10px"
                // backgroundColor={colors.black[400]}
              >
                <Typography fontWeight="bold" variant="h2" color={colors.grey[100]}>
                  F L U F F Y
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <img alt="logo" src={mainlogo} height="50px" width="50px" />    {/*<MenuOutlined/>*/}
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="30px">

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  User Name
                </Typography>
              </Box>
            </Box>
          )}

          {/* Menu Item bar */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}
            paddingTop="40px"
          >
            <Item
              title="Dashboard"
              path="/"
              icon={<DashboardOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}


            />
            <Item
              title="Report"
              path="/report"
              icon={<SummarizeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="History"
              path="/history"
              icon={<HistoryOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Labs"
              path="/labs"
              icon={<ScienceOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Devices"
              path="/devices"
              icon={<DevicesOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Terminal"
              path="/terminal"
              icon={<TerminalOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>

    </Box>
  );
}

export default Sidebar;