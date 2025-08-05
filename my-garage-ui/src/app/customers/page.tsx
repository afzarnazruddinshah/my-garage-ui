import React from "react";
import { Table, TableContainer, TableHead } from "@mui/material";
import { Title } from "@/_components/Title/Title";
import { TableRows } from "./TableRows";
import { TableColumns } from "@/_components/Table/TableColumns";
import { customerColumns } from "./TableColumns";

export default function Customers() {
  return (
    <>
      <Title title="Customers" />
      <div style={{ width: "98%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table size="medium" stickyHeader aria-label="sticky table">
            <TableHead>
              <TableColumns columns={customerColumns} />
            </TableHead>
            <TableRows />
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
