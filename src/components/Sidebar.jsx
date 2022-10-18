import React from "react";
import { Box } from "@mui/system";
const SideBar = () => {
  return (
    <Box
      bgcolor="skyblue"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}>
      Sidebar
    </Box>
  );
};

export default SideBar;
