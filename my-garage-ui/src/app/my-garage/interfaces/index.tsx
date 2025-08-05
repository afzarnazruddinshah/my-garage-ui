import { IStatus } from "@/_utils/commonInterfaces";

export interface IGarage {
  gid: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  garage_owner_name: string;
  phone: string;
  email: string;
}

export interface IGarageResponse {
  data: IGarage[];
  status: IStatus;
}
