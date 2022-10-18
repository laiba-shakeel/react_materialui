import React from "react";
import { Box } from "@mui/system";
const Rightbar = () => {
  return (
    <Box
      bgcolor="gray"
      flex={4}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}>
      Rightbar
    </Box>
  );
};

export default Rightbar;
