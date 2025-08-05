"use client";

import { TableBody, TableRow } from "@mui/material";
import React, { useState, useEffect } from "react";
import { LEFT } from "@/_utils/constants";
import { fetchTechnicians } from "@/services/technicians/fetchTechnicians";
import { IColumn } from "@/_utils/commonInterfaces";
import { IAssignment } from "./interfaces";
import { fetchCustomers } from "@/services/customers/fetchCustomers";
import { assignmentColumns } from "./TableColumns";
import { fetchAssignments } from "@/services/assignments/fetchAssignments";
import { TableCell } from "@/_components/Table/TableCell";

export const TableRows = () => {
  const [assignmentsData, setAssignmentsData] = React.useState<IAssignment[]>(
    []
  );
  useEffect(() => {
    (async () => {
      const data = await fetchAssignments();
      setAssignmentsData(data);
    })();
  }, []);
  return (
    <TableBody>
      {assignmentsData.map((record: IAssignment, index: number) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={record.assgn_id}>
            {assignmentColumns.map((column: IColumn, colIndex: number) => (
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
};
