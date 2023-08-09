import React, { useState, useEffect } from "react";
import { tokens } from "../../../theme";
import { Box, grid } from "@chakra-ui/react";
import { Typography, useTheme } from "@mui/material";
import axios from "axios";
import "./description.css";
import { getValue } from "@testing-library/user-event/dist/utils";

function Description() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isData, setData] = useState([]);

  useEffect(() => {
    async function data_description() {
      try {
        const response = await axios.get(
          "http://localhost:8000/data_description"
        );
        console.log(response);
        setData(response.data);
        console.log(isData);
      } catch (error) {
        console.error(error);
      }
    }
    data_description();
  }, []);

  return (
    <Box>
      <Box className="title">
        <Typography variant="h3" fontWeight="bold">
          Description
        </Typography>
      </Box>
      <Box
        className="description"
        
      >

        <Box 
        className="rowbox"
        
        >
          {Object.keys(isData).map((key) => (
            <Box 
            className="valuebox"
            gridRow="span 1"
            paddingLeft="20%"
            textAlign="center"
            sx ={{backgroundColor: colors.black[800],}}
            key={key}><Typography variant="h4" fontWeight="bold">{key}</Typography></Box>  
          ))}
        </Box>
        <Box 
        className="rowbox">
          {Object.values(isData).map((values, index) => (
            <Box 
            className="valuebox"
            paddingLeft="5%"
            sx ={{backgroundColor: colors.black[800],}}
            gridRow="span 1" key={index}><Typography variant="h5">{JSON.stringify(values)}</Typography></Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
}

export default Description;
