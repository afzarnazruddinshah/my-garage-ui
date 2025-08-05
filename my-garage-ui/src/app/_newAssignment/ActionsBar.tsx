import { Button, DialogActions } from "@mui/material";
import * as React from "react";

type Props = {
  onClose: () => void;
  onCreateClick: () => void;
  isSubmitDisabled: boolean;
};
export const ActionsBar = (props: Props) => {
  return (
    <DialogActions>
      <Button
        variant="contained"
        color="secondary"
        onClick={props.onClose}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        color="primary"
        disabled={props.isSubmitDisabled}
        onClick={props.onCreateClick}
      >
        Create Assignment
      </Button>
    </DialogActions>
  );
};
