"use client";
import { TableBody, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ITechnician, ITechnicianResponse } from "./interfaces";
import { technicianColumns } from "./TableColumns";
import { LEFT } from "@/_utils/constants";
import { IColumn } from "@/_utils/commonInterfaces";
import { getTechnicians } from "@/_utils/apiURLs";
import {
  fetchTech,
  fetchTechnicians,
} from "@/services/technicians/fetchTechnicians";
import { TableCell } from "@/_components/Table/TableCell";

export default function TableRows() {
  const [techniciansData, setTechniciansData] = useState<ITechnician[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchTechnicians();
      setTechniciansData(data);
    })();
  }, []);

  return (
    <TableBody>
      {techniciansData.map((record: ITechnician, index: number) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={record.tid}>
            {technicianColumns.map((column: IColumn, colIndex: number) => (
              <TableCell
                column={column}
                index={index}
                record={record}
                key={colIndex}
              />
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );
}
