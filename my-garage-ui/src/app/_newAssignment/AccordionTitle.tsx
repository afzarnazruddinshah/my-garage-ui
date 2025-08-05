import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionSummary, Icon, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface IAccordionTitle {
  title: string;
  isCompleted?: boolean;
}
export const AccordionTitle = ({ title, isCompleted }: IAccordionTitle) => {
  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography component="span">{title}</Typography>
      &nbsp; &nbsp;
      <CheckCircleIcon color={isCompleted ? "success" : "error"} />
    </AccordionSummary>
  );
};
