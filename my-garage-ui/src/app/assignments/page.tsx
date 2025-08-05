import React from "react";
import { Table, TableContainer, TableHead } from "@mui/material";
import { Title } from "@/_components/Title/Title";
import { TableRows } from "./TableRows";
import { TableColumns } from "@/_components/Table/TableColumns";
import { assignmentColumns } from "./TableColumns";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Assignments",
    template: "%s | My Garage",
  },
  description:
    "Assignments page lists out the assignments being/carried out, their status, the technician assinged to it and other details ",
};
export default function Assignments() {
  return (
    <>
      <Title title="Assignments" />
      <div style={{ width: "98%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table size="medium" stickyHeader aria-label="sticky table">
            <TableHead>
              <TableColumns columns={assignmentColumns} />
            </TableHead>
            <TableRows />
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
