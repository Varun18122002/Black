import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './../scenes/headding/header';
import MyTerminal from './mainterminal';

function Terminal() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TERMINAL" subtitle="You can use terminal in ssh in here"/>
      </Box>

      <Box
        sx={{
          padding: "10px 20px"
          
        }}
      >
        <MyTerminal/>
      </Box>

    </Box>


  );
}

export default Terminal;