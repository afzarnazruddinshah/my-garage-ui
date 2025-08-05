"use client";

import { TableBody, TableRow } from "@mui/material";
import React, { useState, useEffect } from "react";
import { LEFT } from "@/_utils/constants";
import { fetchTechnicians } from "@/services/technicians/fetchTechnicians";
import { IColumn } from "@/_utils/commonInterfaces";
import { ITableRowsProps, ITransaction } from "./interfaces";
import { fetchCustomers } from "@/services/customers/fetchCustomers";
import { transactionColumns } from "./TableColumns";
import { fetchTransactions } from "@/services/transactions/fetchTransactions";
import { fetchPaginatedTransactions } from "@/services/transactions/fetchPaginatedTransactions";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "@/store";
import { updatePageCursors } from "@/store/reducers/transactionsReducer";
import { getPaginationPayload } from "./getPaginationPayload";
import { TableCell } from "@/_components/Table/TableCell";

export const TableRows = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(
    (state: IStoreState) => state.transactions.currentPage
  );
  const direction = useSelector(
    (state: IStoreState) => state.transactions.direction
  );
  const txnDateCursors = useSelector(
    (state: IStoreState) => state.transactions.pageCursors
  );
  const [transactionsData, setTransactionsData] = React.useState<
    ITransaction[]
  >([]);

  useEffect(() => {
    (async () => {
      let payload = getPaginationPayload(
        direction,
        currentPage,
        txnDateCursors
      );
      const data = await fetchPaginatedTransactions(payload);
      setTransactionsData(data);
      dispatch(
        updatePageCursors({
          [currentPage]: {
            first: data[0].txn_date,
            last: data[data.length - 1].txn_date,
          },
        })
      );
    })();
  }, [currentPage]);

  return (
    <TableBody>
      {transactionsData.map((record: ITransaction, index: number) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={record.txn_id}>
            {transactionColumns.map((column: IColumn, colIndex: number) => (
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
