"use client";
import {
  fetchPaginatedTransactions,
  fetchTotalTransactionsCount,
} from "@/services/transactions/fetchPaginatedTransactions";
import { Pagination } from "@mui/material";
import * as React from "react";
import { ITotalTransactions } from "./interfaces";
import { globalPagination } from "@/_utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { IStoreState, ITransactionsState } from "@/store";
import { updateCurrentPage } from "@/store/reducers/transactionsReducer";

type IPaginationProps = {};

export const PaginationBar = ({}: IPaginationProps) => {
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);
  
  const [totalRecords, setTotalRecords] = React.useState<ITotalTransactions>({
    count: "1",
  });

  React.useEffect(() => {
    (async () => {
      const data = await fetchTotalTransactionsCount();
      setTotalRecords(data && data[0]);
    })();
  }, []);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log("selected page:", value);
    dispatch(
      updateCurrentPage({
        currentPage: value,
        direction: value > page ? "forward" : "backward"
      })
    );
    setPage(value);
    
  };

  return (
    <div id="pagination-bar">
      <Pagination
        size="large"
        count={Math.ceil(Number(totalRecords.count) / globalPagination)}
        page={page}
        siblingCount={1}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
};
