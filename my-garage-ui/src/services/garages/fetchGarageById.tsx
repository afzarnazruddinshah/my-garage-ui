import { getGarageInfo } from "@/_utils/apiURLs";
import { IGarageResponse } from "@/app/my-garage/interfaces";

export const fetchGarageById = async () => {
  const garageResponse = await fetch(`${getGarageInfo}`);
  const garageData: Promise<IGarageResponse> = (await garageResponse).json();
  return (await garageData).data[0];
};
