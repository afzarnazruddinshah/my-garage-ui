"use client";
import { fetchMostServicedVehicles } from "@/services/analytics/vehicles";
import * as React from "react";
import { PieChart, Pie, Legend } from "recharts";

type Props = {};
export interface IMostServicedVehicles {
  make?: string;
  model?: string;
  service_count?: string;
}

export const MostServicedVehicles = ({}: Props) => {
  const [vehiclesGroupedData, setVehiclesGroupedData] = React.useState<
    IMostServicedVehicles[]
  >([]);

  React.useEffect(() => {
    (async () => {
      const vehAnalyticsData = await fetchMostServicedVehicles({
        hasModel: true,
        startDate: "",
        endDate: "",
      });
      setVehiclesGroupedData(vehAnalyticsData);
    })();
  }, []);
  return (
    <div>
      <PieChart width={730} height={250}>
        <Pie
          data={vehiclesGroupedData}
          dataKey="service_count"
          nameKey="make"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
        {/* <Legend verticalAlign="top" height={36} /> */}
      </PieChart>
    </div>
  );
};
