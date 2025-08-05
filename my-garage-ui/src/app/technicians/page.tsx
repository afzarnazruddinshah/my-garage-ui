import React from "react";
import { Table, TableContainer, TableHead } from "@mui/material";
import { Title } from "@/_components/Title/Title";
import { technicianColumns } from "./TableColumns";
import TableRows from "./TableRows";
import { TableColumns } from "@/_components/Table/TableColumns";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Technicians",
    template: "%s | My Garage",
  },
  description:
    "Technicians page allows users to view, update, delete the technicians, view their current Assignments, their pay grade etc.,",
};

export default async function Technicians() {
  return (
    <>
      <Title title="Technicians" />
      <div style={{ width: "98%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table size="medium" stickyHeader aria-label="sticky table">
            <TableHead>
              <TableColumns columns={technicianColumns} />
            </TableHead>
            <TableRows />
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
