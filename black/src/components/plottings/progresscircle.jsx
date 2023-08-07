import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import React from "react";



const ProgressCircle = ({ progress = "0.75", size = "100" }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = progress * 360;
    const center_value = progress * 100;

    return (

        <Box
            sx={{

                background: `radial-gradient(${colors.black[400]} 55%, transparent 56%),
                        conic-gradient(transparent 0deg ${angle}deg, ${colors.indigo[500]} ${angle}deg 360deg),
                        ${colors.green[500]}`,
                borderRadius: "50%",
                width: `${size}px`,
                height: `${size}px`,
            }}
        >
            <Box
                display="flex"
                justifyContent="center"
                paddingTop="35px"

            >
                <Typography
                    variant="h3"

                    fontWeight="bold"
                    sx={{ color: colors.grey[100] }}
                >
                    {center_value}%
                </Typography>
            </Box>
        </Box>

    );
};



export default ProgressCircle;

