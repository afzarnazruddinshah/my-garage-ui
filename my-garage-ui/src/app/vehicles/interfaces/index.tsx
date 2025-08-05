import { IStatus } from "@/_utils/commonInterfaces";

export interface INewVehicle {
  vin: string;
}
export interface IVehiclesResponse {
  data: IVehicle[];
  status: IStatus;
}

export interface IVehicle {
  vin: string;
  make: string;
  model: string;
  make_year: number;
  owner_id: number;
  odo_reading: number;
  last_service: string;
}

export interface IAddVehicleRequest {
  vehicleNum: string;
  make: string;
  model: string;
  year: number;
  owner_id: number;
  odo_reading: number;
  last_service: string;
}
export interface IAddVehicleResponse {
  status: IStatus;
  data: INewVehicle;
}
