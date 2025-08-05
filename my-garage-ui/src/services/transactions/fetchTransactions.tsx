import { getAllTransactions } from "@/_utils/apiURLs";
import { ITransactionResponse } from "@/app/transactions/interfaces";

export const fetchTransactions = async () => {
  const transactionsResponse = await fetch(`${getAllTransactions}`);
  const transactionsData: Promise<ITransactionResponse> = (
    await transactionsResponse
  ).json();
  return (await transactionsData).data;
};
