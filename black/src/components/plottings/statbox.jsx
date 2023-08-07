import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ProgressCircle from "./progresscircle";

const StatBox = ({ title, subtitle, progress }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
          <Typography variant="h5" sx={{ color: colors.green[500] }}>
          {subtitle}
        </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      
    </Box>
  );
};

export default StatBox;