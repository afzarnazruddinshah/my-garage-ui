import React from "react";
import Drawer from "@mui/material/Drawer";
import { LEFT, TRUE } from "@/_utils/constants";
import MenuItems from "./MenuItems";
import { Toolbar } from "@mui/material";

const Sidemenu = () => {
  return (
    <>
      {/* <Toolbar /> */}
      <MenuItems />
    </>
  );
};

export default Sidemenu;
