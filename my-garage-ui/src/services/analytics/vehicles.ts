import { getMostServicedVehicles } from "@/_utils/apiURLs";
import { IStatus } from "@/_utils/commonInterfaces";
import { IMostServicedVehicles } from "@/app/dashboard/MostServicedVehicles";

interface IMostServicedVehiclesPayload {
  hasModel?: boolean;
  startDate?: string | undefined;
  endDate?: string | undefined;
}

interface IMostServicedVehiclesResponse {
  status: IStatus;
  data: IMostServicedVehicles[];
}
export const fetchMostServicedVehicles = async ({
  hasModel = false,
  startDate = "",
  endDate = "",
}: IMostServicedVehiclesPayload) => {
  const vehiclesAnalyticsResponse = await fetch(
    `${getMostServicedVehicles}?hasModel=${hasModel}&startDate=${startDate}&endDate=${endDate}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const makeModelAnalyticsData: Promise<IMostServicedVehiclesResponse> = (
    await vehiclesAnalyticsResponse
  ).json();
  return (await makeModelAnalyticsData).data;
};
