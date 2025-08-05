"use client";

import { TableBody, TableRow } from "@mui/material";
import React, { useState, useEffect } from "react";
import { LEFT } from "@/_utils/constants";
import { fetchTechnicians } from "@/services/technicians/fetchTechnicians";
import { IColumn } from "@/_utils/commonInterfaces";
import { ICustomer } from "./interfaces";
import { fetchCustomers } from "@/services/customers/fetchCustomers";
import { customerColumns } from "./TableColumns";
import { TableCell } from "@/_components/Table/TableCell";

export const TableRows = () => {
  const [customersData, setCustomersData] = React.useState<ICustomer[]>([]);
  useEffect(() => {
    (async () => {
      const data = await fetchCustomers();
      setCustomersData(data);
    })();
  }, []);
  return (
    <TableBody>
      {customersData.map((record: ICustomer, index: number) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={record.cust_id}>
            {customerColumns.map((column: IColumn, colIndex: number) => (
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
