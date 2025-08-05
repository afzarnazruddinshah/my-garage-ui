"use client";

import { TableBody, TableRow } from "@mui/material";
import React, { useState, useEffect } from "react";
import { LEFT } from "@/_utils/constants";
import { IColumn } from "@/_utils/commonInterfaces";
import { IVehicle } from "./interfaces";
import { fetchVehicles } from "@/services/vehicles/fetchVechicles";
import { vehicleColumns } from "./vehicleColumns";
import { TableCell } from "@/_components/Table/TableCell";

export const VehicleTableRows = () => {
  const [techniciansData, setTechniciansData] = React.useState<IVehicle[]>([]);
  useEffect(() => {
    (async () => {
      const data = await fetchVehicles();
      setTechniciansData(data);
    })();
  }, []);
  return (
    <TableBody>
      {techniciansData.map((record: IVehicle, recordIndex: number) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={record.vin}>
            {vehicleColumns.map((column: IColumn, colIndex: number) => (
              <TableCell
                column={column}
                index={recordIndex}
                record={record}
                key={colIndex}
              />
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );
};
