import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { IColumn } from "@/_utils/commonInterfaces";
import { LEFT } from "@/_utils/constants";

export const TableColumns = ({ columns }: { columns: IColumn[] }) => {
  return (
    <TableRow>
      {columns.map((column: IColumn) => (
        <TableCell
          key={column.id}
          align={LEFT}
          style={{
            minWidth: column.minWidth || 180,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
};
