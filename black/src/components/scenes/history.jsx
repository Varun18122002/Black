import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './headding/header';
import { ColorModeContext, tokens } from '../../theme';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, useTheme } from "@mui/material"
import { useContext, useState } from "react"
import { Button } from '@mui/material';
import { DownloadOutlined } from '@mui/icons-material';


function History() {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (

    <Box m="20px">

      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="HISTORY" subtitle="Your history can be seen here" />
        <Box>
          {/* Search Bar */}
          <Box
            display="flex"
            backgroundColor={colors.black[400]}
            borderRadius="30px"
          >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>

      </Box>
      <Box display="flex" justifyContent="space-between" p={2}>



        {/*Download Report*/}
        <Box>
          <Button
            sx={{
              backgroundColor: colors.indigo[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "30px",
            }}>
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>

      </Box>
    </Box>


  );
}

export default History;

