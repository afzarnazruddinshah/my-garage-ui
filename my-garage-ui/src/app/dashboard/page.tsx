import React from "react";
import { Metadata } from "next";
import { MostServicedVehicles } from "./MostServicedVehicles";

export const metadata: Metadata = {
  title: {
    default: "Dashboard Analytics",
    template: "%s | My Garage",
  },
  description:
    "Contains all Analytical Reports on Vehicles, Assignments, Transactions, Technician Assignments etc.,",
};

export default function Dashboard() {
  return (
    <div>
      <h2>Welcome To Analytics Dashboard</h2>
      <MostServicedVehicles />
    </div>
  )
}
