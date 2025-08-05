"use client";
import * as React from "react";
import "./styles.scss";
import { Button } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { updateNewAssgnView } from "@/store/reducers/assignmentsReducer";
import { useDispatch } from "react-redux";

type Props = {};
const fabStyle = {
  position: "absolute",
  bottom: 20,
  right: 20,
};
export const NewAssignmentBtn = ({}: Props) => {
  const dispatch = useDispatch();
  const onClick = () => {
    console.log("its now clicked");
    dispatch(updateNewAssgnView(true));
  };
  return (
    <>
      <Fab
        title="Create New Assignment"
        sx={fabStyle}
        onClick={onClick}
        aria-label={"Create New Assignment"}
        color={"primary"}
        LinkComponent={"a"}
      >
        <AddIcon />
      </Fab>
    </>
  );
};
