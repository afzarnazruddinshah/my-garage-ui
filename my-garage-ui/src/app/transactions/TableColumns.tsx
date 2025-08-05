import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { LEFT } from "@/_utils/constants";
import { IColumn } from "@/_utils/commonInterfaces";

export const transactionColumns: IColumn[] = [
  {
    id: "id",
    label: "No.",
    minWidth: 50,
  },
  {
    id: "txn_id",
    label: "Transaction ID",
    minWidth: 50,
  },
  {
    id: "assignment_id",
    label: "Assignment ID",
    minWidth: 50,
  },
  {
    id: "cost",
    label: "Cost (₹)",
    minWidth: 180,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 180,
  },
  {
    id: "payment_mode",
    label: "Payment Mode",
    minWidth: 180,
  },
   {
    id: "txn_date",
    label: "Transaction Date",
    minWidth: 180,
    isDateField: true,
  },
];
