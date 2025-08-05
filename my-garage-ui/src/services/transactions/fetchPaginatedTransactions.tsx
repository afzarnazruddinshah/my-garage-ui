import {
  getAllTransactions,
  getPaginatedTransactions,
  getTotalTransactions,
} from "@/_utils/apiURLs";
import {
  ITotalTransactionsResponse,
  ITransactionResponse,
} from "@/app/transactions/interfaces";

interface IGetTransactionsQuery {
  direction: string;
  first?: string;
  last?: string;
  pageNum?: number;
}
export const fetchPaginatedTransactions = async (
  query: IGetTransactionsQuery
) => {
  const transactionsResponse = await fetch(
    `${getPaginatedTransactions}?direction=${query.direction}&first=${query.first}&last=${query.last}&pageNum=${query.pageNum}`
  );
  const transactionsData: Promise<ITransactionResponse> = (
    await transactionsResponse
  ).json();
  return (await transactionsData).data;
};

export const fetchTotalTransactionsCount = async () => {
  const transactionsResponse = await fetch(`${getTotalTransactions}`);
  const transactionsData: Promise<ITotalTransactionsResponse> = (
    await transactionsResponse
  ).json();
  return (await transactionsData).data;
};
