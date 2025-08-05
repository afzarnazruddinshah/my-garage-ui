import { IStatus } from "@/_utils/commonInterfaces";

export interface ITableRowsProps {
  currentPage?: number
}
export interface ITransaction {
  txn_id: number;
  assignment_id: number;
  cost: number;
  status: string;
  payment_mode: string;
  txn_date: string
}
export interface ITotalTransactions {
  count: string;
}

export interface ITransactionResponse {
  data: ITransaction[];
  status: IStatus;
}

export interface ITotalTransactionsResponse {
  data: ITotalTransactions[];
  status: IStatus;
}
