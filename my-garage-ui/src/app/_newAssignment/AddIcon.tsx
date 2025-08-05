import * as React from "react";
import AddIcon from "@mui/icons-material/Add";

type Props = {};
export const AddAssignmentIcon = ({}: Props) => {
  const onAddIconClick = () => {
    console.log("clicked");
  };

  return <AddIcon />;
};
