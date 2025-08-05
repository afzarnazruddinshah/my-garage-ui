import { getAllCustomers, postCustomer } from "@/_utils/apiURLs";
import {
  IAddCustomerRequest,
  IAddCustomerResponse,
  ICustomersResponse,
} from "@/app/customers/interfaces";

export const fetchCustomers = async () => {
  const customersResponse = await fetch(`${getAllCustomers}`);
  const customersData: Promise<ICustomersResponse> = (
    await customersResponse
  ).json();
  return (await customersData).data;
};

export const createNewCustomer = async ({
  name,
  gender,
  phone,
  email,
  vehicleNum,
}: IAddCustomerRequest) => {
  const addNewCustResponse = await fetch(`${postCustomer}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, gender, phone, email, vehicleNum }),
  });
  const customersData: Promise<IAddCustomerResponse> = (
    await addNewCustResponse
  ).json();
  return await customersData;
};
