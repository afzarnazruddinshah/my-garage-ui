import { getAllAssignments, postAssignment } from "@/_utils/apiURLs";
import {
  IAssignmentResponse,
  ICreateNewAssignRequest,
  ICreateNewAssignResponse,
} from "@/app/assignments/interfaces";

export const fetchAssignments = async () => {
  const assignmentsResponse = await fetch(`${getAllAssignments}`);
  const assignmentsData: Promise<IAssignmentResponse> = (
    await assignmentsResponse
  ).json();
  return (await assignmentsData).data;
};

export const createNewAssignment = async ({
  vehicleNum,
  owner_id,
  checkin_date,
  issue,
}: ICreateNewAssignRequest) => {
  const newVehicleResponse = await fetch(`${postAssignment}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      vehicleNum,
      owner_id,
      checkin_date,
      issue,
    }),
  });
  const vehiclesData: Promise<ICreateNewAssignResponse> = (
    await newVehicleResponse
  ).json();
  return await vehiclesData;
};
