import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { LEFT } from "@/_utils/constants";
import { IColumn } from "@/_utils/commonInterfaces";

export const assignmentColumns: IColumn[] = [
  {
    id: "id",
    label: "No.",
    minWidth: 50,
  },
  {
    id: "assgn_id",
    label: "Assignment ID",
    minWidth: 50,
  },
  {
    id: "vin",
    label: "Vehicle Number",
    minWidth: 50,
  },
  {
    id: "owner_name",
    label: "Owner Name",
    minWidth: 180,
  },
  {
    id: "checkin_date",
    label: "Check-in Date",
    minWidth: 180,
    isDateField: true,
  },
  {
    id: "issue",
    label: "Issue",
    minWidth: 180,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 180,
  },
  {
    id: "technician_name",
    label: "Technician",
    minWidth: 180,
  },
];
