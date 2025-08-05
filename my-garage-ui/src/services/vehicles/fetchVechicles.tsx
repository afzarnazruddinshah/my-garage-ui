import { getAllVehicles, postVehicle } from "@/_utils/apiURLs";
import {
  IAddVehicleRequest,
  IAddVehicleResponse,
  IVehiclesResponse,
} from "@/app/vehicles/interfaces";

export const fetchVehicles = async () => {
  const vehiclesResponse = await fetch(`${getAllVehicles}`);
  const vehiclesData: Promise<IVehiclesResponse> = (
    await vehiclesResponse
  ).json();
  return (await vehiclesData).data;
};

export const addNewVehicle = async ({
  vehicleNum,
  make,
  model,
  year,
  owner_id,
  odo_reading,
  last_service,
}: IAddVehicleRequest) => {
  const newVehicleResponse = await fetch(`${postVehicle}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      vehicleNum,
      make,
      model,
      year,
      owner_id,
      odo_reading,
      last_service,
    }),
  });
  const vehiclesData: Promise<IAddVehicleResponse> = (
    await newVehicleResponse
  ).json();
  return (await vehiclesData);
};
