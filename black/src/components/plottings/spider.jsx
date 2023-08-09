import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import React from "react";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { SystemUpdateTwoTone } from "@mui/icons-material";
import io from 'socket.io-client';


function Spider() {

    const [isData, setData] = useState({
        Network: 0,
        OS: 0,
        System: 0
    });

  useEffect(() => {
    async function data_spider() {
      try {
        const response = await axios.get("http://localhost:8000/data_spider");
        console.log(response);
        setData(response.data.data)
      } catch (error) {
        console.error(error);
      }
    }
    data_spider();
  }, []);


  var Network = isData.Network;
  var OS = isData.OS;
  var System = isData.System;


  return ( 

    <Box>
      <RadarChart
        captions={{
          // columns
          Network: "Network",
          OS: "OS",
          System: "System",
        }}
        data={[
          // data
          {
            "data": {
                "Network" : Network,
                "OS" : OS,
                "System" : System
            },
            meta: { color: "#58FCEC" },
          },
        ]}
        size={350}
      />
    </Box>
    
  );
}

export default Spider;
