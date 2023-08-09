import { IconButton, useTheme } from "@mui/material";
import { Box } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../../theme";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import { useEffect } from "react";
import axios from "axios";

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    async function ip_addr() {
      try {
        const response = await axios.get("http://localhost:8000/ip_addr");
        // console.log(response);
        setIpAddress(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    ip_addr();

  }, []);


  return (
    <Box display="flex" justifyContent="space-between" p={4} marginLeft="16px">
      <Box
        backgroundColor={colors.black[900]}
        display="flex"
        alignItems="center"
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" margin="0 10px" fontWeight="bold">
            IP: {ipAddress}
          </Box>
          <Box display="flex" margin="0 10px" fontWeight="bold">
            Status:
          </Box>
          <Box display="flex" margin="0 10px" fontWeight="bold">
            Time:
          </Box>
        </Box>
      </Box>
      {/* ICONS */}
      <Box display="flex">
        <IconButton>
          <PersonIcon />{" "}
          {/* To change color <PersonIcon style={{ color: colors.black[400] }} /> */}
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <NightlightIcon />
          ) : (
            <LightModeIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;
