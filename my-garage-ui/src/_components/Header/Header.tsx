import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - 230px)`,
        // ml: `${240}px`,
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          My Garage
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
