import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { LEFT } from "@/_utils/constants";
import { IColumn } from "@/_utils/commonInterfaces";

export const customerColumns: IColumn[] = [
  {
    id: "id",
    label: "No.",
    minWidth: 50,
  },
  {
    id: "cust_id",
    label: "Customer ID",
    minWidth: 50,
  },
  {
    id: "name",
    label: "Customer Name",
    minWidth: 180,
  },
  {
    id: "gender",
    label: "Gender",
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
  {
    id: "veh1_id",
    label: "Vehicle Number (V1)",
    minWidth: 180,
  },
  
  {
    id: "veh2_id",
    label: "Vehicle Number (V2)",
    minWidth: 180,
  },
 {
    id: "veh3_id",
    label: "Vehicle Number (V3)",
    minWidth: 180,
  },
 {
    id: "veh4_id",
    label: "Vehicle Number (V4)",
    minWidth: 180,
  },
  
];
