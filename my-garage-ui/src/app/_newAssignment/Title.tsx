import * as React from "react";
import { DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  onClose: (e: React.SyntheticEvent) => void;
};
export const Title = ({ onClose }: Props) => {
  return (
    <>
      <DialogTitle>Create New Assignment</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: theme.palette.grey[500],
        })}
      >
        <CloseIcon />
      </IconButton>
    </>
  );
};
