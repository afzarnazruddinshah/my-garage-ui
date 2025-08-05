import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { LEFT } from "@/_utils/constants";
import { IColumn } from "@/_utils/commonInterfaces";

export const technicianColumns: IColumn[] = [
  {
    id: "index",
    label: "No.",
    minWidth: 50,
  },
  {
    id: "tid",
    label: "EMP ID",
    minWidth: 180,
  },
  {
    id: "name",
    label: "Technician Name",
    minWidth: 180,
  },
  {
    id: "gender",
    label: "Gender",
    minWidth: 180,
  },
  {
    id: "age",
    label: "Age",
    minWidth: 180,
  },
  {
    id: "years_of_exp",
    label: "Years of Experience",
    minWidth: 180,
  },
  {
    id: "specialization",
    label: "Specialization",
    minWidth: 180,
  },
  {
    id: "phone",
    label: "Contact Number",
    minWidth: 180,
  },
  {
    id: "email",
    label: "Email",
    minWidth: 180,
  },
];
