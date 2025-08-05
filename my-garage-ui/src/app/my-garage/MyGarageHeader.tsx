import * as React from "react";
import { Button } from "@mui/material";
import { Title } from "@/_components/Title/Title";

const HeaderButtons = () => {
  return (
    <div className="flex-container space-between ">
      <Button
        className="mar-lef-5"
        type="button"
        variant="contained"
        color="primary"
      >
        Update
      </Button>
      <Button
        className="mar-lef-5"
        type="button"
        variant="contained"
        color="secondary"
      >
        Cancel
      </Button>
    </div>
  );
};
export const Header = () => {
  return (
    <div className="flex-container space-between">
      <Title title={"My Garage"} />
      <HeaderButtons />
    </div>
  );
};
