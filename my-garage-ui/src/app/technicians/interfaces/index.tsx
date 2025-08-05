import { IStatus } from "@/_utils/commonInterfaces";

export interface ITechnicianResponse {
  data: ITechnician[];
  status: IStatus;
}


export interface ITechnician {
  tid: string;
  name: string;
  gender: string;
  age: number;
  years_of_exp: number;
  specialization: string;
  phone: string;
  email: string;
}
