import React, { useEffect, useState } from "react";
import { Button, Typography, useTheme } from "@mui/material";
import { Box } from "@chakra-ui/react";
import Header from "./headding/header";
import { tokens } from "../../theme";
import { DownloadOutlined } from "@mui/icons-material";
import windows from "./windows.svg";
import linux from "./linux.png";
import BoltIcon from "@mui/icons-material/Bolt";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import Spider from "../plottings/spider";
import "./dashboard.css";
import axios from "axios";



function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isQuickScan, setisQuickScan] = useState(false);

  // const Quick_Scan = async (event) => {
  //   try {
      
  //     setisQuickScan(!isQuickScan);

  //     var response = await axios.post("http://localhost:8000/api/", {
  //       method: "POST",
  //       headers: { "Content-type": "application/json" },
  //       credentials: "include",
  //       body: JSON.stringify({
  //         quick_scan_start: isQuickScan,
  //       }),
  //     });

  //   //   quick_scan_start: isQuickScan,
  //   // }, {
  //   //   headers: { "Content-type": "application/json" },
  //   //   withCredentials: true, // Use 'withCredentials' instead of 'credentials'
  //   // });

  //     console.log(response);
  //     console.log(isQuickScan)
  //   } catch (error) {
  //     console.log(console.error);
  //   }
  // };

  const Quick_Scan = async (event) => {
    try {
      setisQuickScan(!isQuickScan);
  
      const response = await axios.post("http://localhost:8000/api/", {
        quick_scan_start: isQuickScan,
      }, {
        headers: { "Content-type": "application/json" },
        withCredentials: true, // Use 'withCredentials' instead of 'credentials'
      });
  
      console.log(response);
      console.log(isQuickScan);
    } catch (error) {
      console.error(error);

    }
  };
  


  return (
    //sx={{ backgroundImage: `${backimg}` }} ==> setting for back image

    <Box m="20px">
      {/*Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="DASHBOARD"
          subtitle="Your current status can be seen here"
        />

        <Box>
          <Button
            startIcon={<DownloadOutlined />}
            sx={{
              backgroundColor: colors.indigo[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              borderRadius: "30px",
              "@media screen and (max-width: 750px)": {
                fontSize: "10px",
              },
              "@media screen and (max-width: 550px)": {
                fontSize: "0px",
                padding: "10px 10px",
                "& .MuiButton-startIcon": { margin: "0px 10px 0px 10px" },
              },
            }}
          >
            Download Reports
          </Button>
        </Box>
      </Box>

      {/*Data representation*/}

      <div className="for_inner_scroll">
        <Box
          display="grid"
          gridTemplateColumns="repeat(10,1fr)"
          gridTemplateRows="repeat(2,1fr)"
          gap="20px"
          sx={{
            "@media screen and (max-width: 1450px)": {
              gridTemplateColumns: "repeat(2,1fr)",
              gridTemplateRows: "repeat(4,1fr)",
              mb: "220px",
            },
          }}
        >
          <Box
            backgroundColor={colors.transpcolor[100]}
            gridColumn="span 5"
            gridRow="span 1"
            sx={{
              "@media screen and (max-width: 750px)": {
                gridRow: "span 1",
              },
            }}
          >
            <Box p={15} gap="2%">
              <Box
                display="grid"
                gridTemplateColumns="repeat(2,1fr)"
                justifyContent="space-between"
              >
                <Box gridColumn="span 1">
                  <Typography variant="h2" fontWeight="bold">
                    Initalizing
                    <br />
                    Divine Protection
                  </Typography>
                </Box>
                {/*Image Block */}
                <Box
                  gridColumn="span 1"
                  display="grid"
                  gridTemplateRows="repeat(2,1fr)"
                  alignItems="center"
                  justifyContent="right"
                  pr="5"
                >
                  <Box gridRow="span 1" p={3} mb="5">
                    <img src={windows} height="30px" width="30px" />
                  </Box>
                  <Box gridRow="span 1" pt={5}>
                    <img src={linux} height="36px" width="36px" />
                  </Box>
                </Box>
              </Box>
              <br />
              <Box mt="15" gridRow="span 1">
                <Box w="70%">
                  <Typography variant="h7">
                    Fluffy the Guardian of Auditing. Stay One Step Ahead with
                    Fluffy. Shielding Your Digital Realms.
                  </Typography>
                </Box>
              </Box>
              <br />
              <br />
              <br />
              {/*Button block*/}

              <Box
                display="grid"
                gridTemplateColumns="150px 150px"
                gap="4%"
                alignItems="center"
                alignContent="center"
                justifyContent="left"
              >
                <Box>
                  <Button
                    startIcon={<BoltIcon />}
                    onClick={ Quick_Scan }
                    sx={{
                      backgroundColor: colors.indigo[700],
                      color: colors.grey[100],
                      fontSize: "14px",
                      fontWeight: "bold",
                      padding: "10px 10px",
                      "@media screen and (max-width: 1150px)": {
                        fontSize: "10px",
                      },
                      // '@media screen and (max-width: 550px)':
                      // {
                      //   fontSize: "0px",
                      //   padding: "10px 10px",
                      //   "& .MuiButton-startIcon": { margin: "0px 10px 0px 10px" }
                      // }
                    }}
                  >
                    {isQuickScan? 'Starting' : 'Quick Scan'}
                  </Button>
                </Box>
                <Box>
                  <Button
                    startIcon={<TravelExploreIcon />}
                    sx={{
                      backgroundColor: colors.indigo[700],
                      color: colors.grey[100],
                      fontSize: "14px",
                      fontWeight: "bold",
                      padding: "10px 10px",
                      "@media screen and (max-width: 1150px)": {
                        fontSize: "10px",
                      },
                      // '@media screen and (max-width: 550px)':
                      // {
                      //   fontSize: "0px",
                      //   padding: "10px 10px",
                      //   "& .MuiButton-startIcon": { margin: "0px 10px 0px 10px" }
                      // }
                    }}
                  >
                    Full Scan
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            backgroundColor={colors.black[400]}
            gridColumn="span 5"
            gridRow="span 1"
            sx={{
              "@media screen and (max-width: 750px)": {
                gridRow: "span 1",
              },
            }}
          >
            <Box>
              <Spider />
            </Box>
          </Box>
          <Box
            backgroundColor={colors.black[400]}
            gridColumn="span 5"
            gridRow="span 1"
            sx={{
              "@media screen and (max-width: 750px)": {
                gridRow: "span 1",
              },
            }}
          >
            Hello 4
          </Box>
          <Box
            backgroundColor={colors.black[400]}
            gridColumn="span 5"
            gridRow="span 1"
            sx={{
              "@media screen and (max-width: 750px)": {
                gridRow: "span 1",
              },
            }}
          >
            Hello 3
          </Box>
        </Box>
      </div>
    </Box>
  );
}

export default Dashboard;
