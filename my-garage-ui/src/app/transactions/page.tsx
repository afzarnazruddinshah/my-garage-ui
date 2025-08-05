import React from "react";
import { Table, TableContainer, TableHead } from "@mui/material";
import { Title } from "@/_components/Title/Title";
import { TableRows } from "./TableRows";
import { TableColumns } from "@/_components/Table/TableColumns";
import { transactionColumns } from "./TableColumns";
import { PaginationBar } from "./PaginationBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Transactions",
    template: "%s | My Garage",
  },
  description:
    "Transactions will allow user to view all the transactions that happened, their mode of payment and to get a view of how much revenue was generated at any given point of time",
};
export default function Transactions() {
  return (
    <>
      <Title title="Transactions" />
      <div style={{ width: "98%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table size="medium" stickyHeader aria-label="sticky table">
            <TableHead>
              <TableColumns columns={transactionColumns} />
            </TableHead>
            <TableRows />
          </Table>
        </TableContainer>
        <PaginationBar />
      </div>
    </>
  );
}
