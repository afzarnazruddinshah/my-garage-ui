import { IColumn } from "@/_utils/commonInterfaces";
import { LEFT } from "@/_utils/constants";
import { TableCell as MuiTableCell } from "@mui/material";
import * as React from "react";

type Props = {
  column: IColumn;
  record: any;
  index: number;
};
export const TableCell = ({ column, record, index }: Props) => {
  const key = column.id as keyof any;
  let value = record[key] || index + 1;
  if (column.isDateField) {
    value = String(value).split("T")[0];
  }
  return (
    <MuiTableCell key={column.id} align={LEFT}>
      {value}
    </MuiTableCell>
  );
};
