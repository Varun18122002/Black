import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './headding/header';



function Dashboard() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="LABS" subtitle="Our product future updates can be seen here"/>
      </Box>
    </Box>

  );
}

export default Dashboard;