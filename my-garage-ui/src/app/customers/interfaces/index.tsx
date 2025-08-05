import { IStatus } from "@/_utils/commonInterfaces";

export interface INewCustomer {
  cust_id: number;
}
export interface ICustomer {
  cust_id: number;
  name: string;
  gender: string;
  phone: string;
  email: string;
  veh1_id: string;
  veh2_id: number;
  veh3_id: number;
  veh4_id: number;
}

export interface ICustomersResponse {
  data: ICustomer[];
  status: IStatus;
}

export interface IAddCustomerRequest {
  name: string;
  gender: string;
  phone: string;
  email: string;
  vehicleNum: string;
}
export interface IAddCustomerResponse {
  status: IStatus;
  data: INewCustomer;
}
