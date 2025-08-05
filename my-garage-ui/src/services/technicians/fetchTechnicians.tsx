import { getTechnicians } from "@/_utils/apiURLs";
import { ITechnicianResponse } from "@/app/technicians/interfaces";

export const fetchTechnicians = async () => {
  const techniciansResponse = await fetch(getTechnicians);
  const techniciansData: Promise<ITechnicianResponse> = (
    await techniciansResponse
  ).json();
  return (await techniciansData).data;
};

export const fetchTech = async () => {
  return await fetch(getTechnicians, { cache: "no-store" });
};
