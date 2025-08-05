import { TableColumns } from "@/_components/Table/TableColumns";
import { Title } from "@/_components/Title/Title";
import { Table, TableContainer, TableHead } from "@mui/material";
import React from "react";
import { vehicleColumns } from "./vehicleColumns";
import { VehicleTableRows } from "./VehicleTableRows";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Vehicles",
    template: "%s | My Garage",
  },
  description:
    "Vehicles page provides list of vehicles serviced at the Garage, their owner's details, their next service date, along with features to notify owners' on upcoming service",
};

export default function Vehicles() {
  return (
    <>
      <Title title="Vehicles" subtitle="( serviced at our garage )" />
      <div style={{ width: "98%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table size="medium" stickyHeader aria-label="sticky table">
            <TableHead>
              <TableColumns columns={vehicleColumns} />
            </TableHead>
            <VehicleTableRows />
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
