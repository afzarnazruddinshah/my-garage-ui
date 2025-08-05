import { IStatus } from "@/_utils/commonInterfaces";

export interface INewAssignment {
  assgn_id: string;
}
export interface IAssignment {
  assgn_id: number;
  vin: string;
  owner_name: string | null;
  checkin_date: string;
  issue: string;
  status: string;
  technician_name: string;
}

export interface IAssignmentResponse {
  data: IAssignment[];
  status: IStatus;
}

export interface ICreateNewAssignRequest {
  vehicleNum: string;
  owner_id: number;
  checkin_date: string;
  issue: string;
}
export interface ICreateNewAssignResponse {
  status: IStatus;
  data: INewAssignment;
}
